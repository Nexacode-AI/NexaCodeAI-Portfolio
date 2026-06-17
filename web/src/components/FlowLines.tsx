/**
 * Flowing animated chart-style curves on a faint blueprint grid,
 * like the "how it all started" section in the reference video.
 */
export default function FlowLines() {
  return (
    <div
      aria-hidden
      className="grid-bg pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          className="flow-path"
          d="M-60 420 C 200 320, 340 520, 600 400 S 1040 220, 1260 340 S 1480 420, 1560 360"
          stroke="rgba(124,138,255,0.4)"
          strokeWidth="1.5"
        />
        <path
          className="flow-path"
          style={{ animationDuration: "18s" }}
          d="M-60 260 C 260 180, 420 360, 720 260 S 1120 120, 1360 240 S 1520 300, 1580 260"
          stroke="rgba(244,244,245,0.22)"
          strokeWidth="1.5"
        />
        <path
          className="flow-path"
          style={{ animationDuration: "22s" }}
          d="M-60 140 C 220 240, 480 80, 760 160 S 1180 320, 1420 180 S 1540 140, 1600 170"
          stroke="rgba(124,138,255,0.22)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
