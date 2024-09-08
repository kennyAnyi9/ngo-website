import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-4 md:px-6 bg-background border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-foreground">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email: info@ngo.org</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="text-foreground">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Add social media icons here */}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            Subscribe to Our Newsletter
          </h3>
          <form className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Your email"
              className="flex-grow"
            />
            <Button type="submit" className="rounded-full">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-muted-foreground">
        © {new Date().getFullYear()} NGO Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
