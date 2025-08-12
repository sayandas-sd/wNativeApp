import { Wallpaper } from "@/hooks/useWallpaper";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { BottomSheetPage } from "./BottomSheet";
import Imagecard from "./ImageCard";

export function SplitView({ wallpapers }: { wallpapers: Wallpaper[] }) {
  const [wallpaperOpen, setWalpaperOpen] = useState<null | Wallpaper>(null);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={wallpapers}
        keyExtractor={(item) => item.name}
        numColumns={2} 
        columnWrapperStyle={styles.row} 
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Imagecard
              onPress={() => setWalpaperOpen(item)}
              wallpaper={item}
            />
          </View>
        )}
      />

      {wallpaperOpen && (
        <BottomSheetPage
          wallpaper={wallpaperOpen}
          onClose={() => setWalpaperOpen(null)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
  },
  listContent: {
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
