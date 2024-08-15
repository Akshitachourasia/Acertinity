import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	title: 'Akshita',
	authors: {
		name: "Akshita",
	},

	description:
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, ipsam ea impedit necessitatibus dignissimos illum iure at minima nostrum, deleniti nihil. Doloremque sit, deleniti molestias nisi at maiores blanditiis temporibus!",
	openGraph: {
		title: "Akshita",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, ipsam ea impedit necessitatibus dignissimos illum iure at minima nostrum, deleniti nihil. Doloremque sit, deleniti molestias nisi at maiores blanditiis temporibus!",
		url: "http://localhost:3000",
		siteName: "Akshita",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>  
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
