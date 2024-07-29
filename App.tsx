import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/router/rootNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {ActivityIndicator, View, StatusBar} from 'react-native';
import {Colors} from './src/thema/Colors';

// create a component
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <NavigationContainer fallback={<ActivityIndicator animating />}>
          <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE} />
          <RootNavigation />
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default App;
