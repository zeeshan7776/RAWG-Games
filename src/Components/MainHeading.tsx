import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const MainHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <>
      <Heading as="h1" m="0px 0px 0px 20px">
        {heading}
      </Heading>
    </>
  );
};

export default MainHeading;
