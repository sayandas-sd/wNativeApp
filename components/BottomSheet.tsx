import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef } from 'react';
import { StyleSheet, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const BottomSheetPage = ({onClose}:{
    onClose: () => void;
}) => {

  const bottomSheetRef = useRef<BottomSheet>(null);


  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);


  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        handleIndicatorStyle={styles.headerIndicator}
        onClose={onClose}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        snapPoints={['100%']}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerIndicator: { 
    height: 0 
  }
});
