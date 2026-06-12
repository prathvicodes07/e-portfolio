export default function MosaicBackground() {
  const stroke = "rgba(58, 58, 56, 0.15)";

  return (
    <svg
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <rect width="100%" height="100%" fill="#F7F7F5" />

      {/* Top band */}
      <rect x="0" y="0" width="28%" height="12%" fill="#F7F7F5" stroke={stroke} strokeWidth="1" />
      <rect x="28%" y="0" width="44%" height="12%" fill="#F7F7F5" stroke={stroke} strokeWidth="1" />
      <rect x="72%" y="0" width="28%" height="12%" fill="#F7F7F5" stroke={stroke} strokeWidth="1" />

      {/* Upper mid row */}
      <rect x="0" y="12%" width="18%" height="22%" fill="#F7F7F5" stroke={stroke} strokeWidth="1" />
      <rect x="18%" y="12%" width="32%" height="22%" fill="#F7F7F5" stroke={stroke} strokeWidth="1" />
      <rect x="50%" y="12%" width="22%" height="22%" fill="#F7F7F5" stroke={stroke} strokeWidth="1" />
      <rect x="72%" y="12%" width="28%" height="22%" fill="#F7F7F5" stroke={stroke} strokeWidth="1" />

      {/* Center band */}
      <rect x="0" y="34%" width="35%" height="28%" fill="#F7F7F5" stroke={stroke} strokeWidth="1" />
      <rect x="35%" y="34%" width="30%" height="28%" fill="#F7F7F5" stroke={stroke} strokeWidth="1" />
      <rect x="65%" y="34%" width="35%" height="28%" fill="#F7F7F5" stroke={stroke} strokeWidth="1" />

      {/* Lower mid row */}
      <rect x="0" y="62%" width="22%" height="20%" fill="#F7F7F5" stroke={stroke} strokeWidth="1" />
      <rect x="22%" y="62%" width="38%" height="20%" fill="#F7F7F5" stroke={stroke} strokeWidth="1" />
      <rect x="60%" y="62%" width="18%" height="20%" fill="#F7F7F5" stroke={stroke} strokeWidth="1" />
      <rect x="78%" y="62%" width="22%" height="20%" fill="#F7F7F5" stroke={stroke} strokeWidth="1" />

      {/* Bottom band */}
      <rect x="0" y="82%" width="40%" height="18%" fill="#F7F7F5" stroke={stroke} strokeWidth="1" />
      <rect x="40%" y="82%" width="25%" height="18%" fill="#F7F7F5" stroke={stroke} strokeWidth="1" />
      <rect x="65%" y="82%" width="35%" height="18%" fill="#F7F7F5" stroke={stroke} strokeWidth="1" />
    </svg>
  );
}
