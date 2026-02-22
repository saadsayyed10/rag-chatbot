import { useAuthStore } from "@/hooks/useAuth";
import { View, Text } from "react-native";

const Home = () => {
  const { user } = useAuthStore();
  return (
    <View className="flex-1 justify-center items-center">
      <Text>{user?.email}</Text>
    </View>
  );
};

export default Home;
