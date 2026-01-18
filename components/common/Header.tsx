"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="h-[70px] md:h-[135px] w-full sticky top-0 z-1000 flex bg-white">
      {/* Logo Section */}
      <div className="w-[200px] md:w-[250px] lg:w-[320px] xl:w-[381px] h-[135px] bg-primary-blue hidden md:flex items-center justify-center rounded-tr-[90px] shrink-0">
        <div className="relative w-[140px] h-[45px] md:w-[170px] md:h-[55px] lg:w-[220px] lg:h-[72px] xl:w-[283px] xl:h-[91px]">
          <Image src="/logo/logo.svg" alt="Profuture" fill className="object-contain" />
        </div>
      </div>

      <div className="w-full">
        {/* Top Bar - Email and Info */}
        <div className="bg-primary-dark hidden md:flex items-center justify-between p-1.5 md:p-2 px-3 md:px-6">
          <div className="flex items-center gap-2 md:gap-3">
            <Image src="/icons/message_2.svg" alt="Message" width={18} height={18} className="lg:w-6 lg:h-6" />
            <span className="text-white text-[12px] md:text-[14px]">profuture@gmail.com</span>
          </div>

          <div className="text-white text-[13px] md:text-[17px] flex items-center gap-3 md:gap-5 mr-4 lg:mr-20">
            <span className="whitespace-nowrap">
              ISSN: <span className="font-bold">345-255</span>
            </span>
            <span className="whitespace-nowrap">
              Başlangıç <span className="font-bold">2025</span>
            </span>
            <span className="whitespace-nowrap hidden lg:inline">
              Periyot: <span className="font-bold">Yılda 2 Sayı</span>
            </span>
          </div>
        </div>

        {/* Bottom Bar - Navigation */}
        <div className="bg-white flex items-center justify-between p-3 md:p-4">
          <div>
            <Link href="/">
              <Image src="/icons/home_2.svg" alt="Home" width={20} height={20} className="md:w-6 md:h-6" />
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center gap-4 lg:gap-10">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-blue text-[12px] lg:text-[14px] whitespace-nowrap"
              >
                Amaç ve Kapsam
              </Link>
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-blue text-[12px] lg:text-[14px] whitespace-nowrap hidden xl:inline"
              >
                Etik İlkeler ve Yayın Politikası
              </Link>
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-blue text-[12px] lg:text-[14px] whitespace-nowrap"
              >
                Makale Çağrıları
              </Link>
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-blue text-[12px] lg:text-[14px] whitespace-nowrap"
              >
                Sayılar
              </Link>
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-blue text-[12px] lg:text-[14px] whitespace-nowrap"
              >
                İletişim
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <Link
              href="/"
              className="bg-primary-blue text-white px-3 md:px-4 py-2.5 md:py-4 rounded-full flex items-center gap-2 md:gap-4 shrink-0"
            >
              <Image src="/icons/kurul_2.svg" alt="Kurul" width={18} height={18} className="lg:w-6 lg:h-6" />
              <span className="text-[11px] md:text-[13px] lg:text-[14px] whitespace-nowrap">Dergi Kurulu</span>
            </Link>

            <Link
              href="/"
              className="bg-primary-green text-white px-3 md:px-4 py-2.5 md:py-4 rounded-full flex items-center gap-2 md:gap-4 shrink-0"
            >
              <Image src="/icons/author_3.svg" alt="Yazar" width={18} height={18} className="lg:w-6 lg:h-6" />
              <span className="text-[11px] md:text-[13px] lg:text-[14px] whitespace-nowrap hidden lg:inline">
                Yazar Rehberi
              </span>
            </Link>

            <Image
              src="/icons/search_2.svg"
              alt="Search"
              width={40}
              height={40}
              className="md:w-[45px] md:h-[45px] lg:w-[55px] lg:h-[55px] shrink-0 cursor-pointer"
            />
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="flex flex-col p-4 gap-4">
              <Link href="/" className="text-gray-700 hover:text-primary-blue py-2">
                Amaç ve Kapsam
              </Link>
              <Link href="/" className="text-gray-700 hover:text-primary-blue py-2">
                Etik İlkeler ve Yayın Politikası
              </Link>
              <Link href="/" className="text-gray-700 hover:text-primary-blue py-2">
                Makale Çağrıları
              </Link>
              <Link href="/" className="text-gray-700 hover:text-primary-blue py-2">
                Sayılar
              </Link>
              <Link href="/" className="text-gray-700 hover:text-primary-blue py-2">
                İletişim
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <Link
                  href="/"
                  className="bg-primary-blue text-white px-4 py-3 rounded-full flex items-center justify-center gap-2"
                >
                  <Image src="/icons/kurul_2.svg" alt="Kurul" width={20} height={20} />
                  <span>Dergi Kurulu</span>
                </Link>
                <Link
                  href="/"
                  className="bg-primary-green text-white px-4 py-3 rounded-full flex items-center justify-center gap-2"
                >
                  <Image src="/icons/author_3.svg" alt="Yazar" width={20} height={20} />
                  <span>Yazar Rehberi</span>
                </Link>
                <button className="flex items-center justify-center p-3">
                  <Image src="/icons/search_2.svg" alt="Search" width={40} height={40} />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
