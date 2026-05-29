import Logo from "./Logo";

const footerLinks = {
  Services: ["Booking Platforms", "Online Stores", "Presence Sites"],
  Studio: ["About", "Our Work", "Services", "Contact"],
  Legal: ["Privacy Policy", "Terms of Use"],
};

const socialLinks = ["Instagram", "LinkedIn"];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="px-12 lg:px-20 pt-16 lg:pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 pb-14 border-b border-white/8">
          {/* Brand col */}
          <div className="lg:col-span-4">
            <Logo colorScheme="light" className="mb-6" />
            <p className="text-silver/45 text-sm leading-relaxed max-w-xs">
              Digital studio for fishing lodges, guiding operations, and outdoor
              brands. Based in Poland — working globally.
            </p>
            <div className="flex flex-wrap gap-5 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-silver/35 text-xs hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-white/50 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">
                  {heading}
                </h4>
                <ul className="space-y-3">
                  {links.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-silver/40 text-sm hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          <p className="text-silver/25 text-xs">
            © {new Date().getFullYear()} Fjord Studio AS. All rights reserved.
          </p>
          <p className="text-silver/20 text-xs">
            Designed & built in Poland
          </p>
        </div>
      </div>
    </footer>
  );
}
