import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer className="border-t p-8 text-center mt-16 bg-brand text-brandsecondary">
        &copy; 2024 All rights reserved
      </footer>
    </>
  );
}
