import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxilary from '../Auxilary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {

    state = {
      error: null,
       isMounted: false
    }

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null, isMounted: true})
        return req;
      })
      this.respInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error, isMounted: true });
      })
    }

    componentWillUnmount() {

      // console.log('Called to remove interceptors', this.reqInterceptor);
      // console.log('Second one', this.respInterceptor);

      if (this.state.isMounted) {
        axios.interceptors.request.eject(this.reqInterceptor)
        axios.interceptors.responce.eject(this.respInterceptor)
        
      } 
        this.setState({ isMounted: false });   
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null })
    }

    render() {
      return (
        <Auxilary>
          <Modal show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxilary>
      );
    }
  };
};

export default withErrorHandler;
