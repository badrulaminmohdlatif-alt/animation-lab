import type React from "react";
import {
  Interactive,
  useCurrentFrame,
  useVideoConfig,
  type InteractivitySchema,
} from "remotion";

type FloatingShapeProps = {
  readonly color: string;
  readonly size: number;
  readonly roundness: number;
  readonly driftX: number;
  readonly driftY: number;
  readonly cycleSeconds: number;
  readonly phase: number;
  readonly blur: number;
  readonly style?: React.CSSProperties;
};

const FloatingShapeInner: React.FC<FloatingShapeProps> = ({
  color,
  size,
  roundness,
  driftX,
  driftY,
  cycleSeconds,
  phase,
  blur,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // A slow, looping bob: one full sine cycle every `cycleSeconds`.
  const t = (frame / (cycleSeconds * fps)) * Math.PI * 2 + phase;

  return (
    <Interactive.Div
      style={{
        position: "absolute",
        width: size,
        height: size,
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: `${roundness}%`,
          backgroundColor: color,
          opacity: 0.85,
          filter: `blur(${blur}px)`,
          translate: `${Math.sin(t) * driftX}px ${Math.cos(t * 0.8) * driftY}px`,
          rotate: `${Math.sin(t * 0.5) * 12}deg`,
        }}
      />
    </Interactive.Div>
  );
};

const floatingShapeSchema = {
  color: { type: "color", default: "#f9c6d3", description: "Color" },
  size: {
    type: "number",
    hiddenFromList: false,
    default: 200,
    min: 10,
    description: "Size (px)",
  },
  roundness: {
    type: "number",
    hiddenFromList: false,
    default: 50,
    min: 0,
    max: 50,
    description: "Roundness (%)",
  },
  driftX: {
    type: "number",
    hiddenFromList: false,
    default: 40,
    description: "Float distance X (px)",
  },
  driftY: {
    type: "number",
    hiddenFromList: false,
    default: 40,
    description: "Float distance Y (px)",
  },
  cycleSeconds: {
    type: "number",
    hiddenFromList: false,
    default: 5,
    min: 0.5,
    step: 0.5,
    description: "Seconds per float cycle",
  },
  phase: {
    type: "number",
    hiddenFromList: false,
    default: 0,
    step: 0.1,
    description: "Phase offset",
  },
  blur: {
    type: "number",
    hiddenFromList: false,
    default: 4,
    min: 0,
    description: "Softness (blur px)",
  },
} as const satisfies InteractivitySchema;

export const FloatingShape = Interactive.withSchema({
  Component: FloatingShapeInner,
  componentName: "<FloatingShape>",
  schema: floatingShapeSchema,
  wrapInSequence: true,
});
