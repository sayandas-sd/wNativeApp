import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function Root() {
    return <View>
        <View style={{backgroundColor: "black"}}>
            <Text style={{color: 'white'}}>Go Back</Text>
        </View>
        <Slot />
    </View>
}