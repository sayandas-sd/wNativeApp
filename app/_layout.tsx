import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  const router = useRouter();

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/"); 
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen

          name="(bottombar)/accountinfo"
          options={{
            headerShown: true,
            headerTitle: "Account",
            headerTitleAlign: "center",
            headerLeft: () => (
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
                onPress={handleBack}
              >
                <Ionicons name="arrow-back" size={30} color="black" />
               
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
