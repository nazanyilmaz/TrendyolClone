import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import CustomInputProps from '../../models/components/CustomInputProps';
import {height} from '../../utils/contants';
import {Colors} from '../../thema/Colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  placeholderTextColor,
  showIcon = true,
  value,
  onChangeText,
  errorText,
  secureTextEntry = false,
}) => {
  return (
    <View>
      <View style={styles.container}>
        {showIcon && (
          <EvilIcons size={25} color={Colors.ORANGE} name="search" />
        )}
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      {errorText && (
        <Text
          style={{
            marginTop: -8,
            marginBottom: 5,
            marginHorizontal: 15,
            fontWeight: '200',
            fontSize: 12,
            color: 'red',
          }}>
          {errorText}
        </Text>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: height * 0.05,
    width: 330,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.GRAYINPUT,
    margin: 8,
    padding: 10,
    borderRadius: 10,
  },
  input: {
    margin: 5,
    padding: 5,
    height: 100,
    width: 250,
  },
});

//make this component available to the app
export default CustomInput;
