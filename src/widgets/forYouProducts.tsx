import React, {memo} from 'react';
import {View, FlatList} from 'react-native';
import {widgetStyle} from '../styles/widgets/widgetStyles';
import WidgetHeader from '../components/ui/WidgetHeader';
import {WidgetProps} from '../models/widgets/widgetsProps';
import {useSelector} from 'react-redux';
import ProductItem from '../components/products/ProductItem';

const ForYouProducts: React.FC<WidgetProps> = ({item}) => {
  const {products} = useSelector(state => state.products);
  const {selectedCategory} = useSelector(state => state.categories);
  return (
    <View style={widgetStyle.container}>
      <WidgetHeader
        widgetTitle={item?.title}
        seeAll
        category={selectedCategory}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={products}
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

export default memo(ForYouProducts);
