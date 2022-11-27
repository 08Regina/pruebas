import { View, Text, StyleSheet, Image, ScrollView ,TextInput, LinearGradient, TouchableOpacity} from 'react-native'
import React from 'react'

const HomeScreens=({navigation})=> {
  return (
    <View style={{
        backgroundColor:"#FFF",
        flex:1
    }}>
        <ScrollView style={{flex:1,backgroundColor:'#ffffff'}} 
            showsVerticalScrollIndicator={false}>
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
                    <Text style={styles.texthe}>Home</Text>
                </View>
                <View style={{width:"33%",alignItems:"flex-end"}}>
                    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                        <Image
                            source={require('../../images/logo.png')}
                            style={styles.imglo}
                        />
                    </TouchableOpacity>
                </View>
            </View>
               
        </View>
        <View style={styles.contsear}>
            <TextInput
                placeholder="Buscar"
                placeholderTextColor="#0B0B3B"
                style={styles.searctx}
            />
            <Image
                source={require('../../images/search.png')}
                style={styles.imgsear}
            />
        </View>
               {/**/}
        <View style={{padding:20}}>
            <Text style={styles.txtMejor}>Lo Mejor</Text>

        </View>
               
        
        
        <View style={styles.row}>
            {/*Img*/}
            <View style={[styles.box, styles.box2]}>
                <Image
                    source={require('../../images/enchiladas-huastecas.jpg')}
                    style={styles.imgmejor}
                />
            </View>
            <View style={[styles.box]}>
                <Image
                    source={require('../../images/zacahuil.jpg')}
                    style={styles.imgmejor}
                />
            </View>
                
                
        </View>  
                 
        <View style={styles.row}>
            {/*Img*/}
            <View style={[styles.box, styles.box2]}>
                <Image
                    source={require('../../images/bocol.jpg')}
                    style={styles.imgmejorr}
                />
            </View>
            <View style={[styles.box]}>
                <Image
                    source={require('../../images/mole.jpg')}
                    style={styles.imgmejorr}
                />
            </View>
                
                
        </View>  
          
        </ScrollView> 
               
    </View>
  )
}
const styles = StyleSheet.create({
    heade: {
        backgroundColor:"#F0640B",
        height:'25%',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        paddingHorizontal:20
        
    },
    conttyl:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:50,
        width:"100%"
    },
    texthe:{
        fontSize:18,
        color:"#FFF",
        fontWeight:"bold"
    },
    imglo:{
        height:60,
        width:60
    },
    contsear:{
        backgroundColor:"#FDEBE0",
        paddingVertical:8,
        paddingHorizontal:20,
        marginHorizontal:20,
        borderRadius:15,
        marginTop:-15,
        flexDirection:"row",
        alignItems:"center"
    },
    searctx:{
        
        fontWeight:"bold",
        fontSize:18,
        width:'90%'
    },
    imgsear:{
        height:20,
        width:20
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:"90%",
        marginTop:10,
        marginLeft:18,
      },
      box: {
        flex: 1,
        height: "30%",
        width:"50%",
        backgroundColor: '#ff',
        marginRight:15,
        marginTop:25,
      },
      box2: {
        height: "30%",
        width:"50%",
        backgroundColor: '#fff',
        marginLeft:5,
    
        alignContent:"center",
        alignItems:"center",
      },
    imgmejor:{
        height:140,
        width:150,
        alignContent:"center",
        alignItems:"center",
    },
    txtMejor:{
        fontWeight:"bold",
        color:'#FA0C7B',
        textAlign:'center', 
        fontSize:40,
        
    },
    imgmejorr:{
        height:140,
        width:150,
        alignContent:"center",
        alignItems:"center",
    },
})

export default HomeScreens