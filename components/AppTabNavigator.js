import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStoryScreen from '../screens/ReadStoryScreen';
import WriteStoryScreen from '../screens/WriteStoryScreen';



export const AppTabNavigator = createBottomTabNavigator({
  ReadStory : {
    screen: ReadStoryScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Read Story",
    }
  },
  WriteStory: {
    screen: WriteStoryScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Write Story",
    }
  }
});
