import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '../constants'
import { router } from 'expo-router'

const bookedTranslator = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="mt-10 items-center ">
        <Image
          source={images.trapic}
          resizeMode="contain"
          className="w-1/2 h-20 mt-10 "
        />
        <Text className="mt-2 "> Booked Translator</Text>
        <View className="flex mt-10 ml-10 mr-10 items-center ">
          <Text className="text-xl font-ibbrita">SOS provides real-time translation services for tourists, businessmen, and events. Our skilled translators offer accurate, on-the-spot language support, ensuring smooth communication during meetings, tours, and conferences. Perfect for seamless, culturally appropriate interactions in any setting. </Text>
        </View>
        <View className="flex flex-row p-2 justify-center">
          <TouchableOpacity
            className="bg-secondary p-4 mt-10 -mb-1 rounded-full"
            onPress={() => router.push("/translator")}>

            <Text className="text-white text-center font-semibold">
              Get a service now
            </Text>
          </TouchableOpacity>
          {/* Add more TouchableOpacity components for other items */}
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default bookedTranslator

const styles = StyleSheet.create({})