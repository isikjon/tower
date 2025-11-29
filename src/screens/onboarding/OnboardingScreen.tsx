import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ViewToken,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GradientButton } from "@/components/ui";
import {
  OnboardingSlide1,
  OnboardingSlide2,
  OnboardingSlide3,
  OnboardingSlide4,
  PaginationDot,
} from "@/components/onboarding";

const { width, height } = Dimensions.get("window");

interface OnboardingItem {
  id: string;
  title: string;
  description: string;
  SlideComponent: React.FC;
}

const onboardingData: OnboardingItem[] = [
  {
    id: "1",
    title: "Найдите вышки рядом",
    description:
      "Откройте для себя все сотовые вышки поблизости. Приложение автоматически определит ваше местоположение и покажет ближайшие станции.",
    SlideComponent: OnboardingSlide1,
  },
  {
    id: "2",
    title: "Список сотовых вышек",
    description:
      "Просматривайте полный список всех сотовых вышек в вашем районе с информацией о расстоянии и операторе связи.",
    SlideComponent: OnboardingSlide2,
  },
  {
    id: "3",
    title: "Детальная информация",
    description:
      "Получайте подробную информацию о каждой вышке: оператор, тип сети (LTE, 5G), частота и точные координаты.",
    SlideComponent: OnboardingSlide3,
  },
  {
    id: "4",
    title: "Измерение сигнала",
    description:
      "Проверяйте силу сигнала в реальном времени. Находите места с лучшим покрытием сети для стабильной связи.",
    SlideComponent: OnboardingSlide4,
  },
];

interface OnboardingScreenProps {
  onComplete: () => void;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({
  onComplete,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        setCurrentIndex(viewableItems[0].index);
      }
    }
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const handleContinue = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      onComplete();
    }
  };

  const renderItem = ({ item, index }: { item: OnboardingItem; index: number }) => {
    const { SlideComponent } = item;

    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.85, 1, 0.85],
      extrapolate: "clamp",
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.5, 1, 0.5],
      extrapolate: "clamp",
    });

    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [20, 0, 20],
      extrapolate: "clamp",
    });

    const rotateY = scrollX.interpolate({
      inputRange,
      outputRange: ["15deg", "0deg", "-15deg"],
      extrapolate: "clamp",
    });

    return (
      <View 
        className="items-center justify-between" 
        style={{ width, height: height * 0.55 }}
      >
        <View className="flex-1 justify-center items-center px-6">
          <Animated.View
            style={{
              transform: [
                { perspective: 1000 },
                { scale },
                { rotateY },
              ],
              opacity,
            }}
            className="w-[200px] h-[340px] rounded-[32px] border-[8px] border-gray-900 bg-gray-900 overflow-hidden"
          >
            <View className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[20px] bg-gray-900 rounded-b-xl z-10" />
            <View className="flex-1 overflow-hidden rounded-[24px] m-[2px]">
              <SlideComponent />
            </View>
          </Animated.View>
        </View>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={["#F8FCFF", "#EEF6FC", "#FFFFFF"]}
      className="flex-1"
    >
      <View style={{ height: height * 0.08 }} />
      
      <View style={{ height: height * 0.55 }}>
        <Animated.FlatList
          ref={flatListRef}
          data={onboardingData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        />
      </View>

      <View 
        style={{ height: height * 0.37 }} 
        className="px-6"
      >
        <View className="px-4 mb-6">
          <Text className="font-roboto-bold text-[22px] text-gray-900 text-center mb-3">
            {onboardingData[currentIndex].title}
          </Text>
          <Text className="font-roboto text-[15px] text-gray-500 text-center leading-6">
            {onboardingData[currentIndex].description}
          </Text>
        </View>

        <View className="flex-row justify-center items-center mb-6">
          {onboardingData.map((_, index) => (
            <PaginationDot
              key={index}
              index={index}
              isActive={currentIndex === index}
            />
          ))}
        </View>

        <GradientButton
          title="Продолжить"
          onPress={handleContinue}
          colors={["#20B2F0", "#16A1E1", "#0D8ECF"]}
        />
      </View>
    </LinearGradient>
  );
};
