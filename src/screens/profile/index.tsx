import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListEmptyComponent from '../../components/ui/ListEmptyComponent';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../thema/Colors';
import {LOGIN} from '../../utils/route';
import CustomButton from '../../components/ui/CustomButton';
import {height, width} from '../../utils/contants';
import {logOut} from '../../store/slices/AuthSlice';
import {useNavigation} from '@react-navigation/native';
import {getUserInfo} from '../../store/actions/AuthActions';

const Profile: React.FC = () => {
  const navigation = useNavigation();
  const {isLogin, userInfo} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin) dispatch(getUserInfo({userId: '1'}));
  }, [isLogin]);

  return (
    <View style={styles.container}>
      {isLogin ? (
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                margin: 10,
                width: 70,
                height: 70,
                backgroundColor: Colors.ORANGE,
                borderRadius: 99,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  padding: 10,
                  color: Colors.WHITE,
                  fontSize: 35,
                  fontWeight: '500',
                }}>
                JD
              </Text>
            </View>
            <View style={{marginRight: 80}}>
              <Text style={{fontSize: 25, fontWeight: '400'}}>
                {userInfo?.name?.firstname} {userInfo?.name?.lastname}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '300',
                  color: Colors.GRAYTEXT,
                }}>
                {userInfo?.email}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                height: 40,
                marginRight: 5,
              }}>
              <CustomButton
                buttonType="full"
                title="Log Out"
                onPress={() => dispatch(logOut())}
              />
            </View>
          </View>

          <View
            style={{
              borderRadius: 5,
              backgroundColor: Colors.WHITE,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              margin: 15,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,

              elevation: 2,
            }}>
            <View
              style={{
                alignItems: 'center',
                margin: 10,
                padding: 5,
                paddingHorizontal: 20,
                borderRadius: 5,
                borderRightWidth: 0.5,
                borderRightColor: Colors.GRAYTEXT,
              }}>
              <AntDesign size={20} color={Colors.ORANGE} name={'clockcircle'} />
              <Text style={{marginTop: 3}}>Orders</Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                margin: 8,
                paddingHorizontal: 20,
                padding: 5,
                borderRadius: 5,
                borderRightWidth: 0.5,
                borderRightColor: Colors.GRAYTEXT,
              }}>
              <Foundation size={30} color={Colors.ORANGE} name={'burst-sale'} />
              <Text>Save</Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                margin: 8,
                padding: 3,
                paddingHorizontal: 20,
                borderRadius: 5,
                borderRightWidth: 0.5,
                borderRightColor: Colors.GRAYTEXT,
              }}>
              <Ionicons size={20} color={Colors.ORANGE} name={'pricetag'} />
              <Text>Coupons</Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                margin: 8,
                padding: 3,
              }}>
              <Entypo size={20} color={Colors.ORANGE} name={'ccw'} />
              <Text style={{textAlign: 'left', marginTop: 3}}>Buy Again</Text>
            </View>
          </View>
          <View
            style={{
              margin: 10,
              padding: 5,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Colors.WHITE,
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,

              elevation: 2,
            }}>
            <Text
              style={{
                marginEnd: 60,
                fontSize: 15,
                fontWeight: '600',
                color: Colors.BLACK,
              }}>
              Special offer for you!{' '}
            </Text>
            <CustomButton title="More Information" buttonType="full" />
          </View>
          <View>
            <Image
              source={require('../../assets/images/intro.png')}
              style={{
                width: 390,
                height: 100,
                margin: 10,
                padding: 10,
                resizeMode: 'cover',
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: Colors.WHITE,
              borderRadius: 5,

              justifyContent: 'space-between',
              margin: 10,
              padding: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 25,
              }}>
              <Text
                style={{fontSize: 15, fontWeight: '600', color: Colors.BLACK}}>
                Account Settings
              </Text>
              <Text style={{color: Colors.ORANGE, fontWeight: 500}}>
                See All
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 15, fontWeight: '500'}}>
                Login & Security
              </Text>
              <AntDesign size={20} color={Colors.ORANGE} name={'rightcircle'} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 15, fontWeight: '500'}}>
                Switch Accounts
              </Text>
              <AntDesign size={20} color={Colors.ORANGE} name={'rightcircle'} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 15, fontWeight: '500'}}>
                Your Informations
              </Text>
              <AntDesign size={20} color={Colors.ORANGE} name={'rightcircle'} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 15, fontWeight: '500'}}>
                Your Trendyol Day
              </Text>
              <AntDesign size={20} color={Colors.ORANGE} name={'rightcircle'} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 15, fontWeight: '500'}}>
                Service Request
              </Text>
              <AntDesign size={20} color={Colors.ORANGE} name={'rightcircle'} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 15, fontWeight: '500'}}>Contact Us</Text>
              <AntDesign size={20} color={Colors.ORANGE} name={'rightcircle'} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 15, fontWeight: '500'}}>Devices</Text>
              <AntDesign size={20} color={Colors.ORANGE} name={'rightcircle'} />
            </View>
          </View>
        </ScrollView>
      ) : (
        <ListEmptyComponent
          onPress={() => navigation.navigate(LOGIN)}
          btnTitle="Sign In"
          icon={
            <SimpleLineIcons
              size={50}
              color={Colors.ORANGE}
              name={'emotsmile'}
            />
          }
          title="My Account"
          description="Please login to continue!"
        />
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default Profile;
