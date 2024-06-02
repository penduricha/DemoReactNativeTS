// src/screens/Screen1.tsx
import React from 'react';
import { Button, StyleSheet, View,TouchableOpacity,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/AppNavigator';
type Screen1NavigationProp = StackNavigationProp<RootStackParamList, 'Screen1'>;

type Props = {
  navigation: Screen1NavigationProp;
};

const Screen1: React.FC<Props> = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Screen2', { message: 'Hello from Screen1!' });
  };

    function toHello() {

    }
    
    const handlePressScreen4 = () => {
      navigation.navigate('Screen4');
    };
    const handlePressScreen6 = () => {
      navigation.navigate('Screen6');
    };

    return (
    <View style={styles.container}>
      <ScrollView>
      <View style={{
          borderStyle: 'solid',
          borderColor: 'black',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          
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
            <Text style={styles.buttonText}>Go to Screen2.</Text>
          </TouchableOpacity>
          
        </View>   
        <TouchableOpacity
            style={{
              backgroundColor: 'green',
              borderRadius: 1,
              paddingVertical: 12, 
              paddingHorizontal: 16,
              borderStyle: 'solid',
              marginTop: 5
            }}
            onPress={handlePressScreen4}
          >
            <Text style={styles.buttonText}>Go to Screen4.</Text>
          </TouchableOpacity>
        <TouchableOpacity
            style={{
              backgroundColor: 'green',
              borderRadius: 1,
              paddingVertical: 12, 
              paddingHorizontal: 16,
              borderStyle: 'solid',
              marginTop: 5
            }}
            onPress={handlePressScreen6}
          >
            <Text style={styles.buttonText}>Go to Screen6.</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Screen1;