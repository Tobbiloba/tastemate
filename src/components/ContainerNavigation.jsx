import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainNavigation from '../navigations/MainNavigation';

const ContainerNavigation = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default ContainerNavigation;
