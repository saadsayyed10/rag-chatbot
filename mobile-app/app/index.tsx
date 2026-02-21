import { useAuthStore } from "@/hooks/useAuth";
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    await logout();
    alert("Logged out");
  };

  return (
    <View className="bg-white/70 flex-1 justify-center items-center w-full">
      <Link href={"/(auth)/sign-in"}>
        <Text className="text-blue-500 underline font-semibold text-2xl">
          Login
        </Text>
      </Link>
      <Button title="Logout" onPress={handleLogout} />
      {user && <Text>{user?.email}</Text>}
      {user && <Text>{token}</Text>}
    </View>
  );
}
