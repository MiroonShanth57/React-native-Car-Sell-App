import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Svg, { Image } from 'react-native-svg'
import IconAntDesign from 'react-native-vector-icons/AntDesign'


export default function DashBoard() {
    return (

        <SafeAreaView style={style.container}>
            <Text style={style.title}>
                Dashboard
            </Text>
            <View style={style.Hedercontainer}>

            

                <View style={style.menuIconContiner}>
                    <IconAntDesign name='home' style={style.menuIcon} />
                </View>

                <View style={style.menuIconContiner2}>
                    <IconAntDesign name='search1' style={style.menuIcon} />
                </View>


            </View>

            <Text style={style.title2}>
                Popular
            </Text>

            <View style={style.body1container}>

            <View style={style.sub1Container}>

            </View>

            <View style={style.sub2Container}>
                
            </View>

            <View style={style.sub3Container}>
                
            </View>

            <View style={style.sub4Container}>
                
            </View>

                


            </View>


        </SafeAreaView>
        
    )
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'aliceblue',
        padding: '3%'
    },
    Hedercontainer: {
        width: '100%',
        height: '6%',
        flexDirection: 'row',
        marginTop: '2%',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(169, 169, 169, 0.3)',
        borderRadius: 10,




    },
    menuIcon: {
        color: 'black',
        fontSize: 30,
        right: 20
    },
    menuIconContiner: {
        left: 30,

    },
    menuIconContiner2: {
        left: 10,

    },
    title:{
        color:'black',
        marginTop:4,
        marginBottom:4,
        fontFamily:'alignSelf',
        fontSize:20,
        fontWeight:'bold'

    },
    body1container:{
        width: '100%',
        height: '25%',
        flexDirection: 'row',
        marginTop: '5%',
        justifyContent: 'space-between',
        backgroundColor: 'rgba( 220, 220, 220, .3)',
        borderRadius: 10,
    },
    title2:{
        color:'black',
        marginTop:25,
        marginBottom:1,
        fontFamily:'alignSelf',
        fontSize:24,
        fontWeight:'bold'
    },
    sub1Container:{
        width: '25%',
        height: '100%',
        backgroundColor: 'blue',
    },
    sub2Container:{
        width: '25%',
        height: '100%',
        backgroundColor: 'white',
    },
    sub3Container:{
        width: '25%',
        height: '100%',
        backgroundColor: 'black',
    },
    sub4Container:{
        width: '25%',
        height: '100%',
        backgroundColor: 'red',
    }
})