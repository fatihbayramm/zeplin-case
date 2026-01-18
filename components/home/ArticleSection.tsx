import Image from "next/image";
import Link from "next/link";

export default function ArticleSection() {
  return (
    <section className="relative w-full py-10 md:py-20 overflow-hidden px-4 md:px-0">
      <div className="relative max-w-[1600px] min-h-[440px] md:h-[440px] mx-auto">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/article_background.png"
            alt="Background"
            fill
            className="object-cover rounded-2xl md:rounded-4xl"
          />
        </div>

        <div className="relative z-10 p-6 md:p-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8 md:h-[440px]">
            {/* Left - Magazine Cover */}
            <div className="hidden lg:block shrink-0 relative w-full max-w-[300px] lg:w-[514px] h-[300px] lg:h-[440px] mx-auto lg:mx-0">
              <div className="relative w-full h-full">
                <Image src="/images/dergison_2.png" alt="Dergi" fill className="object-contain rounded-lg" />
              </div>
            </div>

            {/* Center - Content */}
            <div className="flex-1 max-w-[600px] mx-auto md:mx-0">
              <div className="mb-3 md:mb-4 flex items-center justify-center">
                <Image src="/icons/promotion.svg" alt="Promotion" width={32} height={32} className="md:w-10 md:h-10" />
              </div>

              <h2 className="text-primary-gray text-[18px] md:text-[22px] text-center font-semibold mb-2">
                Makale Çağrısı
              </h2>
              <h3 className="text-primary-blue text-[22px] md:text-[28px] text-center font-bold mb-4 md:mb-6">
                Türkiye Ulusal Dijital Veri ve Altyapıları
              </h3>

              <p className="text-secondary-dark text-[14px] md:text-[18px] text-center leading-relaxed mb-6 md:mb-8">
                Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve özel sektörde teknoloji altyapıları,
                yapay zekâ uygulamaları, büyük veri analitiği, siber güvenlik, akıllı sistemler ve dijital dönüşüm
                odaklı özgün, güncel ve disiplinlerarası akademik çalışmalar değerlendirilecektir.
              </p>

              <div className="flex justify-center">
                <Link
                  href="#"
                  className="inline-flex items-center gap-3 md:gap-6 bg-primary-red text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-[14px] md:text-[16px] font-semibold hover:bg-[#c00c14] transition-colors"
                >
                  Makale Gönder
                  <Image src="/icons/right.svg" alt="Ok" width={14} height={14} className="md:w-4 md:h-4" />
                </Link>
              </div>
            </div>

            {/* Right - Article Cover */}
            <div className="hidden md:block shrink-0 mb-26">
              <div className="relative w-[250px] lg:w-[306px] h-[380px] lg:h-[465px] drop-shadow-2xl mx-auto lg:mx-0">
                <Image src="/images/article.png" alt="Makale Çağrısı" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
