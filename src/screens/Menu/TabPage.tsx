import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TextPage from './TextPage';

interface ITabPageProps {}

const Tab = createMaterialTopTabNavigator();

const TabPage: React.FunctionComponent<ITabPageProps> = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab 1" children={(props) => <TextPage text={'Tab 1'} {...props} />} />
      <Tab.Screen name="Tab 2" children={(props) => <TextPage text={'Tab 2'} {...props} />} />
    </Tab.Navigator>
  );
};
export default TabPage;