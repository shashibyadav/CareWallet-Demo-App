import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
      <>
          <Tabs
              screenOptions={{
                  tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                  headerShown: false,
              }}>
              <Tabs.Screen
                  name="index"
                  options={{
                      title: 'My RxCard',
                      tabBarIcon: ({ color, focused }) => (
                          <TabBarIcon name={focused ? 'id-card' : 'id-card-outline'} color={color} />
                      ),
                  }}
              />
              <Tabs.Screen
                  name="explore"
                  options={{
                      title: 'Medications',
                      tabBarIcon: ({ color, focused }) => (
                          <TabBarIcon name={focused ? 'medical' : 'medical-outline'} color={color} />
                      ),
                  }}
              />
              <Tabs.Screen
                  name="myaccount"
                  options={{
                      title: 'My Account',
                      tabBarIcon: ({ color, focused }) => (
                          <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                      ),
                  }}
              />
          </Tabs>
      </>
  );
}
