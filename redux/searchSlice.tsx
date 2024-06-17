// redux/searchSlice.tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Movie {
    Movie_ID: number;
    Title: string;
    Genre: string;
    Duration: string;
    Views: string;
    Poster: string;
    Overall_rating: number;
    Description: string;
    Start_Time: string;
    End_Time: string;
    Theater_room_no: string;
}

interface SearchState {
  searchTerm: string;
  searchDate: string;
  timeStart: string;
  timeEnd: string;
  searchResults: Movie[]; 
}

const initialState: SearchState = {
  searchTerm: '',
  searchDate: '',
  timeStart: '',
  timeEnd: '',
  searchResults: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setSearchDate(state, action: PayloadAction<string>) {
      state.searchDate = action.payload;
    },
    setSearchTimeStart(state, action: PayloadAction<string>) {
      state.timeStart = action.payload;
    },
    setSearchTimeEnd(state, action: PayloadAction<string>) {
      state.timeEnd = action.payload;
    },
    setSearchResults(state, action: PayloadAction<Movie[]>) {
      state.searchResults = action.payload;
    },
  },
});

export const { setSearchTerm, setSearchDate, setSearchTimeStart, setSearchTimeEnd, setSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
