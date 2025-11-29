import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

interface PaginationDotProps {
  isActive: boolean;
  index: number;
}

export const PaginationDot: React.FC<PaginationDotProps> = ({
  isActive,
}) => {
  const opacity = useRef(new Animated.Value(isActive ? 1 : 0.5)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: isActive ? 1 : 0.5,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [isActive]);

  return (
    <View style={{ marginHorizontal: 4 }}>
      <Animated.View
        style={{
          width: isActive ? 24 : 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: isActive ? "#16A1E1" : "#B8E2F8",
          opacity,
        }}
      />
    </View>
  );
};
