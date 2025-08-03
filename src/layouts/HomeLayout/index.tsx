import React from "react";
import { Footer } from "./Footer";

interface Layout {
  children: React.ReactNode;
}

export function HomeLayout({ children }: Layout) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="container-xxl flex-grow-1 container-p-y">
          {children}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
