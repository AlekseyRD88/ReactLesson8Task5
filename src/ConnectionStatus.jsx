import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online'
  };
  componentDidMount() {
    window.addEventListener('offline', this.onOffline);
    window.addEventListener('online', this.onOnline);
  }
  componentWillUnmount() {
    window.removeEventListener('offline', this.onOffline);
    window.removeEventListener('online', this.onOnline);
  }
  onOffline = e => {
    this.setState({
      status: 'offline'
    });
  }
  onOnline = e => {
    this.setState({
      status: 'online'
    });
  }
  render() {
    if (this.state.status === 'online') {
      return (
        <div className="status">{this.state.status}</div>
      );
    }
    if (this.state.status === 'offline') {
      return (
        <div className="status status_offline">{this.state.status}</div>
      );
    }
  }
}

export default ConnectionStatus;