import React from 'react';
import { connect } from 'react-redux';
import { getCookie } from '../../../utils/functions';

function withUserData(Component) {
  class WithUserData extends React.Component {
    constructor(props) {
      super(props);

      let ud = localStorage.userData
        ? localStorage.userData
        : getCookie('userData');
      if (ud && ud.length) {
        ud = JSON.parse(ud);
        // Save userData to Redux and setState
        this.props.saveUserData(ud);
      }

      this.state = {
        // If ud is available, it means user is logging in, therefor shouldCleanUserData needs to be set to 1
        // to prepare for case when user logs out or user data is not valid anymore
        shouldCleanUserData: ud && ud.length ? 1 : 0,
      };
    }

    static getDerivedStateFromProps(props, state) {
      const udLS = localStorage.userData;
      const udCookie = getCookie('userData');
      const { saveUserData, userData } = props;
      const { shouldCleanUserData } = state;

      console.log('udLS', udLS);
      console.log('udCookie', udCookie);
      console.log('shouldCleanUserData', shouldCleanUserData);
      // Remove user data
      if (!udLS && !udCookie.length && shouldCleanUserData) {
        console.log('here');
        saveUserData({});
        return {
          shouldCleanUserData: 0,
        };
      } else if (!udLS && !udCookie.length) {
        return {
          shouldCleanUserData: 1,
        };
      } else if (Object.keys(userData).length && !shouldCleanUserData) {
        return {
          shouldCleanUserData: 1,
        };
      }

      return null;
    }

    render() {
      console.log(this.props.userData);
      return <Component userData={this.props.userData} {...this.props} />;
    }
  }

  const mapStateToProps = state => ({ userData: state.auth.userData });
  const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain action for saving user data
      saveUserData: userData =>
        dispatch({ type: 'SAVE_USER', payload: userData }),
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithUserData);
}

export default withUserData;
