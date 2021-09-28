import * as React from 'react';
import { Redirect } from 'react-router';
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
  counter: number;
  _userData: userData;
};

class AccountPage extends React.Component<Props, State> {
  // This is used to check whether we update this page or redirect to home page
  timerID;

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      _userData: JSON.parse(JSON.stringify(this.props.userData)), // Clone userData from props
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.count(), 1000);
  }

  static getDerivedStateFromProps(props, state) {
    const { _userData } = state;
    const { userData } = props;
    if (JSON.stringify(userData) !== JSON.stringify(_userData)) {
      return {
        _userData: JSON.parse(JSON.stringify(userData)), // If our state's userData is different from props's, we renew userData in state
      };
    }
    return null;
  }

  count() {
    const { userData } = this.props;
    if (Object.keys(userData).length) {
      this.setState({
        counter: 0,
      });
    } else {
      this.setState({
        counter: 1,
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { userData } = this.props;
    const { counter } = this.state;
    return (
      <>
        {counter ? (
          <Redirect to="/" />
        ) : (
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
        )}
      </>
    );
  }
}

export default withUserData(AccountPage);
