import Image from "next/image";
import Link from "next/link";

export function Logo({ variant = "header" }: { variant?: "header" | "footer" }) {
  if (variant === "footer") {
    return (
      <Link href="/" className="inline-flex">
        <Image
          src="/logo.png"
          alt="Buluş Apart, Bursa Apart"
          width={748}
          height={563}
          className="h-24 w-auto"
        />
      </Link>
    );
  }

  return (
    <Link href="/" className="mr-auto flex min-w-0 items-center">
      <Image
        src="/logo.png"
        alt="Buluş Apart, Bursa Apart"
        width={748}
        height={563}
        priority
        className="h-16 w-auto shrink-0 md:h-20"
      />
    </Link>
  );
}
