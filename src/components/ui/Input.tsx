import React from "react";
import { TextInput, View, Text, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  return (
    <View className="w-full">
      {label && (
        <Text className="font-roboto-medium text-sm text-gray-700 mb-2">
          {label}
        </Text>
      )}
      <TextInput
        className={`w-full bg-gray-100 rounded-xl px-4 py-4 font-roboto text-base text-gray-900 ${
          error ? "border border-red-500" : ""
        } ${className || ""}`}
        placeholderTextColor="#9CA3AF"
        {...props}
      />
      {error && (
        <Text className="font-roboto text-xs text-red-500 mt-1">{error}</Text>
      )}
    </View>
  );
};

