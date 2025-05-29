"use client";

import { Canvas as ReactThreeCanvas } from "@react-three/fiber";

export const Canvas = (
  props: React.ComponentProps<typeof ReactThreeCanvas>,
) => {
  return <ReactThreeCanvas {...props} />;
};
