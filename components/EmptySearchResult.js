import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const messages = {
  NOT_FOUND: 'Not Found',
  EMPTY_KEYWORD: 'Empty Keyword',
};

function EmptySearchResult({type}) {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>{messages[type]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#9e9e9e',
    fontSize: 16,
  },
});

export default EmptySearchResult;
