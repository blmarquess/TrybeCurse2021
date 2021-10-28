import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </header>
    );
  }
}

export default Header;