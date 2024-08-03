import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, Animated, TouchableWithoutFeedback } from 'react-native';
import { TextInput, Badge } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import * as DocumentPicker from 'expo-document-picker';
import { images, icons } from '../../constants';
import { Link, router } from 'expo-router';
import { FlatList } from 'react-native';


const synthese= ({ initialMenuVisible = false }) => {
  const [menuVisible, setMenuVisible] = useState(initialMenuVisible);
  const animation = useState(new Animated.Value(0))[0];
  const [opening, setOpening] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'English', value: 'eng' },
    { label: 'French', value: 'fr' },
    { label: 'Arabic', value: 'ar' },
    { label: 'Spanish', value: 'span' },
    { label: 'Italian', value: 'ita' },
  ]);

  const [subject, setSubject] = useState('');
  const [num, setNum] = useState('');
  const [notes, setNotes] = useState('');



  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        setMenuVisible(false);
      });
    } else {
      setMenuVisible(true);
      Animated.timing(animation, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start();
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

  const [selectedId, setSelectedId] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
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
     
      <FlatList
        data={[]}
        ListHeaderComponent={
          <>

        <View className="flex flex-row items-center justify-between px-4 py-2">

          <View className="flex flex-row items-center mt-20 ml-10">
            <Badge
              className="bg-secondary self-center top-8 text-xl font-ibbrita justify-items-center -mr-5"
              size={30}
            >
            </Badge>
            <View className="border-2 border-secondary rounded-full relative p-1 flex-row-reverse">
              <Image
                source={images.pic}
                resizeMode="contain"
                className="w-24 h-24 rounded-full"
              />
            </View>
            <Link href={'/profile'}>
              <Text className="text-xl top-3 ml-2 font-ibbrita text-ali">
                Visit Profile
              </Text>
            </Link>
          </View>
          <TouchableOpacity onPress={toggleMenu} className="p-4 mr-2 rounded-lg shadow-lg bg-primary">
            <Image source={icons.menu} className="w-8 h-8" />
          </TouchableOpacity>
        </View>

        {menuVisible && (

          <Animated.View style={[animatedStyle, { position: 'absolute', width: '100%', height: '100%', right: 0, zIndex: 20 }]}>
            <View className="w-1/0.2 h-full bg-gray-900 z-20 p-4 shadow-lg absolute right-0">
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
                  resizeMode="contain"
                  className="w-5 h-5 ml-4"
                />
              </TouchableOpacity>
            </View>
          </Animated.View>

        )}

        <View className="w-full flex items-center px-4 pt-8">
          <TouchableOpacity className="flex w-full items-left p-4 mx-2 bg-white rounded-2xl border-2 shadow-md">
            <Image
              source={images.Synthese}
              resizeMode="contain"
              className="w-16 h-16"
            />
            <Text className="mt-2 font-rbrita">Synthesis of documents</Text>
          </TouchableOpacity>

          <TextInput
            className="w-full h-5 my-4 p-4 text-left bg-transparent rounded-2xl border-2"
            value={subject}
            onChangeText={setSubject}
            placeholder="Subject"
          />

          <DropDownPicker
            open={opening}
            value={value}
            items={items}
            setOpen={setOpening}
            setValue={setValue}
            setItems={setItems}
            placeholder="Choose Languages"
            className="w-full my-2 p-2 text-left bg-transparent rounded-2xl border-2"
          />

          <TextInput
            className="w-full h-5 my-4 p-4 text-left bg-transparent rounded-2xl border-2"
            value={num}
            onChangeText={setNum}
            placeholder="Subject"
          />

          <TextInput
            className="w-full p-4 mb-4 text-left bg-white rounded-2xl border-2"
            value={notes}
            onChangeText={setNotes}
            placeholder="Notes for the Translator *"
            multiline
            numberOfLines={4}
          />

          <View className='flex-row space-x-10 justify-center mt-3'>
            <TouchableOpacity
              className="bg-black p-4 w-6/2 self-center rounded-full"
              onPress={() => router.push("/synthese")}>

              <Text className="text-white text-center font-rbrita">
                Get A Quote
              </Text>

            </TouchableOpacity>
            <TouchableOpacity
              className="bg-black p-3.5 w-6/2 self-center flex-row space-x-1  rounded-full"
              onPress={pickDocument}>

              <Text className="text-white text-center font-rbrita">
                Upload file
              </Text>
              <Image
                source={icons.Upload2}
                resizeMode="contain"
                size={24}
                className="self-end justify-items-end"
              />
            </TouchableOpacity>
          </View>

        </View>
        </>
          
        }
        
        keyExtractor={(item, index) => index.toString()}
        
      />
      </SafeAreaView>
      </TouchableWithoutFeedback>
  );
};

export default synthese;
