import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "FeastRest",
  description: "Restaurant Ordering/Payment System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <UserProvider>
          <main>
            <Navbar />
            {children}
            <footer className="border-t p-8 text-center mt-16 bg-brand text-brandsecondary">
              &copy; 2024 All rights reserved
            </footer>
          </main>
        </UserProvider>
      </body>
    </html>
  );
}
