import React, {useContext} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import LogContext from '../contexts/LogContext';

function FeedsScreen() {
  const {text, setText} = useContext(LogContext);
  return (
    <View style={styles.block}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Enter textInput"
        style={styles.input}
      />
    </View>
  );
  // const value = useContext(LogContext);
  // return (
  //   <View style={styles.block}>
  //     <Text>{value}</Text>
  //   </View>
  //   //Hook 없던시절 스타일
  //   // <View style={styles.block}>
  //   //   <Box>{value => <Text>{value}</Text>}</Box>
  //   // </View>
  // );
}

const styles = StyleSheet.create({
  input: {
    padding: 16,
    backgroundColor: 'white',
  },
});

//Hook 없던시절 스타일
// function Box({children}) {
//   return <View style={styles.box}>{children('hello world')}</View>;
// }

export default FeedsScreen;
