import { ThemedView } from '@/components/ThemedView';
import { Wallpaper } from "@/hooks/useWallpaper";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { BottomSheetPage } from "./BottomSheet";
import Imagecard from "./ImageCard";

export function SplitView({ wallpapers, onScroll }: { wallpapers: Wallpaper[], onScroll?: (yOffset: number) => void }) {
  const [wallpaperOpen, setWalpaperOpen] = useState<null | Wallpaper>(null);

  return (
    <ThemedView style={styles.container}>
        <ThemedView style={styles.innerContainer}>
            <FlatList
                onScroll={(e) => {
                    let yOffset = e.nativeEvent.contentOffset.y / 1;
                   onScroll?.(yOffset);
                }}
                data={wallpapers}
                keyExtractor={(item) => item.name}
                numColumns={2} 
                columnWrapperStyle={styles.row} 
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                <ThemedView style={styles.imageContainer}>
                    <ThemedView style={styles.innerContainer}>
                        <View>
                            <Imagecard
                            onPress={() => setWalpaperOpen(item)}
                            wallpaper={item}
                        />
                        </View>
                        
                    </ThemedView>
                </ThemedView>
                )}
            />
        </ThemedView>

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
  container: {
    flexDirection: "row",
    flex: 1
  },
  innerConatiner: {
    flex: 1,
    padding: 10
  },
  row: {
    justifyContent: "space-between",
  },
  imageContainer: {
    flexDirection: "row",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 10
  }
});
