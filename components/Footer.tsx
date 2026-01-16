import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-footer-bg text-white py-8 px-6">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div className="flex items-center gap-4">
              <Image src="/icons/personal.svg" alt="Dergi Editörü" width={55} height={55} />
              <div>
                <p className="text-white/60 text-sm mb-1">Dergi Editörü</p>
                <p className="font-semibold text-[15px] mb-1">Prof. Dr. Elif Başkaya Acar</p>
                <Link href="mailto:elif@gmail.com" className="text-sm flex items-center gap-1">
                  <Image src="/icons/email.svg" alt="Email" width={15} height={15} />
                  <span className="text-white/60">elif@gmail.com</span>
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center">
              <Image src="/icons/mail.svg" alt="Mail Adresi" width={55} height={55} />

              <div>
                <p className="text-white/60 text-sm mb-1">Mail Adresi</p>
                <Link href="mailto:profuture@gmail.com" className="font-semibold text-[15px] hover:underline">
                  profuture@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-end">
              <Image src="/icons/mail.svg" alt="Mail Adresi" width={55} height={55} />

              <div>
                <p className="text-white/60 text-sm mb-1">Profuture Teknoloji Yayınevi</p>
                <p className="text-[15px]">Ahmet Kemal Mahallesi 1245. Cadde No: 10</p>
                <p className="text-[15px]">Çankaya/Ankara</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6">
            <p className="text-white/60 text-[15px] text-center leading-relaxed max-w-8xl mx-auto italic">
              Bu sitede yer alan tüm yazılı, görsel ve uygulama içerikleri kaynak gösterilmeden kullanılamaz. Site
              içerisinde sunulan bilgiler yalnızca bilgilendirme amacıyla hazırlanmış olup, bu bilgilerin kullanımından
              doğabilecek her türlü sorumluluk kullanıcıya aittir. Siteye erişim sağlayan kullanıcılar, bu şartları
              okumuş, anlamış ve kabul etmiş sayılır.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-footer-red py-3">
        <p className="text-white text-center text-sm">Profuture Teknoloji - Tüm Hakları Saklıdır. © 2025</p>
      </div>
    </footer>
  );
}
