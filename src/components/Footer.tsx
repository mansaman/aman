import Link from 'next/link';
import { PERSONAL_INFO } from '@/data';

export default function Footer() {
  return (
    <footer className="border-t border-line overflow-hidden bg-ink">
      {/* Meta row */}
      <div className="flex flex-col md:flex-row items-start md:items-baseline justify-between gap-2 px-6 md:px-10 py-5">
        <p className="uppercase text-[10px] tracking-[0.3em] text-mute">
          © {new Date().getFullYear()} — Growth Marketing
        </p>
        <div className="flex items-baseline gap-6">
          <Link
            href="/contact"
            className="uppercase text-[10px] tracking-[0.3em] text-mute hover:text-red transition-colors"
          >
            Contact ↗
          </Link>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-[10px] tracking-[0.3em] text-mute hover:text-red transition-colors"
          >
            LinkedIn ↗
          </a>
          <p className="uppercase text-[10px] tracking-[0.3em] text-mute">
            Made in India
          </p>
        </div>
      </div>

      {/* Giant cropped name */}
      <div
        aria-hidden="true"
        className="font-display uppercase text-[20vw] leading-[0.75] translate-y-[24%] text-bone/10 select-none whitespace-nowrap text-center"
      >
        {PERSONAL_INFO.name} {PERSONAL_INFO.surname}
      </div>
    </footer>
  );
}
