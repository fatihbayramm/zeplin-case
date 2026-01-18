import Image from "next/image";
import Link from "next/link";

export default function ArticleSection() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="relative max-w-[1600px] h-[440px] mx-auto">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/article_background.png" alt="Background" fill className="object-cover rounded-4xl" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-between gap-8 h-[440px]">
            <div className="shrink-0 relative w-[514px] h-[440px]">
              <div className="relative w-full h-full">
                <Image src="/images/dergison_2.png" alt="Dergi" fill className="object-contain rounded-lg" />
              </div>
            </div>

            <div className="flex-1 max-w-[600px]">
              <div className="mb-4 flex items-center justify-center">
                <Image src="/icons/promotion.svg" alt="Promotion" width={40} height={40} />
              </div>

              <h2 className="text-primary-gray text-[22px] text-center font-semibold mb-2">Makale Çağrısı</h2>
              <h3 className="text-primary-blue text-[28px] text-center font-bold mb-6">
                Türkiye Ulusal Dijital Veri ve Altyapıları
              </h3>

              <p className="text-secondary-dark text-[18px] text-center leading-relaxed mb-8">
                Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve özel sektörde teknoloji altyapıları,
                yapay zekâ uygulamaları, büyük veri analitiği, siber güvenlik, akıllı sistemler ve dijital dönüşüm
                odaklı özgün, güncel ve disiplinlerarası akademik çalışmalar değerlendirilecektir.
              </p>

              <div className="flex justify-center">
                <Link
                  href="#"
                  className="inline-flex items-center gap-6 bg-primary-red text-white px-8 py-4 rounded-full text-[16px] font-semibold hover:bg-[#c00c14] transition-colors"
                >
                  Makale Gönder
                  <Image src="/icons/right.svg" alt="Ok" width={16} height={16} />
                </Link>
              </div>
            </div>

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
