import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming, withRepeat } from 'react-native-reanimated';
import { styled } from 'nativewind';
import { images } from '../constants';

const AnimatedView = styled(Animated.View);

const AnimatedSplashScreen = () => {
  const animation = useSharedValue(0);

  useEffect(() => {
    animation.value = withRepeat(
      withTiming(1, {
        duration: 500,
        easing: Easing.linear,
      }),
      -1,
      true
    );
  }, [animation]);

  const animatedStyle1 = useAnimatedStyle(() => ({
    transform: [{ translateY: animation.value * -10 }],
  }));

  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{ translateY: animation.value * 10 }],
  }));

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <View className="flex-row justify-between w-3/5">

        <AnimatedView style={animatedStyle1} className="w-12 h-12">
          <Image height="50" width="50" viewBox="0 0 64 64"
            source={images.load}
          />
        </AnimatedView>

        <AnimatedView style={animatedStyle2} className="w-12 h-12">
          <Image height="50" width="50" viewBox="0 0 64 64"
            source={images.load}
          />
        </AnimatedView>

        <AnimatedView style={animatedStyle1} className="w-12 h-12">
          <Image height="50" width="50" viewBox="0 0 64 64"
            source={images.load}
          />
        </AnimatedView>

      </View>

      <View className="flex-row items-center">

      <Text className="mt-10 text-lg font-ibbrita ">Loading</Text>

      <AnimatedView style={animatedStyle1} className="ml-2">
          <Text className="mt-10 text-lg font-ibbrita">.</Text>
        </AnimatedView>

        <AnimatedView style={animatedStyle2} className="ml-2">
          <Text className="mt-10 text-lg font-ibbrita">.</Text>
        </AnimatedView>

        <AnimatedView style={animatedStyle1} className="ml-2">
          <Text className="mt-10 text-lg font-ibbrita">.</Text>
        </AnimatedView>
      </View>

    </View>
  );
};

export default AnimatedSplashScreen;
