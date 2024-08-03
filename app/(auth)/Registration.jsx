import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustumeButton from '../../components/CustumeButton'
import { Link, router } from 'expo-router'
import { Alert, Image, ScrollView, Text, View } from 'react-native'




const Registration = () => {

  const [form, setForm]= useState({
    firstname:'',
    lastname:'',
    email:'',
    password:'',
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
        Alert.alert("Success", "User signed in successfully");
        router.replace("/homee");
        setIsSubmitting(false);
      }, 1000);
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[90vh] px-4 my-4 ">
        
        <Image 
         source={images.logo2}
         className="w-[160px] h-[115px] my-4"
           resizeMode="contain"
         />
         <Text className="text-secondary text-xl font-ibbrita">Fillup the form</Text>
         
         <FormField
         title="firstname"
         value={form.firstname}
         handleChangeText={(e) => setForm({ ...form, firstname: e})}
         placeholder={"Firstname"}
         otherStyles="mt-10"
         />

         <FormField
         title="lastname"
         value={form.lastname}
         handleChangeText={(e) => setForm({ ...form, lastname: e})}
         placeholder={"Lastname"}
         otherStyles="mt-6"
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
        <Text className="font-rbrita m-4">Have an account already ?</Text>
        <Link href={'/Login'}>
        <Text className="font-ibbrita">Sign in</Text>
        </Link>   
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Registration