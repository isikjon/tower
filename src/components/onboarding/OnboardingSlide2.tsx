import React from "react";
import { View } from "react-native";
import Svg, { Circle, Rect, G, Path, Defs, LinearGradient, Stop } from "react-native-svg";

export const OnboardingSlide2: React.FC = () => {
  return (
    <View className="flex-1 bg-[#F5F9FC]">
      <Svg width="100%" height="100%" viewBox="0 0 200 400">
        <Defs>
          <LinearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#20B2F0" />
            <Stop offset="100%" stopColor="#16A1E1" />
          </LinearGradient>
          <LinearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#FFFFFF" />
            <Stop offset="100%" stopColor="#FAFCFF" />
          </LinearGradient>
        </Defs>
        
        <Rect x="0" y="0" width="200" height="400" fill="#F5F9FC" />
        
        <Rect x="12" y="30" width="176" height="45" fill="url(#cardGrad)" rx="14" />
        <Circle cx="38" cy="52" r="14" fill="#16A1E1" opacity="0.12" />
        <Path d="M33 52 L43 52 M38 47 L38 57" stroke="#16A1E1" strokeWidth="2" strokeLinecap="round" />
        <Rect x="60" y="47" width="80" height="10" fill="#E8EEF4" rx="5" />
        <Circle cx="168" cy="52" r="14" fill="url(#headerGrad)" />
        <Path d="M163 52 L173 52" stroke="white" strokeWidth="2" strokeLinecap="round" />
        
        <Rect x="12" y="90" width="176" height="72" fill="url(#cardGrad)" rx="14" />
        <Circle cx="46" cy="126" r="22" fill="#16A1E1" opacity="0.12" />
        <G>
          <Rect x="41" y="118" width="10" height="22" fill="#16A1E1" rx="2" />
          <Circle cx="46" cy="110" r="7" fill="#16A1E1" />
          <Path d="M36 108 L30 102 M56 108 L62 102" stroke="#16A1E1" strokeWidth="2" strokeLinecap="round" />
        </G>
        <Rect x="78" y="112" width="70" height="9" fill="#1F2937" rx="4" />
        <Rect x="78" y="126" width="95" height="7" fill="#CBD5E1" rx="3" />
        <Rect x="78" y="140" width="55" height="7" fill="#CBD5E1" rx="3" />
        <Circle cx="170" cy="126" r="6" fill="#10B981" />
        
        <Rect x="12" y="175" width="176" height="72" fill="url(#cardGrad)" rx="14" />
        <Circle cx="46" cy="211" r="22" fill="#10B981" opacity="0.12" />
        <G>
          <Rect x="41" y="203" width="10" height="22" fill="#10B981" rx="2" />
          <Circle cx="46" cy="195" r="7" fill="#10B981" />
          <Path d="M36 193 L30 187 M56 193 L62 187" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        </G>
        <Rect x="78" y="197" width="80" height="9" fill="#1F2937" rx="4" />
        <Rect x="78" y="211" width="90" height="7" fill="#CBD5E1" rx="3" />
        <Rect x="78" y="225" width="60" height="7" fill="#CBD5E1" rx="3" />
        <Circle cx="170" cy="211" r="6" fill="#10B981" />
        
        <Rect x="12" y="260" width="176" height="72" fill="url(#cardGrad)" rx="14" />
        <Circle cx="46" cy="296" r="22" fill="#F59E0B" opacity="0.12" />
        <G>
          <Rect x="41" y="288" width="10" height="22" fill="#F59E0B" rx="2" />
          <Circle cx="46" cy="280" r="7" fill="#F59E0B" />
          <Path d="M36 278 L30 272 M56 278 L62 272" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        </G>
        <Rect x="78" y="282" width="65" height="9" fill="#1F2937" rx="4" />
        <Rect x="78" y="296" width="85" height="7" fill="#CBD5E1" rx="3" />
        <Rect x="78" y="310" width="50" height="7" fill="#CBD5E1" rx="3" />
        <Circle cx="170" cy="296" r="6" fill="#F59E0B" />
        
        <Rect x="12" y="345" width="176" height="45" fill="url(#cardGrad)" rx="14" />
        <Circle cx="42" cy="367" r="18" fill="#EF4444" opacity="0.12" />
        <G>
          <Rect x="38" y="361" width="8" height="18" fill="#EF4444" rx="2" />
          <Circle cx="42" cy="355" r="5" fill="#EF4444" />
        </G>
        <Rect x="70" y="360" width="75" height="8" fill="#1F2937" rx="4" />
        <Rect x="70" y="372" width="50" height="6" fill="#CBD5E1" rx="3" />
        <Circle cx="170" cy="367" r="5" fill="#EF4444" />
      </Svg>
    </View>
  );
};
