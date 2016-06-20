import React, { Component, PropTypes } from 'react';
import styles from './index.css';
import { getAll } from '../../services/farm';

class Farm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  loadFarm() {
    getAll().then(({ jsonResult }) => {
      this.setState({
        list: jsonResult.data,
      });
    })
  }

  changeFarm(itemsId,itemId) {
  	if(location.pathname == '/collect'){
  		this.changeState(itemsId,itemId,false,false)
  		alert('您成功获得')
  	}
  	else if(location.pathname == '/basket'){
  		this.changeState(itemsId,itemId,false,false)
  		alert('已收获至仓库')
  	}
  	else if(location.pathname == '/chemical'){
  		alert('已施肥')
  	}
  	else if(location.pathname == '/pickaxe'){
  		this.changeState(itemsId,itemId,false,true)
  	}
  	else{
  		var isConfirm = confirm('是否要预定此物品')
      if (isConfirm === true) {
        alert('预定成功')
      }
  	}
  }

  changeState(itemsId,itemId,isShow,isFloorEmpty) {
		const newList = this.state.list.map(items => {
      if (itemsId === items.id) {
      	items.cols.map(item => {
      		if (itemId === item.id) {
      			item.isShow = isShow;
      			item.isFloorEmpty = isFloorEmpty;
      			return item;
      		}else {
		        return item;
		      }
      	})
      }
      return items 
    });
    this.setState({
      list: newList,
    });
  }

  componentDidMount() {
    this.loadFarm();
  }

  render() {
    const {list} = this.state;
    return (
      <section className="farm">
		  	{list.map(items => 
		  		<ul key={items.id}>{items.cols.map(item => 
		  			<li onClick={this.changeFarm.bind(this,items.id, item.id)} key={item.id}>
				  		<div className={item.hasFloor ? '' : 'hide'}><div className={item.isFloorEmpty ? 'farm-floor empty' : 'farm-floor'}></div></div>
				      <div className={item.isShow ? '' : 'hide'}><div className={item.object}></div></div>
		  	</li>)}</ul>)}
		  </section>
    );
  }
}

export default Farm;
