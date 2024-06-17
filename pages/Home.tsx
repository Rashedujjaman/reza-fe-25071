// components/Home.tsx
import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Link,
  Image,
  CircularProgress,
  CircularProgressLabel,
  Icon,
  GridItem,
  Grid,
  Center,
} from "@chakra-ui/react";
const PLACEHOLDER_COUNT = 5;
import { MovieSkeleton } from "../components/MovieSkeleton";
import { RiPlayLargeLine } from "react-icons/ri";
import { TimeIcon, ViewIcon } from "@chakra-ui/icons";

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

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch(
      "https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/new_movies/?r_date=2020-01-01"
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <Box color="white" fontFamily={"DM Sans"}>
      <Center height="80vh">
        <Flex p={10} alignItems="center" justifyContent="center" mx={"7%"}>
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
          <Box>
            <Heading
              as="h2"
              fontSize="72px"
              mb={5}
              textAlign="left"
              fontFamily="DM Sans"
            >
              Find your movies here!
            </Heading>
            <Text
              fontSize="xs"
              maxW="600px"
              textAlign={"justify"}
              lineHeight={2}
            >
              Explore our gallery full of exciting films from all around the
              globe only for your entertainment. No hidden charges or disturbing
              ads.
            </Text>
          </Box>
          </Box>
        </Flex>
      </Center>

      {/* New Released Items section */}
      <Box bgColor="rgba(30, 30, 30, 1)" py={10}>
        <Box mx="7%" mb={20}>
          <Flex justify="space-between" alignItems="center" mb={4}>
            <Heading as="h2" size="xl">
              New Released Items
            </Heading>
            <Link href="#" color="rgba(254, 213, 48, 1)">
              View All
            </Link>
          </Flex>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            gap={4}
          >
            {movies.length > 0
              ? movies.map((movie, index) => (
                  <GridItem
                    key={movie.Movie_ID}
                    colSpan={index === 0 ? { base: 1, md: 2 } : 1}
                    overflow="hidden"
                    bgGradient="linear(to-b, rgba(0,0,0,.8), rgba(0,0,0,1))"
                    color="white"
                    minHeight={{ md: "50px" }}
                    position="relative"
                  >
                    <Image
                      src={movie.Poster}
                      alt={movie.Title}
                      objectFit="cover"
                      w="100%"
                      height="560px"
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
                  <GridItem key={index} colSpan={index === 0 ? 2 : 1}>
                    <MovieSkeleton />
                  </GridItem>
                ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
