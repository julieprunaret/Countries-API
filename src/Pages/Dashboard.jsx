import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';

function Dashboard() {
  // const boxStyles = {
  //   p: '10px',
  //   bg: 'purple.400',
  //   color: 'white',
  //   m: '10px',
  //   textAlign: 'center',
  //   filter: 'blur(1px)',
  //   ':hover': {
  //     color: 'black',
  //     bg: 'blue.200',
  //     cursor: 'pointer',
  //   },
  // };
  return (
    <SimpleGrid columns={4} spacing={10} minChildWidth="250px">
      <Box bg="white" height="200px" border="1px solid">
        <Text color={{ base: 'pink', md: 'blue' }}>Hello</Text>
      </Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>

      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>

      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
    </SimpleGrid>
    // <Container as="section" maxW="4xl" py="20px">
    //   <Heading my="30px" p="10px">
    //     hey
    //   </Heading>
    //   <Text ml="30px">
    //     Aenean vel lectus dapibus, varius nisi in, commodo dui. Cras vestibulum
    //     pretium augue, in congue arcu. Vivamus sed commodo sem, id porttitor
    //     felis.
    //   </Text>
    //   <Text ml="30px" color="blue.300" fontWeight="bold">
    //     Aenean vel lectus dapibus, varius nisi in, commodo dui. Cras vestibulum
    //     pretium augue, in congue arcu. Vivamus sed commodo sem, id porttitor
    //     felis.
    //   </Text>
    //   <Box my="30px" p="20px" bg="salmon">
    //     <Text color="white">This is box</Text>
    //   </Box>

    //   <Box sx={boxStyles}>hello</Box>
    // </Container>
  );
}

export default Dashboard;
