"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <h1 className="text-[120px] font-bold text-primary-red leading-none mb-4">500</h1>
        <h2 className="text-[32px] font-bold text-primary-dark mb-4">Bir Hata Oluştu</h2>
        <p className="text-gray-600 text-[16px] mb-8 leading-relaxed">
          Üzgünüz, bir şeyler yanlış gitti. Lütfen daha sonra tekrar deneyin veya ana sayfaya dönün.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-primary-blue text-white px-8 py-4 rounded-full text-[16px] font-medium hover:bg-primary-blue/80 transition-colors"
          >
            Tekrar Dene
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-gray-300 text-secondary-dark px-8 py-4 rounded-full text-[16px] font-medium hover:border-primary-blue hover:text-primary-blue transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}
