import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-[#2E2E2E]">
      <div className="container mx-auto max-w-[1785px] px-4 lg:px-[60px] xl:px-[120px] 2xl:px-[200px]">
        <div className="flex items-center h-[72px]">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo1.png"
              alt="Norstack Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-white text-lg font-medium">norstack</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
