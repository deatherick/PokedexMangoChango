import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TextPage from './TextPage';
import { RootStackParamList } from '../../../App';
import { DrawerScreenProps } from '@react-navigation/drawer';

export interface ITabPageProps {
  tabs: Array<ITabProps>
}

interface ITabProps {
  name: keyof RootStackParamList
  text: string
}

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

type Props = DrawerScreenProps<RootStackParamList>;

const TabPage: React.FunctionComponent<Props> = ({route, navigation}) => {

  const {tabs}  = route.params as ITabPageProps

  return (
    <Tab.Navigator>
       {tabs.map(tab => (
            <Tab.Screen key={tab.name} name={tab.name} component={TextPage} initialParams={{text: tab.text}} /> 
        ))}
    </Tab.Navigator>
  );
};
export default TabPage;