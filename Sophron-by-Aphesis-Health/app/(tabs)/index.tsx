import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { FA5Style } from "@expo/vector-icons/build/FontAwesome5";

const index = () => {
  return (
    <SafeAreaView className="flex-1 px-5 space-y-5 bg-[#b2ffff]">
      <View className="flex-row w-full items-center justify-between">
        <Text className="text-lg">Hello Name</Text>
        <View className="w-10 h-10">
          <Image
            source={require("@/assets/images/user.png")}
            className="w-full h-full rounded-full"
            resizeMode="contain"
          />
        </View>
      </View>

      <View className="flex-row w-full items-center space-x-3 border-2 rounded-lg py-2 px-3 border-gray-300">
        <Feather name="search" size={24} color="gray" />
        <TextInput placeholder="Search" />
      </View>

      <View className="flex-row items-center justify-between">
        <Text className="text-lg">Top Doctor</Text>
        <Pressable className="text-lg border-2 border-gray-300 rounded-lg py-2 px-3">
          <Text>See More</Text>
        </Pressable>
      </View>

      <ScrollView className="space-y-5" showsVerticalScrollIndicator={false}>
        
        <View className="flex-row items-center justify-between bg-[#30949d] py-5 px-3 rounded-xl">
          <View className="w-10 h-10">
            <Image
              source={require("@/assets/images/user.png")}
              className="w-full h-full rounded-full"
              resizeMode="contain"
            />
          </View>
          <View>
            <Text>Name of doctor</Text>
            <Text>Position/ ward</Text>
          </View>

          <View>
            <Text>Rating</Text>
          </View>
        </View>
        
        <View className="flex-row items-center justify-between bg-[#30949d] py-5 px-3 rounded-xl">
          <View className="w-10 h-10">
            <Image
              source={require("@/assets/images/user.png")}
              className="w-full h-full rounded-full"
              resizeMode="contain"
            />
          </View>
          <View>
            <Text>Name of doctor</Text>
            <Text>Position/ ward</Text>
          </View>

          <View>
            <Text>Rating</Text>
          </View>
        </View>
        
        <View className="flex-row items-center justify-between bg-[#30949d] py-5 px-3 rounded-xl">
          <View className="w-10 h-10">
            <Image
              source={require("@/assets/images/user.png")}
              className="w-full h-full rounded-full"
              resizeMode="contain"
            />
          </View>
          <View>
            <Text>Name of doctor</Text>
            <Text>Position/ ward</Text>
          </View>

          <View>
            <Text>Rating</Text>
          </View>
        </View>
        
        <View className="flex-row items-center justify-between bg-[#30949d] py-5 px-3 rounded-xl">
          <View className="w-10 h-10">
            <Image
              source={require("@/assets/images/user.png")}
              className="w-full h-full rounded-full"
              resizeMode="contain"
            />
          </View>
          <View>
            <Text>Name of doctor</Text>
            <Text>Position/ ward</Text>
          </View>

          <View>
            <Text>Rating</Text>
          </View>
        </View>
        
        <View className="flex-row items-center justify-between bg-[#30949d] py-5 px-3 rounded-xl">
          <View className="w-10 h-10">
            <Image
              source={require("@/assets/images/user.png")}
              className="w-full h-full rounded-full"
              resizeMode="contain"
            />
          </View>
          <View>
            <Text>Name of doctor</Text>
            <Text>Position/ ward</Text>
          </View>

          <View>
            <Text>Rating</Text>
          </View>
        </View>
        
        <View className="flex-row items-center justify-between bg-[#30949d] py-5 px-3 rounded-xl">
          <View className="w-10 h-10">
            <Image
              source={require("@/assets/images/user.png")}
              className="w-full h-full rounded-full"
              resizeMode="contain"
            />
          </View>
          <View>
            <Text>Name of doctor</Text>
            <Text>Position/ ward</Text>
          </View>

          <View>
            <Text>Rating</Text>
          </View>
        </View>
        
        <View className="flex-row items-center justify-between bg-[#30949d] py-5 px-3 rounded-xl">
          <View className="w-10 h-10">
            <Image
              source={require("@/assets/images/user.png")}
              className="w-full h-full rounded-full"
              resizeMode="contain"
            />
          </View>
          <View>
            <Text>Name of doctor</Text>
            <Text>Position/ ward</Text>
          </View>

          <View>
            <Text>Rating</Text>
          </View>
        </View>
        
        <View className="flex-row items-center justify-between bg-[#30949d] py-5 px-3 rounded-xl">
          <View className="w-10 h-10">
            <Image
              source={require("@/assets/images/user.png")}
              className="w-full h-full rounded-full"
              resizeMode="contain"
            />
          </View>
          <View>
            <Text>Name of doctor</Text>
            <Text>Position/ ward</Text>
          </View>

          <View>
            <Text>Rating</Text>
          </View>
        </View>
        
        <View className="flex-row items-center justify-between bg-[#30949d] py-5 px-3 rounded-xl">
          <View className="w-10 h-10">
            <Image
              source={require("@/assets/images/user.png")}
              className="w-full h-full rounded-full"
              resizeMode="contain"
            />
          </View>
          <View>
            <Text>Name of doctor</Text>
            <Text>Position/ ward</Text>
          </View>

          <View>
            <Text>Rating</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
