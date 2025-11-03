import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import logo from "../../../public/assets/Image/logo.svg"
import cart from "../../../public/assets/Image/cart.svg"
/* ===========================
   Types
=========================== */
export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

type Lang = { code: string; label: string };

type HeaderProps = {
  className?: string;
  leftNav?: NavItem[];
  logoSrc?: string; // if not provided, shows inline SVG logo
  phoneText?: string; // e.g. "Kontaktirajte nas"
  phoneHref?: string; // e.g. "tel:+385..." 
  cartCount?: number;
  languages?: Lang[];
  currentLang?: string; // code
};

/* ===========================
   Anim helpers
=========================== */
const fade = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.18 } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.12 } },
};

const drawer = {
  hidden: { x: "-100%" },
  show: { x: 0, transition: { duration: 0.22 } },
  exit: { x: "-100%", transition: { duration: 0.15 } },
};

/* ===========================
   Header
=========================== */
export default function Header({
  className,
  leftNav = [
    {
      label: "Noževi",
      children: [
        { label: "Petty", href: "/petty" },
        { label: "Gyuto", href: "/gyuto" },
        { label: "Santoku", href: "/santoku" },
        { label: "Nakiri", href: "/nakiri" },
      ],
    },
    { label: "O Noževima", href: "/o-nozevima" },
    { label: "O Karlo Banu", href: "/o-karlo-banu" },
    { label: "Što drugi kažu", href: "/recenzije" },
  ],
  logoSrc,
  phoneText = "Kontaktirajte nas",
  phoneHref = "#",
  cartCount = 4,
  languages = [
    { code: "hr", label: "Hr" },
    { code: "en", label: "En" },
  ],
  currentLang = "hr",
}: HeaderProps) {
  const [openDropdown, setOpenDropdown] = React.useState<number | null>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [langOpen, setLangOpen] = React.useState(false);

  // close dropdowns on escape
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setLangOpen(false);
        setDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-white/80 backdrop-blur border-b border-zinc-200",
        className
      )}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-3 items-center py-3">
          {/* Left: nav / hamburger */}
          <div className="flex items-center gap-2">
            {/* Mobile: hamburger */}
            <button
              className="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-zinc-100 lg:hidden"
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
            >
              <BurgerIcon />
            </button>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-5 lg:flex">
              {leftNav.map((item, idx) => {
                const hasChildren = !!item.children?.length;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hasChildren && setOpenDropdown(idx)}
                    onMouseLeave={() => hasChildren && setOpenDropdown(null)}
                  >
                    <a
                      href={item.href || "#"}
                      className={cn(
                        "text-[14px] text-[#4F4640] font-semibold hover:text-[#4F4640] inline-flex items-center gap-1"
                      )}
                      onClick={(e) => {
                        if (hasChildren) {
                          e.preventDefault();
                          setOpenDropdown(openDropdown === idx ? null : idx);
                        }
                      }}
                    >
                      {item.label}
                      {hasChildren && <ChevronDown className="h-3 w-3" />}
                    </a>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {hasChildren && openDropdown === idx && (
                        <motion.div
                          variants={fade}
                          initial="hidden"
                          animate="show"
                          exit="exit"
                          className="absolute left-0 mt-2 min-w-[180px] overflow-hidden rounded-md border border-zinc-200 bg-white shadow-md"
                        >
                          <ul className="p-2">
                            {item.children!.map((c) => (
                              <li key={c.label}>
                                <a
                                  href={c.href}
                                  className="block rounded-sm px-3 py-2 text-sm text-[#4F4640]/90 hover:bg-zinc-100"
                                >
                                  {c.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Center: logo */}
          <div className="flex items-center justify-center">
            <a href="/" aria-label="Home">
        
                <img
                  src={logo}
                  alt="Logo"
                  className="h-6 w-auto md:h-10 select-none"
                />
             
            </a>
          </div>

          {/* Right: phone, cart, lang */}
          <div className="flex items-center justify-end gap-4">
            <a
              href={phoneHref}
              className="hidden items-center gap-2 text-[14px] text-[#4F4640] font-semibold hover:text-[#4F4640] md:flex"
            >
              <PhoneIcon className="h-6 w-6 text-[#aaaaaa]" />
              {phoneText}
            </a>

            <a
              href="/cart"
              className="relative inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-zinc-100"
              aria-label="Cart"
            >
              {/* <CartIcon className="h-5 w-5" /> */}
              <img src={cart}></img>
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#FF7020] px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </a>

            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm hover:bg-zinc-100"
                aria-haspopup="menu"
                aria-expanded={langOpen}
              >
                {languages.find((l) => l.code === currentLang)?.label ?? "Lang"}
                <ChevronDown className="h-3 w-3" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    variants={fade}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="absolute right-0 mt-2 w-28 rounded-md border border-zinc-200 bg-white shadow-md"
                  >
                    <ul className="p-1">
                      {languages.map((l) => (
                        <li key={l.code}>
                          <a
                            href={`?lang=${l.code}`}
                            className={cn(
                              "block rounded px-2 py-1.5 text-sm hover:bg-zinc-100",
                              l.code === currentLang && "font-semibold"
                            )}
                            onClick={() => setLangOpen(false)}
                          >
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.aside
              variants={drawer}
              initial="hidden"
              animate="show"
              exit="exit"
              className="fixed inset-y-0 left-0 z-50 w-[78%] max-w-sm bg-white shadow-xl"
            >
              <div className="flex items-center justify-between border-b px-4 py-3">
                <span className="text-sm font-semibold">Menu</span>
                <button
                  aria-label="Close menu"
                  onClick={() => setDrawerOpen(false)}
                  className="rounded-md p-1 hover:bg-zinc-100"
                >
                  <CloseIcon />
                </button>
              </div>

              <nav className="px-2 py-3">
                {leftNav.map((item) => (
                  <div key={item.label} className="px-1 py-1">
                    <a
                      href={item.href || "#"}
                      className="block rounded-md px-3 py-2 text-sm hover:bg-zinc-100"
                    >
                      {item.label}
                    </a>
                    {item.children?.length ? (
                      <ul className="ml-2 mt-1 space-y-1 border-l pl-2">
                        {item.children.map((c) => (
                          <li key={c.label}>
                            <a
                              href={c.href}
                              className="block rounded-md px-3 py-1.5 text-sm text-[#4F4640]/90 hover:bg-zinc-100"
                            >
                              {c.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </nav>

              <div className="mt-auto border-t px-4 py-3 text-sm">
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-2 text-[#4F4640]/80 hover:text-[#4F4640]"
                >
                  <PhoneIcon className="h-4 w-4 text-zinc-400" />
                  {phoneText}
                </a>
              </div>
            </motion.aside>

            {/* Backdrop */}
            <motion.div
              onClick={() => setDrawerOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black"
            />
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ===========================
   Inline icons (no deps)
=========================== */
function BurgerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M5.25 7.5L10 12.25 14.75 7.5" />
    </svg>
  );
}
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2a1.2 1.2 0 011.3-.3c1.2.4 2.6.7 3.3.9a1.2 1.2 0 011 1.2v3.3a1.2 1.2 0 01-1.2 1.2A18.8 18.8 0 013 5.2 1.2 1.2 0 014.2 4h3.3a1.2 1.2 0 011.2 1.1c.1.8.4 2.1.8 3.3.1.5 0 1-.3 1.3l-2.6 2.1z" />
    </svg>
  );
}
function CartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 18a2 2 0 11-.01 4.01A2 2 0 017 18zm10 0a2 2 0 11-.01 4.01A2 2 0 0117 18zM2 3h2l2.7 12.3a2 2 0 002 1.7h8.9a2 2 0 002-1.6L21 8H7" />
    </svg>
  );
}
function LogoIcon({ className }: { className?: string }) {
  // Simple "feather" crown-like mark in orange
  return (
    <svg className={className} viewBox="0 0 64 20" fill="none">
      <path d="M6 18l8-16-3 16 7-16 2 16 2-16 7 16-3-16 8 16" stroke="#FF7020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
