import React, { Component } from "react";
import {View } from "react-native";
import MainProducts from "../../components/Home/MainProducts";
import styles from "./styles";
import products from "../../data/products";

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={styles.container}>
        <MainProducts />
      </View>
    );
  }
}
