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
    <div className="bg-white rounded-2xl shadow-lg p-3 md:p-3 lg:p-4 flex flex-col gap-2">
      <div className="flex items-center gap-1.5 md:gap-2 flex-wrap">
        <span className="bg-primary-blue text-white text-[11px] md:text-[12px] xl:text-[14px] px-2.5 md:px-3 xl:px-4 py-1 xl:py-1.5 rounded-full">
          {category}
        </span>
        <span className="bg-secondary-gray text-primary-dark text-[11px] md:text-[12px] xl:text-[14px] px-2.5 md:px-3 xl:px-4 py-1 xl:py-1.5 rounded-full">
          {type}
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-3 lg:gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 mb-2 md:mb-2 lg:mb-3">
            <Image
              src="/icons/pdf.svg"
              alt="PDF"
              width={18}
              height={20}
              className="shrink-0 mt-1 md:w-[20px] md:h-[22px] xl:w-[22px] xl:h-[25px]"
            />
            <h3 className="text-secondary-dark text-[14px] md:text-[15px] lg:text-[18px] xl:text-[20px] font-bold leading-tight flex-1">
              {title}
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6">
            <div className="flex items-center gap-1.5 md:gap-2">
              <Image
                src="/icons/page.svg"
                alt="Page"
                width={18}
                height={18}
                className="md:w-[20px] md:h-[20px] xl:w-[26px] xl:h-[26px] shrink-0"
              />
              <span className="text-secondary-dark text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px]">
                Sayfa: <span className="font-semibold">{pageRange}</span>
              </span>
            </div>

            <div className="flex items-center gap-1.5 md:gap-2">
              <Image
                src="/icons/author_2.svg"
                alt="Author"
                width={18}
                height={18}
                className="md:w-[20px] md:h-[20px] xl:w-[26px] xl:h-[26px] shrink-0"
              />
              <span className="text-secondary-dark text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px]">
                {authors.join(", ")}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-1.5 md:gap-2 lg:gap-2 xl:gap-3 shrink-0">
          <Link
            href="#"
            className="rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-blue hover:text-primary-blue transition-colors shrink-0"
          >
            <Image
              src="/icons/eposta.svg"
              alt="Paylaş"
              width={36}
              height={36}
              className="md:w-[40px] md:h-[40px] xl:w-[55px] xl:h-[55px]"
            />
          </Link>

          <Link
            href="#"
            className="rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-blue hover:text-primary-blue transition-colors shrink-0"
          >
            <Image
              src="/icons/download.svg"
              alt="İndir"
              width={36}
              height={36}
              className="md:w-[40px] md:h-[40px] xl:w-[55px] xl:h-[55px]"
            />
          </Link>

          <Link
            href="#"
            className="bg-primary-blue text-white px-3 md:px-4 lg:px-5 xl:px-6 py-2 md:py-2.5 lg:py-3 xl:py-4 rounded-full text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] font-medium hover:bg-primary-blue/80 transition-colors flex items-center gap-1.5 md:gap-2 shrink-0"
          >
            <Image
              src="/icons/eye.svg"
              alt="Görüntüle"
              width={16}
              height={16}
              className="md:w-[18px] md:h-[18px] xl:w-6 xl:h-6"
            />
            <span className="hidden sm:inline">Görüntüle</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
