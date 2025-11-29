import React from "react";
import { View } from "react-native";
import Svg, { Circle, Rect, G, Path, Defs, LinearGradient, Stop } from "react-native-svg";

export const OnboardingSlide3: React.FC = () => {
  return (
    <View className="flex-1 bg-white">
      <Svg width="100%" height="100%" viewBox="0 0 200 400">
        <Defs>
          <LinearGradient id="blueHeader" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#20B2F0" />
            <Stop offset="100%" stopColor="#16A1E1" />
          </LinearGradient>
          <LinearGradient id="towerIcon" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#20B2F0" />
            <Stop offset="100%" stopColor="#0D8ECF" />
          </LinearGradient>
        </Defs>
        
        <Rect x="0" y="0" width="200" height="400" fill="#FFFFFF" />
        
        <Rect x="0" y="20" width="200" height="48" fill="url(#blueHeader)" />
        <Circle cx="26" cy="44" r="14" fill="white" opacity="0.2" />
        <Path d="M21 44 L31 44 M26 39 L26 49" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <Rect x="55" y="38" width="90" height="12" fill="white" opacity="0.25" rx="6" />
        
        <Circle cx="100" cy="130" r="50" fill="#16A1E1" opacity="0.08" />
        <Circle cx="100" cy="130" r="35" fill="#16A1E1" opacity="0.15" />
        <Circle cx="100" cy="130" r="20" fill="url(#towerIcon)" />
        
        <G>
          <Rect x="95" y="105" width="10" height="35" fill="url(#towerIcon)" rx="2" />
          <Circle cx="100" cy="95" r="12" fill="url(#towerIcon)" />
          <Path d="M85 90 L75 80 M115 90 L125 80" stroke="#16A1E1" strokeWidth="3" strokeLinecap="round" />
          <Path d="M85 100 L78 107 M115 100 L122 107" stroke="#16A1E1" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        </G>
        
        <Rect x="15" y="195" width="170" height="1" fill="#E5E7EB" />
        
        <Rect x="15" y="210" width="80" height="12" fill="#1F2937" rx="6" />
        
        <G>
          <Circle cx="32" cy="248" r="10" fill="#16A1E1" opacity="0.1" />
          <Circle cx="32" cy="248" r="4" fill="#16A1E1" />
          <Rect x="52" y="240" width="55" height="8" fill="#6B7280" rx="4" />
          <Rect x="52" y="253" width="100" height="10" fill="#1F2937" rx="5" />
        </G>
        
        <G>
          <Circle cx="32" cy="293" r="10" fill="#10B981" opacity="0.1" />
          <Circle cx="32" cy="293" r="4" fill="#10B981" />
          <Rect x="52" y="285" width="40" height="8" fill="#6B7280" rx="4" />
          <Rect x="52" y="298" width="80" height="10" fill="#1F2937" rx="5" />
        </G>
        
        <G>
          <Circle cx="32" cy="338" r="10" fill="#F59E0B" opacity="0.1" />
          <Circle cx="32" cy="338" r="4" fill="#F59E0B" />
          <Rect x="52" y="330" width="50" height="8" fill="#6B7280" rx="4" />
          <Rect x="52" y="343" width="110" height="10" fill="#1F2937" rx="5" />
        </G>
        
        <G>
          <Circle cx="32" cy="378" r="10" fill="#8B5CF6" opacity="0.1" />
          <Circle cx="32" cy="378" r="4" fill="#8B5CF6" />
          <Rect x="52" y="370" width="65" height="8" fill="#6B7280" rx="4" />
          <Rect x="52" y="383" width="90" height="10" fill="#1F2937" rx="5" />
        </G>
      </Svg>
    </View>
  );
};
