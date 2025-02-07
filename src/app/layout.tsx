import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#111111]">
        <header className="border-b border-[#2E2E2E]">
          <div className="container mx-auto max-w-[1785px] px-4 lg:px-[60px] xl:px-[120px] 2xl:px-[200px]">
            <div className="flex items-center h-[72px]">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo1.png"
                  alt="Norstack Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="text-white text-lg font-semibold">
                  norstack
                </span>
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="border-t border-[#2E2E2E] p-4">
          <div className="container mx-auto max-w-[1785px] px-4 lg:px-[60px] xl:px-[120px] 2xl:px-[200px]">
            {/* Footer content will go here */}
          </div>
        </footer>
      </body>
    </html>
  );
}
