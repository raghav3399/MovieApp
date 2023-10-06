const fetch = require('node-fetch');

import { TMDB_API_KEY } from 'react-native-dotenv';
import { AUTH_TOKEN } from 'react-native-dotenv';

const apiKey = TMDB_API_KEY;

const authToken = AUTH_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchPopularMovies = async () => {
    const url = `${BASE_URL}/movie/popular?api_key=${apiKey}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
        }
    }

    try {
        const response = await fetch(url, options);
        if(!response.ok) {
            throw new Error('Error getting a response');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching popular movies', error);
        return [];
    }
}

const fetchUpcomingMovies = async () => {
    const url = `${BASE_URL}/movie/upcoming?api_key=${apiKey}`;
    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
        }
    }

    try {
        const response = await fetch(url, options);
        if(!response.ok) {
            throw new Error('Error getting a response');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching popular movies', error);
        return [];
    }
}

const fetchTopRatedMovies = async () => {
    const url = `${BASE_URL}/movie/top_rated?api_key=${apiKey}`;
    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
        }
    }

    try {
        const response = await fetch(url, options);
        if(!response.ok) {
            throw new Error('Error getting a response');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching popular movies', error);
        return [];
    }
}

const fetchNowPlayingMovies = async () => {
    const url = `${BASE_URL}/movie/now_playing?api_key=${apiKey}`;
    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
        }
    }

    try {
        const response = await fetch(url, options);
        if(!response.ok) {
            throw new Error('Error getting a response');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching popular movies', error);
        return [];
    }
}

const fetchAiringTodayTVShows = async () => {
    const url = `${BASE_URL}/tv/airing_today?api_key=${apiKey}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Error getting a response');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching airing today TV shows', error);
      return [];
    }
};

const fetchOnTheAirTVShows = async () => {
    const url = `${BASE_URL}/tv/on_the_air?api_key=${apiKey}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Error getting a response');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching on the air TV shows', error);
      return [];
    }
};
  
const fetchPopularTVShows = async () => {
    const url = `${BASE_URL}/tv/popular?api_key=${apiKey}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Error getting a response');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching popular TV shows', error);
      return [];
    }
};
  
const fetchTopRatedTVShows = async () => {
    const url = `${BASE_URL}/tv/top_rated?api_key=${apiKey}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Error getting a response');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching top-rated TV shows', error);
      return [];
    }
};

const fetchMovieSearchResults = async (query) => {
  const url = `${BASE_URL}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
    
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Error getting a response');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching for movies', error);
    return [];
  }
};

const fetchTVShowSearchResults = async (query) => {
  const url = `${BASE_URL}/search/tv?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Error getting a response');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching for TV shows', error);
    return [];
  }
};

const fetchMultiSearchResults = async (query) => {
  const url = `${BASE_URL}/search/multi?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Error getting a response');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error performing multi-search', error);
    return [];
  }
};

module.exports = {
    fetchPopularMovies,
    fetchUpcomingMovies,
    fetchTopRatedMovies,
    fetchNowPlayingMovies,
    fetchAiringTodayTVShows,
    fetchOnTheAirTVShows,
    fetchPopularTVShows,
    fetchTopRatedTVShows,
    fetchMovieSearchResults,
    fetchTVShowSearchResults,
    fetchMultiSearchResults,
};