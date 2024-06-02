// src/navigation/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';
import Screen6 from './screens/Screen6';
export type RootStackParamList = {
  Screen1: undefined;
  Screen2: { message: string };
  Screen3: undefined;
  Screen4: undefined;
  Screen5: undefined;
  Screen6: undefined;
};

  const Stack = createStackNavigator<RootStackParamList>();
  
const AppNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
         <Stack.Screen name="Screen3" component={Screen3}/>
         <Stack.Screen name="Screen4" component={Screen4}/>
         <Stack.Screen name="Screen5" component={Screen5}/>
         <Stack.Screen name="Screen6" component={Screen6}/>
      </Stack.Navigator>
    );
};
  
export default AppNavigator;
//css mới 
//npm install native-base
//npm install normalize-css-color