import { SplitView } from '@/components/SplitView';
import { ThemeAreaContext } from '@/components/ThemeAreaContext';
import { Colors } from '@/constants/Colors';

import { useLibraryWalpapers, useLikedWalpapers, useRecommendWalpapers } from '@/hooks/useWallpaper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, useColorScheme, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function Home() {

   const theme = useColorScheme() ?? 'light';

  return (
    <ThemeAreaContext style={{flex: 1}} edges={["top"]}>
        <Tab.Navigator style={{flex: 1}} screenOptions={{
            tabBarActiveTintColor: Colors[theme].tint,
            tabBarStyle: {
                backgroundColor: Colors[theme].background,
          },
          tabBarIndicatorStyle: {
              backgroundColor: Colors[theme].indicator,
              height: 4
            }
        }}>
            <Tab.Screen name="Recommend" component={RecommendScreen} />
            <Tab.Screen name="Liked" component={LikedScreen} />
            <Tab.Screen name="Library" component={LibraryScreen} />
        </Tab.Navigator>
    </ThemeAreaContext>
    
  );
}

function RecommendScreen() {
    const wallpaper = useRecommendWalpapers();

    return <View style={styles.container}>     
        <SplitView wallpapers={wallpaper}/>
    </View>
}

function LikedScreen() {
     const wallpaper = useLikedWalpapers();

    return <View style={styles.container}>
        <SplitView wallpapers={wallpaper}/>
    </View>
}

function LibraryScreen() {
    const wallpaper = useLibraryWalpapers();
    
    return <View style={styles.container}>
         <SplitView wallpapers={wallpaper}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
})