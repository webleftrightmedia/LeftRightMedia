import React from 'react';

/**
 * Global Error Boundary — catches any unhandled JS errors in the React tree
 * and shows a graceful recovery UI instead of a white screen.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log to console (and optionally to an error reporting service like Sentry)
    console.error('[ErrorBoundary] Caught:', error, errorInfo);

    // If GA4 is loaded, report the crash as an event
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: error?.message || 'Unknown error',
        fatal: true,
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-concrete flex items-center justify-center p-8">
          <div className="max-w-md text-center space-y-4">
            <div className="w-16 h-16 bg-ink rounded-xl flex items-center justify-center mx-auto">
              <span className="text-white font-display font-bold text-2xl">!</span>
            </div>
            <h1 className="text-headline-sm text-ink">Something went wrong</h1>
            <p className="text-body-md text-ink-muted">
              We hit an unexpected error. Please refresh the page to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center px-6 py-2.5 bg-ink text-white font-display font-semibold rounded-md transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
