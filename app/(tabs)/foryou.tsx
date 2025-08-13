import { SplitView } from '@/components/SplitView';
import { ThemedView } from '@/components/ThemedView';
import { useLibraryWalpapers, useLikedWalpapers, useRecommendWalpapers } from '@/hooks/useWallpaper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <SafeAreaView style={{flex: 1}} edges={["top"]}>
        <Tab.Navigator>
            <Tab.Screen name="Recommend" component={RecommendScreen} />
            <Tab.Screen name="Liked" component={LikedScreen} />
            <Tab.Screen name="Library" component={LibraryScreen} />
        </Tab.Navigator>
    </SafeAreaView>
    
  );
}

function RecommendScreen() {
    const wallpaper = useRecommendWalpapers();

    return <ThemedView style={styles.container}>     
        <SplitView wallpapers={wallpaper}/>
    </ThemedView>
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