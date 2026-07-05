interface SectionDividerProps {
  toColor?: string;
  variant?: "hill" | "wave" | "grass";
  flip?: boolean;
}

export function SectionDivider({
  toColor = "#FAFAFA",
  variant = "hill",
  flip = false,
}: SectionDividerProps) {
  const paths = {
    hill: "M0,32 C360,96 720,0 1440,48 L1440,80 L0,80 Z",
    wave: "M0,48 C240,80 480,16 720,48 C960,80 1200,16 1440,48 L1440,80 L0,80 Z",
    grass: "M0,64 C120,32 240,72 360,56 C480,40 600,72 720,56 C840,40 960,72 1080,56 C1200,40 1320,64 1440,48 L1440,80 L0,80 Z",
  };

  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-10 md:h-14"
      >
        <path d={paths[variant]} fill={toColor} />
      </svg>
    </div>
  );
}