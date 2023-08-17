"use client";
import React from "react";
import { HeroSection } from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import { MantineProvider } from "@mantine/core";

export default function page() {

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS>
      <HeroSection />
      <FeatureSection />
    </MantineProvider>
  );
}
