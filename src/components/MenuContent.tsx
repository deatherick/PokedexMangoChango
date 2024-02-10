import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image} from 'react-native';

const MenuContent: React.FunctionComponent<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Image
        resizeMode='stretch'
        style={{width: '100%', height: 120, backgroundColor:"black"}}
        source={require('../../assets/drawerHeaderImage.png')}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
export default MenuContent;