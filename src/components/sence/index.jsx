import React, { Component, PropTypes } from 'react';
import styles from './index.css';
import { getAll } from '../../services/sence';

class Sence extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
      list: [],
    };
  }

  loadSence() {
    getAll().then(({ jsonResult }) => {
      this.setState({
        list: jsonResult.data,
      });
    })
  }

  componentDidMount() {
    this.loadSence();
  }

  closeDialog() {
    this.setState({
      hide: true
    })
  }

  showDialog() {
    this.setState({
      hide: false
    })
  }

  render() {
    const {list} = this.state;
    const { location } = this.props;
    return (
      <div>
        <div className={this.state.hide ? 'hide' : ''}>
          <section className="sence dialog">
            <div className="dialog-close" onClick={this.closeDialog.bind(this)}></div>
            <header>
              <h1>庄园实景</h1>
            </header>
            <ul>
              {list.map(item => 
                <li key={item.id}><iframe height="173" width="252" src={item.src} frameborder="0" allowfullscreen></iframe></li>
              )}
            </ul>
          </section>
        </div>
        <nav className="nav">
          <ul>
            <li onClick={this.showDialog.bind(this)}>查看实景</li>
            <li>我要订餐</li>
            <li>个人中心</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sence;
