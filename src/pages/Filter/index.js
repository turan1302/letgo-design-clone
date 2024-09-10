import React, { Component } from 'react'
import {View} from 'react-native'
import FilterProducts from "../../components/Filter/FilterProducts";
import styles from "./styles";
import FilterProperties from "../../components/Filter/FilterProperties";

export default class Filter extends Component {

  render() {
    const {params} = this.props.route;

    return (
      <View style={styles.container}>
        <FilterProperties params={params}/>
        <FilterProducts params={params} />
      </View>
    )
  }
}
