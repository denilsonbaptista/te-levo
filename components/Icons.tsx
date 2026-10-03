/** Sprite de ícones reutilizáveis, referenciados via <use href="#id">. */
export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <symbol id="mark" viewBox="0 0 600 570">
          <path d="M0 0C235-5 410 120 405 400L385 560 368 560C372 330 250 172 0 172Z" fill="#efad24" />
          <path d="M104 246C270 244 400 320 388 500L380 560 336 560C332 468 268 408 104 414Z" fill="#c34e55" />
          <path d="M590 92C478 84 400 124 360 168 398 250 410 330 398 424 420 344 470 258 590 258Z" fill="#4caf46" />
        </symbol>
        <symbol id="i-check" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></symbol>
        <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M8.5 12l2.5 2.5 4.5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></symbol>
        <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-7-6.1-7-11.5a7 7 0 0114 0C19 14.9 12 21 12 21z" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="9.5" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.8" /></symbol>
        <symbol id="i-tag" viewBox="0 0 24 24"><path d="M3.5 12.2V4.5a1 1 0 011-1h7.7l8.3 8.3a1.4 1.4 0 010 2l-6.7 6.7a1.4 1.4 0 01-2 0z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><circle cx="8" cy="8" r="1.6" fill="currentColor" /></symbol>
        <symbol id="i-chat" viewBox="0 0 24 24"><path d="M4 5.5A1.5 1.5 0 015.5 4h13A1.5 1.5 0 0120 5.5v9a1.5 1.5 0 01-1.5 1.5H10l-4.5 4v-4H5.5A1.5 1.5 0 014 14.5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M8 9h8M8 12h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></symbol>
        <symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M4 20.5c1.2-3.8 4.3-5.5 8-5.5s6.8 1.7 8 5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></symbol>
        <symbol id="i-share" viewBox="0 0 24 24"><circle cx="18" cy="5.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="6" cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="18" cy="18.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M8.2 10.8l7.6-4M8.2 13.2l7.6 4" stroke="currentColor" strokeWidth="1.8" /></symbol>
        <symbol id="i-star" viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z" fill="currentColor" /></symbol>
        <symbol id="i-star-o" viewBox="0 0 24 24"><path d="M12 3.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.7 1-5.8-4.3-4.1 5.9-.8z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></symbol>
        <symbol id="i-sos" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M12 7.5v5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="16.2" r="1.2" fill="currentColor" /></symbol>
        <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M12 7.5V12l3 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></symbol>
        <symbol id="i-car" viewBox="0 0 32 24"><path d="M5 13l2.6-6.2A2 2 0 019.4 5.5h13.2a2 2 0 011.8 1.3L27 13v6a1 1 0 01-1 1h-2.5a1 1 0 01-1-1v-1.5h-13V19a1 1 0 01-1 1H6a1 1 0 01-1-1z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M5 13h22" stroke="currentColor" strokeWidth="1.8" /><circle cx="10" cy="15.5" r="1.4" fill="currentColor" /><circle cx="22" cy="15.5" r="1.4" fill="currentColor" /></symbol>
        <symbol id="i-briefcase" viewBox="0 0 24 24"><rect x="3.5" y="7" width="17" height="12.5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M9 7V5.5A1.5 1.5 0 0110.5 4h3A1.5 1.5 0 0115 5.5V7M3.5 12.5h17" fill="none" stroke="currentColor" strokeWidth="1.8" /></symbol>
        <symbol id="i-bag" viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M9 10V7a3 3 0 016 0v3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></symbol>
        <symbol id="i-moon" viewBox="0 0 24 24"><path d="M19.5 14.5A8 8 0 019.5 4.5a8 8 0 1010 10z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></symbol>
        <symbol id="i-home" viewBox="0 0 24 24"><path d="M4 11l8-6.5 8 6.5V20h-5.5v-5h-5v5H4z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></symbol>
        <symbol id="i-wallet" viewBox="0 0 24 24"><rect x="3.5" y="6" width="17" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M16 12.5h4.5" stroke="currentColor" strokeWidth="1.8" /><path d="M6 6l9-2.5 1 2.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></symbol>
        <symbol id="i-calendar" viewBox="0 0 24 24"><rect x="4" y="5.5" width="16" height="14.5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></symbol>
        <symbol id="i-heart" viewBox="0 0 24 24"><path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0112 7.6 4.3 4.3 0 0119.5 10C19.5 15.6 12 20 12 20z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></symbol>
        <symbol id="i-play" viewBox="0 0 24 24"><path d="M4.2 2.6l10.3 10.3L4.3 23.1c-.4-.2-.6-.7-.6-1.2V3.8c0-.5.2-.9.5-1.2z" fill="#34a853" /><path d="M17.9 9.5l-3.4 3.4 3.4 3.4 3.9-2.2c1.1-.6 1.1-1.8 0-2.4z" fill="#fbbc04" /><path d="M14.5 12.9L4.3 23.1c.4.2.9.2 1.4-.1l12.2-6.7z" fill="#ea4335" /><path d="M4.2 2.6c.4-.3 1-.4 1.5-.1l12.2 7-3.4 3.4z" fill="#4285f4" /></symbol>
        <symbol id="i-apple" viewBox="0 0 24 24"><path d="M16.4 12.7c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.8-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8s2.3-1.3 3.1-2.5c1-1.4 1.4-2.8 1.4-2.9 0 0-2.6-1-2.6-4.1zM13.9 5.1c.7-.9 1.2-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4z" fill="currentColor" /></symbol>
        <symbol id="i-whats" viewBox="0 0 24 24"><path d="M12 3.5a8.5 8.5 0 00-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1012 3.5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M9.2 8.2c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.1.1-.2.3 0 .5.6 1 1.4 1.8 2.5 2.4.2.1.4.1.5 0l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.2.3.4 0 .5-.2 1.2-.8 1.5-.6.4-1.5.5-2.7 0-2.1-.8-3.6-2.5-4.3-4-.5-1-.4-2 .1-2.6z" fill="currentColor" /></symbol>
        <symbol id="i-doc" viewBox="0 0 24 24"><path d="M6.5 3.5h7.5l4.5 4.5v11a1.5 1.5 0 01-1.5 1.5h-10.5A1.5 1.5 0 015 19V5a1.5 1.5 0 011.5-1.5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M13.5 3.5V8.5h5M8.5 13h7M8.5 16.5h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></symbol>
        <symbol id="i-phone" viewBox="0 0 24 24"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M10.5 18.5h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></symbol>
        <symbol id="i-insta" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" /></symbol>
      </defs>
    </svg>
  );
}

type IconProps = {
  id: string;
  className?: string;
  viewBox?: string;
  /** Ícones decorativos ficam ocultos de leitores de tela por padrão. */
  decorative?: boolean;
};

export function Icon({ id, className, viewBox, decorative = true }: IconProps) {
  return (
    <svg className={className} viewBox={viewBox} aria-hidden={decorative || undefined}>
      <use href={`#${id}`} />
    </svg>
  );
}

/** Marca TE LEVO (três arcos). */
export function Mark({ className }: { className?: string }) {
  return <Icon id="mark" viewBox="0 0 600 570" className={className} />;
}
