import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ONBOARDING_KEY = "@tower_onboarding_complete";

interface OnboardingState {
  hasCompletedOnboarding: boolean;
  isLoading: boolean;
  checkOnboardingStatus: () => Promise<void>;
  setOnboardingComplete: () => Promise<void>;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  hasCompletedOnboarding: false,
  isLoading: true,

  checkOnboardingStatus: async () => {
    try {
      const value = await AsyncStorage.getItem(ONBOARDING_KEY);
      set({
        hasCompletedOnboarding: value === "true",
        isLoading: false,
      });
    } catch {
      set({ isLoading: false });
    }
  },

  setOnboardingComplete: async () => {
    try {
      await AsyncStorage.setItem(ONBOARDING_KEY, "true");
      set({ hasCompletedOnboarding: true });
    } catch {}
  },
}));
