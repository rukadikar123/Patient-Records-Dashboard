import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-center py-4">
      &copy; {new Date().getFullYear()} Jarurat Care. All rights reserved.
    </footer>
  );
}

export default Footer;
