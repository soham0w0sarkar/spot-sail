import React from 'react';
import Header from '../components/Header';
import Routers from '../routes/Routers';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
