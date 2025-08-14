import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function ThemeAreaContext({children, style, edges}: {
    children: React.ReactNode,
    style?: any,
    edges: string[]
}) {

    const theme = useColorScheme() ?? "light";
    return <SafeAreaView style={{backgroundColor: Colors[theme].background, ...style, edges}}>
        {children}
    </SafeAreaView>
}