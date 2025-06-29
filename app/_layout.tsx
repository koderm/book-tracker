import { Tabs } from "expo-router";
import { IconSymbol } from "../components/ui/IconSymbol";

const RootLayout = () => (
  <Tabs>
    <Tabs.Screen name="index" options={{ title: "My Books", tabBarIcon: ({ color }) => <IconSymbol size={28} name="books.vertical.fill" color={color}/> }} />
    <Tabs.Screen name="browse" options={{ title: "Browse", headerShown: false, tabBarIcon: ({ color }) => <IconSymbol size={28} name="magnifyingglass" color={color}/> }} />
  </Tabs>
);

export default RootLayout;
