import useGenres, { Genre } from "../Hooks/useGenres";
import {
  Box,
  Image,
  UnorderedList,
  HStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import getCardImageCrop from "./GameCardImageCrop";

interface Props {
  selectedGenre: (genre: Genre) => void;
  SelectedGenre: Genre | null;
}

const Sidebar = ({ selectedGenre, SelectedGenre }: Props) => {
  const { data, error } = useGenres();

  if (error) return null;

  return (
    <>
      <Heading fontSize={25} ml="20px" mb="20px" mt="20px">
        Genres
      </Heading>

      {data.map((genre) => (
        <Box mb="7px" ml="20px" key={genre.id}>
          <HStack>
            <Image
              src={getCardImageCrop(genre.image_background)}
              boxSize={9}
              borderRadius="md"
            />
            <UnorderedList listStyleType="none">
              <Button
                variant="link"
                cursor="pointer"
                onClick={() => selectedGenre(genre)}
                fontWeight={genre.id === SelectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </UnorderedList>
          </HStack>
        </Box>
      ))}
    </>
  );
};

export default Sidebar;
