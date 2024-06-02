import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {RouteProp} from "@react-navigation/native";
import {RootStackParamList} from "@/AppNavigator";
import {StackNavigationProp} from "@react-navigation/stack";
import { ScrollView } from 'react-native-gesture-handler';
type Screen6RouteProp = RouteProp<RootStackParamList, 'Screen6'>;
type Screen6NavigationProp = StackNavigationProp<RootStackParamList, 'Screen6'>;

type Props = {
    route: Screen6RouteProp;
    navigation: Screen6NavigationProp;
};
const Screen6:React.FC<Props> = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleMenu2 = () => {
    setShowMenu2(!showMenu2);
  };

  const handleItemPress = () => {
    // Thực hiện các hành động khác khi chọn một item trong menu
    //setShowMenu(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={{
        marginTop:1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16,

      }}>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Text style={{fontSize:15,fontWeight:'bold'}}>Menu 1</Text>
        </TouchableOpacity>
        {showMenu && (
          <View style={styles.menuContainer}>
            <TouchableOpacity
              onPress={() => handleItemPress()}
              style={styles.menuItem}
            >
              <Text>Chức năng 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleItemPress()}
              style={styles.menuItem}
            >
              <Text>Chức năng 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleItemPress()}
              style={styles.menuItem}
            >
              <Text>Chức năng 3</Text>
            </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity onPress={toggleMenu2} style={styles.menuButton}>
          <Text style={{fontSize:15,fontWeight:'bold'}}>Menu 2</Text>
        </TouchableOpacity>
        {showMenu2 && (
          <View style={styles.menuContainer}>
            <TouchableOpacity
              onPress={() => handleItemPress()}
              style={styles.menuItem}
            >
              <Text>Chức năng 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleItemPress()}
              style={styles.menuItem}
            >
              <Text>Chức năng 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleItemPress()}
              style={styles.menuItem}
            >
              <Text>Chức năng 3</Text>
            </TouchableOpacity>
        </View>
      )}
    </View>
    </ScrollView>
    </View>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    padding: 12,
    backgroundColor: 'yellow',
    borderRadius: 4,
    marginTop:1,
    borderStyle: 'solid',
    borderColor:'black',
    marginRight: 50,
  },
  menuContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 1,
    borderRadius: 4,
    overflow: 'hidden',
    width:150,
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default Screen6;