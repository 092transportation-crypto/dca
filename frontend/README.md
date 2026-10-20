# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Environment Variables (Vercel project settings)

Set these in the `dca` Vercel project (Project Settings → Environment Variables), not in a committed file.

### Chat widget (`api/chat.js`)

| Variable | Required? | Purpose |
| --- | --- | --- |
| `ANTHROPIC_API_KEY` | No | Powers the `/api/chat` AI assistant. Without it, the widget still responds — with a friendly fallback pointing to the phone number and booking form — instead of crashing. |
| `ANTHROPIC_CHAT_MODEL` | No | Overrides the chat model. Defaults to `claude-haiku-5-5`. |

### Lead capture (`api/chat.js` booking flow, `api/lead-capture.js`, `lib/sms.js`, `lib/leadWebhook.js`)

| Variable | Required? | Purpose |
| --- | --- | --- |
| `TWILIO_ACCOUNT_SID` | No | Twilio Account SID, for texting the dispatch team when a lead is captured. |
| `TWILIO_AUTH_TOKEN` | No | Twilio Auth Token. |
| `TWILIO_FROM_NUMBER` | No | The Twilio phone number the SMS alert is sent from. |
| `ALERT_PHONE_NUMBER` | No | The phone number that receives the SMS alert (dispatch team). |
| `LEAD_WEBHOOK_URL` | No | If set, every captured lead is also POSTed as JSON to this URL (CRM, Zapier, Slack, etc). |

All five are optional and independent — if any (or all) are unset, that notification channel silently no-ops (logged, never thrown) and the lead is still accepted. Both `lib/sms.js` and `lib/leadWebhook.js` time out after 6 seconds so a slow or unreachable endpoint never blocks or fails a response to the visitor.

### Testing the API endpoints

`npm run test:api` runs `scripts/test-api.js` — a plain Node script (not jest) that exercises `api/chat.js` and `api/lead-capture.js` directly, since those CommonJS serverless functions live outside `src/` and aren't picked up by `craco test`.
