import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import FleetPage from "@/pages/FleetPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import BookingPage from "@/pages/BookingPage";
import LandingPage from "@/pages/LandingPage";
import RoutePage from "@/pages/RoutePage";
import EventPage from "@/pages/EventPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { ROUTE_PAGES } from "@/data/routePages";
import { EVENT_PAGES } from "@/data/eventPages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/limo/:slug" element={<LandingPage />} />
          {ROUTE_PAGES.map((r) => (
            <Route key={r.slug} path={`/${r.slug}`} element={<RoutePage slug={r.slug} />} />
          ))}
          {EVENT_PAGES.map((e) => (
            <Route key={e.slug} path={`/${e.slug}`} element={<EventPage slug={e.slug} />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <ChatBot />
      </BrowserRouter>
    </div>
  );
}

export default App;