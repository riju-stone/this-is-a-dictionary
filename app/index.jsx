import React, { useEffect } from "react";
import { Redirect } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

const index = () => {
  return <Redirect href="/(tabs)/home" />;
};

export default index;
