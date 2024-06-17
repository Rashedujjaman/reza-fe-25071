// components/SearchFilter.tsx
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@chakra-ui/react';
import { setSearchTerm } from '../redux/searchSlice';
import { RootState } from '../redux/store';

const SearchFilter = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <Input
      placeholder="Search for movies..."
      value={searchTerm}
      onChange={handleSearch}
      mb={4}
      bg="white"
      color="black"
    />
  );
};

export default SearchFilter;
