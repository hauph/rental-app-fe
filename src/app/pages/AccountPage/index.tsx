import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AccountPageBody from '../../components/AccountPageBody/AccountPageBody';
import withUserData from '../../HOC/withUserData/withUserData';
import { userData } from '../../interface/userData';

type Props = {
  userData: userData;
  history: any;
};

type State = {
  shouldGoHome: number;
};
let i = 0;
class AccountPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      // if shouldGoHome reaches number 2, it means there is no user data and thus we need to go to home page
      shouldGoHome: 0,
    };
  }

  // componentDidMount() {
  //   const { userData, history } = this.props;
  //   setTimeout(() => {
  //     if (!Object.keys(userData).length) {
  //       // Go to home page when there is no user data in Redux store
  //       history.push('/');
  //     }
  //   }, 1000);
  // }

  static getDerivedStateFromProps(props, state) {
    const { userData, history } = props;
    const { shouldGoHome } = state;
    if (!Object.keys(userData).length) {
      i += 1;
      // return {
      //   shouldGoHome: shouldGoHome + 1,
      // };
    } else {
      i = 3;
    }

    setTimeout(() => {
      if (i === 2) {
        history.push('/');
      }
    }, 500);

    console.log('here', i);
    return null;
  }

  render() {
    const { userData, history } = this.props;
    const { shouldGoHome } = this.state;

    // if (i === 2) {
    //   // history.push('/');
    // } else {
    //   i = 0;
    // }

    return (
      <>
        <Helmet>
          <title>Profile page</title>
          <meta name="description" content="Profile page" />
        </Helmet>
        <div className="page-wrapper page--account">
          <Header userData={userData} />
          <AccountPageBody userData={userData} />
          <Footer />
        </div>
      </>
    );
  }
}

export default withUserData(AccountPage);
