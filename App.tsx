import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import TravelGuid from "./src/screens/TravelGuid";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>
      <TravelGuid/>
      </Box>
    </NativeBaseProvider>
  );
}