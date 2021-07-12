import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import './HomePage.scss';
import Header from '../../components/Header/Header';
import HomePageBody from '../../components/HomePageBody/HomePageBody';
import Footer from '../../components/Footer/Footer';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
      <HomePageBody />
      <Footer />
    </>
  );
}
