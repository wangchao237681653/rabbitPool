import React from 'react';
import Header from './header';
import Footer from './footer';

const layoutStyle = {

};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <Footer />
    <style>{`
    body {
      margin: 0;
    }
  `}</style>
  </div>
);

export default Layout;
