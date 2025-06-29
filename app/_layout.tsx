import { Tabs } from "expo-router";
import { IconSymbol } from "./components/IconSymbol";

const RootLayout = () => (
  <Tabs>
    <Tabs.Screen
      name="home"
      options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
      }}
    />
    <Tabs.Screen name="my-books" options={{ title: "My Books" }} />
    <Tabs.Screen name="browse" options={{ title: "Browse" }} />
  </Tabs>
);

export default RootLayout;
