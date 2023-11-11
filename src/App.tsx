import { Grid, GridItem, Show, Heading } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
import MainPlatforms from "./Components/MainPlatforms";
import { Platform } from "./Hooks/usePlatforms";
import MainHeading from "./Components/MainHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  searchText: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const [selectedPlatform, setselectedPlatform] = useState<Platform | null>(
  //   null
  // );

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "side main"`,
          lg: `"nav nav" "side main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="sm">
          <GridItem area="side">
            <Sidebar
              selectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              SelectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <MainHeading gameQuery={gameQuery} />
          <MainPlatforms
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            SelectedPlatform={gameQuery.platform}
          />
          <Main gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
