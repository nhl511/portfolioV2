import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "@/components/Navbar/Navbar";
import { Container } from "@mui/material";
import SnackbarProvider from "@/context/SnackbarContext";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Long's Portfolio Homepage",
    template: "%s | Long's Portfolio",
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <SnackbarProvider>
            <Navbar />
            <Container fixed>
              <main>{children}</main>
            </Container>
            <Footer />
          </SnackbarProvider>
        </div>
      </body>
    </html>
  );
}
