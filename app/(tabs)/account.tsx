import { BottomSheetPage } from "@/components/BottomSheet";
import { useState } from "react";
import { Button, SafeAreaView } from "react-native";

export default function account() {
    const [sheetOpen, setSheetOpen] = useState(false);

    return <SafeAreaView>
     
        <Button title="Open Bottom"
                onPress={() => {
                    setSheetOpen(true);
                }}
        />
        {sheetOpen && <BottomSheetPage />}
        
    </SafeAreaView>
}