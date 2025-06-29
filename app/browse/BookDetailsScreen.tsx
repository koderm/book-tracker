import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text } from 'react-native';
import { createTable, insertOrUpdateBook } from '../../utils/db';

const BookDetailsScreen = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const handleAddToMyBooks = () => {
    createTable();
    insertOrUpdateBook(
      {
        title: params.title as string,
        author: params.author as string,
        isbn: params.isbn as string,
        image_url: params.image_url as string,
        description: params.description as string,
      },
      () => {
        Alert.alert('Added!', `${params.title} has been added to My Books.`);
        router.back();
      },
      (error) => {
        Alert.alert('Error', 'Failed to add book. ', error.message);
      }
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: params.image_url as string }} style={styles.image} />
      <Text style={styles.title}>{params.title}</Text>
      <Text style={styles.author}>by {params.author}</Text>
      <Text style={styles.isbn}>{params.isbn}</Text>
      <Text style={styles.description}>{params.description}</Text>
      <Button title="Add to My Books" onPress={handleAddToMyBooks} />
    </ScrollView>
  );
};

export default BookDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
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