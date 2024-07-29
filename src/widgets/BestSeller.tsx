import React, {memo} from 'react';
import {View, Text, FlatList} from 'react-native';
import WidgetHeader from '../components/ui/WidgetHeader';
import {widgetStyle} from '../styles/widgets/widgetStyles';
import {WidgetProps} from '../models/widgets/widgetsProps';
import {useSelector} from 'react-redux';
import ProductItem from '../components/products/ProductItem';

const BestSeller: React.FC<WidgetProps> = ({item}) => {
  const {bestSeller} = useSelector(state => state.products);
  return (
    <View style={widgetStyle.container}>
      <WidgetHeader
        widgetTitle={item?.title}
        seeAll={true}
        category={"men's clothing"}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={bestSeller}
        renderItem={({item}) => (
          <ProductItem
            item={item}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

export default memo(BestSeller);
