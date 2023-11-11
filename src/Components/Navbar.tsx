import { Image, HStack, Show } from "@chakra-ui/react";
import Logo from "../assets/RAWG logo.png";
import NavbarColorModeSwitch from "./NavbarColorModeSwitch";
import { useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <HStack className="navbar">
        <Image src={Logo} className="navbarLogo" />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (ref.current) return onSearch(ref.current.value);
          }}
          style={{ width: "100%" }}
        >
          <InputGroup>
            <InputLeftElement children={<BsSearch />} />
            <Input ref={ref} placeholder="Search" borderRadius="25px" />
          </InputGroup>
        </form>

        <Show above="sm">
          <NavbarColorModeSwitch />
        </Show>
      </HStack>
    </>
  );
};

export default Navbar;
