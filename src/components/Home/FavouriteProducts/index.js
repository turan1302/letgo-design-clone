import React, { Component } from 'react'
import { Dimensions, FlatList, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import products from "../../../data/products";
import Fontisto from "react-native-vector-icons/Fontisto";
import styles from "./styles";
import * as NavigationService from "../../../NavigationService";

export default class FavouriteProducts extends Component {
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

  _renderItem = ({item,index})=>{
    const { width, height } = this.state.windowDimensions;
    const position = width > height ? "LANDSCAPE" : "PORTRAIT";
    const {products} = this.state;

    return (
      <TouchableOpacity onPress={()=>NavigationService.navigate("ProductDetail",{
        item : item
      })}>
        <ImageBackground imageStyle={{borderRadius : 10}} resizeMode={"cover"} style={styles.flatlist_item_area(position,width,height,products,index)} source={item.image}>
          <View style={styles.right_area}>
            <Text style={styles.right_text}>Öne Çıkan</Text>
            <Fontisto name={"heart"} color={"white"} size={20}/>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )
  }


  render() {
    const {products} = this.state;

    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.container_left_title}>Vitrin İlanları</Text>
         <TouchableOpacity>
           <View style={styles.container_right_area}>
             <Text style={styles.container_right_text}>Hepsini gör</Text>
             <Feather name={"chevron-right"} size={25} color={"#f24e61"} />
           </View>
         </TouchableOpacity>
        </View>
        <FlatList showsHorizontalScrollIndicator={false} style={styles.flatlist_area} horizontal bounces data={products} keyExtractor={(item,index)=>index} renderItem={this._renderItem}/>
      </View>
    )
  }
}
