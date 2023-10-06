import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';
import DropDownMenu from '../components/DropDownMenu';
import {
    fetchPopularMovies,
    fetchUpcomingMovies,
    fetchTopRatedMovies,
    fetchNowPlayingMovies,
  } from '../MovieApi';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
});

const MoviesScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState('popular');
    const categories = [
        { label: 'Now Playing', value: 'now_playing' },
        { label: 'Popular', value: 'popular' },
        { label: 'Top Rated', value: 'top_rated' },
        { label: 'Upcoming', value: 'upcoming' },
      ];

    const navigation = useNavigation();

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
          try {
            let fetchedMovies;

            switch (selectedCategory) {
              case 'now_playing':
                fetchedMovies = await fetchNowPlayingMovies();
                break;
              case 'popular':
                fetchedMovies = await fetchPopularMovies();
                break;
              case 'top_rated':
                fetchedMovies = await fetchTopRatedMovies();
                break;
              case 'upcoming':
                fetchedMovies = await fetchUpcomingMovies();
                break;
              default:
                fetchedMovies = [];
                
                break;
            }
            setMovies(fetchedMovies);
          } catch (error) {
            console.error('Error fetching movies', error);
          }
        };
    
        fetchMovies();
    }, [selectedCategory]);

    const handleCategoryChange = (newCategory) => {
        setSelectedCategory(newCategory.value);
    };

    return (
    <View style={styles.container}>
        <DropDownMenu
        data={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        />
        <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <Card
            movie={item}
            onPressDetails={(selectedMovie) => {
                navigation.navigate('MoreDetails', { movie: selectedMovie, tvShow: null });
            }}
            />
        )}
        />
    </View>
    );
}

export default MoviesScreen;
