import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from "./AppNavigator";
import { navigationRef } from "../../src/NavigationService";
import ProductDetail from "../pages/ProductDetail";

const Stack = createNativeStackNavigator();


export default class Routes extends Component {

  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName={"Welcome"} screenOptions={({route,navigation})=>{
          return {
            headerShown : false
          }
        }}>
          <Stack.Screen name={"Welcome"} component={AppNavigator}/>
          <Stack.Screen name={"ProductDetail"} component={ProductDetail}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
