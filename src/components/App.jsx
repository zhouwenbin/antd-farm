import React, { Component, PropTypes } from 'react';
import Farm from './farm/index';
import Menu from './menu/index';
import Sence from './sence/index';
import style from './App.css';

const App = ({ location }) => {
  return (
  	<div>
  		<Farm location={location}  />
	    <Menu />
	    <Sence location={location} />
  	</div>
  );
};

App.propTypes = {
};

export default App;