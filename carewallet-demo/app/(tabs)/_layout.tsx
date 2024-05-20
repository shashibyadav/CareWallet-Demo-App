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
                  name="home"
                  options={{
                      title: 'Home',
                      tabBarIcon: ({ color, focused }) => (
                          <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                      ),
                  }}
              />
              <Tabs.Screen
                  name="index"
                  options={{
                      title: 'Dr Search',
                      tabBarIcon: ({ color, focused }) => (
                          <TabBarIcon name={focused ? 'medical' : 'medical-outline'} color={color} />
                      ),
                  }}
              />
              <Tabs.Screen
                  name="appointment"
                  options={{
                      title: 'Appointment',
                      tabBarIcon: ({ color, focused }) => (
                          <TabBarIcon name={focused ? 'document' : 'document-outline'} color={color} />
                      ),
                  }}
              />
              <Tabs.Screen
                  name="explore"
                  options={{
                      title: 'Medications',
                      tabBarIcon: ({ color, focused }) => (
                          <TabBarIcon name={focused ? 'star' : 'star-outline'} color={color} />
                      ),
                  }}
              />
              <Tabs.Screen
                  name="myaccount"
                  options={{
                      title: 'My Account',
                      tabBarIcon: ({ color, focused }) => (
                          <TabBarIcon name={focused ? 'bag' : 'bag-outline'} color={color} />
                      ),
                  }}
              />
          </Tabs>
      </>
  );
}
