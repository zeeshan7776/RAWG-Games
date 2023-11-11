import { Switch, Text, Box, HStack, useColorMode } from "@chakra-ui/react";

const NavbarColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box className="navbarSwitch">
        <HStack>
          <Switch
            size="md"
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}
          />
          <Text>Dark</Text>
        </HStack>
      </Box>
    </>
  );
};

export default NavbarColorModeSwitch;
