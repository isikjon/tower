import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const filterButtons = ["Все", "2G", "3G", "4G", "5G"];

export const MapScreen: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("Все");
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const filterAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(200, [
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(filterAnim, {
        toValue: 1,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View className="flex-1 bg-gray-200">
      <Animated.View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          opacity: fadeAnim,
        }}
      >
        <View className="bg-white p-6 rounded-2xl shadow-lg mx-6">
          <Text className="font-roboto-medium text-lg text-gray-800 text-center">
            Необходимо подключить API карты
          </Text>
          <Text className="font-roboto text-sm text-gray-500 text-center mt-2">
            Google Maps / MapBox / OpenStreetMap
          </Text>
        </View>
      </Animated.View>

      <SafeAreaView edges={["bottom"]} style={{ backgroundColor: "transparent" }}>
        <Animated.View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 12,
            gap: 8,
            opacity: filterAnim,
            transform: [{
              translateY: filterAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            }],
          }}
        >
          {filterButtons.map((filter) => (
            <TouchableOpacity
              key={filter}
              onPress={() => setActiveFilter(filter)}
              style={{
                backgroundColor: activeFilter === filter ? "#16A1E1" : "#FFFFFF",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 20,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 3,
              }}
            >
              <Text
                style={{
                  fontFamily: "Roboto_500Medium",
                  fontSize: 14,
                  color: activeFilter === filter ? "#FFFFFF" : "#6B7280",
                }}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </Animated.View>
      </SafeAreaView>
    </View>
  );
};
