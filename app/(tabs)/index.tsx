
import { SplitView } from "@/components/SplitView";
import { useCarousel } from "@/hooks/useCarousel";
import { useWallpaper } from "@/hooks/useWallpaper";
import { useState } from "react";
import { Dimensions, Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";

import { useBottomTabOverflow } from "@/components/ui/TabBarBackground";
import Animated, { useAnimatedRef } from 'react-native-reanimated';

const TOPBAR_HEIGHT = 250;

export default function explore() {
    const wallpapers = useWallpaper();
    const width = Dimensions.get('window').width;
    const [yOffset, setScroll] = useState(0);
    const carouselItem = useCarousel();

   
      const scrollRef = useAnimatedRef<Animated.ScrollView>();
      const bottom = useBottomTabOverflow();

    return <SafeAreaView style={{flex: 1}} edges={["top"]}>
        {/* <Animated.ScrollView
                ref={scrollRef}
                scrollEventThrottle={16}
                scrollIndicatorInsets={{ bottom }}
                contentContainerStyle={{ paddingBottom: bottom }}> */}
                <Animated.View style={{height: TOPBAR_HEIGHT - yOffset}}>
                    <Carousel
                        loop={true}
                        width={width}
                        height={TOPBAR_HEIGHT- yOffset}
                        snapEnabled={true}
                        pagingEnabled={true}
                        autoPlayInterval={2000}
                        data={carouselItem}
                        style={{ width: "100%" }}
                        onSnapToItem={(index) => console.log("current index:", index)}
                        renderItem={({ index }) => (
                            <View
                            style={{
                                flex: 1,
                                borderWidth: 1,
                                justifyContent: "center",
                            }}
                            >
                           <Image source={{uri: carouselItem[index]}} style={{height: TOPBAR_HEIGHT}}/>
                        </View>
                        )}
                        />
                </Animated.View>
                
                <SplitView onScroll={(yOffset) => {
                    setScroll(yOffset)
                }} wallpapers={wallpapers} />
        {/* </Animated.ScrollView> */}
    </SafeAreaView>
}

