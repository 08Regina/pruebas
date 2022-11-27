import React from 'react'
import { View,Text, ImageBackground, Image, StyleSheet,TouchableOpacity } from 'react-native'
import { DrawerContentScrollView,DrawerItemList ,DrawerItem } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const CustonDrawer=(props)=>{
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#F0640B'}}>
                <ImageBackground source={require('../../images/Img1.png')}
                style={{padding:20}}>
                    <Image source={require('../../images/perfil.jpg')}
                    style={{height:80, width:80, borderRadius:50,marginBottom:15}}/>
                    <Text style={styles.txtUser}>Usuario</Text>
                    <Text style={styles.txtCorreo}>Correo@gmail.com</Text>
                </ImageBackground>
                <View style={styles.conitem}>
                    <DrawerItemList {...props}/>
                </View>
                
            </DrawerContentScrollView>
        
            
            <View style={styles.lineasa}>
                <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
                    <View style={styles.vistasa}>
                        <Ionicons name='exit-outline' size={22}/>
                        <Text style={styles.txtsalir}>Salir</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        </View>
    )
    
}
const styles = StyleSheet.create({
    txtUser:{
        color:'#fff', 
        fontSize:20, 
        fontWeight:'bold'
    },
    txtCorreo:{
        color:'#fff', 
        fontSize:18, 
        fontWeight:'bold'
    },
    conitem:{
        flex:1, 
        backgroundColor:'#fff', 
        paddingTop:10
    },
    lineasa:{
        padding:12,
        borderTopWidth:1,
        borderTopColor:'#FA0C7B'
    },
    vistasa:{
        flexDirection:'row', 
        alignItems:'center',
    },
    txtsalir:{
        fontSize:18,
        marginLeft:5,
    }
})
export default CustonDrawer
