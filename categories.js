import { View ,FlatList} from 'react-native';
import React from 'react';
import { ListItem } from 'react-native-elements'
import { Tab } from 'react-native-elements/dist/tab/Tab';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import {  TouchableOpacity } from "react-native";
import Search from './Search';


const Categories = ({navigation}) => {
    const goTo = (navigate) => navigation.navigate(navigate);
    const renderRow = ({ item }) => {
        return (
        
            <TouchableOpacity>
          <ListItem
          onPress={()=>goTo(item.navigate)}
            bottomDivider
          >
            <MaterialCommunityIcons name={item.iconName} size={25} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          </TouchableOpacity>
          
        );
      }; 
    const Stack = createStackNavigator();
    const list = [
        {
          name: 'Cakes & Desserts',
          iconName : 'cake',navigate:'CakesDesserts'
          
        },
        {
          name: 'Spices',
          iconName : 'chili-hot',navigate:'Spices'
        },
        {
            name: 'Makeup Artists',
            iconName : 'lipstick',navigate:'MakeupArtist'
          },
          {
            name: 'Stitching',
            iconName : 'scissors-cutting',navigate:'Stitching'
          },
          {
            name: 'Mehndi Artists',
            iconName : 'pencil-outline',navigate:'MehndiArtist'
          },
          {
            name: 'Home-Cooked Food',
            iconName : 'food',navigate:'Homecookedfood'
          },
          {
            name: 'Bakery',
            iconName : 'bread-slice',navigate:'Bakery'
          },
      ]

      const displaysubitem = ()=>{
          return (<Stack.Navigator initialRouteName='Categories'><Stack.Screen name='Subitems' component={clickeventhandler}/>  </Stack.Navigator>)
      }

      const clickeventhandler =(e)=>{
          return(
              <View>
                  <ListItem>
                  <ListItem.Content>
          <ListItem.Title > Cakes</ListItem.Title>
          <ListItem.Subtitle>abcd</ListItem.Subtitle>
        </ListItem.Content>

                  </ListItem>
              </View>
          )
      }
  return (
    <View>
   <FlatList
        data={list}
        // keyExtractor={(a: List1Data, index: number) => index.toString()}
        renderItem={renderRow}
      />
    </View>
  );
};


export default Categories;
