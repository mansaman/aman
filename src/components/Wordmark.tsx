/* Designed typographic wordmarks — one distinct treatment per company,
   all monochrome so they cohere. Drop a real logo file in /public/logos
   and set `logoFile` on the company in data.ts to replace any of these. */

export default function Wordmark({ id, name, logoFile }: { id: string; name: string; logoFile?: string }) {
  if (logoFile) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logoFile}
        alt={name}
        className="h-[1.4em] w-auto object-contain grayscale contrast-125"
      />
    );
  }

  switch (id) {
    case 'the-feast':
      return (
        <span className="whitespace-nowrap leading-none">
          <span className="font-serifa italic normal-case text-[0.85em]">The</span>{' '}
          <span className="font-display uppercase tracking-[0.06em]">Feast</span>
        </span>
      );
    case 'easyeat':
      return (
        <span className="whitespace-nowrap leading-none font-sans font-bold lowercase tracking-[-0.04em]">
          easyeat<span className="text-red">.</span>
        </span>
      );
    case 'foodmarkethub':
      return (
        <span className="whitespace-nowrap leading-none font-sans font-semibold uppercase tracking-[-0.01em] text-[0.72em]">
          Food<span className="text-red">·</span>Market<span className="text-red">·</span>Hub
        </span>
      );
    case 'revenue-nomad':
      return (
        <span className="whitespace-nowrap leading-none font-sans font-light uppercase tracking-[0.28em] text-[0.62em]">
          Revenue<span className="text-red">—</span>Nomad
        </span>
      );
    case 'maxinor':
      return (
        <span className="whitespace-nowrap leading-none font-display uppercase tracking-[0.04em]">
          Ma<span className="text-red">✕</span>inor
        </span>
      );
    default:
      return <span className="font-display uppercase leading-none">{name}</span>;
  }
}
