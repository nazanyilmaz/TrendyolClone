import React, {memo} from 'react';
import {View, FlatList} from 'react-native';
import WidgetHeader from '../components/ui/WidgetHeader';
import {widgetStyle} from '../styles/widgets/widgetStyles';
import {WidgetProps} from '../models/widgets/widgetsProps';
import {useSelector} from 'react-redux';
import ProductItem from '../components/products/ProductItem';

const NewArrival: React.FC<WidgetProps> = ({item}) => {
  const {newArrival} = useSelector(state => state.products);
  return (
    <View style={widgetStyle.container}>
      <WidgetHeader
        widgetTitle={item?.title}
        seeAll={true}
        category={"women's clothing"}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={newArrival}
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

export default memo(NewArrival);
