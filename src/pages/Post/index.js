import React, { Component } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import products from "../../data/products";
import Ionicons from "react-native-vector-icons/Ionicons";
import PostItem from "../../components/Post/PostItem";
import PostHeader from "../../components/Post/PostHeader";
import styles from "./styles";

export default class Post extends Component {

  constructor(props) {
    super(props);

    this.state = {
      productData: products,
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

    const { productData } = this.state;

    return (
      <View style={styles.container}>
        <FlatList stickyHeaderIndices={[0]} ListHeaderComponent={() => (
         <PostHeader/>
        )} showsVerticalScrollIndicator={false} data={productData} keyExtractor={(item, index) => index}
                  renderItem={({ item, index }) => (
                    <PostItem item={item} position={position} width={width} height={height} />
                  )} />
      </View>
    );
  }
}
