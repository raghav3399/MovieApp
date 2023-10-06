import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';
import DropDownMenu from '../components/DropDownMenu';
import {
  fetchAiringTodayTVShows,
  fetchOnTheAirTVShows,
  fetchPopularTVShows,
  fetchTopRatedTVShows,
} from '../MovieApi'; // Import the TV show-related functions

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

const TvShowsScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('popular');
  const categories = [
    { label: 'Airing Today', value: 'airing_today' },
    { label: 'On the Air', value: 'on_the_air' },
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
  ];

  const navigation = useNavigation();

  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        let fetchedTvShows;

        switch (selectedCategory) {
          case 'airing_today':
            fetchedTvShows = await fetchAiringTodayTVShows();
            break;
          case 'on_the_air':
            fetchedTvShows = await fetchOnTheAirTVShows();
            break;
          case 'popular':
            fetchedTvShows = await fetchPopularTVShows();
            break;
          case 'top_rated':
            fetchedTvShows = await fetchTopRatedTVShows();
            break;
          default:
            fetchedTvShows = [];

            break;
        }
        
        setTvShows(fetchedTvShows);
      } catch (error) {
        console.error('Error fetching TV shows', error);
      }
    };

    fetchTvShows();
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
        data={tvShows}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            movie={item}
            onPressDetails={(selectedShow) => {
              navigation.navigate('MoreDetails', { movie: null, tvShow: selectedShow });
            }}
          />
        )}
      />
    </View>
  );
};

export default TvShowsScreen;
