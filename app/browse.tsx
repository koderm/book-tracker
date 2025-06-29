import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const books = [
  {
"title": "The Name of the Wind",
"author": "Patrick Rothfuss",
"isbn": "ISBN_13 9780575087057",
"image_url": "https://books.google.com/books/content?id=BcG2dVRXKukC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
"description": "'I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep. My name is Kvothe. You may have heard of me' So begins the tale of Kvothe - currently known as Kote, the unassuming innkeepter - from his childhood in a troupe of traveling players, through his years spent as a near-feral orphan in a crime-riddled city, to his daringly brazen yet successful bid to enter a difficult and dangerous school of magic. In these pages you will come to know Kvothe the notorious magician, the accomplished thief, the masterful musician, the dragon-slayer, the legend-hunter, the lover, the thief and the infamous assassin. The Name of the Wind is fantasy at its very best, and an astounding must-read title."
},
  {
    title: "Dune",
    author: "Frank Herbert",
    isbn: "ISBN_13 9780441013593",
    image_url: "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs-api",
    description: "Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny."
  },
  // Add more book objects as needed
];

const BrowseScreen = () => {
  const renderItem = ({ item }: { item: typeof books[0] }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>by {item.author}</Text>
        <Text style={styles.isbn}>{item.isbn}</Text>
        <Text style={styles.description} numberOfLines={3}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.isbn}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default BrowseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 16,
    padding: 12,
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#eee',
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
    marginBottom: 2,
  },
  author: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  isbn: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#333',
  },
});