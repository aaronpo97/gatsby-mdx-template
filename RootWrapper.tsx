import React from 'react';
import Layout from './src/components/Layout';

interface RootWrapperProps {
  element: React.ReactNode;
}
const RootWrapper: React.FC<RootWrapperProps> = ({ element }) => (
  <Layout>{element}</Layout>
);
export default RootWrapper;
