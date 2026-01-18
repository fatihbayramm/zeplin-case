import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-10 md:py-16">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 flex flex-col md:flex-row md:items-center gap-6 md:gap-0">
        <div className="w-full md:max-w-[700px]">
          <p className="text-primary-gray text-[18px] md:text-[22px] mb-2">Dergi Amacı ve Kapsamı</p>
          <h3 className="text-primary-blue text-[24px] md:text-[28px] font-bold mb-3 md:mb-4">
            Profuture Teknoloji Dergisi
          </h3>
          <p className="text-secondary-dark text-[14px] md:text-[18px] mb-6 md:mb-8 text-justify leading-relaxed">
            Profuture Teknoloji Dergisi, 2022 yılında yayın hayatına başlayan; teknoloji, inovasyon, dijital dönüşüm ve
            geleceğin üretim modelleri ekseninde sosyal bilimler ile mühendislik ve fen bilimlerini bir araya getiren,
            uluslararası hakemli ve açık erişimli bir akademik yayındır.
          </p>

          <Link
            href="#"
            className="inline-flex items-center gap-4 md:gap-10 border border-gray-300 text-secondary-dark px-5 md:px-6 py-2.5 md:py-3 rounded-full text-[12px] md:text-[14px] hover:bg-primary-blue hover:text-white transition-colors"
          >
            Detay
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-4 md:h-4"
            >
              <path
                d="M15.9639 7.81854C15.8593 7.309 15.5836 7.03981 15.3364 6.80907L9.03257 0.425417C8.4716 -0.141806 7.56835 -0.141806 7.00738 0.425417C6.73165 0.694607 6.58903 1.05994 6.58903 1.45411C6.58903 1.83867 6.74115 2.204 7.00738 2.4828L11.0578 6.57834H1.39767C0.627526 6.57834 0 7.21286 0 8.0012C0 8.78955 0.627526 9.41445 1.39767 9.41445H11.0578L7.10245 13.4138C6.54148 13.9811 6.52247 14.8944 7.04541 15.4905C7.32114 15.7981 7.71097 15.9904 8.11981 16H8.16735C8.56668 16 8.93749 15.8462 9.22273 15.5578L15.4029 9.3087C15.5836 9.12603 16.1255 8.57804 15.9734 7.82815L15.9639 7.81854Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>

        <div className="hidden lg:flex flex-1 justify-end">
          <div className="relative lg:w-[480px] lg:h-[546px] xl:w-[720px] xl:h-[820px] lg:-mt-[260px] xl:-mt-[400px] transform rotate-[8deg] drop-shadow-2xl transition-all duration-300">
            <Image src="/images/dergison_1.png" alt="Dergi Kapağı" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
