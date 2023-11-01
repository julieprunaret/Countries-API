import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react';

const Navbar = () => {
  return (
    <div>
      <Flex as="nav" p="10px" alignItems="center">
        <Heading as="h1">Plants</Heading>
        <Spacer />

        <HStack spacing="20px">
          <Box bg="gray.200" p="10px">
            M
          </Box>
          <Text>mario@gmail.com</Text>
          <Button colorScheme="purple">Logout</Button>
        </HStack>
      </Flex>

      {/* <Flex bg="grey.200" justify="space-between" wrap="wrap" gap="2">
        <Box w="150px" h="50px" bg="red">
          1
        </Box>
        <Box w="150px" h="50px" bg="blue">
          2
        </Box>
        <Box w="150px" h="50px" bg="purple">
          3
        </Box>
        <Box w="150px" h="50px" bg="salmon" flexGrow="1">
          4
        </Box>
        <Box w="150px" h="50px" bg="green" flexGrow="2">
          5
        </Box>
        <Box w="150px" h="50px" bg="red">
          6
        </Box>
      </Flex> */}
    </div>
  );
};

export default Navbar;
