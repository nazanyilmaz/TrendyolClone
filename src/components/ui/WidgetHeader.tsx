import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import WidgetHeaderProps from '../../models/components/WidgetHeaderProps';
import {Colors} from '../../thema/Colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../../utils/route';

const WidgetHeader: React.FC<WidgetHeaderProps> = ({
  widgetTitle,
  seeAll,
  category,
}) => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, fontWeight: '500'}}>{widgetTitle}</Text>
      {seeAll && (
        <Pressable
          onPress={() =>
            navigation.navigate(PRODUCTLIST, {category: category})
          }>
          <Text style={{fontSize: 16, color: Colors.ORANGE}}>See All </Text>
        </Pressable>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
  },
});

//make this component available to the app
export default WidgetHeader;
