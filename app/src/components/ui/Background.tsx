export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* base behind image */}
      <div className="absolute inset-0 bg-[#050606]" />

      {/* background image (fit width, no zoom/crop) */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/bc.png')",
          backgroundSize: '100% auto',     // ✅ prevents zoom (fits width)
          backgroundPosition: 'center 30%', // ✅ keeps skyline visible
        }}
      />

      {/* readability overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* vignette like screenshot */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/75" />
    </div>
  );
}
