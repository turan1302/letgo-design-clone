import React, { Component } from "react";
import { Dimensions, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Filter from "../pages/Filter";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

const Stack = createNativeStackNavigator();

export default class HomeNavigator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      windowDimensions: Dimensions.get("window"),
    };
  }

  componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener("change", this.handleResize);
  }

  componentWillUnmount() {
    if (this.dimensionsSubscription) {
      this.dimensionsSubscription.remove();
    }
  }

  handleResize = ({ window }) => {
    this.setState({ windowDimensions: window });
  };

  _homeHeader = ()=>{
    const { width, height } = this.state.windowDimensions;
    const position = width > height ? "LANDSCAPE" : "PORTRAIT";

    return (
      <View style={{
        backgroundColor: "white",
        paddingHorizontal: 15,
        height: (position === "PORTRAIT") ? width * 0.14 : height * 0.14,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation : 2
      }}>
        <Image style={{width: 35, height: 35, borderRadius: 25 }} source={{uri : "https://mfsoftware.net/storage/user/muhammed-fatih-bagcivan.jpg"}} />
        <TextInput style={{
          backgroundColor: "#e3e3e3",
          height: 40,
          flex : 1,
          marginHorizontal: 20,
          borderRadius: 10,
          justifyContent: "center",
          alignItems : "center",
          textAlign: "center",
        }} placeholder={"Ara..."}>
        </TextInput>
        <Text style={{ color: "#f24e61", fontSize: 18 }}>Filtrele</Text>
      </View>
    )
  }

  _filterHeader = ()=>{
    const { width, height } = this.state.windowDimensions;
    const position = width > height ? "LANDSCAPE" : "PORTRAIT";

    const {navigation} = this.props;

    return (
      <View style={{
        backgroundColor: "white",
        paddingHorizontal: 15,
        height: (position === "PORTRAIT") ? width * 0.14 : height * 0.14,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation : 2
      }}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <FontAwesome6 name={"arrow-left"} color={"gray"} size={25}/>
        </TouchableOpacity>
        <TextInput style={{
          backgroundColor: "#e3e3e3",
          height: 40,
          flex : 1,
          marginHorizontal: 20,
          borderRadius: 10,
          justifyContent: "center",
          alignItems : "center",
          textAlign: "center",
        }} placeholder={"Ara..."}>
        </TextInput>
        <Text style={{ color: "#f24e61", fontSize: 18 }}>Filtrele (1)</Text>
      </View>
    )
  }

  render() {
    return (
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name={"Home"} options={{
          header: this._homeHeader,
        }} component={Home} />

        <Stack.Screen name={"Filter"} options={{
          header: this._filterHeader
        }} component={Filter} />
      </Stack.Navigator>
    );
  }
}
