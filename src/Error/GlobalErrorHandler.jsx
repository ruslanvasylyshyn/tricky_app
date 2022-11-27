import { ErrorInfo, PropsWithChildren, PureComponent } from "react";

const AppError = ({ error }) => {
  console.log(error);
  switch (error.cause) {
    case 500:
      return <>Backend failed</>;
    default:
      return <>UI Failed</>;
  }
};

export class GlobalErrorHandler extends PureComponent {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <AppError error={error} />;
    }

    return children;
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }
}
