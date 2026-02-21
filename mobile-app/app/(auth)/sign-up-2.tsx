import {
  View,
  Text,
  TextInput,
  TouchableNativeFeedback,
  Keyboard,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useSignUp } from "@/hooks/useSignUp";
import { registerUserAPI } from "@/api/user.api";
import { useAuthStore } from "@/hooks/useAuth";
import { useRouter } from "expo-router";

const SignUp2 = () => {
  const { firstName, lastName, email, reset } = useSignUp();
  const setAuth = useAuthStore((state) => state.setAuth);
  const hydrate = useAuthStore((state) => state.hydrate);
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    if (password !== confirmpassword) {
      alert("Password did not match");
    }
    try {
      const res = await registerUserAPI(firstName, lastName, email, password);
      const { token, data: user } = res.data;

      setAuth(token, user);
      hydrate();
      router.replace("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 justify-center items-center w-full gap-y-4 p-10">
        <View className="flex justify-start items-start w-full gap-y-2">
          <Text className="text-neutral-800 font-semibold italic">
            Password
          </Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            className="h-12 p-2 w-full border border-neutral-400"
          />
        </View>
        <View className="flex justify-start items-start w-full gap-y-2">
          <Text className="text-neutral-800 font-semibold italic">
            Confirm Password
          </Text>
          <TextInput
            value={confirmpassword}
            onChangeText={setConfirmPassword}
            className="h-12 p-2 w-full border border-neutral-400"
          />
        </View>
        <View className="flex justify-center items-center w-full absolute bottom-10 gap-y-2">
          <TouchableOpacity
            onPress={handleSignUp}
            className="px-12 py-2 bg-black"
          >
            {loading ? (
              <ActivityIndicator />
            ) : (
              <Text className="text-neutral-200 font-semibold text-lg">
                Sign Up
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default SignUp2;
