import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback, Animated } from 'react-native';
import React, { useEffect, useState } from 'react';
import { icons, images } from '../../constants';
import { router } from 'expo-router';
import * as DocumentPicker from 'expo-document-picker';
import { Badge } from 'react-native-paper';
import AnimatedSplashScreen from '../AnimatedSplashScreen';

const profile = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [animation] = useState(new Animated.Value(0));

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change this to your desired loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <AnimatedSplashScreen />;
  }

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        setMenuVisible(!menuVisible);
      });
    } else {
      Animated.timing(animation, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        setMenuVisible(!menuVisible);
      });
    }
  };
  const closeMenu = () => {
    if (menuVisible) {
      toggleMenu();
    }
  };
  const animatedStyle = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 0],
        }),
      },
    ],
  };


  const pickDocument = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({});
      if (result.type === 'success') {
        setSelectedFile(result);
        Alert.alert('File Selected', result.name);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={closeMenu}>
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          {/* Top Icons */}
          <View className="flex flex-row justify-between items-center">
            <Image
              source={images.logono}
              resizeMode="contain"
              className="w-14 h-14 mt-12 ml-4"
            />

            {/* Right Menu Icon */}
            <View className="absolute top-10 right-2 p-4 rounded-lg shadow-lg z-10 bg-primary">
              <TouchableOpacity
                className="flex w-full h-full items-end mb-2"
                onPress={toggleMenu}
              >
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  className="w-14 h-14"
                />
              </TouchableOpacity>
            </View>
          </View>

          {menuVisible && (
             <Animated.View style={[animatedStyle, { position: 'absolute', width: '100%', height: '100%', right: 0, zIndex: 20 }]}>
            <View className="absolute w-1/0.2 h-full right-0 bg-gray-900 z-20 p-4 shadow-lg">
                <Image
                  source={images.logow}
                  resizeMode="contain"
                  className="w-14 h-14 font-rbrita self-start mt-12 ml-2"
                />
                {/* Close Menu Button */}
                <TouchableOpacity onPress={toggleMenu} className="mb-4 self-end">
                  <Image
                    source={icons.wmenu}
                    resizeMode="contain"
                    className="w-9 h-9 font-rbrita border-2 rounded-lg -mt-12 mr-4 "
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  className="w-full h-7 font-rbrita justify-center items-center rounded-lg my-5"
                  onPress={() => {
                    toggleMenu();
                    router.push('/translator');
                  }}
                >
                  <Text className="text-lg text-primary">Book Translator</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="w-full h-7 font-rbrita justify-center items-center rounded-lg my-5"
                  onPress={() => {
                    toggleMenu();
                    router.push('/papers');
                  }}
                >
                  <Text className="text-lg text-primary">Translate Papers</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="w-full h-7 font-rbrita justify-center items-center rounded-lg my-5"
                  onPress={() => {
                    toggleMenu();
                    router.push('/synthese');
                  }}
                >
                  <Text className="text-lg text-primary">Synthese Documents</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="w-full h-7 font-rbrita justify-center flex-row items-center rounded-lg my-5"
                  onPress={() => {
                    toggleMenu();
                    router.push('/Login');
                  }}
                >
                  <Text className="text-lg text-primary">Logout</Text>
                  <Image
                    source={icons.logout}
                    resizeMode='contain'
                    className="w-5 h-5 ml-4 "
                  />
                </TouchableOpacity>
            </View>
            </Animated.View>
          )}

          {/* Profile Section */}
          <View className="flex flex-row items-center justify-center mt-10">
          <Badge className="bg-secondary self-center top-8 text-xl font-ibbrita justify-items-center -mr-5" size={40}>
              3
              </Badge>
            <View className="border-2 border-secondary  rounded-full relative p-1 flex-row-reverse">
              <Image
                source={images.pic}
                resizeMode="contain"
                className="w-24 h-24 rounded-full"
              />
            </View>
            <Text className="text-xl top-3 ml-2 font-ibbrita text-ali">
              WALID Chikhaoui{'\n'}
              <Text className="text-sm font-rbrita mt-2">Axia Head Manager{'\n'}</Text>
            </Text>
          </View>
          <TouchableOpacity className="border-2 border-secondary rounded-full w-44 self-end justify-items-center items-center p-2 mx-10 -mt-4">
              <Text className="text-secondary">
              Edit My Account
              </Text>
              </TouchableOpacity>

          {/* Icon Grid */}
          <View className="flex flex-row justify-around my-5">
            <TouchableOpacity
              className="flex-1 items-center p-4 mx-2 bg-white rounded-2xl border-2 shadow-md"
              onPress={() => router.push("/Actions")}>

              <Image
                source={images.pap}
                resizeMode="contain"
                className="w-16 h-16"
              />
              <Text className="mt-2">Translated Papers</Text>
              <Image
                source={icons.info}
                resizeMode="contain"
                size={24}
                className="self-center top-8 justify-items-center"
              />

            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 items-center p-4 mx-2 bg-white rounded-2xl border-2 shadow-md"
              onPress={() => router.push("/translator")}>

              <Image 
              source={images.trapic} 
              resizeMode="contain" 
              className="w-15 h-16" 
              />
              <Text className="mt-2">Booked Translator</Text>
              <Image
                source={icons.info}
                resizeMode="contain"
                size={24}
                className="self-center top-8 justify-items-center"
              />
            </TouchableOpacity>
          
            <TouchableOpacity
              className="flex-1 items-center p-4 mx-2 bg-white rounded-2xl border-2 shadow-md"
              onPress={() => router.push("/Actions")}>

              <Image 
              source={images.book} 
              resizeMode="contain" 
              className="w-15 h-16" 
              />

              <Text className="mt-2">Review Actions</Text>
              <Image
                source={icons.info}
                resizeMode="contain"
                size={24}
                className="self-center top-8 justify-items-center"
              />
            </TouchableOpacity>
          </View>

          {/* Banner */}
          <View className="w-full px-3 mb-8">
            <View className="bg-primary p-4 rounded-3xl border-2 shadow-md overflow-hidden">
              <Image
                source={images.banner}
                resizeMode="contain"
                className="w-full h-48 rounded-3xl "
              />

              <View className="flex flex-row p-2 justify-end">
                <TouchableOpacity 
                className="bg-secondary p-2 mt-1 -mb-1 rounded-full"
                onPress={()=> router.push("/translator")}>
                  
                  <Text className="text-white text-center font-semibold">
                    Book a Translator
                  </Text>
                </TouchableOpacity>
                {/* Add more TouchableOpacity components for other items */}
              </View>

            </View>
          </View>
        </View> 
      </ScrollView>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default profile;
