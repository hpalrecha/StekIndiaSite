import { Link } from "wouter";
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import { COMPANY_INFO, NAV_ITEMS, STEK_GLOBAL_URL } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#010101] text-white pt-24 pb-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-8">
              <img src="/logo-light.png" alt="STEK INDIA" className="h-7 w-auto" />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-10 font-medium">
              Protect what you love. Leading provider of premium paint protection films and automotive care solutions worldwide.
            </p>
            <div className="flex items-center gap-6">
              <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><SiFacebook className="h-5 w-5" /></a>
              <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><SiInstagram className="h-5 w-5" /></a>
              <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><SiLinkedin className="h-5 w-5" /></a>
              <a href={COMPANY_INFO.social.youtube} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><SiYoutube className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 mb-8">About Us</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px]">Company</Link></li>
              <li><Link href="/sustainability" className="text-sm text-white/60 hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px]">Sustainability</Link></li>
              <li><Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 mb-8">Brands</h4>
            <ul className="space-y-4">
              <li><Link href="/brands/dyno" className="text-sm text-white/60 hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px]">DYNO Series</Link></li>
              <li><Link href="/brands/formula" className="text-sm text-white/60 hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px]">STEK Formula</Link></li>
              <li><Link href="/brands/forceshield" className="text-sm text-white/60 hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px]">Forceshield</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 mb-8">Contact</h4>
            <ul className="space-y-4 text-[10px] text-white/40 font-bold uppercase tracking-widest">
              <li className="leading-relaxed">
                {COMPANY_INFO.address}
              </li>
              <li>
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">{COMPANY_INFO.phone}</a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">{COMPANY_INFO.email}</a>
              </li>
              <li>
                <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{COMPANY_INFO.website}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8 order-2 md:order-1">
            <Link href="/terms" className="text-[10px] text-white/30 hover:text-white transition-colors font-bold uppercase tracking-widest">Terms & Conditions</Link>
            <Link href="/privacy" className="text-[10px] text-white/30 hover:text-white transition-colors font-bold uppercase tracking-widest">Privacy Policy</Link>
          </div>
          <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest order-1 md:order-2">
            © {currentYear} STEK AUTOMOTIVE. STEK INDIA IS AN AUTHORIZED DISTRIBUTOR.
          </p>
        </div>
      </div>
    </footer>
  );
}
