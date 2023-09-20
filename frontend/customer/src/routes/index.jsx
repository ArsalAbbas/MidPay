import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PrivateSection from "./PrivateSection";
import PublicRoutes from "./PublicRoutes";
import { getAuth } from "firebase/auth";

function Routes() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    return getAuth().onAuthStateChanged(onAuthStateChanged);
  });

  if (initializing) return null;
  if (!user) {
    return <PublicRoutes />;
  }
  return <PrivateSection />;
}

export default Routes;
