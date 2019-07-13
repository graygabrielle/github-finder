import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github"
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    const props = this.props;
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={props.icon} style={{ margin: "0.5rem" }} />
          {props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
