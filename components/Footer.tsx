import { ArrowForwardIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaMapMarker } from "react-icons/fa";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Stack,
  Icon,
} from "@chakra-ui/react";


export default function Footer() {
  return (
    <Box bg="rgba(46, 46, 46, 1)" color="white" fontFamily="DM Sans">
      <Flex alignItems="flex-start" flexWrap="wrap" gap={4}>
        {/* PcariMovie Section */}
        <Box bg="rgba(61, 61, 61, 1)" p={12} minW={"39%"} pl={"7%"}>
          <Heading as="h3" fontSize="64px" mb={5} fontFamily="DM Sans">
            PcariMovie
          </Heading>
          <Text fontSize="md" color="rgba(230, 230, 230, 1)" maxW={400}>
            Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </Text>

          <Box mt={8}>
            <Text fontSize="md" mb={4}>
              Join Newsletters
            </Text>
            <InputGroup size="md" width={"282px"}>
              <Input
                border="null"
                bgColor="rgba(82, 82, 82, 1)"
                color="rgba(154, 154, 176, 1)"
                placeholder="Insert your mail here"
              />
              <InputRightElement>
                <IconButton
                  size="sm"
                  bgColor="rgba(254, 213, 48, 1)"
                  aria-label="Subscribe"
                  icon={<ArrowForwardIcon />}
                />
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>

        {/* Product & Media Group Sections */}
        <Stack direction="column" spacing={20} mt={8} p={8}>
          <Box display={"flex"} gap={28} fontSize={"16px"}>
            <Box alignItems="left" display="flex" flexDir="column" gap={"10px"}>
              <Heading as="h4" fontSize={"16px"} color="white" fontWeight={"bold"}>
                {/* Changed to Heading to use fontWeight from theme */}
                Product
              </Heading>
              <Link href="#">Movies</Link>
              <Link href="#">TV Show</Link>
              <Link href="#">Videos</Link>
            </Box>

            <Box alignItems="left" display="flex" flexDir="column" gap={"10px"}>
              <Heading as="h4" fontSize={"16px"} color="white" fontWeight={"bold"}>
                Media Group
              </Heading>
              <Link href="#">Nice Studio</Link>
              <Link href="#">Nice News</Link>
              <Link href="#">Nice TV</Link>
            </Box>

            <Box alignItems="left" display="flex" flexDir="column" gap={"10px"}>
              <Heading as="h4" fontSize={"16px"} color="white" fontWeight={"bold"}>
                Sitemap
              </Heading>
              <Link href="#">About</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Press</Link>
            </Box>
          </Box>

          {/* Social Media Section */}

          <Box alignItems="left" display="flex" flexDir="row" gap={5}>
            <Link href="#" fontSize="14px">
              <Icon as={FaMapMarker} />
              <text> 8819 Ohio St. South Gate, California 90280</text>
            </Link>
            <Link href="#" fontSize="14px">
              <Icon as={EmailIcon} />
              <text> ourstudio@hello.com </text>
            </Link>
            <Link href="#" fontSize="14px">
              <Icon as={PhoneIcon} />
              <text> +271 386-647-3637 </text>
            </Link>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
