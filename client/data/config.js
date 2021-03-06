import Raven from 'raven-js';

const sentry_key = '07bc49bfa2c04e00a4772b52c2d01c0b';
const sentry_app = '1439985';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
