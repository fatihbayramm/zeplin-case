import Image from "next/image";
import Link from "next/link";
import TextCard from "@/components/cards/TextCard";
import { articles } from "@/data/articles/articles";

export default function TextSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex gap-8">
          {/* Left - Magazine Cover */}
          <div className="shrink-0 relative">
            {/* Top Right - Issue Info */}
            <div className="absolute top-0 right-0 z-20 text-right">
              <p className="text-white text-[18px] font-bold">8. SAYI</p>
              <p className="text-white text-[14px] italic">Makale çağrısı</p>
            </div>

            {/* Red Banner - Son Sayı */}
            <div className="absolute left-0 top-[20%] z-20 bg-primary-red text-white px-2 py-6 rounded-r-full flex items-center justify-center">
              <p className="text-[14px] font-bold" style={{ writingMode: "vertical-rl", textOrientation: "upright" }}>
                Son Sayı
              </p>
            </div>

            {/* Magazine Cover */}
            <div className="relative w-[400px] h-[550px]">
              <Image src="/images/text_image.png" alt="Son Sayı" fill className="object-contain" />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 mt-4">
              <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-blue hover:text-primary-blue transition-colors">
                <Image src="/icons/download.svg" alt="İndir" width={20} height={20} />
              </button>
              <Link
                href="/son-sayi"
                className="bg-primary-blue text-white px-6 py-3 rounded-full text-[14px] font-medium hover:bg-primary-blue/80 transition-colors flex items-center gap-2"
              >
                <Image src="/icons/see.svg" alt="Görüntüle" width={18} height={18} />
                Görüntüle
              </Link>
            </div>
          </div>

          {/* Right - Articles List */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-primary-blue text-[20px] font-semibold mb-1">Profuture Teknoloji Dergisi</h2>
                <h3 className="text-primary-red text-[32px] font-bold">Güncel Yazılar</h3>
              </div>
              <Link
                href="/yazilar"
                className="inline-flex items-center gap-2 border border-gray-300 text-secondary-dark px-6 py-2 rounded-full text-[14px] hover:border-primary-blue hover:text-primary-blue transition-colors"
              >
                Tümünü Görüntüle
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.9639 7.81854C15.8593 7.309 15.5836 7.03981 15.3364 6.80907L9.03257 0.425417C8.4716 -0.141806 7.56835 -0.141806 7.00738 0.425417C6.73165 0.694607 6.58903 1.05994 6.58903 1.45411C6.58903 1.83867 6.74115 2.204 7.00738 2.4828L11.0578 6.57834H1.39767C0.627526 6.57834 0 7.21286 0 8.0012C0 8.78955 0.627526 9.41445 1.39767 9.41445H11.0578L7.10245 13.4138C6.54148 13.9811 6.52247 14.8944 7.04541 15.4905C7.32114 15.7981 7.71097 15.9904 8.11981 16H8.16735C8.56668 16 8.93749 15.8462 9.22273 15.5578L15.4029 9.3087C15.5836 9.12603 16.1255 8.57804 15.9734 7.82815L15.9639 7.81854Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 gap-4">
              {articles.map((article, index) => (
                <TextCard key={index} {...article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
