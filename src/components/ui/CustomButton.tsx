import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {ButtonPropsTypes} from '../../models/components/Button';
import {Colors} from '../../thema/Colors';

const CustomButton: React.FC<ButtonPropsTypes> = props => {
  const {buttonType = 'outline', title, pending} = props;

  if (buttonType == 'outline')
    return (
      <TouchableOpacity {...props} style={styles.outlineContainer}>
        <Text style={styles.outlineTitle}> {title}</Text>
      </TouchableOpacity>
    );
  else if (buttonType == 'full')
    return (
      <TouchableOpacity style={styles.fullContainer} {...props}>
        {!pending && <Text style={styles.fullTitle}> {title}</Text>}
        {pending && <ActivityIndicator color={Colors.WHITE} />}
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  outlineContainer: {
    borderWidth: 1,
    borderColor: Colors.ORANGE,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  outlineTitle: {
    fontWeight: '500',
    fontSize: 16,
    color: Colors.ORANGE,
  },
  fullContainer: {
    backgroundColor: Colors.ORANGE,
    borderWidth: 1,
    borderColor: Colors.ORANGE,
    margin: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  fullTitle: {
    fontWeight: '600',
    fontSize: 18,
    color: 'white',
  },
});

export default CustomButton;
