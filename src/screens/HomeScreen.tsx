import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="font-roboto-bold text-2xl text-gray-900">
          Вышки
        </Text>
        <Text className="font-roboto text-base text-gray-500 mt-2">
          Готов к работе
        </Text>
      </View>
    </SafeAreaView>
  );
};
