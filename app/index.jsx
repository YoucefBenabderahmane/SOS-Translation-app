import { Image, ScrollView, StatusBar } from "react-native";
import { Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {images} from '../constants'
import CustumeButton from "../components/CustumeButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

          <View className="w-full flex justify-center items-center min-h-[85vh] px-4 mt-10">
           
           <Image 
           source ={images.logo}
           className="w-[140px] h-[94px] mt-4"
           resizeMode="contain"
           />
           <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px] mt-2"
            resizeMode="contain"
          />
          
      <View className="relative mt-8">
       <Text className="text-3xl text-black font-ibbrita text-center">Discover Your{"\n"}
       <Text className="text-secondary">Translation App </Text>
        </Text>
        <Image 
        source={images.path}
        className="w-[100px] h-[20px] absolute -bottom-5 -right-0"
        resizeMode="contain"
        />
      </View>
      <Text className="text-sm font-rbrita text-gray-700 mt-7 text-center">
        Your journey to seamless communication starts here. Discover the world of translation at your fingertips.
           </Text>
           <CustumeButton 
           title="Continue with Email"
           handlePress={() => router.push("/profile")}
           containerStyles="w-full mt-7"
           />
      </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"/>
      </SafeAreaView>
  );
}
