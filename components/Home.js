import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
            title="Column Layout"
            onPress={() => {
                this.props.navigation.navigate('Column');
            }}
        />
        <Button
            title="Row Layout"
            onPress={() => {
                this.props.navigation.navigate('Row');
            }}
        />
        <Button
            title="Absolute Layout"
            onPress={() => {
                this.props.navigation.navigate('Absolute');
            }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
