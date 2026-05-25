import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class TweetErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-48 rounded-xl bg-base-200/50 border border-base-300/10">
          <p className="text-base-content/50 text-sm">Tweet unavailable</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default TweetErrorBoundary;
