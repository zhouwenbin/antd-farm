import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import styles from './index.css';

class Menu extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isActive: -1,
      data: [
      {
      	id: 1,
      	name: '采集',
        link: '/collect'
      }, {
      	id: 2,
      	name: '篮子',
        link: '/basket'
      }, {
      	id: 3,
      	name: '化肥',
        link: '/chemical'
      }, {
      	id:4,
      	name: '锄头',
        link: '/pickaxe'
      }]
    };
  }

  render() {
    const list = this.state.data;
    return (
      <nav className="menu">
		  <ul>
		  	{list.map(item => 
          <li key={item.id} className={item.link == location.pathname ? 'active' : ''}>
          <Link to={item.link}>{item.name}</Link>
          </li>
        )}
		  </ul>
		</nav>
    );
  }
}

export default Menu;


