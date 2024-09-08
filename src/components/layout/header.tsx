import React from "react";
import Navigation from "./navigation";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-4 md:px-6 bg-background border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-foreground">NGO Name</div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
