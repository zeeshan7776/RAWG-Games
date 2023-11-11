import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../Hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  SelectedPlatform: Platform | null;
}

const MainPlatforms = ({ onSelectedPlatform, SelectedPlatform }: Props) => {
  const { data } = usePlatforms();

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BsChevronDown />}
          m="25px 0px 10px 20px"
        >
          {SelectedPlatform ? SelectedPlatform?.name : "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectedPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default MainPlatforms;
