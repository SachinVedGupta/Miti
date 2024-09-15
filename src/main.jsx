import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./page/Home.jsx";
import SignIn from "./page/SignIn.jsx";

import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";

import { ConvexProvider, ConvexReactClient } from "convex/react";

// Import your publishable key
const PUBLISHABLE_KEY = "pk_test_dG9wcy1jaG93LTUwLmNsZXJrLmFjY291bnRzLmRldiQ";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <SignedOut>
          <SignIn />
        </SignedOut>
        <SignedIn>
          <Home />
        </SignedIn>
      </ClerkProvider>
    </ConvexProvider>
  </StrictMode>
);
