import React from 'react';
import { connect } from 'react-redux';

function withUserData(Component) {
  class WithUserData extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        _userData: {},
      };
    }

    componentDidMount() {
      // Check if there is userData in localStorage or sessionStorage
      let ud = localStorage.userData
        ? localStorage.userData
        : sessionStorage.userData;
      if (ud) {
        ud = JSON.parse(ud);
        // Save userData to Redux and setState
        this.props.saveUserData(ud);
        this.setState({
          _userData: ud,
        });
      }
    }

    static getDerivedStateFromProps(props, state) {
      const { userData } = props;
      const { _userData } = state;

      if (JSON.stringify(userData) !== JSON.stringify(_userData)) {
        return {
          _userData: userData,
        };
      }

      return null;
    }

    render() {
      return <Component userData={this.state._userData} {...this.props} />;
    }
  }

  const mapStateToProps = state => ({ userData: state.auth.userData });
  const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      saveUserData: userData =>
        dispatch({ type: 'SAVE_USER', payload: userData }),
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithUserData);
}

export default withUserData;
