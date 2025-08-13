import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <Header />
        <LoginButton />
        <ThemeSelector />
    </SafeAreaView>
  );
}

function ThemeSelector() {
    return <View style={styles.outContainer}>
        <ThemedText style={styles.textSize}>Settings</ThemedText>
        <ThemedText style={styles.textData}>Theme</ThemedText>
        <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
            <ThemeButton title={"Dark"} selected={false}/>
            <ThemeButton title={"Light"} selected={false}/>
            <ThemeButton title={"System"} selected={false}/>
        </View>
    </View>
}

function ThemeButton({title, selected} : {title: string, selected: boolean}) {
    return <Pressable style={{padding: 10, borderColor: "black", borderWidth: 2, borderRadius: 5, flex: 0.3 }}>
        <ThemedText style={styles.themeText}>{title}</ThemedText>
    </Pressable>
}

function LoginButton() {
    const theme = useColorScheme() ?? 'light';

    return  <View>
        <AuthButton lebel={'Signin'} icon={
           <Ionicons    name={"logo-google"}
                        size={30}
                        color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
            /> 
        }/>
        <AuthButton lebel={'Signin'} 
                    icon={
           <Ionicons    name={"logo-apple"}
                        size={30}
                        color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
            /> 
                    }/>
      </View>
}

function Header() {
    return <View style={styles.topbar}>
        <ThemedText style={styles.textSize}>Panel</ThemedText>
        <ThemedText style={styles.textData}>Please Sign in to this app</ThemedText>
    </View>
}

function AuthButton({lebel,icon}: {
    lebel: string,
    icon: any
}) {

    return <Pressable style={{
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 70,
        marginVertical: 10
    }}>
        {icon}

        <Text style={{
            fontSize: 20,
            color: "white",
            fontWeight: "600"
        }}>
           {lebel}
        </Text>

    </Pressable>
}




const styles = StyleSheet.create({
    textSize: {
        fontSize: 30,
        color: "black",
        fontWeight: "600",
        textAlign: "left",
        paddingBottom: 10
    },
    topbar: {
       padding: 20,
    
    },
    textData: {
        fontSize: 15,
        color: "black",
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
        color: "black",
        textAlign: "center",
        fontWeight: "600"
    }
})