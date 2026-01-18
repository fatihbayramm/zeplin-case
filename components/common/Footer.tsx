import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-footer-bg text-white py-6 md:py-8 px-4 md:px-6">
        <div className="max-w-[1600px] mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Column 1 - Dergi Editörü */}
            <div className="flex items-start md:items-center gap-3 md:gap-4">
              <Image
                src="/icons/personal.svg"
                alt="Dergi Editörü"
                width={40}
                height={40}
                className="md:w-[55px] md:h-[55px] shrink-0"
              />
              <div className="min-w-0">
                <p className="text-white/60 text-[12px] md:text-sm mb-1">Dergi Editörü</p>
                <p className="font-semibold text-[13px] md:text-[15px] mb-1 break-words">Prof. Dr. Elif Başkaya Acar</p>
                <Link href="mailto:elif@gmail.com" className="text-[12px] md:text-sm flex items-center gap-1">
                  <Image
                    src="/icons/email.svg"
                    alt="Email"
                    width={12}
                    height={12}
                    className="md:w-[15px] md:h-[15px]"
                  />
                  <span className="text-white/60 break-all">elif@gmail.com</span>
                </Link>
              </div>
            </div>

            {/* Column 2 - Mail Adresi */}
            <div className="flex items-start md:items-center gap-3 md:gap-4 md:justify-center">
              <Image
                src="/icons/mail.svg"
                alt="Mail Adresi"
                width={40}
                height={40}
                className="md:w-[55px] md:h-[55px] shrink-0"
              />
              <div className="min-w-0">
                <p className="text-white/60 text-[12px] md:text-sm mb-1">Mail Adresi</p>
                <Link
                  href="mailto:profuture@gmail.com"
                  className="font-semibold text-[13px] md:text-[15px] hover:underline break-all"
                >
                  profuture@gmail.com
                </Link>
              </div>
            </div>

            {/* Column 3 - Adres */}
            <div className="flex items-start md:items-center gap-3 md:gap-4 md:justify-end">
              <Image
                src="/icons/mail.svg"
                alt="Mail Adresi"
                width={40}
                height={40}
                className="md:w-[55px] md:h-[55px] shrink-0"
              />
              <div className="min-w-0">
                <p className="text-white/60 text-[12px] md:text-sm mb-1">Profuture Teknoloji Yayınevi</p>
                <p className="text-[13px] md:text-[15px] break-words">Ahmet Kemal Mahallesi 1245. Cadde No: 10</p>
                <p className="text-[13px] md:text-[15px]">Çankaya/Ankara</p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-white/20 pt-4 md:pt-6">
            <p className="text-white/60 text-[12px] md:text-[15px] text-center leading-relaxed max-w-8xl mx-auto italic px-2">
              Bu sitede yer alan tüm yazılı, görsel ve uygulama içerikleri kaynak gösterilmeden kullanılamaz. Site
              içerisinde sunulan bilgiler yalnızca bilgilendirme amacıyla hazırlanmış olup, bu bilgilerin kullanımından
              doğabilecek her türlü sorumluluk kullanıcıya aittir. Siteye erişim sağlayan kullanıcılar, bu şartları
              okumuş, anlamış ve kabul etmiş sayılır.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Red Bar */}
      <div className="bg-footer-red py-2 md:py-3">
        <p className="text-white text-center text-[11px] md:text-sm px-4">
          Profuture Teknoloji - Tüm Hakları Saklıdır. © 2025
        </p>
      </div>
    </footer>
  );
}
