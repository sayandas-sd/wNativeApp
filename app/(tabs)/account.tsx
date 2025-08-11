import { BottomSheetPage } from "@/components/BottomSheet";
import { useState } from "react";
import { Button, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <View style={{ flex: 1 }}>
        
        <Button
          title="Open Bottom"
          onPress={() => setSheetOpen(true)}
        />

        {sheetOpen && (
          <BottomSheetPage onClose={() => setSheetOpen(false)} />
        )}
      </View>
    </SafeAreaView>
  );
}
