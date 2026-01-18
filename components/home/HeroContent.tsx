import Image from "next/image";
import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="w-full">
      <section className="relative w-full h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/slide_1.png" alt="Hero Background" fill className="object-cover" priority />
        </div>

        <div className="relative z-10 h-full max-w-[1600px] mx-auto px-6 flex items-center">
          <div className="max-w-[500px] text-white">
            <h1 className="text-[28px] font-bold mb-1">Profuture Teknoloji Dergisi</h1>
            <h2 className="text-[32px] font-bold mb-4">Son Sayı Yayında</h2>
            <p className="text-[16px] leading-relaxed mb-6 text-white/90">
              Profuture teknoloji mekanizmaları değişikliği alanlarında özgün akademik çalışmalar içeren yeni sayıya
              şimdi erişin.
            </p>

            <div className="flex items-center gap-6 mb-6 text-[16px]">
              <div className="flex items-center gap-2">
                <Image src="/icons/cilt.svg" alt="Cilt" width={16} height={16} />
                <span>
                  Cilt: <strong>2</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/icons/number.svg" alt="Sayı" width={16} height={16} />
                <span>
                  Sayı: <strong>7</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/icons/calendar.svg" alt="Takvim" width={16} height={16} />
                <span>Haziran 2025</span>
              </div>
            </div>

            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-primary-blue text-[16px] text-white px-6 py-3 rounded-full font-medium hover:bg-primary-blue/80 transition-colors"
            >
              Dergiyi Görüntüle
              <Image src="/icons/right.svg" alt="Ok" width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
