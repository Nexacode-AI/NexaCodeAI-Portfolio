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
            "radial-gradient(circle, rgba(203, 213, 225,0.08), transparent 65%)",
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
            "radial-gradient(circle, rgba(148, 163, 184,0.09), transparent 65%)",
        }}
      />
    </div>
  );
}
