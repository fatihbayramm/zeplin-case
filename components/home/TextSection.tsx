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
          <div className="shrink-0 relative shadow-xl rounded-2xl">
            {/* Red Banner - Son Sayı */}
            <div className="absolute left-0 top-[20%] z-20">
              <Image src="/images/text_image_2.png" alt="Son Sayı" width={65} height={155} />
            </div>

            {/* Magazine Cover */}
            <div className="relative w-[400px] h-[550px]">
              <Image src="/images/text_image.png" alt="Son Sayı" fill className="object-contain" />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <button className="cursor-pointer rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-blue hover:text-primary-blue transition-colors">
                <Image src="/icons/download.svg" alt="İndir" width={55} height={55} />
              </button>
              <Link
                href="/son-sayi"
                className="bg-primary-blue text-white px-6 py-4 rounded-full text-[14px] font-medium hover:bg-primary-blue/80 transition-colors flex items-center gap-2"
              >
                <Image src="/icons/eye.svg" alt="Görüntüle" width={24} height={24} />
                Görüntüle
              </Link>
            </div>
          </div>

          {/* Right - Articles List */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-primary-gray text-[22px] mb-1">Profuture Teknoloji Dergisi</h2>
                <h3 className="text-primary-red text-[28px] font-bold">Güncel Yazılar</h3>
              </div>
              <Link
                href="/yazilar"
                className="inline-flex items-center gap-4 border border-gray-300 text-secondary-dark px-6 py-4 rounded-full text-[14px] hover:border-primary-blue hover:text-primary-blue transition-colors"
              >
                Tümünü Görüntüle
                <Image src="/icons/right_2.svg" alt="Ok" width={16} height={16} />
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
