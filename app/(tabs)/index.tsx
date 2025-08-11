import Imagecard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpaper } from "@/hooks/useWallpaper";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


export default function explore() {
    const wallpapers = useWallpaper();

    return <SafeAreaView style={{flex: 1}} edges={["top"]}>
                <ParallaxScrollView headerBackgroundColor={{dark: "black", light: "white" }}
                headerImage={<Image style={{flex: 1}} source={{uri: wallpapers[0]?.uri ?? ""}}/>}>

                    <ThemedView style={styles.container}>

                        <ThemedView style={styles.innerConatiner}>
                            <FlatList
                                data={wallpapers.filter((_, index) => index % 2 === 0 )}
                                renderItem={({item}) => <View style={styles.imageContainer}>
                                    <Imagecard wallpaper={item}/>
                                </View>}
                                keyExtractor={item => item.name}
                            />
                        </ThemedView>
                        <ThemedView style={styles.innerConatiner}>
                            <FlatList
                                data={wallpapers.filter((_, index) => index % 2 === 1 )}
                                renderItem={({item}) => <View style={styles.imageContainer}>
                                    <Imagecard wallpaper={item}/>
                                </View>}
                                keyExtractor={item => item.name}
                            />
                        </ThemedView>

                    </ThemedView>
                    
                </ParallaxScrollView>
   

    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1
    },
    innerConatiner: {
        flex: 1,
        padding: 10
    },
    imageContainer: {
        paddingVertical: 10
    }
})