import React from 'react';
import { Box } from 'theme-ui';

import Header from './Header';
import useSiteMetadata from '../hooks/useSiteMetadata';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Header siteTitle={title} siteDescription={description} />
      <Box
        as="div"
        sx={{
          margin: '0 auto',
          maxWidth: '1000px',
          padding: '0 1.0875rem 1.45rem',
        }}
      >
        <Box as="main">{children}</Box>
      </Box>
    </>
  );
};

export default Layout;
