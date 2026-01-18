import Image from "next/image";
import Link from "next/link";

interface MagazineCardProps {
  title: string;
  coverImage: string;
  cilt: number;
  sayi: number;
  date: string;
  isNew?: boolean;
  slug: string;
}

export default function MagazineCard({ title, coverImage, cilt, sayi, date, isNew = false, slug }: MagazineCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex gap-4 w-full items-stretch">
      <div className="relative w-[140px] rounded-lg overflow-hidden shrink-0 flex items-center">
        <Image src={coverImage} alt={title} fill className="object-contain" />
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <Image src="/icons/pdf.svg" alt="PDF" width={25} height={25} />
          {isNew && (
            <span className="bg-secondary-blue text-white text-[12px] font-semibold px-3 py-1 rounded-full">YENİ</span>
          )}
        </div>

        <div>
          <p className="inline text-primary-dark bg-secondary-gray text-[14px] mb-1 px-2 py-0.5 rounded-xl">Dergi</p>
        </div>

        <h4 className="text-primary-dark text-[20px] font-bold leading-tight mb-3 mt-3">{title}</h4>

        <div className="flex items-center gap-9 text-[12px] text-gray-600 mb-2">
          <div className="flex items-center gap-1">
            <Image src="/icons/cilt_2.svg" alt="Cilt" width={18} height={18} />
            <span className="text-secondary-dark text-[16px]">
              Cilt: <span className="font-semibold">{cilt}</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/icons/number_2.svg" alt="Sayı" width={18} height={18} />
            <span className="text-secondary-dark text-[16px]">
              Sayı: <span className="font-semibold">{sayi}</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-4">
          <Image src="/icons/calendar_2.svg" alt="Tarih" width={18} height={18} />
          <span className="text-[16px] text-secondary-dark font-semibold">{date}</span>
        </div>

        <div className="flex items-center justify-center gap-2 mt-auto">
          <Link
            href="#"
            className="rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-blue hover:text-primary-blue transition-colors"
          >
            <Image src="/icons/see.svg" alt="See" width={55} height={55} />
          </Link>

          <Link
            href="#"
            className="rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-blue hover:text-primary-blue transition-colors"
          >
            <Image src="/icons/download.svg" alt="Download" width={55} height={55} />
          </Link>

          <Link
            href="#"
            className="rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-blue hover:text-primary-blue transition-colors"
          >
            <Image src="/icons/search.svg" alt="Search" width={55} height={55} />
          </Link>
        </div>
      </div>
    </div>
  );
}
