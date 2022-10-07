import { View, Text, StyleSheet, SafeAreaView, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Svg, { Image } from 'react-native-svg'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { TextInput } from 'react-native-gesture-handler'



export default function DashBoard() {
    return (

        <SafeAreaView style={style.container}>
            <ImageBackground source={require('../LogInPage/pic/Dash.jpg')} style={style.imageBackground}>

                <View style={style.headercontainer}>

                    <Icon name='menu' style={style.iconmenu}></Icon>
                    <Icon name='account-circle' style={style.iconAccount}></Icon>

                </View>

                <View style={style.bodyContainer}>
                    <Text style={style.txtbody}>
                        Hello,
                    </Text>

                    <Text style={style.txtSubTitbody}>
                        Let's find a car for you..
                    </Text>

                    <View style={style.searchContainer}>
                        <Icon name='search-web' style={style.iconSearch}></Icon>
                        <TextInput style={style.txtInputSearch} placeholder='BMW'></TextInput>
                    </View>

                    <ScrollView style={style.scrollViewBody} horizontal showsHorizontalScrollIndicator={false}>

                        {/* <View style={style.scrollViewItemContainer}>

                            </View> */}

                        <TouchableOpacity style={style.scrollViewView}>

                            <Icon name="car" color="white" size={32} />
                            <Text>View</Text>


                        </TouchableOpacity>


                        <TouchableOpacity style={style.scrollViewView2}>
                            <Icon name="plus" color="white" size={32} />
                            <Text>Add</Text>
                        </TouchableOpacity>


                        <View style={style.scrollViewView3}>
                            <Icon name="book" color="white" size={32} />
                            <Text>BM</Text>
                        </View>

                        <View style={style.scrollViewView4}>
                            <Icon name="dots-horizontal" color="white" size={32} />
                            <Text>More</Text>

                        </View>


                    </ScrollView>


                    {/* ////////////////////////////////////////////////////////////////////////////// */}
                    <View style={style.containerFortitleRecommended}>
                        <Text style={style.txtRecommended}>
                            Recommended
                        </Text>

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{ marginHorizontal: 2, marginTop: 14 }}>
                            <View style={style.ScrollView1}>

                                <ImageBackground source={require('../LogInPage/pic/BMW.jpg')} style={{ width: 180, borderRadius: 10, height: 130 }}>
                                    <View style={style.ScrollViewView1}>
                                        <View style={style.ScrollViewView1TxtContainer}>
                                            <Text style={style.ScrollViewView1Txt}>
                                                BMW
                                            </Text>
                                        </View>
                                        <Icon name="car" size={25} color="#ff5c83" />
                                    </View>
                                </ImageBackground>



                            </View>

                            <View style={style.ScrollView2}>
                                <ImageBackground
                                    source={require("../LogInPage/pic/Benz.png")}
                                    style={{ width: 180, borderRadius: 10, height: 130 }}>
                                    <View style={style.ScrollViewView1}>
                                        <View style={style.ScrollViewView1TxtContainer}>
                                            <Text style={style.ScrollViewView1Txt}>
                                                Benz
                                            </Text>
                                        </View>
                                        <Icon name="car" size={25} color="#5facdb" />
                                    </View>
                                </ImageBackground>


                            </View>

                            <View style={style.ScrollView3}>
                                <ImageBackground source={require("../LogInPage/pic/audi1.jpg")}
                                    style={{ width: 180, borderRadius: 10, height: 130 }} >
                                    <View style={style.ScrollViewView1}>
                                        <View style={style.ScrollViewView1TxtContainer}>
                                            <Text style={style.ScrollViewView1Txt}>
                                                Audi
                                            </Text>
                                        </View>
                                        <Icon name="car" size={25} color="#bb32fe" />
                                    </View>
                                </ImageBackground>


                            </View>
                        </ScrollView>

                    </View>





                </View>

            </ImageBackground>

        </SafeAreaView>

    )
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'aliceblue',
        padding: '0%'
    },
    imageBackground: {
        width: '100%',
        height: '100%'
    },
    headercontainer: {
        flexDirection: 'row',
        marginTop: 40,
        alignItems: 'center',
        paddingHorizontal: 40,

    },
    iconmenu: {
        fontSize: 30,
        color: '#a2a2db'
    },
    iconAccount: {
        fontSize: 33,
        color: '#a2a2db',
        marginLeft: 230
    },
    bodyContainer: {
        paddingHorizontal: 40,
        marginTop: 25
    },
    txtbody: {
        fontSize: 45,
        color: '#ffd700',
        fontFamily: 'RobotoBold'
    },
    txtSubTitbody: {
        fontSize: 18,
        paddingVertical: 10,
        paddingRight: 80,
        lineHeight: 22,
        fontFamily: 'RobotoBold',
        color: 'white'
    },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba( 220, 220, 220, 0.6)',
        borderRadius: 30,
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 20,
        marginTop: 30
    },
    iconSearch: {
        fontSize: 18
    },
    txtInputSearch: {
        paddingHorizontal: 20,
        //paddingVertical:10,
        fontSize: 15,
        color: 'White',
        //backgroundColor:'white',
        //height:20,
        width: '80%',
        //height:'10%',

    },
    scrollViewBody: {
        marginRight: -40,
        marginTop: 30,
    },
    scrollViewView: {
        alignItems: "center",
        justifyContent: "center",
        height: 66,
        width: 66,
        borderRadius: 50,
        backgroundColor: "#5facdb",
    },
    scrollViewView2: {
        alignItems: "center",
        justifyContent: "center",
        height: 66,
        width: 66,
        borderRadius: 50,
        backgroundColor: "#ff5c83",
        marginHorizontal: 22,
    },
    scrollViewView3: {
        alignItems: "center",
        justifyContent: "center",
        height: 66,
        width: 66,
        borderRadius: 50,
        backgroundColor: "#ffa06c",
    },
    scrollViewView4: {
        alignItems: "center",
        justifyContent: "center",
        height: 66,
        width: 66,
        borderRadius: 50,
        backgroundColor: "#bb32fe",
        marginLeft: 22,
    },
    scrollViewViewImg: {
        height: 24,
        width: 24,
        fontSize: 26

    },
    containerFortitleRecommended: {
        backgroundColor: 'rgba( 169, 169, 169, 0.5 )',
        width: '120%',
        height: '40%',
        top: 2,
        borderRadius: 20,
        left: -30


    },
    ScrollView1: {
        backgroundColor: "#FEFEFE",
        height: 160,
        width: 190,
        borderRadius: 15,
        padding: 5,
        marginRight: -15
    },
    ScrollView2: {
        backgroundColor: "#FEFEFE",
        height: 160,
        width: 190,
        borderRadius: 15,
        padding: 5,
        marginHorizontal: 20,
        marginRight: 5
    },
    ScrollView3: {
        backgroundColor: "#FEFEFE",
        height: 160,
        width: 190,
        borderRadius: 15,
        padding: 5,
        marginRight: 5
    },
    ScrollViewView1: {
        flexDirection: "row",
        width: 150,
        alignItems: "center",
    },
    ScrollViewView1TxtContainer: {
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    ScrollViewView1Txt: {
        fontFamily: "RobotoRegular",
        fontSize: 20,
        color: "#9400d3",
        fontWeight: '600'
    },
    txtRecommended: {
        color: "#ffff",
        fontFamily: "RobotoRegular",
        marginTop: 10,
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold'
    }

})