import Image from 'next/image';

// Foto bergaya polaroid: bingkai putih, selotip di atas, caption tulisan tangan.
// Interaktif (button) hanya bila ada onClick; tanpa onClick = dekoratif (div).
export default function Polaroid({ src, caption, rotate = '0deg', tape = true, onClick, className = '' }) {
  const interactive = typeof onClick === 'function';
  const Tag = interactive ? 'button' : 'div';

  return (
    <Tag
      {...(interactive ? { type: 'button', onClick, 'aria-label': caption ? `Foto: ${caption}` : 'Foto' } : {})}
      style={{ rotate }}
      className={`polaroid relative block ${className}`}
    >
      {tape && <span className="tape" aria-hidden="true" />}
      <span className="relative block aspect-square w-full overflow-hidden bg-blush">
        <Image src={src} alt={caption || ''} fill sizes="(max-width:640px) 45vw, 240px" className="object-cover" />
      </span>
      {caption && (
        <span className="absolute inset-x-0 bottom-2 truncate px-3 text-center font-script text-xl text-ink">{caption}</span>
      )}
    </Tag>
  );
}
