import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import ImageScreen from "./src/screens/ImageScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App_to_Home"
        screenOptions={
          {
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: '#B00020'}
          }}
        >
        <Stack.Screen
          name="App_to_Home"
          component={HomeScreen}
          options={{
            title: 'Movie Time',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            }
          }}
        />
        <Stack.Screen
        name="Home_to_Details"
        component={DetailsScreen}
        options={ ({route}) => ({ title: route.params.movie.title })}
        />
        <Stack.Screen
        name="Details_to_Details"
        component={DetailsScreen}
        />
        <Stack.Screen
          name="BigImageView"
          component={ImageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
