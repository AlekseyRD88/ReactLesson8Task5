import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: online
  };
  componentDidMount() {
    window.addEventListener('offline', onOffline);
    window.addEventListener('online', onOffline);
  }
  componentWillUnmount() {
    window.removeEventListener('offline', onOnline);
    window.removeEventListener('online', onOnline);
  }
  onOffline = e => {
    const { onOffline } = e.target;
    this.setState({
      status: onOffline
    });
  }
  onOnline = e => {
    const { onOnline } = e.target;
    this.setState({
      status: onOnline
    });
  }
  render() {
    return (
      <div className="status">{this.state.status}</div>
    );
  }
}

export default ConnectionStatus;