const WORDS = [
  'SEO',
  'Performance',
  'GTM',
  'CRM',
  'Automation',
  'Analytics',
  'AI',
  'Websites',
];

export default function Marquee() {
  // Duplicate the strip so the -50% translate loops seamlessly
  const strip = [...WORDS, ...WORDS];

  return (
    <div className="border-y border-line overflow-hidden py-4 select-none" aria-hidden="true">
      <div className="animate-marquee flex w-max items-baseline whitespace-nowrap">
        {strip.map((word, i) => (
          <span key={i} className="flex items-baseline shrink-0">
            <span className="font-display uppercase text-2xl md:text-4xl leading-none px-6 text-bone">
              {word}
            </span>
            <span className="text-red text-xl md:text-3xl leading-none">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
