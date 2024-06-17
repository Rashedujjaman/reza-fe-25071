//components/MovieSkeleton.tsx
import { TimeIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  GridItem,
  Heading,
  Icon,
} from "@chakra-ui/react";

export function MovieSkeleton() {
  return (
    <GridItem
      colSpan={1}
      overflow="hidden"
      bgGradient="linear(to-b, rgba(0,0,0,.1), rgba(0,0,0,1))"
      color="white"
      minHeight={{ md: "560px" }}
      position="relative"
      fontSize={"14px"}
      opacity={1}
    >
      <Box height="560px" />
      <Box pl={4} pt={2} pb={2}>
        <Flex alignItems="center" mb={1} color="gray.500">
          <Icon as={TimeIcon} mr={2} />
          Loading...
          <Icon as={ViewIcon} ml={5} mr={2} />
          Loading...
        </Flex>
        <Heading as="h3" size="md" fontWeight="medium">
          Loading...
        </Heading>
      </Box>
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
  );
}
