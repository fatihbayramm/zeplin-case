import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[135px] w-full sticky top-0 z-1000 flex bg-white">
      <div className="w-[381px] h-[135px] bg-primary-blue flex items-center justify-center rounded-tr-[90px]">
        <Image src="/logo/logo.svg" alt="Profuture" width={283} height={91} />
      </div>

      <div className="w-full">
        <div className="bg-primary-dark flex items-center justify-between p-2">
          <div className="flex items-center gap-3">
            <Image src="/icons/message_2.svg" alt="Message" width={24} height={24} />
            <span className="text-white text-[14px]">profuture@gmail.com</span>
          </div>

          <div className="text-white text-[17px] flex items-center gap-5 mr-20">
            <span>
              ISSN: <span className="font-bold">345-255</span>
            </span>
            <span>
              Başlangıç <span className="font-bold">2025</span>
            </span>
            <span>
              Periyot: <span className="font-bold">Yılda 2 Sayı</span>
            </span>
          </div>
        </div>

        <div className="bg-white flex items-center justify-between p-4">
          <div>
            <Link href="/">
              <Image src="/icons/home_2.svg" alt="Home" width={24} height={24} />
            </Link>
          </div>
          <div>
            <nav className="flex items-center gap-10">
              <Link href="/">Amaç ve Kapsam</Link>
              <Link href="/">Etik İlkeler ve Yayın Politikası</Link>
              <Link href="/">Makale Çağrıları</Link>
              <Link href="/">Sayılar</Link>
              <Link href="/">İletişim</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="bg-primary-blue text-white px-4 py-4 rounded-full flex items-center gap-4">
              <Image src="/icons/kurul_2.svg" alt="Kurul" width={24} height={24} />
              <span>Dergi Kurulu</span>
            </Link>

            <Link href="/" className="bg-primary-green text-white px-4 py-4 rounded-full flex items-center gap-4">
              <Image src="/icons/author_3.svg" alt="Yazar" width={24} height={24} />
              <span>Yazar Rehberi</span>
            </Link>

            <Image src="/icons/search_2.svg" alt="Search" width={55} height={55} />
          </div>
        </div>
      </div>
    </header>
  );
}
