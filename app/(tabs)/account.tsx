import { Colors } from '@/constants/Colors';
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {
  const [sheetOpen, setSheetOpen] = useState(false);
    const theme = useColorScheme() ?? 'light';

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <View style={{ flex: 1 }}>
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
    </SafeAreaView>
  );
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
