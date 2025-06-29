import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

const BookDetailsScreen = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const handleAddToMyBooks = () => {
    // You can implement actual logic here
    Alert.alert('Added!', `${params.title} has been added to My Books.`);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: params.image_url as string }} style={styles.image} />
      <Text style={styles.title}>{params.title}</Text>
      <Text style={styles.author}>by {params.author}</Text>
      <Text style={styles.isbn}>{params.isbn}</Text>
      <Text style={styles.description}>{params.description}</Text>
      <Button title="Add to My Books" onPress={handleAddToMyBooks} />
    </View>
  );
};

export default BookDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  image: {
    width: 120,
    height: 180,
    borderRadius: 6,
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },
  author: {
    fontSize: 16,
    color: '#666',
    marginBottom: 6,
    textAlign: 'center',
  },
  isbn: {
    fontSize: 13,
    color: '#999',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
});