import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Ionicons } from "@expo/vector-icons";
import { Appearance, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <Header />
        <ThemedView style={{flex: 1}}>
            <LoginButton />
            <ThemeSelector />
        </ThemedView>
    </SafeAreaView>
  );
}

function ThemeSelector() {
    return <ThemedView style={styles.outContainer}>
        <ThemedText style={styles.textSize}>Settings</ThemedText>
        <ThemedText style={styles.textData}>Theme</ThemedText>
        <ThemedView style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
            <ThemeButton title={"Dark"} selected={false} colorScheme='dark'/>
            <ThemeButton title={"Light"} selected={false} colorScheme='light'/>
            <ThemeButton title={"System"} selected={false} colorScheme={null}/>
        </ThemedView>
    </ThemedView>
}

function ThemeButton({title, selected, colorScheme} : {title: string, selected: boolean, colorScheme: 'dark' | 'light' | null }) {

    const theme = useColorScheme();

    return <Pressable   style={{padding: 10, borderColor: theme === 'light' ? Colors.light.text : Colors.dark.icon, borderWidth: 1, borderRadius: 5, flex: 0.3 }} 
                        onPress={() => {
                            Appearance.setColorScheme(colorScheme)
                        }}>
        <ThemedText style={styles.themeText}>{title}</ThemedText>
    </Pressable>
}

function LoginButton() {
    const theme = useColorScheme() ?? 'light';

    return  <>
        <AuthButton lebel={'Signin'} icon={
           <Ionicons    name={"logo-google"}
                        size={24}
                        color={theme === 'light' ? Colors.light.text : Colors.dark.icon}
            /> 
        }/>
        <AuthButton lebel={'Signin'} 
                    icon={
           <Ionicons    name={"logo-apple"}
                        size={24}
                        color={theme === 'light' ? Colors.light.text : Colors.dark.icon}
            /> 
                    }/>
      </>
}

function Header() {
    return <ThemedView style={styles.topbar}>
        <ThemedText style={styles.textSize}>Panel</ThemedText>
        <ThemedText style={styles.textData}>Please Sign in to this app</ThemedText>
    </ThemedView>
}

function AuthButton({lebel,icon}: {
    lebel: string,
    icon: any
}) {

    const theme = useColorScheme() ?? 'light';

    return <Pressable style={{
        backgroundColor: theme,
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 70,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: theme === 'light' ? Colors.light.icon : Colors.dark.icon
    }}>
        {icon}

        <ThemedText style={{
            fontSize: 20,
            fontWeight: "600",
            paddingLeft: 10
        }}>
           {lebel}
        </ThemedText>

    </Pressable>
}




const styles = StyleSheet.create({
    textSize: {
        fontSize: 30,
        fontWeight: "600",
        textAlign: "left",
        paddingBottom: 10
    },
    topbar: {
       padding: 20,
    
    },
    textData: {
        fontSize: 15,
        fontWeight: "500"
    },
    themeContainer: {
        flex: 1
    },
    themeChild: {
        flex: 1
    }, 
    outContainer: {
        padding: 20
    }, 
    themeText: {
        textAlign: "center",
        fontWeight: "600"
    }
})