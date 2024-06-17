// context/MovieContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface MovieContextProps {
  movies: any[];
  setMovies: React.Dispatch<React.SetStateAction<any[]>>;
}

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<any[]>([]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
