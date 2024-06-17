import React, { createContext, useState, ReactNode } from 'react';

interface MovieContextProps {
  movies: any[];
  setMovies: React.Dispatch<React.SetStateAction<any[]>>;
}

export const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<any[]>([]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
