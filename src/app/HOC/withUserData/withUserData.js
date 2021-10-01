import React from 'react';
import { connect } from 'react-redux';
import { getCookie } from '../../../utils/functions';

function withUserData(Component) {
  class WithUserData extends React.Component {
    constructor(props) {
      super(props);

      const { saveUserData, userData } = this.props;
      const udLS = localStorage.getItem('userData');

      let ud = udLS ? udLS : getCookie('userData');
      if (ud && ud.length) {
        ud = JSON.parse(ud);
        // Save userData to Redux and setState
        saveUserData(ud);
      }

      this.state = {
        // If ud is available, it means user is logging in, therefor shouldCleanUserData needs to be set to 1 to prepare for case when user logs out or user data is not valid anymore
        shouldCleanUserData:
          (ud && ud.length) || Object.keys(userData).length ? 1 : 0,
      };
    }

    static getDerivedStateFromProps(props, state) {
      const udLS = localStorage.getItem('userData');
      const udCookie = getCookie('userData');
      const { saveUserData } = props;
      const { shouldCleanUserData } = state;

      // console.log('userData', userData);
      // console.log('udLS', udLS);
      // console.log('udCookie', udCookie);
      // console.log('shouldCleanUserData', shouldCleanUserData);
      // console.log('=============');

      // Remove user data
      if (!udLS && !udCookie.length && shouldCleanUserData) {
        saveUserData({});
        return {
          shouldCleanUserData: 0,
        };
      }
      // else if (!udLS && !udCookie.length && !shouldCleanUserData) {
      //   saveUserData({});
      //   return {
      //     shouldCleanUserData: 1,
      //   };
      // }
      // else if (Object.keys(userData).length && !shouldCleanUserData) {
      //   console.log('here');
      //   return {
      //     shouldCleanUserData: 1,
      //   };
      // }

      return null;
    }

    render() {
      // console.log(this.props.userData);
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
