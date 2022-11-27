import { View, Text, StyleSheet, Image, ScrollView ,TextInput, LinearGradient, TouchableOpacity} from 'react-native'
import React from 'react'

const HuejutlaScreens=({navigation})=> {
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
            <Text style={styles.txtTitulo}>Huejutla</Text>

        </View>
               
        <ScrollView style={{flex:1,backgroundColor:'#ffffff'}} 
            showsVerticalScrollIndicator={false}>
        
            <View style={{padding:20}}>
                <Text style={styles.txtinf}>Informacion</Text>

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
    txtinf:{
        color:'#0b0b3b',
        textAlign:'center', 
        fontSize:20,
        
    },
})

export default HuejutlaScreens