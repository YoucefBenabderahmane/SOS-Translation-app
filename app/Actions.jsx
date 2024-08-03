import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Actions = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View className="flex mt-20 items-center ">
      <Text className="text-xl font-ibbrita">There is no Actions yet 😊 </Text>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Actions

const styles = StyleSheet.create({})