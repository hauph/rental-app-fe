import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import ReactTooltip from 'react-tooltip';
import Header from '../../components/Header/Header';
import HomePageBody from '../../components/HomePageBody/HomePageBody';
import Footer from '../../components/Footer/Footer';
import CompareFunction from '../../components/CompareFunction/CompareFunction';
import withUserData from '../../HOC/withUserData/withUserData';
import { userData } from '../../interface/userData';

type Props = {
  userData: userData;
};

type State = {};

class HomePage extends React.Component<Props, State> {
  render() {
    const { userData } = this.props;
    return (
      <>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A Boilerplate application homepage"
          />
        </Helmet>
        <div className="page-wrapper page--home">
          <Header userData={userData} />
          <HomePageBody />
          <Footer />
          <CompareFunction />
          <ReactTooltip />
        </div>
      </>
    );
  }
}

export default withUserData(HomePage);
