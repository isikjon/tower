import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";
import { COLORS } from "@/constants";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary" | "outline";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  isLoading = false,
  disabled,
  className,
  ...props
}) => {
  const baseStyles = "py-4 px-6 rounded-xl items-center justify-center";
  
  const variantStyles = {
    primary: "bg-primary",
    secondary: "bg-gray-800",
    outline: "border-2 border-primary bg-transparent",
  };

  const textVariantStyles = {
    primary: "text-white",
    secondary: "text-white",
    outline: "text-primary",
  };

  return (
    <TouchableOpacity
      className={`${baseStyles} ${variantStyles[variant]} ${disabled || isLoading ? "opacity-50" : ""} ${className || ""}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator
          color={variant === "outline" ? COLORS.primary : COLORS.white}
        />
      ) : (
        <Text
          className={`font-roboto-bold text-base ${textVariantStyles[variant]}`}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

