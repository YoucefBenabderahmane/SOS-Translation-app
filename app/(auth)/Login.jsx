import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustumeButton from '../../components/CustumeButton'
import { Link, router } from 'expo-router'

const Login = () => {
  
  const [form, setForm]= useState({
    email:'',
    password:''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleEmailChange = (email) => {
    setForm({ ...form, email: email.trim() });
  };


  const handleSubmit = () => {
    if (!emailRegex.test(form.email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    if (form.password === "") {
      Alert.alert("Error", "Please fill in the password field");
      return;
    }

    setIsSubmitting(true);

    // Simulate sign-in process
    setTimeout(() => {
        router.replace("/profile");
        setIsSubmitting(false);
      }, 1000);
  };
    

   

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[90vh] px-4 my-10 ">
         <Image 
         source={images.Logincard}
         resizemode='contain'
         className="w-[300px] h-[250px] mb-2"
         />
         
         <FormField
         title="Email"
         value={form.email}
         handleChangeText={(e) => setForm({ ...form, email: e})}
         onChangeText={handleEmailChange}
         otherStyles="mt-6"
         placeholder={"Email"}
         keyboardType="email-adress"
         />

         <FormField
         title="Password"
         value={form.password}
         handleChangeText={(e) => setForm({ ...form, password: e})}
         otherStyles="mt-6"
         placeholder={"Password"}
         />
        
        <CustumeButton
            title="Sign in"
            handlePress={handleSubmit}
            containerStyles="w-full m-10"
            isLoading={isSubmitting}
          />
        <Text className="font-rbrita m-4">Not A Member ?</Text>
        <Link href={'/Registration'}>
        <Text className="font-ibbrita m-4">Register Now</Text>
        </Link>   
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login