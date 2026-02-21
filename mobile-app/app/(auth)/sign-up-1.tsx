import {
  View,
  Text,
  TextInput,
  TouchableNativeFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const SignIn = () => {
  const router = useRouter();

  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 justify-center items-center w-full gap-y-4 p-10">
        <View className="flex justify-start items-start w-full gap-y-2">
          <Text className="text-neutral-800 font-semibold italic">Name</Text>
          <TextInput className="h-12 p-2 w-full border border-neutral-400" />
        </View>
        <View className="flex justify-start items-start w-full gap-y-2">
          <Text className="text-neutral-800 font-semibold italic">Surname</Text>
          <TextInput className="h-12 p-2 w-full border border-neutral-400" />
        </View>
        <View className="flex justify-start items-start w-full gap-y-2">
          <Text className="text-neutral-800 font-semibold italic">Email</Text>
          <TextInput className="h-12 p-2 w-full border border-neutral-400" />
        </View>
        <View className="flex justify-center items-center w-full absolute bottom-10 gap-y-2">
          <TouchableOpacity
            onPress={() => router.replace("/(auth)/sign-up-2")}
            className="px-12 py-2 bg-black"
          >
            <Text className="text-neutral-200 font-semibold text-lg">Next</Text>
          </TouchableOpacity>
          <Link href={"/(auth)/sign-in"}>
            <Text className="text-center text-sm">
              Account already exists? Sign in here
            </Text>
          </Link>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default SignIn;
