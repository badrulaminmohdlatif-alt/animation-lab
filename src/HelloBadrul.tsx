import { loadFont } from "@remotion/fonts";
import {
  AbsoluteFill,
  Composition,
  Easing,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { FloatingShape } from "./FloatingShape";

loadFont({
  family: "Quicksand",
  url: staticFile("fonts/quicksand-latin-700-normal.woff2"),
  weight: "700",
});

export const HelloBadrul: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(135deg, #fdf2f8 0%, #f3efff 50%, #eafaf6 100%)",
        overflow: "hidden",
      }}
    >
      <FloatingShape
        name="Pink circle"
        premountFor={fps}
        color="#f9c6d3"
        size={340}
        roundness={50}
        driftX={50}
        driftY={40}
        cycleSeconds={5}
        phase={0}
        blur={6}
        style={{ left: 120, top: 90 }}
      />
      <FloatingShape
        name="Lavender square"
        premountFor={fps}
        color="#d7c8f5"
        size={220}
        roundness={28}
        driftX={35}
        driftY={55}
        cycleSeconds={4.5}
        phase={1.2}
        blur={4}
        style={{ left: 1480, top: 120 }}
      />
      <FloatingShape
        name="Mint circle"
        premountFor={fps}
        color="#bdeedb"
        size={420}
        roundness={50}
        driftX={45}
        driftY={35}
        cycleSeconds={6}
        phase={2.4}
        blur={8}
        style={{ left: 1320, top: 620 }}
      />
      <FloatingShape
        name="Peach square"
        premountFor={fps}
        color="#ffd8b5"
        size={180}
        roundness={30}
        driftX={40}
        driftY={45}
        cycleSeconds={5}
        phase={3.6}
        blur={3}
        style={{ left: 260, top: 760 }}
      />
      <FloatingShape
        name="Sky circle"
        premountFor={fps}
        color="#bfe3fa"
        size={150}
        roundness={50}
        driftX={30}
        driftY={50}
        cycleSeconds={4}
        phase={0.8}
        blur={3}
        style={{ left: 820, top: 70 }}
      />
      <FloatingShape
        name="Butter circle"
        premountFor={fps}
        color="#fff1b0"
        size={120}
        roundness={50}
        driftX={35}
        driftY={30}
        cycleSeconds={3.5}
        phase={4.4}
        blur={2}
        style={{ left: 980, top: 860 }}
      />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Interactive.Div
          name="Title"
          style={{
            fontFamily: "Quicksand, sans-serif",
            fontWeight: 700,
            fontSize: 200,
            color: "#5b4a7a",
            textShadow: "0 8px 40px rgba(255, 255, 255, 0.9)",
            opacity: interpolate(frame, [0.4 * fps, 2 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(
              frame,
              [0.4 * fps, 2 * fps],
              ["0px 40px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              },
            ),
          }}
        >
          Hello Badrul
        </Interactive.Div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const HelloBadrulComposition: React.FC = () => {
  return (
    <Composition
      id="HelloBadrul"
      component={HelloBadrul}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
