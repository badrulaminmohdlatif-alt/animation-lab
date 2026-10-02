import { Composition, Folder } from "remotion";
import { FloatingShape } from "./FloatingShape";
import { HelloBadrulComposition } from "./HelloBadrul";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <HelloBadrulComposition />
      <Folder name="Components">
        <Composition
          id="FloatingShape"
          component={FloatingShape}
          durationInFrames={150}
          fps={30}
          width={600}
          height={600}
          defaultProps={{
            color: "#f9c6d3",
            size: 300,
            roundness: 50,
            driftX: 40,
            driftY: 40,
            cycleSeconds: 5,
            phase: 0,
            blur: 4,
            style: { left: 150, top: 150 },
          }}
        />
      </Folder>
    </>
  );
};
