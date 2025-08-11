import { Colors } from '@/constants/Colors';
import { Wallpaper } from '@/hooks/useWallpaper';
import { Ionicons } from '@expo/vector-icons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef } from 'react';
import { Image, Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native';
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
        <BottomSheetView style={styles.contentContainer}>
          <Image style={styles.imageSize} source={{uri: wallpaper.uri}}/>
          <View style={styles.closeBar}>
            <Ionicons   name={"close"}
                        size={30}
                        color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                    /> 
            
            <Ionicons   name={"heart"}
                        size={30}
                        color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                    /> 
          </View>
          <View style={styles.textContainer}>
            <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
          </View>
          
          <DownloadButton />
        </BottomSheetView>
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
        marginVertical: 10
    }}>

        <Ionicons   name={"download"}
                        size={24}
                        color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                        style={{marginRight: 10}}
                    /> 

        <Text style={{
            fontSize: 20,
            color: "white",
            fontWeight: "600"
        }}>
            Download
        </Text>

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
    height: 550,
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
    color: "black",
    textAlign: "center",
    padding: 5
  }
});
