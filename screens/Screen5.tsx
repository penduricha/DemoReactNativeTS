import React, { useState } from 'react';
import { Box, VStack, Input, Button,NativeBaseProvider} from 'native-base';
import {RouteProp} from "@react-navigation/native";
import {RootStackParamList} from "@/AppNavigator";
import {StackNavigationProp} from "@react-navigation/stack";
type Screen5RouteProp = RouteProp<RootStackParamList, 'Screen5'>;
type Screen5NavigationProp = StackNavigationProp<RootStackParamList, 'Screen5'>;

type Props = {
    route: Screen5RouteProp;
    navigation: Screen5NavigationProp;
};
const Screen5:React.FC<Props> = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Thực hiện hành động submit dữ liệu tại đây
    console.log('ID:', id);
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Email:', email);
  };

  return (
    <NativeBaseProvider>
        <Box flex={1} justifyContent="center" alignItems="center" bg="gray.100">
      <VStack space={4} w="80%" style={{marginBottom:200}}>
        <Input
          placeholder="ID"
          value={id}
          onChangeText={setId}
          keyboardType="numeric"
        />
        <Input
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <Input
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Button colorScheme="blue" onPress={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </Box>
    </NativeBaseProvider>
    
  );
};

export default Screen5;