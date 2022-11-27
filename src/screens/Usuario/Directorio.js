import { View, Text, StyleSheet, Image, ScrollView ,TextInput, LinearGradient, TouchableOpacity} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {screen} from "../../utils"
import LocalesScreens from './Locales';

const DirectorioScreens=()=> {
    const navigation=useNavigation();
    const gotoLocals=()=>{
        navigation.navigate(screen.mydirectorio.locals)
    }
    return (
    <View style={{
        backgroundColor:"#FFF",
        flex:1
    }}>
        <View style={styles.heade}>
               {/*}<Image
                    source={require('../../images/logotipo-pueblos-con-sabor.png')}
                    {/*}style={{
                        height:10,
                        width:20,
                        marginTop:50
                    }}
                />{*/}
            <View style={styles.conttyl}>
                <View style={{width:"65%"}}>
                    <Text style={styles.texthe}>Directorio</Text>
                </View>
                <View style={{width:"33%",alignItems:"flex-end"}}>
                    <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                        <Image
                            source={require('../../images/logo.png')}
                            style={styles.imglo}
                        />
                    </TouchableOpacity>
                </View>
            </View>
               
        </View>
        
               {/**/}
        <View style={{padding:20}}>
            <Text style={styles.txtTitulo}>Directorio</Text>

        </View>
               
        <ScrollView style={{flex:1,backgroundColor:'#ffffff'}} 
            showsVerticalScrollIndicator={false}>
        
        {/*Locales*/}
        <View style={{marginRight:15,marginLeft:15}}>
          
 
          <View style={styles.row }>
            <View style={[styles.box, styles.box2]}>
            <Image
                    source={require('../../images/local.jpg')}
                    style={styles.imgmejor}
                />
            </View>
            <View style={[styles.box, styles.two]}>
                <Text style={styles.txtTituloL}>Comedor Rosita
                </Text>
                <Text style={styles.txtinf}>Descripcion del Local
                </Text>
                <TouchableOpacity onPress={gotoLocals}>
                    <Text style = {styles.botton}>
                    Ver
                    </Text>
                </TouchableOpacity>
            </View>
          </View>
 
      </View>
      {/*Locales*/}
      <View style={{marginRight:15,marginLeft:15 , marginTop:15}}>
          
 
          <View style={styles.row }>
            <View style={[styles.box, styles.box2]}>
            <Image
                    source={require('../../images/local.jpg')}
                    style={styles.imgmejor}
                />
            </View>
            <View style={[styles.box, styles.two]}>
                <Text style={styles.txtTituloL}>Comedor Luna
                </Text>
                <Text style={styles.txtinf}>Descripcion del Local
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate("LocalesScreens")}>
                    <Text style = {styles.botton}>
                    Ver
                    </Text>
                </TouchableOpacity>
            </View>
          </View>
 
      </View>
          
        </ScrollView> 
               
    </View>
  )
}
const styles = StyleSheet.create({
    heade: {
        backgroundColor:"#F0640B",
        height:170,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        paddingHorizontal:20
        
    },
    conttyl:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:65,
        width:"100%"
    },
    texthe:{
        fontSize:25,
        color:"#FFF",
        fontWeight:"bold"
    },
    imglo:{
        height:60,
        width:60
    },
    txtTitulo:{
        fontWeight:"bold",
        color:'#FA0C7B',
        textAlign:'center', 
        fontSize:40,
        
    },
    txtTituloL:{
        fontWeight:"bold",
        color:'#FA0C7B',
        textAlign:'center', 
        fontSize:20,
        
    },
    txtinf:{
        color:'#0b0b3b',
        textAlign:'center', 
        fontSize:20,
        
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:"#fff",
        
        borderRadius:30,
    
      },
    box: {
        flex: 1,
        height: "30%",
        width:"100%",
        backgroundColor: '#fff',
        marginRight:1,
        marginTop:10,
        
    },
    box2: {
        width:"20%",
        backgroundColor: '#fff',
        marginLeft:5,
    },
    imgmejor:{
        height:100,
        width:120,
        alignContent:"center",
        alignItems:"center",
    },
    two: {
        flex: 2,
        borderRadius:1,
        backgroundColor:"#fff"

      },
      
    botton:{
        borderWidth:1,
        borderRadius:20,
        padding: 10,
        width: '30%',
        height: 35,
        marginTop: 10,
        fontSize:15,
        alignSelf: "center",
        textAlign:"center",
        color:'#0b0b3b',
        fontWeight: "bold",
        borderColor: '#FA0C7B',
        backgroundColor:'#F0640B',
    },
})

export default DirectorioScreens