import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error for debugging/reporting
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    // Reset error state and try rendering children again
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="container text-center my-5">
          <div className="alert alert-danger p-4 rounded shadow">
            <h1 style={{ fontSize: '4rem' }} role="img" aria-label="Warning">
              ⚠️
            </h1>
            <h2>Oops! Something went wrong.</h2>
            <p>
              We're sorry for the inconvenience. Please try refreshing the page or click retry below.
            </p>
            <button className="btn btn-primary" onClick={this.handleRetry}>
              Retry
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
