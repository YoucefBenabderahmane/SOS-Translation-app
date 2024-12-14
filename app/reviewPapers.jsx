import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '../constants'
import { router } from 'expo-router'


const reviewPapers = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Image
          source={images.book}
          resizeMode="contain"
          className="w-1/2 h-20 mt-10 ml-24"
        />

        <Text className="mt-2 ml-36 ">Review Actions</Text>
        <View className="flex mt-10 ml-10 mr-10 items-center ">
          <Text className="text-xl font-ibbrita">SOS offers professional copywriting and linguistic checking services to ensure your content is clear, engaging, and error-free. Whether for business documents, marketing materials, or presentations, our experts refine your language for accuracy, style, and cultural relevance, helping you communicate effectively in any context. </Text>
        </View>
        <View className="flex flex-row p-2 justify-center">
          <TouchableOpacity
            className="bg-secondary p-4 mt-10 -mb-1 rounded-full"
            onPress={() => router.push("/synthese")}>

            <Text className="text-white text-center font-semibold">
              Get a service now
            </Text>
          </TouchableOpacity>
          {/* Add more TouchableOpacity components for other items */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default reviewPapers

const styles = StyleSheet.create({})