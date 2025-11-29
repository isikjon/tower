import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, ScrollView, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StarIcon,
  TelegramIcon,
  ShareIcon,
  MessageIcon,
  PremiumIcon,
  PrivacyIcon,
  DataSourceIcon,
} from "@/components/icons";

interface SettingsItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  index: number;
}

const SettingsItem: React.FC<SettingsItemProps> = ({
  icon,
  title,
  subtitle,
  onPress,
  index,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        delay: index * 50,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 400,
        delay: index * 50,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY }] }}>
      <TouchableOpacity
        onPress={onPress}
        className="flex-row items-center py-4 px-4"
      >
        <View className="mr-4">{icon}</View>
        <View className="flex-1">
          <Text className="font-roboto text-base text-gray-900">{title}</Text>
          {subtitle && (
            <Text className="font-roboto text-sm text-gray-400 mt-0.5">
              {subtitle}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export const SettingsScreen: React.FC = () => {
  const headerAnim = useRef(new Animated.Value(0)).current;
  const cardAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(100, [
      Animated.timing(headerAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(cardAnim, {
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
        <Text className="font-roboto-bold text-xl text-gray-900">Настройки</Text>
      </Animated.View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <Animated.View
          style={{
            opacity: cardAnim,
            transform: [{
              translateY: cardAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              }),
            }],
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#F8FAFC",
              marginHorizontal: 16,
              marginTop: 16,
              borderRadius: 16,
              paddingVertical: 20,
              paddingHorizontal: 16,
            }}
          >
            <Text className="font-roboto-bold text-lg text-gray-900 mb-2">
              Оценить приложение
            </Text>
            <View className="flex-row">
              <StarIcon size={24} color="#FFC107" filled={true} />
              <StarIcon size={24} color="#FFC107" filled={true} />
              <StarIcon size={24} color="#FFC107" filled={true} />
              <StarIcon size={24} color="#FFC107" filled={true} />
              <StarIcon size={24} color="#E0E0E0" filled={true} />
            </View>
          </TouchableOpacity>
        </Animated.View>

        <View className="mt-6 px-4">
          <Text className="font-roboto-bold text-base text-gray-900 mb-2">
            Основное
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F8FAFC",
            marginHorizontal: 16,
            borderRadius: 16,
          }}
        >
          <SettingsItem
            index={0}
            icon={<TelegramIcon size={24} color="#16A1E1" />}
            title="Мы в Telegram"
          />
          <View className="h-px bg-gray-200 mx-4" />
          <SettingsItem
            index={1}
            icon={<ShareIcon size={24} color="#16A1E1" />}
            title="Поделиться приложением"
          />
          <View className="h-px bg-gray-200 mx-4" />
          <SettingsItem
            index={2}
            icon={<MessageIcon size={24} color="#16A1E1" />}
            title="Написать разработчику"
          />
          <View className="h-px bg-gray-200 mx-4" />
          <SettingsItem
            index={3}
            icon={<PremiumIcon size={24} color="#16A1E1" />}
            title="Купить Premium"
          />
          <View className="h-px bg-gray-200 mx-4" />
          <SettingsItem
            index={4}
            icon={<PrivacyIcon size={24} color="#16A1E1" />}
            title="Условия использования"
          />
        </View>

        <View className="mt-6 px-4">
          <Text className="font-roboto-bold text-base text-gray-900 mb-2">
            Карта
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#F8FAFC",
            marginHorizontal: 16,
            borderRadius: 16,
            marginBottom: 24,
          }}
        >
          <SettingsItem
            index={5}
            icon={<DataSourceIcon size={24} color="#16A1E1" />}
            title="Источник данных"
            subtitle="Мир (Средняя точность)"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
