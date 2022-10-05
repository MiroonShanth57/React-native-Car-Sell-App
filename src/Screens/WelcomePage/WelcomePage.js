import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Svg, { Image } from 'react-native-svg'


export default function WelcomePage() {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <View style={style.container}>
            <View style={[StyleSheet.absoluteFill]}>
                <Svg style={style.svgStyle}>
                    <Image href={require('../LogInPage/pic/welcomePage2.jpg')}
                        width='100%'
                        height='100%'
                        preserveAspectRatio="xMidYMid slice" />
                </Svg>
            </View>

            <View style={style.TxtTitleContainer} width={windowWidth / 1.1}>

                <Text style={style.TxtTitleWelcome}>
                    MS CAR'S
                </Text>
                {/* Welcome Back, */}
                <Text style={style.TxtTitleBody}>
                    Best Car Buying & Selling Platform..
                </Text>
            </View>

            <View style={style.containerLoginTxtSection} width={windowWidth / 1.1}>
                <Text style={style.TxtTitleLog}>
                    Login
                </Text>

                <Text style={style.TxtTitle2Body}>
                    Please sign in to continue...
                </Text>

                <TextInput placeholder='Username' style={style.TxtInput} />
                <TextInput placeholder='Password' style={style.TxtInput} />

                <Text style={style.TxtTitleForgotPass}>
                    Forgot password ?
                </Text>
            </View>

            <View style={style.containerBtnSection}>

                <TouchableOpacity
                    style={style.btn}
                    onPress={this.onPress}
                >
                    <Text style={style.btnTxt}>LOG IN</Text>
                </TouchableOpacity>

            </View>
            <View style={style.containerEnd}>
                <Text style={style.TxtTitleDont}>
                    Don't have an account ?
                </Text>

                <TouchableOpacity
                    onPress={this.onPress}>
                    <Text style={style.TxtTitleSign}>Sign up</Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    TxtTitleContainer: {
        top: -250,
        left: 18,
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        borderRadius: 15,
        height: 120,
    },
    containerLoginTxtSection: {
        top: -200,
        left: 18,
        height: 270,
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        borderRadius: 15
    },
    svgStyle: {
        height: '109%',
        width: '100%'
    },
    btn: {
        backgroundColor: 'rgba(105, 105, 105, 0.6)',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginHorizontal: 30,
        marginVertical: 130,
        borderWidth: 1,
        borderColor: 'gray'

    },
    btnTxt: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        letterSpacing: 0.9
    },
    containerBtnSection: {
        justifyContent: 'flex-end',
        height: '1%'
    },
    TxtInput: {
        height: 50,
        borderColor: '#ffff',
        borderWidth: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        paddingLeft: 10,
        top: 30
    },
    btnForm: {
        backgroundColor: '#dfe6e9',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        shadowColor: 'white',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.23,
        shadowRadius: 3.46,
        elevation: 5,
    },
    InputFormContainer: {
        // marginBottom:10,


    },
    closeBtnContainer: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.35,
        shadowRadius: 6.22,
        elevation: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 20,
    },
    TxtTitleWelcome: {
        fontFamily: 'Freight Text Semibold Italic',
        fontSize: 45,
        fontWeight: 'bold',
        color: 'linen',
        left: 30,
        top: 10
    },
    TxtTitleBody: {
        fontFamily: 'alignSelf',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'linen',
        alignItems: 'center',
        left: 30,
        top: 10
    },
    TxtTitleLog: {
        fontFamily: 'Freight Text Semibold Italic',
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff',
        left: 30,
        top: 20
    },
    TxtTitle2Body: {
        fontFamily: 'alignSelf',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        alignItems: 'center',
        left: 30,
        top: 20
    },
    TxtTitleForgotPass: {
        fontFamily: 'alignSelf',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        alignItems: 'center',
        right: -220,
        top: 30
    },
    TxtTitleDont: {

        fontFamily: 'alignSelf',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        alignItems: 'center',
        left: 90,
        bottom: 20,
        position: 'relative'
    },
    TxtTitleSign: {
        fontFamily: 'alignSelf',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'silver',
        alignItems: 'center',
        left: 225,
        bottom: 37,
        position: 'relative'
    },
    containerEnd: {
        justifyContent: 'flex-end'
    }


}
)