import React, { useMemo, useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, Animated, TouchableWithoutFeedback, Alert, ActivityIndicator } from 'react-native';
import { TextInput, Badge } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { images, icons } from '../../constants';
import { Link, router } from 'expo-router';
import DropDownPicker from 'react-native-dropdown-picker';
import * as DocumentPicker from 'expo-document-picker';
import { FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { RadioGroup } from 'react-native-radio-buttons-group';

const initialItems = [
  { label: 'English', value: 'eng' },
  { label: 'French', value: 'fr' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Spanish', value: 'span' },
  { label: 'Italian', value: 'ita' },
];

const translator = ({ initialMenuVisible = false }) => {
  const [menuVisible, setMenuVisible] = useState(initialMenuVisible);
  const animation = useState(new Animated.Value(0))[0];
  const [opening, setOpening] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(initialItems);
  const [subject, setSubject] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);  // State for loading indicator

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const [selectedId, setSelectedId] = useState('');
  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: 'Online Section',
        value: 'option1',
      },
      {
        id: '2',
        label: 'Immanence',
        value: 'option2',
      },
    ],
    []
  );

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
      Animated.timing(animation, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        setMenuVisible(true);
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
      setLoading(true);  // Show loading indicator
      let result = await DocumentPicker.getDocumentAsync({});
      if (result.type === 'success') {
        setSelectedFile(result);
        Alert.alert('File Selected', result.name);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);  // Hide loading indicator
    }
  };

  const showAlert = () => {
    Alert.alert("Request Saved ✅");
    setSubject('');
    setNotes('');
    setValue(null);
    setSelectedFile(null);
    setSelectedId('');
    setDate(new Date());
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
                  <Badge size={30} className="bg-secondary self-center top-8 text-xl font-ibbrita justify-items-center -mr-5" />
                  <View className="border-2 border-secondary rounded-full relative p-1 flex-row-reverse">
                    <Image source={images.pic} resizeMode="contain" className="w-24 h-24 rounded-full" />
                  </View>
                  <Link href={'/profile'}>
                    <Text className="text-xl top-3 ml-2 font-ibbrita text-ali">Visit Profile</Text>
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
                <TouchableOpacity className="flex w-full items-left p-4 mx-2 my-2 bg-white rounded-2xl border-2 shadow-md">
                  <Image source={images.trapic} resizeMode="contain" className="w-16 h-16" />
                  <Text className="mt-2 font-rbrita">Book translator</Text>
                </TouchableOpacity>

                <TextInput
                  className="w-full h-5 my-2 p-3.5 text-left bg-transparent rounded-2xl border-2"
                  value={subject}
                  onChangeText={setSubject}
                  placeholder="Subject"
                />

                <TouchableOpacity
                  className="w-full flex-row items-center justify-between p-3 bg-white rounded-2xl border-2 my-2"
                  onPress={showDatepicker}
                >
                  <Text>
                    selected: {date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                  </Text>
                  <Icon name="calendar-outline" size={24} color="gray" />
                </TouchableOpacity>

                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                  />
                )}

                <DropDownPicker
                  open={opening}
                  value={value}
                  items={items}
                  setOpen={setOpening}
                  setValue={setValue}
                  setItems={setItems}
                  placeholder="Choose Language"
                  className="my-2 p-3 text-left bg-transparent rounded-2xl border-2"
                />
                <View className="my-4 self-center font-rbrita">
                  <RadioGroup
                    radioButtons={radioButtons}
                    onPress={setSelectedId}
                    selectedId={selectedId}
                    layout='row'
                  />
                </View>

                <TextInput className="w-full p-4 mb-4 mt-2 text-left bg-white rounded-2xl border-2" value={notes} onChangeText={setNotes} placeholder="Notes for the Translator *" multiline numberOfLines={4} />

                <View className='flex-row space-x-10 justify-center mt-3'>

                  <TouchableOpacity
                    className="bg-black p-4 w-6/2 self-center rounded-full"
                    onPress={showAlert}>

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
                    {loading && <ActivityIndicator size="small" color="#fff" />}
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

export default translator;
