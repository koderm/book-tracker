import { StyleSheet, Text, View } from 'react-native';

const BrowseScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Browse Books</Text>
    <Text style={styles.description}>Explore a collection of books here.</Text>
  </View>
);

export default BrowseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
});