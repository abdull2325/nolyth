export function VoronoiPattern() {
  return (
    <div className="absolute inset-0 opacity-[0.12]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="voronoi" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <polygon points="0,0 100,0 100,100" fill="none" stroke="black" strokeWidth="1" />
            <polygon points="100,0 200,0 150,100" fill="none" stroke="black" strokeWidth="1" />
            <polygon points="0,100 50,100 0,200" fill="none" stroke="black" strokeWidth="1" />
            <polygon points="100,100 200,100 200,200 100,200" fill="none" stroke="black" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#voronoi)" />
      </svg>
    </div>
  );
}
