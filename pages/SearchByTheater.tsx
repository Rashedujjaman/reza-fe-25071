import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MovieSkeleton } from "../components/MovieSkeleton";
import { FaClock, FaEye } from "react-icons/fa";
import { SearchIcon, TimeIcon, ViewIcon } from "@chakra-ui/icons";
import { RiPlayLargeLine } from "react-icons/ri";
const PLACEHOLDER_COUNT = 6;
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
  Link,
  Icon,
  CircularProgressLabel,
  CircularProgress,
  Button,
} from "@chakra-ui/react";

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

export default function SearchByTheater() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [theater_name, settheater_name] = useState("");
  const [d_date, setd_date] = useState("");

  const fetchMovies = async (theater_name: string, d_date: string) => {
    const apiUrl = `https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/specific_movie_theater?theater_name=${theater_name}&d_date=${d_date}`;

    console.log("Fetching movies with URL:", apiUrl); // Debugging log

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.data && data.data.length > 0) {
        setMovies(data.data); // Set movies only if there is data
      } else {
        setMovies([]); // Clear movies if no results
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setMovies([]); // Clear movies on error
    }
  };

  useEffect(() => {
    if (theater_name && d_date) {
      fetchMovies(theater_name, d_date);
    }
  }, [theater_name, d_date]);

  const handleSearch = () => {
    fetchMovies(theater_name, d_date);
  };

  return (
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
            </Box>
            <Box display={"flex"} flexDirection={"row"} gap={3}>
              <Box>
                <InputGroup size="md" width={"400px"}>
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
                    value={theater_name}
                    onChange={(e) => settheater_name(e.target.value)}
                  />
                </InputGroup>
              </Box>
              <Box>
                <InputGroup size="md" width={"fit-content"}>
                  <Input
                    type="date"
                    border="null"
                    bgColor="rgba(255, 255, 255, 1)"
                    color="rgba(0, 0, 0, .45)"
                    borderRadius={"25px"}
                    value={d_date}
                    onChange={(e) => setd_date(e.target.value)}
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
            {movies.length > 0 // Conditionally render movies or placeholders
              ? movies.map((movie, index) => (
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
                      Fantasy
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
