import { View, Text, SafeAreaView, StyleSheet, Dimensions, ScrollView, TextInput } from 'react-native'
import React from 'react'

export default function AddCarDetails() {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (

    <SafeAreaView style={style.MainContainer}>
      <View style={style.HeaderContainer}>
        <Text style={style.hedingTitle}>ADD NEW CAR</Text>
      </View>

      <View style={style.bodytitleContainer}>
        <Text style={style.bodytitle}>
          Add Car Details
        </Text>
        <Text style={style.bodytitle2}>
          Enter your car details here
        </Text>
      </View>

      {/* <View style={style.bodyContainer}> */}
      <ScrollView style={style.bodyContainer}>
        <View style={style.InputDetailsContainer}>
          <Text style={style.InputTit}>Location</Text>
          <Text style={style.InputTitDec}>where are you selling this item?</Text>
          <TextInput style={style.TextInput}></TextInput>
        </View>

        <View style={style.InputDetailsContainer1}>
          <Text style={style.InputTit}>Condition </Text>
          <Text style={style.InputTitDec}>what is the condition of your car?</Text>
          <TextInput style={style.TextInput}></TextInput>
        </View>

        <View style={style.InputDetailsContainer1}>
          <Text style={style.InputTit}>Model</Text>
          <Text style={style.InputTitDec}>type the model of your car</Text>
          <TextInput style={style.TextInput}></TextInput>
        </View>

        <View style={style.InputDetailsContainer1}>
          <Text style={style.InputTit}>Model</Text>
          <Text style={style.InputTitDec}>type the model of your car</Text>
          <TextInput style={style.TextInput}></TextInput>
        </View>

        <View style={style.InputDetailsContainer1}>
          <Text style={style.InputTit}>Year of Manufacture</Text>
          <Text style={style.InputTitDec}>When was your car manufactured?</Text>
          <TextInput style={style.TextInput}></TextInput>
        </View>

        <View style={style.InputDetailsContainer1}>
          <Text style={style.InputTit}>Mileage</Text>
          <Text style={style.InputTitDec}>What is the mileage of your car?</Text>
          <TextInput style={style.TextInput}></TextInput>
        </View>

        <View style={style.InputDetailsContainer1}>
          <Text style={style.InputTit}>Engine capacity</Text>
          <Text style={style.InputTitDec}>What is the engine capacity of your car?</Text>
          <TextInput style={style.TextInput}></TextInput>
        </View>

        <View style={style.InputDetailsContainer1}>
          <Text style={style.InputTit}>Fuel type</Text>
          <Text style={style.InputTitDec}>What is the fuel type of your car?</Text>
          <TextInput style={style.TextInput}></TextInput>
        </View>

        <View style={style.InputDetailsContainer1}>
          <Text style={style.InputTit}>Fuel type</Text>
          <Text style={style.InputTitDec}>What is the fuel type of your car?</Text>
          <TextInput style={style.TextInput}></TextInput>
        </View>

        <View style={style.InputDetailsContainer1}>
          <Text style={style.InputTit}>Transmission</Text>
          <Text style={style.InputTitDec}>What is the Transmission type of your car?</Text>
          <TextInput style={style.TextInput}></TextInput>
        </View>

        <View style={style.InputDetailsContainer1}>
          <Text style={style.InputTit}>Body type</Text>
          <Text style={style.InputTitDec}>What is the Body type of your car?</Text>
          <TextInput style={style.TextInput}></TextInput>
        </View>

        <View style={style.InputDetailsContainer1}>
          <Text style={style.InputTit}>Description</Text>
          <Text style={style.InputTitDec}>Describe the main features of your car</Text>
          <TextInput style={style.TextInput}></TextInput>
        </View>

        <View style={style.InputDetailsContainer1}>
          <Text style={style.InputTit}>Price</Text>
          <Text style={style.InputTitDec}>How much do you want to sell your car for?</Text>
          <TextInput style={style.TextInput}></TextInput>
        </View>

        <View style={style.InputDetailsContainer1}>
          <Text style={style.InputTit}>Add photos(up to 3)</Text>
          <Text style={style.InputTitDec}>Upload pictures of your cars</Text>
          <TextInput style={style.TextInput}></TextInput>
        </View>



      </ScrollView>

      {/* </View> */}
    </SafeAreaView>


  )
}

const style = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#ffd700',
    padding: 8,
    paddingBottom: 0

  },
  HeaderContainer: {
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    marginTop: '2%',
    backgroundColor: 'rgba(169, 169, 169, 0.4)',
    borderRadius: 10,
    justifyContent: 'space-between',
    position: 'relative'
  },
  hedingTitle: {
    color: 'black',
    top: '30%',
    position: 'absolute',
    fontSize: 20,
    fontWeight: '800',
    left: 19,


  },
  bodyContainer: {
    width: '100%',
    marginTop: '4%',
    backgroundColor: 'rgba(248, 248, 255, 1)',
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100


    //marginHorizontal:,

  },
  bodytitleContainer: {
    width: '100%',
    height: '7%',
    flexDirection: 'row',
    marginTop: '4%',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(169, 169, 169, 0.9)',
    borderRadius: 10,


  },
  bodytitle: {
    color: 'black',
    top: '18%',
    position: 'absolute',
    fontSize: 18,
    fontWeight: '900',
    left: 19,
  },
  bodytitle2: {
    color: 'black',
    top: '55%',
    position: 'absolute',
    fontSize: 13,
    fontWeight: '500',
    left: 19,
  },
  InputDetailsContainer: {
    width: '95%',
    height: 100,
    marginTop: '20%',
    marginBottom: '1%',
    backgroundColor: 'rgba(169, 169, 169, 0.2)',
    borderRadius: 20,
    position: 'relative',
    marginHorizontal: 9,
  },
  InputTit: {
    color: 'black',
    top: '5%',
    position: 'absolute',
    fontSize: 20,
    fontWeight: '500',
    left: 19,
  },
  InputTitDec: {
    color: 'black',
    top: '24%',
    position: 'absolute',
    fontSize: 12,
    fontWeight: '400',
    left: 19,
  },
  TextInput: {
    height: 40,
    borderColor: '#ffff',
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 14,
    borderRadius: 10,
    paddingLeft: 10,
    top: 30
  },
  InputDetailsContainer1: {
    width: '95%',
    height: 100,
    marginTop: '0%',
    marginBottom: '1%',
    backgroundColor: 'rgba(169, 169, 169, 0.2)',
    borderRadius: 20,
    position: 'relative',
    marginHorizontal: 9,
  }
})

