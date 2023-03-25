import React from 'react';
import Header from '../../components/Header/Header.component';

const Layout = ({ children, user }: any) => {
  return (
    <>
      <Header name={user.name} onLogout={user.onLogout} />
      {children}
    </>
  );
};

export default Layout;
