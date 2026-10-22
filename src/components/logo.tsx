/** Tanda "A" + titik, digambar ulang sebagai SVG. Warna mengikuti currentColor. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 527 490" fill="currentColor" className={className} aria-hidden>
      <path d="M65 13H281L450 440Q458 458 480 460L523 461V474H310L170 90Q155 40 100 30Q80 26 65 25Z" />
      <circle cx="104" cy="378" r="100" />
    </svg>
  );
}
