//components/Navbar.tsx
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import {
  Flex,
  Link,
  IconButton,
  Heading,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

export default function Navbar() {
  const router = useRouter();

  return (
    <Flex alignItems="center" mx="7%" py={2} color={"white"} gap={6}>
      <Heading as="h1" size="lg">
        PcariMovie
      </Heading>
      <Link
        href="/"
        _hover={{
          textDecoration: "underline",
          textDecorationColor: "yellow.300",
          textDecorationThickness: "4px",
        }}
      >
        Home
      </Link>
      <Link
        href="#"
        _hover={{
          textDecoration: "underline",
          textDecorationColor: "yellow.300",
          textDecorationThickness: "4px",
        }}
      >
        Movies
      </Link>
      <Link
        href="#"
        _hover={{
          textDecoration: "underline",
          textDecorationColor: "yellow.300",
          textDecorationThickness: "4px",
        }}
      >
        TV Show
      </Link>
      <Link
        href="#"
        _hover={{
          textDecoration: "underline",
          textDecorationColor: "yellow.300",
          textDecorationThickness: "4px",
        }}
      >
        Video
      </Link>
      <Link
        href="#"
        _hover={{
          textDecoration: "underline",
          textDecorationColor: "yellow.300",
          textDecorationThickness: "4px",
        }}
      >
        FAQ
      </Link>
      <Link
        href="#"
        _hover={{
          textDecoration: "underline",
          textDecorationColor: "yellow.300",
          textDecorationThickness: "4px",
        }}
      >
        Pricing
      </Link>
      <Link
        href="#"
        _hover={{
          textDecoration: "underline",
          textDecorationColor: "yellow.300",
          textDecorationThickness: "4px",
        }}
      >
        Contact Us
      </Link>
      <Flex alignItems="center" ml={"auto"}>
        <Link p={2}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<FaSearch />}
              variant="ghost"
              colorScheme="black"
              color={"white"}
              _hover={{ color: "yellow.300" }}
              width={"fit-content"}
              height={"fit-content"}
            />
            <MenuList color="white" bg={"transparent"}>
              <MenuItem
                width={"fit-content"}
                bg={"rgba(0,0,0,0)"}
                onClick={() => router.push("/SearchByTheater")}
              >
                Search by Theater
              </MenuItem>
              <MenuItem
                width={"fit-content"}
                bg={"rgba(0,0,0,0)"}
                onClick={() => router.push("/SearchByTimeSlot")}
              >
                Search by Time Slot
              </MenuItem>
            </MenuList>
          </Menu>
        </Link>

        <Link
          href="#"
          _hover={{
            textDecoration: "underline",
            textDecorationColor: "yellow.300",
            textDecorationThickness: "4px",
          }}
        >
          <Flex ml={4} alignItems="center">
            <FaUserCircle size="24px" />
            <Text ml={2}>John Glich</Text>{" "}
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
}
