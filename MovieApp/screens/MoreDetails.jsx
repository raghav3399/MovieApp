import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const MoreDetails = ({ route }) => {
  const { movie, tvShow } = route.params;
  const item = movie || tvShow;

  if (!item || (!item.hasOwnProperty('title') && !item.hasOwnProperty('name'))) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Title Not Available</Text>
        {/* You can add default content or handle this case as needed */}
      </View>
    );
  }

  const title = item.title || item.name; // Use title for movies, name for TV shows

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
        style={styles.posterImage}
      />
      <Text style={styles.description}>{item.overview}</Text>
      <Text style={styles.popularity}>
        Popularity: {item.popularity} | Release Date: {item.release_date}
      </Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 45,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 60,
    textAlign: 'center',
  },
  posterImage: {
    width: '80%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 23
  },
  popularity: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    width: '100%'
  },
});

export default MoreDetails;
