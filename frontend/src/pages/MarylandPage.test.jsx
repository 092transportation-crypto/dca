/**
 * Maryland SEO landing pages render from src/data/marylandPages.js with an
 * H1, FAQ, phone number, vehicles and LocalBusiness schema on every page.
 */
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
// CRA's bundled jest can't resolve react-router-dom v7's exports map, so stub
// the pieces the page uses.
jest.mock(
  "react-router-dom",
  () => {
    const React = require("react");
    return {
      MemoryRouter: ({ children }) => React.createElement(React.Fragment, null, children),
      Link: ({ children, to, ...rest }) => React.createElement("a", { href: to, ...rest }, children),
      Navigate: () => null,
      useNavigate: () => () => {},
      useParams: () => ({}),
    };
  },
  { virtual: true }
);
import MarylandPage from "./MarylandPage";
import { MARYLAND_PAGES } from "@/data/marylandPages";

beforeAll(() => {
  window.scrollTo = window.scrollTo || (() => {});
});

const renderPage = (slug) =>
  render(
    <MemoryRouter>
      <MarylandPage slug={slug} />
    </MemoryRouter>
  );

test("every Maryland page has the required SEO ingredients", () => {
  const slugs = new Set();
  for (const page of MARYLAND_PAGES) {
    expect(slugs.has(page.slug)).toBe(false);
    slugs.add(page.slug);
    expect(/limo service|car service|transportation/i.test(page.h1)).toBe(true);
    expect(page.metaDescription.length).toBeLessThanOrEqual(160);
    expect(page.faqs.length).toBeGreaterThanOrEqual(3);
    expect(page.faqs.length).toBeLessThanOrEqual(5);
    expect(JSON.stringify(page)).toContain("(877) 609-1919");
    expect(page.vehicles.length).toBe(6);
    expect(page.related.length).toBeGreaterThanOrEqual(3);
  }
});

test("renders city, route and service pages with H1, FAQ, phone and LocalBusiness schema", () => {
  for (const type of ["city", "route", "service"]) {
    const page = MARYLAND_PAGES.find((p) => p.type === type);
    const { unmount } = renderPage(page.slug);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(page.h1);
    expect(screen.getAllByTestId("maryland-faq").length).toBe(page.faqs.length);
    expect(screen.getAllByText(/\(877\) 609-1919/).length).toBeGreaterThan(0);
    expect(document.getElementById("maryland-jsonld").textContent).toContain('"LocalBusiness"');
    expect(document.title).toBe(page.metaTitle);
    unmount();
  }
});
