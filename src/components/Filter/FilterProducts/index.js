import React, { Component } from "react";
import { Dimensions, FlatList, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import products from "../../../data/products";
import MessageNotification from "../../common/MessageNotification"
import Fontisto from "react-native-vector-icons/Fontisto";
import styles from "./styles";
import * as NavigationService from "../../../NavigationService";

export default class FilterProducts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      windowDimensions: Dimensions.get("window"),
    };
  }

  componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener("change", this.handleResize);

    const {params} = this.props;
    const productsData = products.filter((item)=>item.category===parseInt(params.id));
    this.setState({
      products : productsData
    })
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
            <View style={styles.text_container}>
              <Text style={styles.text_style}>Arama Sonuçları</Text>
            </View>
          </View>
        )} style={styles.flatlist_area} showsVerticalScrollIndicator={false} bounces data={products}  numColumns={2}
                  columnWrapperStyle={{ justifyContent: "space-between" }} keyExtractor={(item, index) => index}
                  renderItem={({ item, index }) => (
                   <TouchableOpacity onPress={()=>NavigationService.navigate("ProductDetail",{item : item})}>
                     <ImageBackground resizeMode={"stretch"} imageStyle={styles.flatlist_item_style} style={styles.flatlist_item_area(position,width,height)} source={{ uri: item.image }}>
                       <View style={styles.flatlist_item_icon_area}>
                         <Fontisto name={"heart"} color={"white"} size={20}/>
                       </View>
                     </ImageBackground>
                   </TouchableOpacity>
                  )} />
      </View>
    );
  }
}
