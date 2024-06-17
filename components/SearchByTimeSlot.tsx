//components/searchByTimeSlot.tsx
import { useState, useEffect } from "react";
import { MovieSkeleton } from "./MovieSkeleton";
import { SearchIcon, TimeIcon, ViewIcon } from "@chakra-ui/icons";
import { RiPlayLargeLine } from "react-icons/ri";
const PLACEHOLDER_COUNT = 6;
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import {
  setSearchTerm,
  setSearchTimeStart,
  setSearchTimeEnd,
  setSearchResults,
} from "../redux/searchSlice";
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  Input,
  InputLeftElement,
  InputGroup,
  Icon,
  CircularProgressLabel,
  CircularProgress,
  Button,
} from "@chakra-ui/react";

function formatDuration(duration: string): string {
  const match = duration.match(/(\d+)\s+hour(?:s)?\s+(\d+)\s+minutes?/);

  if (match) {
    const hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);

    if (hours > 0) {
      return `${hours} hr ${minutes} min`;
    } else {
      return `${minutes} min`;
    }
  } else {
    return duration;
  }
}

export default function SearchByTimeSlot() {
  const dispatch = useDispatch<AppDispatch>();
  const { searchTerm, timeStart, timeEnd, searchResults } = useSelector(
    (state: RootState) => state.search
  );
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    const apiUrl = `https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/timeslot?theater_name=${searchTerm}&time_start=${timeStart}&time_end=${timeEnd}`;

    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      dispatch(setSearchResults(data.data || []));
    } catch (error) {
      console.error("Error fetching search results:", error);
      dispatch(setSearchResults([]));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm && timeStart && timeEnd) {
      fetchMovies();
    }
  }, [searchTerm, timeStart, timeEnd]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleTimeStartChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setSearchTimeStart(event.target.value));
  };

  const handleTimeEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTimeEnd(event.target.value));
  };

  const handleSearch = () => {
    dispatch(setSearchResults([]));
    //if search term value or date value is empty, then return
    if (!searchTerm || !timeStart || !timeEnd) {
      return;
    }
  };

  return (
    // Full Component box
    <Box color="white" fontFamily={"DM Sans"}>
      <Center height="80vh" mx="7%">
        <Flex p={10} alignItems="center" justifyContent="center">
          <Box position="relative" w="274px" h="274px">
            <CircularProgress
              __css={{
                "& > circle:nth-of-type(2)": {
                  transform: "rotate(-90deg)",
                  transformOrigin: "center",
                },
              }}
              value={25}
              size="274px"
              thickness="2px"
              trackColor="yellow.300"
              textDecorationThickness="1px"
              color="gray"
              capIsRound
            >
              <CircularProgressLabel
                p={5}
                borderRadius={"50%"}
                width="fit-content"
                bgColor={"yellow.300"}
                display="Flex"
                alignItems={"center"}
                justifyContent="center"
              >
                <RiPlayLargeLine color="black" size={45} />
              </CircularProgressLabel>
            </CircularProgress>
          </Box>

          <Box mx={10}>
            <Box display={"flex"} flexDirection={"column"}>
              <Heading
                as="h2"
                fontSize={"48px"}
                mb={5}
                textAlign="left"
                fontFamily="DM Sans"
              >
                Search your movies here!
              </Heading>
            </Box>{" "}
            <Box mb={5}>
              <InputGroup size="md" width={"100%"}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={SearchIcon} color="black" />}
                />

                <Input
                  type="text"
                  border="null"
                  bgColor="rgba(255, 255, 255, 1)"
                  color="rgba(0, 0, 0, .45)"
                  placeholder="Search by theater..."
                  borderRadius={"25px"}
                  value={searchTerm}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Box>
            <Box display={"flex"} flexDirection={"row"} gap={10}>
              <Box>
                <InputGroup size="md" width={"fit-content"}>
                  <Input
                    placeholder="Select Date and Time"
                    type="datetime-local"
                    border="null"
                    bgColor="rgba(255, 255, 255, 1)"
                    color="rgba(0, 0, 0, .45)"
                    borderRadius={"25px"}
                    value={timeStart}
                    onChange={handleTimeStartChange}
                  />
                </InputGroup>
              </Box>
              <Box>
                <InputGroup size="md" width={"fit-content"}>
                  <Input
                    type="datetime-local"
                    placeholder="Select Date and Time"
                    border="null"
                    bgColor="rgba(255, 255, 255, 1)"
                    color="rgba(0, 0, 0, .45)"
                    borderRadius={"25px"}
                    value={timeEnd}
                    onChange={handleTimeEndChange}
                  />
                </InputGroup>
              </Box>
            </Box>
            <Box>
              <Button
                bgColor="rgba(254, 213, 48, 1)"
                color="rgba(0.0.0.1)"
                borderRadius="full"
                mt={4}
                px={10}
                py={3}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Box>
          </Box>
        </Flex>
      </Center>

      {/* Search Results section */}
      <Box bgColor="rgba(30, 30, 30, 1)" py={10}>
        <Box mx="7%" mb={20}>
          <Flex justify="space-between" alignItems="center" mb={4}>
            <Heading as="h2" size="xl">
              Search Results
            </Heading>
          </Flex>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            gap={4}
          >
            {searchResults.length > 0 // Conditionally render movies or placeholders
              ? searchResults.map((movie, index) => (
                  <GridItem
                    key={movie.Movie_ID}
                    colSpan={1}
                    overflow="hidden"
                    bgGradient="linear(to-b, rgba(0,0,0,.8), rgba(0,0,0,1))"
                    color="white"
                    minHeight={{ md: "250px" }}
                    position="relative"
                  >
                    <Image
                      src={movie.Poster}
                      alt={movie.Title}
                      objectFit="cover"
                      w="100%"
                      height="560"
                    />
                    <Box pl={4} pt={2} pb={2}>
                      <Flex alignItems="center" mb={1} color="gray.500">
                        <Icon as={TimeIcon} mr={2} />
                        <Text fontSize="sm">
                          {formatDuration(movie.Duration)}
                        </Text>
                        <Icon as={ViewIcon} ml={5} mr={2} />
                        <Text fontSize="sm">{movie.Views}</Text>
                      </Flex>
                      <Heading as="h3" size="md" fontWeight="medium">
                        {movie.Title}
                      </Heading>
                    </Box>
                    {/* Floating label */}
                    <Box
                      position="absolute"
                      top={2}
                      left={2}
                      px={3}
                      py={1}
                      borderRadius="full"
                      bgColor={"rgba(254, 213, 48, 1)"}
                      color="rgba(46, 46, 46, 1)"
                      fontSize="14px"
                    >
                      {movie.Genre}
                    </Box>
                  </GridItem>
                ))
              : // Render placeholders if no movies
                Array.from({ length: PLACEHOLDER_COUNT }, (_, index) => (
                  <MovieSkeleton key={index} />
                ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
