import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Recommend" component={RecommendScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
}

function RecommendScreen() {
    return <View>
        <Text>
            hi
        </Text>
    </View>
}
function LikedScreen() {
    return <View>
        <Text>
            hi ProfileScreen
        </Text>
    </View>
}
function LibraryScreen() {
    return <View>
        <Text>
            hi Library
        </Text>
    </View>
}