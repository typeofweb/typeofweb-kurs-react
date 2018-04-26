import * as React from "react";

export class AsyncComponent extends React.Component {
  state = { Component: null, isLoading: false };

  componentDidMount() {
    if (!this.state.Component && !this.state.isLoading) {
      this.setState({ isLoading: true }, this.loadComponent);
    }
  }

  loadComponent = () => {
    return this.props.componentProvider().then(Component => {
      this.setState({ Component, isLoading: false });
    });
  };

  render() {
    const { Component } = this.state;
    if (Component) {
      return <Component {...this.props.componentProps} />;
    }
    return null;
  }
}
