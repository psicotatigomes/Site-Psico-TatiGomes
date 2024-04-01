// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

export function UIChakraProvider({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
