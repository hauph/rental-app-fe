import * as React from 'react';
import { Redirect } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AccountPageBody from '../../components/AccountPageBody/AccountPageBody';
import withUserData from '../../HOC/withUserData/withUserData';
import userData from '../../interface/userData';
import noUserData from '../../interface/noUserData';

type Props = {
  userData: userData;
  history: any;
};

type State = {
  shouldRedirect: boolean;
  counter: number;
  _userData: userData;
};

class AccountPage extends React.Component<Props, State> implements noUserData {
  // This is used to check whether we update this page or redirect to home page
  timerID;

  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      counter: 0, // Set a counter here because we dont want this component to keep re-rendering
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
    const { counter } = this.state;
    if (Object.keys(userData).length) {
      this.setState({
        shouldRedirect: false,
        counter: counter + 1,
      });
    } else {
      this.setState({
        shouldRedirect: true,
        counter: counter + 1,
      });
    }

    // If counter + 1 === 2, we should apply clearInterval for good performance
    if (counter + 1 === 2) {
      clearInterval(this.timerID);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { userData } = this.props;
    const { shouldRedirect } = this.state;
    return (
      <>
        {shouldRedirect ? (
          <Redirect to="/" />
        ) : (
          <>
            <Helmet>
              <title>Account page</title>
              <meta name="description" content="Account page" />
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
