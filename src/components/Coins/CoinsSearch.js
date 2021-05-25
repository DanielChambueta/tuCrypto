import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Colors from 'tuCrypto/src/res/colors';

class CoinsSearch extends Component {

  state = {
    query: ""
  }

  handleText = (query) => {
    this.setState({ query });
    if (this.props.onChange) {
      this.props.onChange(query);
    }
  }

  render() {
    const { query } = this.state;

    return (
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={this.handleText}
          value={query}
          placeholder="Search coin"
          placeholderTextColor="#FFF"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    paddingLeft: 16,
    color: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: Colors.zircon
  }
});

export default CoinsSearch;
