import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ movie, onPressDetails }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
        style={styles.cardImage}
      />
      <View style={styles.cardDetails}>
        <Text style={styles.cardTitle}>{movie ? (movie.title ? movie.title : movie.name) : 'Title Not Available'}</Text>
        <Text style={styles.cardText}>Popularity: {movie.popularity}</Text>
        <Text style={styles.cardText}>Release Date: {movie.release_date}</Text>
        <TouchableOpacity
          style={styles.moreDetailsButton}
          onPress={() => onPressDetails(movie)}
        >
          <Text style={styles.buttonText}>More Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 4,
      marginBottom: 16,
      padding: 8,
      shadowColor: 'rgba(0,0,0,0.2)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 2,
    },
    cardImage: {
        width: 120,
        height: 120,
    },
    cardDetails: {
        flex: 1,
        marginLeft: 8,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardText: {
        fontSize: 16,
        marginBottom: 4,
    },
    moreDetailsButton: {
        backgroundColor: '#17C8EB',
        padding: 15,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 15,
        color: '#E5FBFF',
        fontWeight: 'bold',
    },
});

export default Card;
