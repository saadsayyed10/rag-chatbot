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
import { Link, useRouter } from "expo-router";
import { loginUserAPI } from "@/api/user.api";
import { useAuthStore } from "@/hooks/useAuth";

const SignIn = () => {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await loginUserAPI(email, password);
      const { token, data: user } = res.data;

      setAuth(token, user);
      alert("Logged In");
      router.replace("/");
    } catch (error) {
      console.log(error);
      alert("Login failed... check logs");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 justify-center items-center w-full gap-y-4 p-10">
        <View className="flex justify-start items-start w-full gap-y-2">
          <Text className="text-neutral-800 font-semibold italic">Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            className="h-12 p-2 w-full border border-neutral-400"
          />
        </View>
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
        <View className="flex justify-center items-center w-full absolute bottom-10 gap-y-2">
          <TouchableOpacity
            onPress={handleLogin}
            className="px-12 py-2 bg-black"
          >
            {loading ? (
              <ActivityIndicator />
            ) : (
              <Text className="text-neutral-200 font-semibold text-lg">
                Login
              </Text>
            )}
          </TouchableOpacity>
          <Link href={"/(auth)/sign-up-1"}>
            <Text className="text-center text-sm">
              Account do not exist yet? Sign up here
            </Text>
          </Link>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default SignIn;
