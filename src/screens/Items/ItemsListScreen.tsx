import React from 'react';
import {Text, View} from 'react-native';
import base from '../../config/base';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from '../../../App';

export interface IItemsListScreenProps {}

type Props = DrawerScreenProps<RootStackParamList>;

const ItemsListScreen: React.FunctionComponent<Props> = ({navigation, route}) => {
  return (
    <View style={base.centered}>
      <Text>Items</Text>
    </View>
  );
};
export default ItemsListScreen;