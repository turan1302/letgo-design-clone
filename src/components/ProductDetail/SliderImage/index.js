import React, { Component } from 'react'
import { Image, Text, View } from "react-native";
import styles from "./styles";

export default class SliderImage extends Component {
  render() {
    const {item,position,width,height}=this.props;

    return (
      <Image style={styles.image_style(position,width,height)} source={item}/>
    )
  }
}
