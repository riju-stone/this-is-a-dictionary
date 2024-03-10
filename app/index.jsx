import React, { useState, useEffect, useCallback } from "react";
import { Redirect } from "expo-router";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

const index = () => {
  return <Redirect href="/(tabs)/home" />;
};

export default index;
