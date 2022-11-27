import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import HomeScreens from '../Usuario/Home';
import DirectorioScreens from '../Usuario/Directorio';
import HuejutlaScreens from '../Usuario/Huejutla';
import CustonDrawer from './CustonDrawer';
import {screen} from '../../utils'

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
        <Drawer.Navigator drawerContent={props=><CustonDrawer{...props}/>} screenOptions={{
            headerShown:false, 
            drawerActiveBackgroundColor:'#F7AF85',
            drawerActiveTintColor:'#010D52',
            drawerInactiveTintColor:'#FA0C7B',
            drawerLabelStyle:{marginLeft:-25,fontSize:15}}}>
            <Drawer.Screen name={screen.myhome.drawer} component={HomeScreens} options={{title:"Home",
             drawerIcon:({color})=>(
                <Ionicons name="list-outline" size={22} color={color}/>
            )}} />
            <Drawer.Screen name={screen.mydirectorio.drawer} component={DirectorioScreens} options={{title:"Directorio",drawerIcon:({color})=>(
                <Ionicons name="list-outline" size={22} color={color}/>
            )}}/>
            <Drawer.Screen name={screen.myhuejutla.drawer} component={HuejutlaScreens} options={{title:"Huejutla",drawerIcon:({color})=>(
                <Ionicons name="ribbon-outline" size={22} color={color}/>
            )}}/>
        </Drawer.Navigator>
    
  );
}

export default MyDrawer