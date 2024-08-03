import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import { icons, images } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center my-8">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-10 h-10 "
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#cc6633",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 0.5,
            borderTopColor: "#232533",
            height: 64,
          },
        }}
      >
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                focused={focused}
              />
            ),
          }}
        />

<Tabs.Screen
          name="papers"
          options={{
            title: "Papers",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.pap}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        
        <Tabs.Screen
          name="translator"
          options={{
            title: "translator",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.trans}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        
       
      
        <Tabs.Screen
          name="synthese"
          options={{
            title: "Synthese",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.Synthese}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        
      </Tabs>

    </>
  );
};

export default TabLayout;