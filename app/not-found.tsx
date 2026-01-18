import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <h1 className="text-[120px] font-bold text-primary-blue leading-none mb-4">404</h1>
        <h2 className="text-[32px] font-bold text-primary-dark mb-4">Sayfa Bulunamadı</h2>
        <p className="text-gray-600 text-[16px] mb-8 leading-relaxed">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya dönerek devam edebilirsiniz.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary-blue text-white px-8 py-4 rounded-full text-[16px] font-medium hover:bg-primary-blue/80 transition-colors"
        >
          Ana Sayfaya Dön
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.9639 7.81854C15.8593 7.309 15.5836 7.03981 15.3364 6.80907L9.03257 0.425417C8.4716 -0.141806 7.56835 -0.141806 7.00738 0.425417C6.73165 0.694607 6.58903 1.05994 6.58903 1.45411C6.58903 1.83867 6.74115 2.204 7.00738 2.4828L11.0578 6.57834H1.39767C0.627526 6.57834 0 7.21286 0 8.0012C0 8.78955 0.627526 9.41445 1.39767 9.41445H11.0578L7.10245 13.4138C6.54148 13.9811 6.52247 14.8944 7.04541 15.4905C7.32114 15.7981 7.71097 15.9904 8.11981 16H8.16735C8.56668 16 8.93749 15.8462 9.22273 15.5578L15.4029 9.3087C15.5836 9.12603 16.1255 8.57804 15.9734 7.82815L15.9639 7.81854Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
