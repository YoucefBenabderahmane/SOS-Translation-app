import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '../constants'
import { router } from 'expo-router'

const translatedPapers = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="mt-20 items-center ">
        <Image
          source={images.pap}
          resizeMode="contain"
          className="w-1/2 h-20 mt-10 "
        />
        <Text className="mt-2 ">Translated Papers</Text>
        <View className="flex mt-10 ml-10 mr-10 items-center ">
          <Text className="text-xl font-ibbrita">Tradicture provides quick, accurate translation of official documents, including contracts, certificates, and more. Our expert translators ensure high-quality, confidential, and culturally appropriate translations for all your business needs.</Text>
        </View>

        <View className="flex flex-row p-2 justify-center">
          <TouchableOpacity
            className="bg-secondary p-4 mt-10 -mb-1 rounded-full"
            onPress={() => router.push("/papers")}>

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

export default translatedPapers

const styles = StyleSheet.create({})