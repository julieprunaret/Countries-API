import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { CircularProgress } from '@chakra-ui/react';
import useFetch from '../utils/Hooks/useFetch';
import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';

function Dashboard() {
  const { data, isLoading, error } = useFetch(
    `https://perenual.com/api/species-list?key=`
  );

  if (error) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <SimpleGrid columns={4} spacing={10} minChildWidth="250px">
      {isLoading ? (
        <CircularProgress isIndeterminate color="purple" />
      ) : (
        data.data &&
        data.data.map(plant => (
          <Card maxW="sm" key={plant.id}>
            <CardBody>
              <Image
                src={
                  plant.default_image
                    ? plant.default_image.medium_url
                    : 'https://perenual.com/storage/species_image/4_abies_concolor_candicans/medium/49283844888_332c9e46f2_b.jpg'
                }
                alt={plant.common_name}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{plant.common_name}</Heading>
                <Text>
                  <Icon as={SunIcon} color="#3c5251" />:{' '}
                  {plant.sunlight[0].charAt(0).toUpperCase() +
                    plant.sunlight[0].slice(1)}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="purple">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="purple">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))
      )}
    </SimpleGrid>
  );
}

export default Dashboard;
