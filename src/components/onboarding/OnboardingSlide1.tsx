import React from "react";
import { View } from "react-native";
import Svg, { Path, Circle, Rect, G, Defs, LinearGradient, Stop } from "react-native-svg";

export const OnboardingSlide1: React.FC = () => {
  return (
    <View className="flex-1 bg-[#E8F4E8]">
      <Svg width="100%" height="100%" viewBox="0 0 200 400">
        <Defs>
          <LinearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#E8F4E8" />
            <Stop offset="100%" stopColor="#D4EBD4" />
          </LinearGradient>
          <LinearGradient id="towerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#16A1E1" />
            <Stop offset="100%" stopColor="#0D8ECF" />
          </LinearGradient>
          <LinearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#16A1E1" stopOpacity="0.4" />
            <Stop offset="100%" stopColor="#16A1E1" stopOpacity="0" />
          </LinearGradient>
        </Defs>
        
        <Rect x="0" y="0" width="200" height="400" fill="url(#mapGradient)" />
        
        <Rect x="15" y="60" width="50" height="35" fill="#C8D8C8" rx="3" />
        <Rect x="75" y="45" width="40" height="60" fill="#B8CBB8" rx="3" />
        <Rect x="125" y="70" width="45" height="30" fill="#C8D8C8" rx="3" />
        <Rect x="25" y="110" width="60" height="45" fill="#A8C8A8" rx="3" />
        <Rect x="140" y="115" width="45" height="50" fill="#C8D8C8" rx="3" />
        
        <Path d="M0 170 L70 150 L140 185 L200 160" stroke="#8A8A8A" strokeWidth="4" fill="none" />
        <Path d="M0 240 L100 200 L200 255" stroke="#8A8A8A" strokeWidth="4" fill="none" />
        
        <Rect x="30" y="210" width="45" height="55" fill="#F5E6D3" rx="3" />
        <Rect x="85" y="230" width="35" height="35" fill="#E8D4C4" rx="3" />
        <Rect x="130" y="200" width="50" height="70" fill="#F5E6D3" rx="3" />
        
        <Rect x="15" y="300" width="70" height="45" fill="#C8D8C8" rx="3" />
        <Rect x="100" y="290" width="50" height="60" fill="#A8C8A8" rx="3" />
        <Rect x="160" y="310" width="35" height="50" fill="#C8D8C8" rx="3" />
        
        <G>
          <Circle cx="100" cy="200" r="35" fill="url(#pulseGradient)" />
          <Circle cx="100" cy="200" r="22" fill="#16A1E1" opacity="0.25" />
          <Circle cx="100" cy="200" r="10" fill="#16A1E1" />
          <Circle cx="100" cy="200" r="4" fill="#FFFFFF" />
        </G>
        
        <G>
          <Rect x="48" y="85" width="8" height="35" fill="url(#towerGradient)" rx="2" />
          <Circle cx="52" cy="75" r="10" fill="#16A1E1" />
          <Path d="M42 70 L62 70 M52 60 L52 80" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <Circle cx="52" cy="75" r="15" fill="none" stroke="#16A1E1" strokeWidth="2" opacity="0.3" />
        </G>
        
        <G>
          <Rect x="148" y="145" width="8" height="35" fill="url(#towerGradient)" rx="2" />
          <Circle cx="152" cy="135" r="10" fill="#16A1E1" />
          <Path d="M142 130 L162 130 M152 120 L152 140" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <Circle cx="152" cy="135" r="15" fill="none" stroke="#16A1E1" strokeWidth="2" opacity="0.3" />
        </G>
        
        <G>
          <Rect x="68" y="275" width="8" height="35" fill="url(#towerGradient)" rx="2" />
          <Circle cx="72" cy="265" r="10" fill="#16A1E1" />
          <Path d="M62 260 L82 260 M72 250 L72 270" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <Circle cx="72" cy="265" r="15" fill="none" stroke="#16A1E1" strokeWidth="2" opacity="0.3" />
        </G>
        
        <Rect x="12" y="355" width="40" height="35" fill="white" rx="10" opacity="0.95" />
        <Rect x="60" y="355" width="40" height="35" fill="white" rx="10" opacity="0.95" />
        <Rect x="108" y="355" width="40" height="35" fill="white" rx="10" opacity="0.95" />
        <Rect x="156" y="355" width="32" height="35" fill="white" rx="10" opacity="0.95" />
        
        <Circle cx="22" cy="30" r="18" fill="white" opacity="0.95" />
        <Path d="M16 30 L28 30 M22 24 L22 36" stroke="#16A1E1" strokeWidth="2.5" strokeLinecap="round" />
      </Svg>
    </View>
  );
};
