import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import FavoriteEmptyState from './FavoritesEmptyState';
import Colors from 'tuCrypto/src/res/colors';

class FavoriteScreen extends Component {
  render(){
    return (
      <View style={styles.container}>
        <FavoriteEmptyState />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1
  }
})

export default FavoriteScreen;