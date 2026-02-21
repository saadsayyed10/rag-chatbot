import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="bg-white/70 flex-1 justify-center items-center w-full">
      <Link href={"/(auth)/sign-in"}>
        <Text className="text-blue-500 underline font-semibold text-2xl">
          Login
        </Text>
      </Link>
    </View>
  );
}
