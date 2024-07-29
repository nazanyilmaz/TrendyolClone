import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Colors} from '../../thema/Colors';
import {CategoriesPropsTypes} from '../../models/home/categoriesProps';
import {useDispatch, useSelector} from 'react-redux';
import {changeCategory} from '../../store/slices/CategoriesSlice';

const WidgetItems: React.FC<CategoriesPropsTypes> = ({title}) => {
  const dispatch = useDispatch();
  const {selectedCategory} = useSelector(state => state.categories);
  return (
    <Pressable
      onPress={() => dispatch(changeCategory(title))}
      style={
        selectedCategory == title ? styles.selectedCategory : styles.container
      }>
      <Text style={selectedCategory == title && styles.selectedTitle}>
        {title}
      </Text>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: 135,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    margin: 5,
    paddingVertical: 6,
    borderRadius: 100,
    borderColor: Colors.GRAYINPUT,
    backgroundColor: Colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  selectedCategory: {
    width: 135,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    margin: 5,
    paddingVertical: 6,
    borderRadius: 100,
    borderColor: Colors.ORANGE,
    backgroundColor: Colors.ORANGE,
  },
  selectedTitle: {
    color: Colors.WHITE,
    fontSize: 16,
  },
});

//make this component available to the app
export default WidgetItems;
