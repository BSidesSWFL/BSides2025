"use client";

import { SessionizeProvider } from "../context/SessionizeProvider";

export default function ClientLayout({ children }) {
  return (
    <SessionizeProvider>
      {children}
    </SessionizeProvider>
  );
}

