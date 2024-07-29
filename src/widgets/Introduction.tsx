import React, {memo} from 'react';
import {View, FlatList} from 'react-native';
import {RouteType} from '../routes/RouteType';
import {widgetStyle} from '../styles/widgets/widgetStyles';
import Slides from '../data';
import FastImage from 'react-native-fast-image';
type Props = RouteType<'index'>;

const Introduction: React.FC<Props> = ({navigation, route}) => {
  return (
    <View style={widgetStyle.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Slides}
        renderItem={({item}) => (
          <View
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}>
            {item?.img && (
              <FastImage
                defaultSource={require('../assets/images/login.png')}
                source={item.img}
                style={{
                  width: 390,
                  height: 230,
                  margin: 10,
                  padding: 10,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            )}
          </View>
        )}
      />
    </View>
  );
};

export default memo(Introduction);
