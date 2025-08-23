"use client";

import { AlertProvider } from "./AlertProvider";
import { DialogProvider } from "./DialogProvider";
import { LoadingProvider } from "./LoadingProvider";
import { ThemeProvider } from "./themeProvider";

export function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <AlertProvider>
          <DialogProvider>
            {children}
          </DialogProvider>
        </AlertProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
}
