import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Colors} from '../../thema/Colors';

const Spinner: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={Colors.ORANGE} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default Spinner;
