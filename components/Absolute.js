import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flex: 1,
          borderWidth: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
          <View style={{width: 30, height: 30, backgroundColor: 'powderblue', position: 'absolute', left: 30, top: 30, zIndex: 2}} />
          <View style={{width: 30, height: 30, backgroundColor: 'skyblue', position: 'absolute', left: 50, top: 50, zIndex: 2}} />
          <View style={{width: 30, height: 30, backgroundColor: 'steelblue', position: 'absolute', left: 70, top: 70, zIndex: 3}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});