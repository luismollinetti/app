import React, { useContext } from 'react';


import StackRoutes from './stack.routes';
import DrawerRoutes from './drawer.routes';

const Routes = () => {
  const signed = false
  return signed ? <DrawerRoutes /> : <StackRoutes />;
};

export default Routes;
