import { View, Text ,StyleSheet, TextInput} from 'react-native'
import React from 'react'
import Svg, { Image } from 'react-native-svg'


export default function LoginPage() {
  return (
    <View style={style.container}>
    
        <View style={[StyleSheet.absoluteFill]}>
            <Svg style={style.svgStyle}>
            <Image href={require('../LogInPage/pic/LoginPage1.jpg')} 
            width='100%' 
            height='100%'
            preserveAspectRatio="xMidYMid slice"
        />
            
        
        </Svg>

        <View style={style.closeBtnContainer}>
            <Text color='White'>X</Text>
        </View>
        </View>
        
        <View style={style.containerBtnSection}>
            <View style={style.btn}>
                <Text style={style.btnTxt}>
                    LOG IN
                </Text>
            </View>

            <View style={style.btn}>
                <Text style={style.btnTxt}>
                    REGISTER
                </Text>
            </View>
        </View>
        
        <View style={style.InputFormContainer}>
            <TextInput placeholder='Email' style={style.TxtInput}/>
            <TextInput placeholder='Username' style={style.TxtInput}/>
            <TextInput placeholder='Password' style={style.TxtInput}/>

            <View style={style.btnForm}>
                <Text style={style.btnTxt}>
                LOG IN 
                </Text>
            </View>

        </View>
        
    </View>
  )
}

const style = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'flex-end',
      

      
    },
    svgStyle: {
        height:'100%',
        width:'100%'
    },
    btn:{
        backgroundColor:'#dfe6e9',
        height:55,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 35,
        marginHorizontal:20,
        marginVertical:10,
        borderWidth:1,
        borderColor:'white'

    },
    btnTxt:{
        fontSize:20,
        fontWeight:'600',
        color:'black',
        letterSpacing:0.8
    },
    containerBtnSection:{
       justifyContent:'center',
       height:'40%' 
    },
    TxtInput:{
        height:50,
        borderColor:'blue',
        borderWidth:1,
        marginHorizontal:20,
        marginVertical:10,
        borderRadius:10,
        paddingLeft:10
    },
    btnForm:{
        backgroundColor:'#dfe6e9',
        height:55,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 35,
        marginHorizontal:20,
        marginVertical:10,
        borderWidth:1,
        borderColor:'white',
        shadowColor:'white',
        shadowOffset:{
            width:10,
            height:10,
        },
        shadowOpacity:0.23,
        shadowRadius:3.46,
        elevation:5,
    },
    InputFormContainer:{
        marginBottom:70,


    },
    closeBtnContainer:{
            height:40,
            width:40,
            justifyContent:'center',
            alignSelf:'center',
            shadowColor:"#000",
            shadowOffset:{
                width:0,
                height:5,
            },
            shadowOpacity:0.35,
            shadowRadius:6.22,
            elevation:1,
            backgroundColor:'white',
            alignItems:'center',
            borderRadius:20,
    }
  
  
   }
)