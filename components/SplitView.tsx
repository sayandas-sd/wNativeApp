import { ThemedView } from '@/components/ThemedView';
import { Wallpaper } from "@/hooks/useWallpaper";
import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { BottomSheetPage } from "./BottomSheet";
import Imagecard from "./ImageCard";

export function SplitView({ wallpapers }: { wallpapers: Wallpaper[] }) {
  const [wallpaperOpen, setWalpaperOpen] = useState<null | Wallpaper>(null);

  return (
    <ThemedView style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={wallpapers}
        keyExtractor={(item) => item.name}
        numColumns={2} 
        columnWrapperStyle={styles.row} 
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ThemedView style={styles.imageContainer}>
            <Imagecard
              onPress={() => setWalpaperOpen(item)}
              wallpaper={item}
            />
          </ThemedView>
        )}
      />

      {wallpaperOpen && (
        <BottomSheetPage
          wallpaper={wallpaperOpen}
          onClose={() => setWalpaperOpen(null)}
        />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
  },
  listContent: {
 
  },
  imageContainer: {
    flex: 1,
    padding: 10
  },
});
