import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AccountPageBody from '../../components/AccountPageBody/AccountPageBody';
import withUserData from '../../HOC/withUserData/withUserData';
import { userData } from '../../interface/userData';

type Props = {
  userData: userData;
};

type State = {
  pageBodyChecker: boolean;
};

class AccountPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      pageBodyChecker: false, // Should re-render AccountPageBody to apply user data (if there is)
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { userData } = props;
    const { pageBodyChecker } = state;

    if (Object.keys(userData).length && !pageBodyChecker) {
      return {
        pageBodyChecker: true,
      };
    }

    return null;
  }

  render() {
    const { userData } = this.props;
    const { pageBodyChecker } = this.state;

    return (
      <>
        <Helmet>
          <title>Profile page</title>
          <meta name="description" content="Profile page" />
        </Helmet>
        <div className="page-wrapper page--account">
          <Header userData={userData} />
          {pageBodyChecker ? (
            <AccountPageBody userData={userData} />
          ) : (
            <AccountPageBody />
          )}
          <Footer />
        </div>
      </>
    );
  }
}

export default withUserData(AccountPage);
