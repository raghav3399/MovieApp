import  React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

import MoviesScreen from './screens/MoviesScreen'
import TvShowsScreen from './screens/TvShowsScreen'
import SearchScreen from './screens/SearchScreen'
import MoreDetails from './screens/MoreDetails';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          style: { marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
        },
      }}
    >
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="TV Shows" component={TvShowsScreen} />
    </Tab.Navigator>
  );
};

export default function App() {

  function CustomHeader() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Movies App</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="darkblue" />
        <Stack.Navigator>
          <Stack.Screen name="Back to list" component={TabScreens} options={{ headerShown: false }} />
          <Stack.Screen name="MoreDetails" component={MoreDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
