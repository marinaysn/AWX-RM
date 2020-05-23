import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxilary from '../Auxilary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {

    state = {
      error: null
    }

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null })
        return req;
      })
      this.respInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error });
      })
    }

    componentWillUnmount() {

      // console.log('Called to remove interceptors', this.reqInterceptor);
      // console.log('Second one', this.respInterceptor);
      axios.interceptors.request.eject(this.reqInterceptor)
      axios.interceptors.responce.eject(this.respInterceptor)
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
