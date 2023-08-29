import React from "react";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Edemy",
  description: "Created by Kashif Saleem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {" "}
          <Navbar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
