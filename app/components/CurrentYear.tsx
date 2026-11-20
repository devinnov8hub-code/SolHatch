"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getBrowserYear = () => new Date().getFullYear();

export default function CurrentYear() {
  const year = useSyncExternalStore(subscribe, getBrowserYear, () => 2026);

  return <>{year}</>;
}
