import React, { Component } from "react";
import { Dimensions, FlatList, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import products from "../../../data/products";
import FavouriteProducts from "../FavouriteProducts";
import CategoryFilter from "../CategoryFilter";
import MessageNotification from "../../common/MessageNotification"
import Fontisto from "react-native-vector-icons/Fontisto";
import * as NavigationService from "../../../NavigationService";
import styles from "./styles";

export default class MainProducts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: products,
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

    const { products } = this.state;

    return (
      <View>

        <FlatList ListHeaderComponent={() => (
          <View>
            <MessageNotification />
            <CategoryFilter />
            <FavouriteProducts />
            <View style={styles.list_title_area}>
              <Text style={styles.list_title}>Karatay</Text>
              <TouchableOpacity>
                <View style={styles.list_button_text_area}>
                  <Text style={styles.button_text}>Düzelt</Text>
                  <Feather name={"chevron-right"} style={{ marginRight: -10 }} size={25} color={"#f24e61"} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )} style={styles.flatlist_area} showsVerticalScrollIndicator={false} bounces data={products}  numColumns={2}
                  columnWrapperStyle={styles.flatlist_column_wrapper} keyExtractor={(item, index) => index}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={()=>NavigationService.navigate("ProductDetail",{
                      item : item
                    })}>
                      <ImageBackground resizeMode={"cover"} imageStyle={styles.item_image_style} style={styles.item_image(position,width)} source={item.image}>
                        <View style={styles.item_icon_area}>
                          <Fontisto name={"heart"} color={"white"} size={20}/>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  )} />
      </View>
    );
  }
}
