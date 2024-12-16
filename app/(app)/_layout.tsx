import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import {Navigator, Stack, Tabs} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import {AuthProvider} from "@/firebase/ctx";
import CustomTabBar from "@/components/navigation/CustomTabBar";
import {TabBarIcon} from "@/components/navigation/TabBarIcon";
import {Colors} from "@/constants/Colors";


export default function AppLayout() {

	const colorScheme = useColorScheme();


	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				headerShown: false,
			}}
			tabBar={(props) => <CustomTabBar {...props} />}>
			<Tabs.Screen name="index" options={{
				title: 'Tasks',
				tabBarIcon: ({ color, focused }) => (
					<TabBarIcon name={focused ? 'home' : 'home'} color={color} />
				),
			}} />

			<Tabs.Screen name="search" options={{
				title: 'Search',
				tabBarIcon: ({ color, focused }) => (
					<TabBarIcon name={focused ? 'search1' : 'search1'} color={color} />
				),
			}} />
			<Tabs.Screen name="cart" options={{
				title: 'Cart',
				tabBarIcon: ({ color, focused }) => (
					<TabBarIcon name={focused ? 'shoppingcart' : 'shoppingcart'} color={color} />
				),
			}} />
			<Tabs.Screen name="profile" options={{
				title: 'Profile',
				tabBarIcon: ({ color, focused }) => (
					<TabBarIcon name={focused ? 'user' : 'user'} color={color} />
				),
			}} />
		</Tabs>
	);
}