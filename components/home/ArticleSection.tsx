import Image from "next/image";
import Link from "next/link";

export default function ArticleSection() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="relative max-w-[1600px] h-[440px] mx-auto">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image src="/images/article_background.png" alt="Background" fill className="object-cover rounded-4xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6">
          <div className="flex items-center justify-between gap-8 h-[440px]">
            {/* Left - Stacked Magazine Covers */}
            <div className="shrink-0 relative w-[200px] h-[600px]">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    transform: `rotate(${-8 + index * 3}deg) translateY(${index * 40}px) translateX(${index * 15}px)`,
                    zIndex: 4 - index,
                  }}
                >
                  <div className="relative w-[160px] h-[200px]">
                    <Image
                      src="/images/dergison_2.png"
                      alt={`Dergi ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Center - Main Content */}
            <div className="flex-1 max-w-[600px]">
              {/* Megaphone Icon */}
              <div className="mb-4 flex items-center justify-center">
                <Image src="/icons/promotion.svg" alt="Promotion" width={40} height={40} />
              </div>

              {/* Title */}
              <h2 className="text-primary-gray text-[22px] text-center font-semibold mb-2">Makale Çağrısı</h2>
              <h3 className="text-primary-blue text-[28px] text-center font-bold mb-6">
                Türkiye Ulusal Dijital Veri ve Altyapıları
              </h3>

              {/* Description */}
              <p className="text-secondary-dark text-[18px] text-center leading-relaxed mb-8">
                Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve özel sektörde teknoloji altyapıları,
                yapay zekâ uygulamaları, büyük veri analitiği, siber güvenlik, akıllı sistemler ve dijital dönüşüm
                odaklı özgün, güncel ve disiplinlerarası akademik çalışmalar değerlendirilecektir.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center">
                <Link
                  href="/makale-gonder"
                  className="inline-flex items-center gap-6 bg-primary-red text-white px-8 py-4 rounded-full text-[16px] font-semibold hover:bg-[#c00c14] transition-colors"
                >
                  Makale Gönder
                  <Image src="/icons/right.svg" alt="Ok" width={16} height={16} />
                </Link>
              </div>
            </div>

            {/* Right - Large Magazine Cover */}
            <div className="shrink-0 mb-26">
              <div className="relative w-[306px] h-[465px] drop-shadow-2xl">
                <Image src="/images/article.png" alt="Makale Çağrısı" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
