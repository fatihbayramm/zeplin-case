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
    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="bg-primary-blue text-white text-[14px] px-4 py-1.5 rounded-full">{category}</span>
        <span className="bg-secondary-gray text-primary-dark text-[14px] px-4 py-1.5 rounded-full">{type}</span>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image src="/icons/pdf.svg" alt="PDF" width={22} height={25} className="shrink-0 mt-1" />
            <h3 className="text-secondary-dark text-[20px] font-bold leading-tight flex-1">{title}</h3>
          </div>

          <div className="flex items-center justify-between gap-6 text-[14px] text-gray-600">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Image src="/icons/page.svg" alt="Page" width={26} height={26} />
                <span className="text-secondary-dark text-[16px]">
                  Sayfa: <span className="font-semibold">{pageRange}</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Image src="/icons/author_2.svg" alt="Author" width={26} height={26} />
                <span className="text-secondary-dark text-[16px]">{authors.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 mt-auto">
          <Link
            href="#"
            className="rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-blue hover:text-primary-blue transition-colors"
          >
            <Image src="/icons/eposta.svg" alt="Paylaş" width={55} height={55} />
          </Link>

          <Link
            href="#"
            className="rounded-full border border-gray-300 flex items-center justify-center hover:border-primary-blue hover:text-primary-blue transition-colors"
          >
            <Image src="/icons/download.svg" alt="İndir" width={55} height={55} />
          </Link>

          <Link
            href="#"
            className="bg-primary-blue text-white px-6 py-4 rounded-full text-[16px] font-medium hover:bg-primary-blue/80 transition-colors flex items-center gap-2"
          >
            <Image src="/icons/eye.svg" alt="Görüntüle" width={24} height={24} />
            Görüntüle
          </Link>
        </div>
      </div>
    </div>
  );
}
