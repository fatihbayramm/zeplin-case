import Image from "next/image";
import Link from "next/link";
import TextCard from "@/components/cards/TextCard";
import { articles } from "@/data/articles/articles";

export default function TextSection() {
  return (
    <section className="bg-white py-10 md:py-20 w-full">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Left - Magazine Cover */}
          <div className="w-full md:w-auto md:shrink-0 relative shadow-xl rounded-2xl mx-auto md:mx-0">
            <div className="absolute left-0 top-[15%] md:top-[20%] z-20">
              <Image
                src="/images/text_image_2.png"
                alt="Son Sayı"
                width={50}
                height={120}
                className="md:w-[65px] md:h-[155px]"
              />
            </div>

            <div className="relative w-full max-w-[400px] mx-auto md:mx-0 aspect-8/11 md:w-[400px] md:h-[550px]">
              <Image src="/images/text_image.png" alt="Son Sayı" fill className="object-contain" />
            </div>

            <div className="flex items-center justify-center gap-3 mt-4 px-4 pb-4">
              <button className="cursor-pointer rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-blue hover:text-primary-blue transition-colors">
                <Image src="/icons/download.svg" alt="İndir" width={55} height={55} />
              </button>
              <Link
                href="#"
                className="bg-primary-blue text-white px-4 md:px-6 py-3 md:py-4 rounded-full text-[12px] md:text-[14px] font-medium hover:bg-primary-blue/80 transition-colors flex items-center gap-2"
              >
                <Image src="/icons/eye.svg" alt="Görüntüle" width={20} height={20} className="md:w-6 md:h-6" />
                <span className="hidden sm:inline">Görüntüle</span>
              </Link>
            </div>
          </div>

          {/* Right - Articles List */}
          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <div>
                <h2 className="text-primary-gray text-[18px] md:text-[22px] mb-1">Profuture Teknoloji Dergisi</h2>
                <h3 className="text-primary-red text-[24px] md:text-[28px] font-bold">Güncel Yazılar</h3>
              </div>
              <Link
                href="/yazilar"
                className="inline-flex items-center gap-2 md:gap-4 border border-gray-300 text-secondary-dark px-4 md:px-6 py-3 md:py-4 rounded-full text-[12px] md:text-[14px] hover:border-primary-blue hover:text-primary-blue transition-colors self-start sm:self-auto"
              >
                Tümünü Görüntüle
                <Image src="/icons/right_2.svg" alt="Ok" width={14} height={14} className="md:w-4 md:h-4" />
              </Link>
            </div>

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
