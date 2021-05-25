import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import Colors from 'tuCrypto/src/res/colors';

const CoinsItem = ({ item }) => {
  
  getImgArrow = () => {
    if(item.percent_change_1h > 0){
      return require("tuCrypto/src/assets/arrow_up.png");
    }else{
      return require("tuCrypto/src/assets/arrow_down.png");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.symbolText}>{item.symbol}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.percentText}>{item.percent_change_1h}</Text>
        <Image
          style={styles.imgIcon}
          source={getImgArrow()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
    marginLeft: 12,
    marginRight: 12
  },
  row: {
    flexDirection: "row"
  },
  symbolText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 12
  },
  nameText: {
    color: "#FFF",
    fontSize: 14,
    marginRight: 12
  },
  priceText: {
    color: "#FFF",
    fontSize: 14
  },
  percentText: {
    color: "#FFF",
    fontSize: 12,
    marginRight: 8
  },
  imgIcon: {
    width: 22,
    height: 22
  }
});

export default CoinsItem;