"use client";

import { ForgeRenderer } from "@/app/_components/forge/forge-renderer";
import { SplatMesh } from "@/app/_components/forge/splat-mesh";
import { CameraControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { SplatMesh as ForgeSplatMesh } from "@forge-gfx/forge";

/**
 * Separate `Scene` component to be used in the React Three Fiber `Canvas` component so that we can use React Three Fiber hooks like `useThree`
 */
export const Scene = () => {
  const renderer = useThree((state) => state.gl);
  const meshRef = useRef<ForgeSplatMesh>(null);

  // Memoize the elements inside the `<ForgeRenderer />` `args` prop so that we don't re-create the `<ForgeRenderer />` on every render
  const forgeRendererArgs = useMemo(() => {
    return { renderer };
  }, [renderer]);

  // Memoize the `SplatMesh` `args` prop so that we don't re-create the `SplatMesh` on every render
  const splatMeshArgs = useMemo(
    () =>
      ({
        url: "/assets/splats/butterfly.spz",
      }) as const,
    [],
  );

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.5 * delta;
    }
  });

  return (
    <>
      <CameraControls />
      <ForgeRenderer args={[forgeRendererArgs]}>
        {/* This particular splat mesh is upside down */}
        <group rotation={[Math.PI, 0, 0]}>
          <SplatMesh ref={meshRef} args={[splatMeshArgs]} />
        </group>
      </ForgeRenderer>
    </>
  );
};
