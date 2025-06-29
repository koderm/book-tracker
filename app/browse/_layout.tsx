import { Stack } from "expo-router";

const BrowseStack = () => (
  <Stack>
    <Stack.Screen name="BrowseScreen" options={{ title: "Browse" }} />
    <Stack.Screen name="BookDetailsScreen" options={{ title: "Book Details" }} />
    {/* Add more screens like book-details here */}
  </Stack>
);

export default BrowseStack;