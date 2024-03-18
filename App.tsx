import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/home";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import React = require("react");

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      <StatusBar style="light" />
    </QueryClientProvider>
  );
}
