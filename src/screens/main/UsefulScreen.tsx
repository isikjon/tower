import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, ScrollView, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  SearchIcon,
  SpeedIcon,
  InfoIcon,
  TelecomIcon,
  NetworkInfoIcon,
  EsimIcon,
} from "@/components/icons";

interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  onPress?: () => void;
  index: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, onPress, index }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        delay: index * 80,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        delay: index * 80,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={{
        width: "47%",
        opacity: fadeAnim,
        transform: [{ scale: scaleAnim }],
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: "#F8FAFC",
          borderRadius: 16,
          paddingVertical: 20,
          paddingHorizontal: 12,
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <View className="mb-2">{icon}</View>
        <Text className="font-roboto-medium text-sm text-gray-700 text-center">
          {title}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export const UsefulScreen: React.FC = () => {
  const headerAnim = useRef(new Animated.Value(0)).current;
  const searchAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(150, [
      Animated.timing(headerAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(searchAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <Animated.View
        style={{ opacity: headerAnim }}
        className="px-4 py-4 border-b border-gray-100"
      >
        <Text className="font-roboto-bold text-xl text-gray-900">Полезное</Text>
      </Animated.View>

      <ScrollView className="flex-1 px-4 pt-4" showsVerticalScrollIndicator={false}>
        <Animated.View
          style={{
            opacity: searchAnim,
            transform: [{
              translateY: searchAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              }),
            }],
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F8FAFC",
              borderRadius: 16,
              paddingVertical: 16,
              paddingHorizontal: 16,
              marginBottom: 16,
            }}
          >
            <SearchIcon size={40} color="#16A1E1" />
            <View className="ml-3">
              <Text className="font-roboto-bold text-base text-gray-900">Поиск</Text>
              <Text className="font-roboto text-sm text-gray-500">
                по MCC / MNC / Сети / Стране
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <MenuItem
            index={0}
            icon={<SpeedIcon size={36} color="#16A1E1" />}
            title="Тест скорости"
          />
          <MenuItem
            index={1}
            icon={<InfoIcon size={36} color="#16A1E1" />}
            title="Вопросы и ответы"
          />
          <MenuItem
            index={2}
            icon={<TelecomIcon size={36} color="#16A1E1" />}
            title="Лучший оператор"
          />
          <MenuItem
            index={3}
            icon={<NetworkInfoIcon size={36} color="#16A1E1" />}
            title="Инфо о сети"
          />
          <MenuItem
            index={4}
            icon={<EsimIcon size={36} color="#16A1E1" />}
            title="eSim Магазин"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
