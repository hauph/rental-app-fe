import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProfilePageBody from '../../components/ProfilePageBody/ProfilePageBody';

export function ProfilePage() {
  return (
    <>
      <Helmet>
        <title>Profile page</title>
        <meta name="description" content="Profile page" />
      </Helmet>
      <div className="page-wrapper page--profile">
        <Header />
        <ProfilePageBody />
        <Footer />
      </div>
    </>
  );
}
