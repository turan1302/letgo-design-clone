import React, { Component } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as NavigationService from "../../../NavigationService";

import categories from "../../../data/categories";
import styles from "./styles";

export default class CategoryFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: categories,
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

  render() {
    const { width, height } = this.state.windowDimensions;
    const position = width > height ? "LANDSCAPE" : "PORTRAIT";
    const { categories } = this.state;

    return (
      <View style={styles.container(position,width,height)}>
        <ScrollView horizontal bounces showsHorizontalScrollIndicator={false}>
          {categories.map((item, index) => (
           <TouchableOpacity onPress={()=>NavigationService.navigate("Filter",{
             id : item.id,
             name : item.name,
             image : item.src
           })} key={index} style={styles.image_area}>
               <Image style={styles.image} source={item.src} />
               <Text style={styles.text}>{item.name}</Text>
           </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}
