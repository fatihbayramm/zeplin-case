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
    <div className="bg-white rounded-2xl shadow-lg p-4 flex gap-4 max-w-[420px]">
      {/* Left - Magazine Cover */}
      <div className="relative w-[140px] h-[180px] rounded-lg overflow-hidden shrink-0">
        <Image src={coverImage} alt={title} fill className="object-cover" />
      </div>

      {/* Right - Content */}
      <div className="flex flex-col flex-1">
        {/* Top Row - Icon and Badge */}
        <div className="flex items-center justify-between mb-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
              stroke="#273d89"
              strokeWidth="1.5"
              fill="none"
            />
            <path d="M7 7H17M7 12H17M7 17H13" stroke="#273d89" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {isNew && (
            <span className="bg-primary-green text-white text-[10px] font-semibold px-3 py-1 rounded-full">YENİ</span>
          )}
        </div>

        {/* Category */}
        <p className="text-gray-400 text-[12px] mb-1">Dergi</p>

        {/* Title */}
        <h4 className="text-primary-blue text-[16px] font-bold leading-tight mb-3">{title}</h4>

        {/* Info Row */}
        <div className="flex items-center gap-4 text-[12px] text-gray-600 mb-1">
          <div className="flex items-center gap-1">
            <Image src="/icons/cilt.svg" alt="Cilt" width={14} height={14} />
            <span>
              Cilt: <span className="text-primary-red font-semibold">{cilt}</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/icons/number.svg" alt="Sayı" width={14} height={14} />
            <span>
              Sayı: <span className="text-primary-red font-semibold">{sayi}</span>
            </span>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center gap-1 text-[12px] text-gray-600 mb-4">
          <Image src="/icons/calendar.svg" alt="Tarih" width={14} height={14} />
          <span>{date}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mt-auto">
          {/* View Button */}
          <Link
            href={`/dergi/${slug}`}
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-blue hover:text-primary-blue transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                fill="currentColor"
              />
            </svg>
          </Link>

          {/* Download Button */}
          <button className="w-9 h-9 rounded-full bg-primary-blue text-white flex items-center justify-center hover:bg-primary-blue/80 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16l-6-6h4V4h4v6h4l-6 6z" fill="currentColor" />
              <path d="M20 18H4v2h16v-2z" fill="currentColor" />
            </svg>
          </button>

          {/* Arrow Button */}
          <Link
            href={`/dergi/${slug}`}
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-blue hover:text-primary-blue transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.9639 7.81854C15.8593 7.309 15.5836 7.03981 15.3364 6.80907L9.03257 0.425417C8.4716 -0.141806 7.56835 -0.141806 7.00738 0.425417C6.73165 0.694607 6.58903 1.05994 6.58903 1.45411C6.58903 1.83867 6.74115 2.204 7.00738 2.4828L11.0578 6.57834H1.39767C0.627526 6.57834 0 7.21286 0 8.0012C0 8.78955 0.627526 9.41445 1.39767 9.41445H11.0578L7.10245 13.4138C6.54148 13.9811 6.52247 14.8944 7.04541 15.4905C7.32114 15.7981 7.71097 15.9904 8.11981 16H8.16735C8.56668 16 8.93749 15.8462 9.22273 15.5578L15.4029 9.3087C15.5836 9.12603 16.1255 8.57804 15.9734 7.82815L15.9639 7.81854Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
