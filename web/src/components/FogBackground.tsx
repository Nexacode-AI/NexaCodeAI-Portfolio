export default function FogBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="fog-blob fog-a"
        style={{
          width: "55vw",
          height: "55vw",
          top: "-20vh",
          left: "-10vw",
          background:
            "radial-gradient(circle, rgba(244,244,245,0.13), transparent 65%)",
        }}
      />
      <div
        className="fog-blob fog-b"
        style={{
          width: "45vw",
          height: "45vw",
          top: "30vh",
          right: "-15vw",
          background:
            "radial-gradient(circle, rgba(161,161,170,0.12), transparent 65%)",
        }}
      />
      <div
        className="fog-blob fog-c"
        style={{
          width: "60vw",
          height: "60vw",
          bottom: "-25vh",
          left: "15vw",
          background:
            "radial-gradient(circle, rgba(52,211,153,0.07), transparent 65%)",
        }}
      />
      <div
        className="fog-blob fog-b"
        style={{
          width: "38vw",
          height: "38vw",
          top: "60vh",
          left: "-12vw",
          background:
            "radial-gradient(circle, rgba(52,211,153,0.08), transparent 65%)",
        }}
      />
      {/* horizon sphere glow, like the planet curve in the reference */}
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-[100%]"
        style={{
          width: "140vw",
          height: "60vh",
          bottom: "-50vh",
          background:
            "radial-gradient(ellipse at center top, rgba(110,231,183,0.10), transparent 60%)",
          boxShadow: "0 -1px 90px rgba(52,211,153,0.12)",
        }}
      />
    </div>
  );
}
