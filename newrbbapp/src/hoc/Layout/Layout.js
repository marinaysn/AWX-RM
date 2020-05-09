import React, { Component } from 'react';
import Auxiliary from '../Auxilary/Auxiliary';
import './Layout.css';
// import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
// import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';


class Layout extends Component {
    state = {
        showSideDrawer: false
    };
    render() {
        return (
            <Auxiliary>
                <main className='mainContent'>{this.props.children}</main>
            </Auxiliary>
        )
    }
}
export default Layout


/*

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
    )
  }
}

export default Layout;

*/
