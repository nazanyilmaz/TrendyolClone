import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../thema/Colors';
import {ListEmptyComponentProps} from '../../models/components/ListEmptyComponent';
import {height} from '../../utils/contants';
import CustomButton from './CustomButton';

const ListEmptyComponent: React.FC<ListEmptyComponentProps> = ({
  icon,
  title,
  description,
  onPress,
  btnTitle,
}) => {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', flex: 9}}>
        <View
          style={{
            backgroundColor: Colors.WHITE,
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            height: 100,
            borderRadius: 100,
            marginBottom: 25,
            marginHorizontal: 150,
            shadowColor: Colors.ORANGE,
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,

            elevation: 7,
          }}>
          {icon}
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: Colors.BLACK,
            fontWeight: '700',
          }}>
          {' '}
          {title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: Colors.GRAYTEXT,
            marginVertical: 8,
          }}>
          {description}
        </Text>
      </View>
      <View style={{flex: 1, marginHorizontal: 15}}>
        <CustomButton title={btnTitle} buttonType="full" onPress={onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height - 250,
  },
});

export default ListEmptyComponent;
