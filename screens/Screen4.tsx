import React from 'react';
import { FlatList } from 'react-native';
import { Box, Flex, Text ,NativeBaseProvider} from 'native-base';
import { Button, StyleSheet, View,TouchableOpacity,} from 'react-native';
//npm install native-base
import {RouteProp} from "@react-navigation/native";
import {RootStackParamList} from "@/AppNavigator";
import {StackNavigationProp} from "@react-navigation/stack";
import { border } from 'native-base/lib/typescript/theme/styled-system';
const data = [
  { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
  { id: 4, name: 'Bob Johnson', age: 50, email: 'bobman@example.com' },
  // thêm thêm dữ liệu nếu cần
];
type Screen4RouteProp = RouteProp<RootStackParamList, 'Screen4'>;
type Screen4NavigationProp = StackNavigationProp<RootStackParamList, 'Screen4'>;

type Props = {
    route: Screen4RouteProp;
    navigation: Screen4NavigationProp;
};

const Screen4:React.FC<Props> = ({navigation}) => {
  function handlePressToScreen5(){
    navigation.navigate('Screen5');
  }
  function deleteData()
  {

  }
  
  return (
    <NativeBaseProvider>
        <Box style={{borderColor:'black', borderStyle:'solid'}}>
        <Flex direction="row" bg="blue.200" py={2} style={{borderColor:'black', borderStyle:'solid'}}>
            <Box flex={1} px={4} >ID</Box>
            <Box flex={2} px={4}>Name</Box>
            <Box flex={1} px={4}>Age</Box>
            <Box flex={2} px={4}>Email</Box>
            <Box flex={2} px={4}>Delete</Box>
        </Flex>
        {data.map((item) => (
            <Flex direction="row" key={item.id} py={2} >
            <Box flex={1} px={4}>{item.id}</Box>
            <Box flex={2} px={4}>{item.name}</Box>
            <Box flex={1} px={4}>{item.age}</Box>
            <Box flex={2} px={4}>{item.email}</Box>
            <Box flex={2} px={4}>
              <TouchableOpacity onPress={deleteData}>
                <Text style={{color:'red',fontWeight:'bold'}}>Del</Text>
              </TouchableOpacity>
            </Box>        
           </Flex>
        ))}
        </Box>
        <View style={{
          width: 200,
          marginLeft: 87,
        }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              borderRadius: 1,
              paddingVertical: 12,
              paddingHorizontal: 16,
              borderStyle: 'solid',
  
            }}
            onPress={handlePressToScreen5}
          >
            <Text style={{color: '#FFFFFF',
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
              }}>Go to Screen5.</Text>
          </TouchableOpacity>
        </View>
        
    </NativeBaseProvider>
  );
};

export default Screen4;