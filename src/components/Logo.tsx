import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  colorScheme?: "dark" | "light";
};

export default function Logo({
  className = "",
  colorScheme = "dark",
}: LogoProps) {
  return (
    <Link href="/" aria-label="Fjord Studio — Home" className={`inline-flex ${className}`}>
      <Image
        src="/assets/logo.png"
        alt="Fjord Studio"
        width={140}
        height={52}
        priority
        className="h-8 w-auto transition-all duration-300"
        style={{
          filter: colorScheme === "light"
            ? "brightness(0) invert(1)"
            : "brightness(0)",
        }}
      />
    </Link>
  );
}
