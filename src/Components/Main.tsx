import {
  Card,
  CardBody,
  Image,
  Text,
  SimpleGrid,
  Stack,
  Heading,
  chakra,
  Box,
  HStack,
  Badge,
} from "@chakra-ui/react";
import getCardImageCrop from "./GameCardImageCrop";
import useGames from "../Hooks/useGames";
import PlatfromsArray from "./PlatfromsIconsArray";
import LoadingSkeletons from "./LoadingSkeletons";
import { GameQuery } from "../App";

const StyledCard = chakra(Card, {
  baseStyle: {
    maxW: "sm",
    borderRadius: "lg",
    m: { base: "4px 20px 4px 20px", md: "4px 4px 4px 20px" },
  },
});

const StyledImage = chakra(Image, {
  baseStyle: {
    borderTopRadius: "lg",
  },
});

interface Props {
  gameQuery: GameQuery;
}

const Main = ({ gameQuery }: Props) => {
  const { error, data, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }}>
        {isLoading &&
          skeletons.map((skeleton) => <LoadingSkeletons key={skeleton} />)}

        {data.map((game) => (
          <StyledCard key={game.id} cursor="pointer" maxW="sm">
            <StyledImage src={getCardImageCrop(game.background_image)} />
            <CardBody>
              <Stack>
                <Heading as="h3" size="lg" cursor="pointer">
                  {game.name}
                </Heading>
                <HStack justifyContent="space-between">
                  <Box>
                    <PlatfromsArray
                      platforms={game.parent_platforms.map((p) => p.platform)}
                    />
                  </Box>
                  <Badge
                    border={
                      game.metacritic >= 75
                        ? "2px solid green"
                        : game.metacritic >= 60
                        ? "2px solid #d9a63f"
                        : game.metacritic >= 50
                        ? "2px solid #C53030"
                        : game.metacritic < 50
                        ? ""
                        : ""
                    }
                    colorScheme={
                      game.metacritic >= 75
                        ? "green"
                        : game.metacritic >= 60
                        ? "yellow"
                        : game.metacritic >= 50
                        ? "red"
                        : ""
                    }
                    paddingX={2}
                    paddingY={1}
                  >
                    {game.metacritic}
                  </Badge>
                </HStack>
              </Stack>
            </CardBody>
          </StyledCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Main;
