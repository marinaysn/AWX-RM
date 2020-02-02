import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandle = () => {
    this.setState({
      showSideDrawer: false
    });
  };

  sideDrawerOpenHandle = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      };
    });
  };

  render() {
    return (
      <Auxiliary>
        <Toolbar switchMenuItems={this.sideDrawerOpenHandle} />
        <Sidedrawer
          closed={this.sideDrawerClosedHandle}
          open={this.state.showSideDrawer}
        />
        <main className='mainContent'>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;
