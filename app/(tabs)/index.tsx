import { BottomSheetPage } from "@/components/BottomSheet";
import Imagecard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpaper";


import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


export default function explore() {
    const wallpapers = useWallpaper();
    const [wallpaperOpen, setWalpaperOpen] = useState<null | Wallpaper>(null);

    return <SafeAreaView style={{flex: 1}} edges={["top"]}>
        
                <ParallaxScrollView headerBackgroundColor={{dark: "black", light: "white" }}
                headerImage={<Image style={{flex: 1}} source={{uri: wallpapers[0]?.uri ?? ""}}/>}>

                    <ThemedView style={styles.container}>

                        <ThemedView style={styles.innerConatiner}>
                            <FlatList
                                data={wallpapers.filter((_, index) => index % 2 === 0 )}
                                renderItem={({item}) => <View style={styles.imageContainer}>
                                    <Imagecard onPress={() => {
                                        setWalpaperOpen(item);
                                    }} wallpaper={item}/>
                                </View>}
                                keyExtractor={item => item.name}
                            />
                        </ThemedView>
                        <ThemedView style={styles.innerConatiner}>
                            <FlatList
                                data={wallpapers.filter((_, index) => index % 2 === 1 )}
                                renderItem={({item}) => <View style={styles.imageContainer}>
                                    <Imagecard onPress={() => {
                                        setWalpaperOpen(item);
                                    }} wallpaper={item}/> 
                                </View>}
                                keyExtractor={item => item.name}
                            />
                            
                        </ThemedView>

                    </ThemedView>
                    
                </ParallaxScrollView>
   
                {wallpaperOpen && <BottomSheetPage wallpaper={wallpaperOpen} onClose={() => {
                    setWalpaperOpen(null);
                }}/>}

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