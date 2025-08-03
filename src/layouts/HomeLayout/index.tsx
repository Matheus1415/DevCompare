import React from "react";
import { Footer } from "./Footer";

interface Layout {
  children:React.ReactNode
}

export function HomeLayout({ children }:Layout) {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <div className="layout-page">
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              {children}
            </div>
            <div className="content-backdrop fade"></div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
