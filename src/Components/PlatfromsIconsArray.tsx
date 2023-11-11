import { Platform } from "../Hooks/usePlatforms";
import {
  FaWindows,
  FaLinux,
  FaPlaystation,
  FaApple,
  FaAndroid,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { Icon, chakra, transition } from "@chakra-ui/react";
import { IconType } from "react-icons/lib/esm/iconBase";

interface Props {
  platforms: Platform[];
}

const IconsArray: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  web: BsGlobe,
};

const PlatfromsArray = ({ platforms }: Props) => {
  return (
    <>
      {platforms.map((platform) => (
        <Icon
          cursor="pointer"
          key={platform.id}
          as={IconsArray[platform.slug]}
          m={1.5}
          transition="all 0.3s ease"
          _hover={{ transform: "color", color: "gray.400" }}
        />
      ))}
    </>
  );
};

export default PlatfromsArray;
