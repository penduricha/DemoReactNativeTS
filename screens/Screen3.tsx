import React from 'react';
import { Box, Heading, Text, VStack, Center, ScrollView,NativeBaseProvider } from 'native-base';
import {RouteProp} from "@react-navigation/native";
import {RootStackParamList} from "@/AppNavigator";
import {StackNavigationProp} from "@react-navigation/stack";

type Screen3RouteProp = RouteProp<RootStackParamList, 'Screen3'>;
type Screen3NavigationProp = StackNavigationProp<RootStackParamList, 'Screen3'>;

type Props = {
    route: Screen3RouteProp;
    navigation: Screen3NavigationProp;
};
const Screen3: React.FC<Props>= () => {
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box px={4} pt={8}>
                    <Heading size="xl" mb={4}>
                        Welcome to Screen 3
                    </Heading>
                    <Text fontSize="md" mb={6}>
                        This is a sample screen built using NativeBase.
                    </Text>

                    <VStack space={4}>
                        <Box bg="blue.500" p={4} rounded="md">
                            <Heading size="md" color="white" mb={2}>
                                Section 1
                            </Heading>
                            <Text color="white">
                                This is the first section of the screen. You can customize the
                                content and styling as needed.
                            </Text>
                        </Box>

                        <Box bg="gray.200" p={4} rounded="md">
                            <Heading size="md" color="gray.800" mb={2}>
                                Section 2
                            </Heading>
                            <Text color="gray.800">
                                This is the second section of the screen. You can add more content
                                and components as needed.
                            </Text>
                        </Box>

                        <Box bg="green.500" p={4} rounded="md">
                            <Heading size="md" color="white" mb={2}>
                                Section 3
                            </Heading>
                            <Text color="white">
                                This is the third section of the screen. You can customize the
                                styling and layout as needed.
                            </Text>
                        </Box>
                    </VStack>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    );
};

export default Screen3;