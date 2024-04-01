import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  button: {
    // this will style the MenuButton component
    fontWeight: "medium",
    bg: "teal.500",
    color: "gray.200",
    _hover: {
      bg: "teal.600",
      color: "white",
    },
  },
  list: {
    bg: "var(--blue)",
  },
  item: {
    bg: "var(--blue)",
  },
});

const menuTheme = defineMultiStyleConfig({ baseStyle });

const theme = extendTheme({
  components: {
    Menu: menuTheme,
  },
});

export default theme;
