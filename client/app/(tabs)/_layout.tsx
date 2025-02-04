import { Tabs } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: 'black',
            width: '90%',          // Set navbar width to 85%
            alignSelf: 'center',    // Center the navbar
            borderRadius: 20,       // Optional: round the edges
            marginBottom: insets.bottom,       // Optional: add margin to the bottom of the navbar
            paddingBottom: 5,       // Optional: add padding to the bottom of the navbar
            padding: 10,            // Optional: add padding to the navbar
            alignContent: 'center', // Optional: center the navbar items
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={"home"} iconFamily='Ionicons' color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="stats"
          options={{
            title: 'Stats',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={"brain"} iconFamily='FontAwesome5' color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={"person"} iconFamily='Ionicons' color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="patients"
          options={{
            title: 'Patients',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={"bag-add-outline"} iconFamily='Ionicons' color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Background behind navbar
  },
});
