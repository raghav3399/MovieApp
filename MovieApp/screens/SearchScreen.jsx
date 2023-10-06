import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import DropdownMenu from '../components/DropDownMenu';
import Card from '../components/Card'

import {
  fetchMovieSearchResults,
  fetchTVShowSearchResults,
  fetchMultiSearchResults,
} from '../MovieApi';
import { useNavigation } from '@react-navigation/core';

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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#17C8EB',
  }
});

const SearchScreen = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('movie');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    const performSearch = async () => {
      if (searchQuery.trim() === '') {
        // If the search query is empty, clear the results
        setSearchResults([]);
        return;
      }
  
        setIsLoading(true);
        let results = [];
  
      try {
        if (searchType.value === 'movie') {
          results = await fetchMovieSearchResults(searchQuery);
        } else if (searchType.value === 'tv') {
          results = await fetchTVShowSearchResults(searchQuery);
        } else if (searchType.value === 'multi') {
          results = await fetchMultiSearchResults(searchQuery);
        }
        setSearchResults(results);
        
      } catch (error) {
        console.error('Error performing search', error);
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
        <View style={styles.container}>
          <Text style={styles.header}>Search</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your search query"
            onChangeText={(text) => setSearchQuery(text)}
            value={searchQuery}
          />
          <DropdownMenu
            data={[
              { label: 'Movies', value: 'movie' },
              { label: 'TV Shows', value: 'tv' },
              { label: 'Multi-search', value: 'multi' },
            ]}
            onCategoryChange={(value) => setSearchType(value)}
          />
          <Button style={styles.button} title="Search" onPress={performSearch} />
    
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <FlatList
              data={searchResults}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Card
                  movie={item}
                  onPressDetails={(selectedItem) => {
                    navigation.navigate('MoreDetails', { movie: selectedItem, tvShow: null });
                    console.log('Selected Item:', selectedItem);
                  }}
                />
              )}
            />
          )}
        </View>
      );
};

export default SearchScreen;
