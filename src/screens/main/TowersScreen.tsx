import React, { useEffect, useRef } from "react";
import { View, Text, ScrollView, TouchableOpacity, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TowerLogo, MapIcon } from "@/components/icons";

interface TowerData {
  id: string;
  type: string;
  mcc: string;
  mccCountry: string;
  mnc: string;
  mncOperator: string;
  cid: string;
  distance: string;
}

const demoTowers: TowerData[] = [
  {
    id: "1",
    type: "LTE - 4G",
    mcc: "250",
    mccCountry: "Россия",
    mnc: "1",
    mncOperator: "МТС",
    cid: "149271554",
    distance: "0.00 метров",
  },
  {
    id: "2",
    type: "LTE - 4G",
    mcc: "250",
    mccCountry: "Россия",
    mnc: "2",
    mncOperator: "МегаФон",
    cid: "149271555",
    distance: "120.50 метров",
  },
  {
    id: "3",
    type: "5G",
    mcc: "250",
    mccCountry: "Россия",
    mnc: "99",
    mncOperator: "Билайн",
    cid: "149271556",
    distance: "250.00 метров",
  },
  {
    id: "4",
    type: "3G",
    mcc: "250",
    mccCountry: "Россия",
    mnc: "20",
    mncOperator: "Tele2",
    cid: "149271557",
    distance: "380.75 метров",
  },
  {
    id: "5",
    type: "LTE - 4G",
    mcc: "250",
    mccCountry: "Россия",
    mnc: "1",
    mncOperator: "МТС",
    cid: "149271558",
    distance: "520.00 метров",
  },
];

const TowerCard: React.FC<{ tower: TowerData; index: number }> = ({ tower, index }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(-30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        delay: index * 100,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: 0,
        duration: 400,
        delay: index * 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ translateX }],
      }}
      className="flex-row items-start px-4 py-4 border-b border-gray-100"
    >
      <View className="mr-3">
        <TowerLogo size={42} />
      </View>

      <View className="flex-1">
        <Text className="font-roboto-bold text-base text-gray-900 mb-1">
          {tower.type}
        </Text>

        <View className="flex-row mb-0.5">
          <Text className="font-roboto text-sm text-gray-500 w-24">MCC:</Text>
          <Text className="font-roboto text-sm text-gray-700">
            {tower.mcc} ({tower.mccCountry})
          </Text>
        </View>

        <View className="flex-row mb-0.5">
          <Text className="font-roboto text-sm text-gray-500 w-24">MNC:</Text>
          <Text className="font-roboto text-sm text-gray-700">
            {tower.mnc} ({tower.mncOperator})
          </Text>
        </View>

        <View className="flex-row mb-0.5">
          <Text className="font-roboto text-sm text-gray-500 w-24">CID:</Text>
          <Text className="font-roboto text-sm text-gray-700">{tower.cid}</Text>
        </View>

        <View className="flex-row">
          <Text className="font-roboto text-sm text-gray-500 w-24">Расстояние:</Text>
          <Text className="font-roboto text-sm text-gray-700">{tower.distance}</Text>
        </View>
      </View>

      <TouchableOpacity className="p-2">
        <MapIcon size={26} color="#16A1E1" />
      </TouchableOpacity>
    </Animated.View>
  );
};

export const TowersScreen: React.FC = () => {
  const headerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(headerAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <Animated.View
        style={{ opacity: headerAnim }}
        className="px-4 py-4 border-b border-gray-100"
      >
        <Text className="font-roboto-bold text-xl text-gray-900">Вышки</Text>
      </Animated.View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {demoTowers.map((tower, index) => (
          <TowerCard key={tower.id} tower={tower} index={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
