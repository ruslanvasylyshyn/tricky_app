import { Component } from "react";
import "./error.css";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="errorWrapper">
          <h1>Something went wrong.</h1>
          <h2>Please, try again later.</h2>
          <h2>If this happens again, please write to us.</h2>
        </div>
      );
    }

    return this.props.children;
  }
}
