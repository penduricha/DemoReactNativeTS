// src/screens/Screen2.tsx
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/AppNavigator';

type Screen2RouteProp = RouteProp<RootStackParamList, 'Screen2'>;
type Screen2NavigationProp = StackNavigationProp<RootStackParamList, 'Screen2'>;

type Props = {
  route: Screen2RouteProp;
  navigation: Screen2NavigationProp;
};

const Screen2: React.FC<Props> = ({ route,navigation }) => {
  const { message } = route.params;

  function handlePress() {
    navigation.navigate('Screen3');
  }

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <TouchableOpacity
          style={{
            backgroundColor: 'green',
            borderRadius: 1,
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderStyle: 'solid',
          }}
          onPress={handlePress}
      >
        <Text>Go to Screen3.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen2;