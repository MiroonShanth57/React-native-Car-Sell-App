import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Svg, { Image } from 'react-native-svg'

export default function AccountCreat({ navigation }) {

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


            <View style={style.containerLoginTxtSection} width={windowWidth / 1.1} height={windowHeight / 1.4}>
                <Text style={style.TxtTitleLog}>
                    Sign Up
                </Text>

                <Text style={style.TxtTitle2Body}>
                    Create Your Account Here....
                </Text>

                <TextInput placeholder='Name' style={style.TxtInput} />
                <TextInput placeholder='Contact Number' style={style.TxtInput} />
                <TextInput placeholder='Email' style={style.TxtInput} />
                <TextInput placeholder='Username' style={style.TxtInput} />
                <TextInput placeholder='Password' style={style.TxtInput} />

                <View style={style.containerBtnSection}>

                    <TouchableOpacity
                        style={style.btn}
                        onPress={() => {
                            alert('Your account has been created successfully!');
                        }}
                    >
                        <Text style={style.btnTxt}>Sign Up</Text>
                    </TouchableOpacity>

                </View>

            </View>

            <View style={style.containerEnd}>
                <Text style={style.TxtTitleDont}>
                    Already have account?
                </Text>

                <TouchableOpacity
                    onPress={this.onPress}>
                    <Text style={style.TxtTitleSign} onPress={() => { navigation.navigate("WelcomePage") }}>Log in</Text>
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
        top: -120,
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
        borderColor: 'gray',
        bottom: -260,

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
        top: 55
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
        top: 30
    },
    TxtTitle2Body: {
        fontFamily: 'alignSelf',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        alignItems: 'center',
        left: 30,
        top: 30
    },
    TxtTitleForgotPass: {
        fontFamily: 'alignSelf',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        alignItems: 'center',
        right: -220,
        top: 30,
        textDecorationLine: 'underline'
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
        left: 222,
        bottom: 37,
        position: 'relative',
        textDecorationLine: 'underline'
    },
    containerEnd: {
        justifyContent: 'flex-end'
    }


}
)
