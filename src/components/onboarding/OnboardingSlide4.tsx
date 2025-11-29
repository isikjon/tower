import React from "react";
import { View } from "react-native";
import Svg, { Circle, Rect, G, Path, Defs, LinearGradient, Stop, RadialGradient } from "react-native-svg";

export const OnboardingSlide4: React.FC = () => {
  return (
    <View className="flex-1 bg-[#0F172A]">
      <Svg width="100%" height="100%" viewBox="0 0 200 400">
        <Defs>
          <LinearGradient id="darkBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#1E293B" />
            <Stop offset="100%" stopColor="#0F172A" />
          </LinearGradient>
          <RadialGradient id="signalGlow" cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor="#16A1E1" stopOpacity="0.4" />
            <Stop offset="100%" stopColor="#16A1E1" stopOpacity="0" />
          </RadialGradient>
          <LinearGradient id="signalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#20B2F0" />
            <Stop offset="100%" stopColor="#16A1E1" />
          </LinearGradient>
          <LinearGradient id="cardDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#1E293B" />
            <Stop offset="100%" stopColor="#172032" />
          </LinearGradient>
        </Defs>
        
        <Rect x="0" y="0" width="200" height="400" fill="url(#darkBg)" />
        
        <Circle cx="100" cy="140" r="70" fill="url(#signalGlow)" />
        
        <Circle cx="100" cy="140" r="65" fill="none" stroke="#16A1E1" strokeWidth="4" opacity="0.15" />
        <Circle cx="100" cy="140" r="50" fill="none" stroke="#16A1E1" strokeWidth="4" opacity="0.25" />
        <Circle cx="100" cy="140" r="35" fill="none" stroke="#16A1E1" strokeWidth="4" opacity="0.4" />
        <Circle cx="100" cy="140" r="20" fill="url(#signalGrad)" />
        <Circle cx="100" cy="140" r="8" fill="white" opacity="0.9" />
        
        <Path d="M100 70 L100 50" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
        <Path d="M145 85 L160 70" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
        <Path d="M165 130 L185 125" stroke="#10B981" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        <Path d="M155 175 L170 190" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
        <Path d="M100 210 L100 225" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        <Path d="M45 175 L30 190" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        
        <Rect x="20" y="250" width="160" height="95" fill="url(#cardDark)" rx="16" />
        
        <Rect x="35" y="270" width="55" height="8" fill="#64748B" rx="4" />
        <Rect x="35" y="285" width="40" height="16" fill="#10B981" rx="6" />
        <Rect x="40" y="290" width="30" height="6" fill="white" opacity="0.3" rx="3" />
        
        <Rect x="110" y="270" width="55" height="8" fill="#64748B" rx="4" />
        <Rect x="110" y="285" width="50" height="16" fill="url(#signalGrad)" rx="6" />
        <Rect x="115" y="290" width="40" height="6" fill="white" opacity="0.3" rx="3" />
        
        <Rect x="35" y="315" width="45" height="8" fill="#64748B" rx="4" />
        <Rect x="35" y="328" width="35" height="12" fill="#F59E0B" rx="5" />
        
        <Rect x="110" y="315" width="50" height="8" fill="#64748B" rx="4" />
        <Rect x="110" y="328" width="45" height="12" fill="#EF4444" rx="5" />
        
        <Rect x="20" y="360" width="160" height="28" fill="url(#signalGrad)" rx="14" />
        <Rect x="70" y="369" width="60" height="10" fill="white" opacity="0.35" rx="5" />
      </Svg>
    </View>
  );
};
