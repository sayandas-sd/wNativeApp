import { BottomSheetPage } from "@/components/BottomSheet";
import { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

export default function account() {
    const [sheetOpen, setSheetOpen] = useState(false);

    return <SafeAreaView style={{ flex: 1}}>
        <View style={{ flex: 1 }}>
            <Text>account</Text>
            <Text>account</Text>
            <Text>account</Text>
            <Text>account</Text>

            <Button title="Open Bottom"
                    onPress={() => {
                        setSheetOpen(true);
                    }}
            />
            {sheetOpen && <BottomSheetPage onClose={() => {
                setSheetOpen(false);
            }}/>}
        
        </View>
     
    </SafeAreaView>
}