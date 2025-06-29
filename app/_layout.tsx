import { Tabs } from "expo-router";
import { IconSymbol } from "../components/ui/IconSymbol";

const RootLayout = () => (
  <Tabs>
    <Tabs.Screen
      name="Home"
      options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
      }}
    />
    <Tabs.Screen name="MyBooks" options={{ title: "My Books" }} />
    <Tabs.Screen name="Browse" options={{ title: "Browse" }} />
  </Tabs>
);

export default RootLayout;
