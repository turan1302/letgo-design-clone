import React, { Component } from "react";
import { Text, View } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./styles";

export default class Description extends Component {
  render() {
    const { item } = this.props;

    return (
      <View>
        <View style={styles.price_area}>
          <Text style={styles.price_text}>₺{item.price.toFixed(2)}</Text>
          <View style={styles.views_area}>
            <Fontisto name={"heart"} color={"gray"} size={20} />
          </View>
        </View>
        <View>
          <Text style={styles.product_name}>{item.name}</Text>
        </View>
        <View style={styles.post_descriptions_area}>
          <View style={styles.post_date_area}>
            <MaterialIcons name={"local-fire-department"} size={20} color={"#ff3e55"} />
            <Text style={styles.post_time}>58 dk.</Text>
          </View>
          <View style={styles.post_views_area}>
            <AntDesign name={"eye"} color={"#9e9e9e"} size={20} />
            <Text style={styles.post_view}>14</Text>
          </View>
        </View>
        <View style={styles.product_description_area}>
          <Text style={styles.product_description}>{item.description}</Text>
        </View>
      </View>
    );
  }
}
