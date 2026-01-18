import Image from "next/image";
import Link from "next/link";

interface TextCardProps {
  category: string;
  type: string;
  title: string;
  pageRange: string;
  authors: string[];
}

export default function TextCard({ category, type, title, pageRange, authors }: TextCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-3 md:p-4 flex flex-col gap-2 md:gap-2">
      {/* Tags */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="bg-primary-blue text-white text-[12px] md:text-[14px] px-3 md:px-4 py-1 md:py-1.5 rounded-full">
          {category}
        </span>
        <span className="bg-secondary-gray text-primary-dark text-[12px] md:text-[14px] px-3 md:px-4 py-1 md:py-1.5 rounded-full">
          {type}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        {/* Left - Title and Info */}
        <div className="flex-1">
          {/* Title Section */}
          <div className="flex items-start gap-2 md:gap-3 mb-3">
            <Image
              src="/icons/pdf.svg"
              alt="PDF"
              width={20}
              height={23}
              className="shrink-0 mt-1 md:w-[22px] md:h-[25px]"
            />
            <h3 className="text-secondary-dark text-[16px] md:text-[20px] font-bold leading-tight flex-1">{title}</h3>
          </div>

          {/* Page and Author Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-[12px] md:text-[14px]">
            <div className="flex items-center gap-2">
              <Image src="/icons/page.svg" alt="Page" width={20} height={20} className="md:w-[26px] md:h-[26px]" />
              <span className="text-secondary-dark text-[14px] md:text-[16px]">
                Sayfa: <span className="font-semibold">{pageRange}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/icons/author_2.svg"
                alt="Author"
                width={20}
                height={20}
                className="md:w-[26px] md:h-[26px]"
              />
              <span className="text-secondary-dark text-[14px] md:text-[16px] break-words">{authors.join(", ")}</span>
            </div>
          </div>
        </div>

        {/* Right - Action Buttons */}
        <div className="flex items-center justify-end gap-2 md:gap-3 md:mt-auto">
          <Link
            href="#"
            className="rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-blue hover:text-primary-blue transition-colors shrink-0"
          >
            <Image src="/icons/eposta.svg" alt="Paylaş" width={40} height={40} className="md:w-[55px] md:h-[55px]" />
          </Link>

          <Link
            href="#"
            className="rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-blue hover:text-primary-blue transition-colors shrink-0"
          >
            <Image src="/icons/download.svg" alt="İndir" width={40} height={40} className="md:w-[55px] md:h-[55px]" />
          </Link>

          <Link
            href="#"
            className="bg-primary-blue text-white px-4 md:px-6 py-3 md:py-4 rounded-full text-[14px] md:text-[16px] font-medium hover:bg-primary-blue/80 transition-colors flex items-center gap-2 shrink-0"
          >
            <Image src="/icons/eye.svg" alt="Görüntüle" width={18} height={18} className="md:w-6 md:h-6" />
            <span className="hidden sm:inline">Görüntüle</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
