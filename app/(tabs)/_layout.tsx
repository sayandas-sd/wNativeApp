import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {

  const theme = useColorScheme() ?? 'light';

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors[theme].tint, headerShown: false, tabBarStyle: {
                backgroundColor: Colors[theme].background,
          },}}
          initialRouteName="foryou"
      >
      <Tabs.Screen
        name="foryou"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={25} name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <FontAwesome size={20} name="map" color={color} />,
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <FontAwesome size={25} name="user" color={color} />,
        }}
      />

       

      
    </Tabs>
  );
}
