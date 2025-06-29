import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const books = [
  { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 4.5 },
  { id: '2', title: '1984', author: 'George Orwell', rating: 4.8 },
  { id: '3', title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 4.7 },
];

const MyBooksScreen = () => {
  const [expandedBookId, setExpandedBookId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedBookId(expandedBookId === id ? null : id);
  };

  const renderItem = ({ item }: { item: { id: string; title: string; author: string; rating: number } }) => {
    const isExpanded = expandedBookId === item.id;

    return (
      <TouchableOpacity style={styles.item} onPress={() => toggleExpand(item.id)}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>by {item.author}</Text>
        {isExpanded && (
          <View style={styles.details}>
            <Text style={styles.detailText}>Author: {item.author}</Text>
            <Text style={styles.detailText}>Rating: {item.rating}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Books</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MyBooksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: '#666',
  },
  details: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  detailText: {
    fontSize: 14,
    color: '#333',
  },
});