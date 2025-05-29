import { Canvas } from "@/app/(home)/_components/canvas";
import { Scene } from "@/app/(home)/_components/scene";

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <Canvas gl={{ antialias: false }}>
        <Scene />
      </Canvas>
    </div>
  );
}
