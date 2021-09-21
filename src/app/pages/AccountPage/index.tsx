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

type State = {};

class AccountPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    const { userData, history } = props;
    if (!Object.keys(userData).length) {
      history.push('/');
    }

    return null;
  }

  render() {
    const { userData } = this.props;

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
