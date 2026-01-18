import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="sticky top-0 z-1000">
      <div className="flex">
        <div className="bg-primary-blue hidden lg:flex items-center w-[381px] h-[135px]">
          <Image src="/logo/logo.svg" alt="Logo" width={283} height={91} />
        </div>
        <div className="w-full hidden lg:block">
          <div className="bg-primary-dark text-white text-[12px] xl:text-[14px] p-2 flex justify-between">
            <div className="flex items-center gap-3">
              <Image src="/icons/message_2.svg" alt="Message" width={20} height={20} />
              <span>profuture@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 mr-5">
              <span>
                ISSN: <span className="font-bold">345-255</span>
              </span>

              <span>
                Başlangıç <span className="font-bold">2025</span>
              </span>

              <span>
                Periyot <span className="font-bold">Yılda 2 Sayı</span>
              </span>
            </div>
          </div>

          <div className="bg-white flex items-center justify-between p-2 h-[98px]">
            <div>
              <Link href="/">
                <Image src="/icons/home_2.svg" alt="Home" width={24} height={24} />
              </Link>
            </div>
            <div>
              <nav className="flex gap-5 text-secondary-dark text-[12px] xl:text-[14px]">
                <Link href="/">Amaç ve Kapsam</Link>
                <Link href="/">Etik İlkeler ve Yayın Politikası</Link>
                <Link href="/">Makale Çağrıları</Link>
                <Link href="/">Sayılar</Link>
                <Link href="/">İletişim</Link>
              </nav>
            </div>
            <div className="block xl:flex items-center gap-4">
              <Link
                href="/"
                className="bg-primary-blue text-white text-[12px] xl:text-[14px] flex items-center gap-4 rounded-full px-4 py-2 mb-1 xl:mb-0"
              >
                <Image src="/icons/kurul_2.svg" alt="Kurul" width={20} height={20} />
                <span>Dergi Kurulu</span>
              </Link>
              <Link
                href="/"
                className="bg-primary-green text-white text-[12px] xl:text-[14px] flex items-center gap-4 rounded-full px-4 py-2 mb-1 xl:mb-0"
              >
                <Image src="/icons/author_3.svg" alt="Yazar" width={20} height={20} />
                <span>Yazar Rehberi</span>
              </Link>

              <Link href="/" className="hidden xl:block">
                <Image src="/icons/search_2.svg" alt="Search" width={40} height={40} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
