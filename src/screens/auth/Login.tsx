import React, {useEffect} from 'react';
import {Formik} from 'formik';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Pressable,
} from 'react-native';
import {Colors} from '../../thema/Colors';
import {height, width} from '../../utils/contants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../components/ui/CustomInput';
import CustomButton from '../../components/ui/CustomButton';
import {loginSchema} from '../../utils/validationSchema';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../store/actions/AuthActions';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {isLogin, pending} = useSelector(state => state.auth);
  useEffect(() => {
    if (isLogin) navigation.goBack();
  }, [isLogin]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={{flex: 1, backgroundColor: Colors.ORANGE}}>
        <View
          style={{
            position: 'absolute',
            top: 150,
            zIndex: 99,
            right: 8,
            width: 40,
            height: 40,
          }}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.ORANGE,
              padding: 5,
              borderRadius: 100,
              shadowColor: Colors.WHITE,
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.29,
              shadowRadius: 4.65,

              elevation: 7,
            }}>
            <Ionicons name={'close-sharp'} color={Colors.WHITE} size={25} />
          </Pressable>
        </View>
        <Image
          source={require('../../assets/images/login.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Formik
        initialValues={{username: 'johnd', password: 'm38rmF$'}}
        validationSchema={loginSchema}
        onSubmit={values => dispatch(loginUser(values))}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.loginBox}>
              <CustomInput
                placeholder="Username"
                showIcon={false}
                placeholderTextColor={Colors.GRAYTEXT}
                value={values.username}
                onChangeText={handleChange('username')}
                errorText={errors?.username}
              />
              <CustomInput
                secureTextEntry={true}
                placeholder="Password"
                showIcon={false}
                placeholderTextColor={Colors.GRAYTEXT}
                value={values.password}
                onChangeText={handleChange('password')}
                errorText={errors?.password}
              />
              <View
                style={{
                  height: height * 0.05,
                  width: width * 0.8,
                  marginTop: 20,
                }}>
                <CustomButton
                  pending={pending}
                  title="Sign In"
                  buttonType="full"
                  onPress={handleSubmit}
                />
              </View>
              <View
                style={{
                  width: 330,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 20,
                }}>
                <Pressable>
                  <Text
                    style={{
                      color: Colors.ORANGE,
                      textDecorationLine: 'underline',
                    }}>
                    Forget Password
                  </Text>
                </Pressable>
                <Pressable>
                  <Text>
                    Click for{' '}
                    <Text
                      style={{
                        color: Colors.ORANGE,
                        textDecorationLine: 'underline',
                      }}>
                      SignUp
                    </Text>
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: height * 0.6,
  },
  loginBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 40,
    height: height * 0.35,
    position: 'absolute',
    backgroundColor: Colors.WHITE,
    top: -height * 0.08,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    shadowColor: Colors.ORANGE,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});

export default Login;
