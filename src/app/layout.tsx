import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import Navbar from "@/components/Navbar";
import DarkModeProvider from "@/context/DarkModeContext";
import { Toaster } from "sonner";
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import ConditionalFooter from "./ConditionalFooter";
import Provider from "@/context/Provider";

export const metadata: Metadata = {
  title: "Pritesh Dhanad - Software Developer",
  description: "Pritesh Dhanad is a Software Developer specializing in building impactful web applications from scratch. Explore my portfolio to see my projects and skills.",
  keywords: "Pritesh Dhanad, Software Developer, Full Stack Developer, Web Developer, Portfolio, JavaScript, TypeScript, React, Node.js, software engineer",
  authors: [{ name: "Pritesh Dhanad" }],
  openGraph: {
    title: "Pritesh Dhanad -  Software Developer ",
    description: "Explore the portfolio of Pritesh Dhanad, showcasing innovative web applications and development skills.",
    url: "",
    siteName: "Pritesh Dhanad Portfolio",
    images: [
      {
        url: "https://ucarecdn.com/c73987ce-d659-4b58-bfba-59d672603d70/-/preview/999x968/",
        width: 400,
        height: 400,
        alt: "Pritesh Dhanad Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <DarkModeProvider>
          <body className={`bg-white dark:bg-black`}>
            <Toaster position='bottom-right' />
            <Theme className="dark:!bg-black">
              <Navbar />
              {children}
              <Analytics />
              <ConditionalFooter />
            </Theme>
          </body>
        </DarkModeProvider>
      </Provider>
    </html>
  );
}