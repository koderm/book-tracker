import { useMyBooks } from '@/hooks/useMyBooks';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MyBooksScreen = () => {
  const [expandedBookId, setExpandedBookId] = useState<number | null>(null);
  const { books, loading, error } = useMyBooks();

  const toggleExpand = (id: number) => {
    setExpandedBookId(expandedBookId === id ? null : id);
  };

  const renderItem = ({ item }: { item: any }) => {
    const isExpanded = expandedBookId === item.id;

    return (
      <TouchableOpacity style={styles.item} onPress={() => toggleExpand(item.id)}>
        <View style={styles.row}>
          <Image source={{ uri: item.image_url }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>by {item.author}</Text>
            <Text style={styles.isbn}>{item.isbn}</Text>
          </View>
        </View>
        {isExpanded && (
          <View style={styles.details}>
            <Text style={styles.detailText}>{item.description}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#666" />
        <Text>Loading your books...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: 'red' }}>Failed to load books.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Books</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id?.toString() ?? item.isbn}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.empty}>No books found.</Text>}
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
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  image: {
    width: 60,
    height: 90,
    borderRadius: 4,
    marginRight: 12,
    backgroundColor: '#ddd',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: '#666',
  },
  isbn: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
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
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    textAlign: 'center',
    color: '#999',
    marginTop: 40,
    fontSize: 16,
  },
});