import { Component } from "react";
import ErrorState from "./ErrorState";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }



  render() {
    if (this.state.hasError) {
      return (
        <ErrorState
          title="Something went wrong on this page"
          message="An unexpected error occurred. Reloading usually fixes it."
          onRetry={() => window.location.reload()}
        />
      );
    }

    return this.props.children;
  }
}
