import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import styles from './index.css';

class Nav extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="nav">
        <ul>
          <li id="nav-sence">查看实景</li>
          <li>我要订餐</li>
          <li id="nav-center">个人中心</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
