import { Colors } from '@/constants/Colors';
import { Wallpaper } from "@/hooks/useWallpaper";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, useColorScheme, View } from "react-native";
import { ThemedText } from "./ThemedText";

export default function Imagecard({ wallpaper, onPress }:{
    wallpaper: Wallpaper,
    onPress: () => void
}) {

    const theme = useColorScheme() ?? 'light';

    return <Pressable onPress={onPress}>
        <View>
            <Image source={{uri: wallpaper.uri}} style={imagestyles.image}/>
            <View style={imagestyles.fixposition}>
                <ThemedText style={imagestyles.lebel}>{wallpaper.name}</ThemedText>
                <View style={imagestyles.iconContainer}>
                    <Ionicons name={"heart"}
                        size={18}
                        color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                        /> 
                </View>
                
            </View>
        </View>
    </Pressable>
}

const imagestyles = StyleSheet.create({
    image: {
        flex: 1,
        height: 220,
        borderRadius: 20
    },
    lebel: {
        color: "white",
    },
    fixposition: {
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.5)",
        bottom: 0,
        width: "100%",
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    iconContainer: {
        display: "flex",
        justifyContent: "center"
    }
})