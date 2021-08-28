import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import ReactTooltip from 'react-tooltip';
import Header from '../../components/Header/Header';
import HomePageBody from '../../components/HomePageBody/HomePageBody';
import Footer from '../../components/Footer/Footer';
import CompareFunction from '../../components/CompareFunction/CompareFunction';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div className="page-wrapper page--home">
        <Header />
        <HomePageBody />
        <Footer />
        <CompareFunction />
        <ReactTooltip />
      </div>
    </>
  );
}
