/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#ff9924';
const primaryColor = "#88CBFF";
const accentColor = "#FF9924";
const secondaryColor = "#E1EFFF"
const shadowColor = "#AAB3BF";
const white = "#FFFFFF";
const black = "#000000";
const gray = "#444444";

// Pastel colors for topics
const shortTermMemoryColor = '#FF8A8A'; // Darker pastel color for short-term memory
const concentrationColor = '#8AFF8A'; // Darker pastel color for concentration
const problemSolvingColor = '#8AB3FF'; // Darker pastel color for problem-solving
const numericalReasoningColor = '#FFB38A'; // Darker pastel color for numerical reasoning
const visualSpatialColor = '#B38AFF'; // Darker pastel color for visual-spatial

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  primary: primaryColor,
  accent: accentColor,
  secondary: secondaryColor,
  shadow: shadowColor,
  white: white,
  black: black,
  gray: gray,
  shortTermMemory: shortTermMemoryColor,
  concentration: concentrationColor,
  problemSolving: problemSolvingColor,
  numericalReasoning: numericalReasoningColor,
  visualSpatial: visualSpatialColor,
};
