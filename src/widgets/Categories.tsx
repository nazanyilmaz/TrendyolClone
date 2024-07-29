import React, {memo} from 'react';
import {View, FlatList} from 'react-native';
import WidgetItems from '../components/home/WidgetItems';
import {widgetStyle} from '../styles/widgets/widgetStyles';
import {useSelector} from 'react-redux';

const Categories: React.FC = () => {
  const {categories} = useSelector(state => state.categories);
  return (
    <View style={widgetStyle.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({item}) => <WidgetItems title={item} />}
      />
    </View>
  );
};

export default memo(Categories);
