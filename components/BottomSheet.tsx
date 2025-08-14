import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { Wallpaper } from '@/hooks/useWallpaper';
import { Ionicons } from '@expo/vector-icons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef } from 'react';
import { Image, Pressable, StyleSheet, useColorScheme, View } from 'react-native';
import { ThemedText } from './ThemedText';

export const BottomSheetPage = ({onClose, wallpaper}:{
    onClose: () => void;
    wallpaper: Wallpaper
}) => {

  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useColorScheme() ?? 'light';

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);


  return (
    
      <BottomSheet
        handleIndicatorStyle={styles.headerIndicator}
        onClose={onClose}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        snapPoints={['95%']}
        handleStyle={{ display: 'none'}}
      >
        <ThemedView style={{flex: 1}}>

            <BottomSheetView style={styles.contentContainer}>
                <ThemedView style={{flex: 1}}>
                    <Image style={styles.imageSize} source={{uri: wallpaper.uri}}/>
                    <View style={styles.closeBar}>
                        <Ionicons   name={"close"}
                                    size={30}
                                    color={theme === 'light' ? Colors.light.icon : Colors.dark.text}
                                /> 
                        
                        <Ionicons   name={"heart"}
                                    size={30}
                                    color={theme === 'light' ? Colors.light.icon : Colors.dark.text}
                                /> 
                    </View>

                    <ThemedView style={styles.textContainer}>
                        <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
                    </ThemedView>
                    
                    <DownloadButton />
                </ThemedView>
            </BottomSheetView>

        </ThemedView>
      </BottomSheet>
   
  );
};

function DownloadButton() {

    const theme = useColorScheme() ?? 'light';

    return <Pressable style={{
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 70,
        marginVertical: 10,
        borderColor: theme === 'light' ? Colors.light.text : Colors.dark.icon,
        borderWidth: 1
    }}>

        <Ionicons   name={"download"}
                        size={24}
                        color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                        style={{marginRight: 10}}
                    /> 

        <ThemedText style={{
            fontSize: 20,
            color: "white",
            fontWeight: "600"
        }}>
            Download
        </ThemedText>

    </Pressable>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    
  },
  headerIndicator: { 
    height: 0 
  },
  imageSize: {
    height: 500,
    borderRadius: 10
  }, 
  closeBar: {
    position: "absolute",
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%"
  }, 
  textContainer: {
    width: "100%"
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    padding: 10
  }
});
