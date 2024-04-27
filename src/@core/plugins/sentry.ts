import * as Sentry from '@sentry/vue'
import { env } from '@core/utils/env'

export async function initSentry() {
  Sentry.init({
    dsn: env('VITE_SENTRY_DSN_PUBLIC'),
    tracePropagationTargets: ['localhost', /^\//],
    integrations: [
      new Sentry.BrowserTracing(),
      new Sentry.Replay({
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],
    // Performance Monitoring
    tracesSampleRate: env('VITE_SENTRY_SAMPLE_RATE', '1.0'), //  Capture 100% of the transactions
    // Session Replay
    replaysSessionSampleRate: env('VITE_SENTRY_SESSION_SAMPLE_RATE', '0.1'), // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: env('VITE_SENTRY_ERROR_SAMPLE_RATE', '1.0'), // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  })
}
