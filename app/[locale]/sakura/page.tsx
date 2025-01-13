 
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Öğrenci verileri
const students = [
  {
    id: 1,
    name: "Batu Han",
    program: "Bilgisayar Mühendisliği",
    image: "/images/students/batu.jpg",
    description: "Türkiye'de eğitim almak benim için büyük bir fırsat oldu.",
  },
  {
    id: 2,
    name: "Ariunaa Erdene",
    program: "İşletme",
    image: "/images/students/ariunaa.jpg",
    description: "Türk kültürünü keşfetmek harika bir deneyim.",
  },
  {
    id: 3,
    name: "Temuulen Bat",
    program: "Mimarlık",
    image: "/images/students/temuulen.jpg",
    description: "Türkiye'deki üniversitelerin kalitesi beni çok etkiledi.",
  },
];

// İstatistikler
const statistics = [
  { id: 1, value: 150, label: "Türkiye'de Okuyan Öğrenci" },
  { id: 2, value: 10, label: "Farklı Şehir" },
  { id: 3, value: 20, label: "Farklı Üniversite" },
];

export default function Sakura() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="absolute inset-0 flex">
        {/* Moğolistan Tarafı */}
        <div className="w-1/2 relative">
          <Image
            src="/assets/4.jpg" // Moğolistan görseli
            alt="Moğolistan"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>

        {/* Türkiye Tarafı */}
        <div className="w-1/2 relative">
          <Image
            src="/assets/1.jpg" // Türkiye görseli
            alt="Türkiye"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent" />
        </div>
      </div>

      {/* Bulut Animasyonu */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-full bg-[url('/assets/3.jpg')] bg-repeat-x opacity-30"
      />

      {/* İçerik */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Moğolistan&#39;dan Türkiye&#39;ye
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl max-w-2xl mx-auto"
        >
          Türkiye&#39;de okuyan Moğolistanlı öğrencilerin hikayeleri ve deneyimleri.
        </motion.p>
      </div>
      </section>

      {/* Öğrenci Hikayeleri */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          Öğrenci Hikayeleri
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student) => (
            <motion.div
              key={student.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={student.image}
                alt={student.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  {student.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {student.program}
                </p>
                <p className="text-gray-700 dark:text-gray-200">
                  {student.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          İstatistikler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statistics.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: stat.id * 0.2 }}
              className="text-center text-white"
            >
              <p className="text-5xl font-bold">{stat.value}+</p>
              <p className="text-xl">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Galeri */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          Galeri
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="relative h-48 rounded-lg overflow-hidden"
            >
              <Image
                src={`/images/gallery/${item}.jpg`}
                alt={`Galeri ${item}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* İletişim */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          İletişim
        </h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Adınız"
              className="w-full p-2 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            />
            <input
              type="email"
              placeholder="E-posta"
              className="w-full p-2 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            />
            <textarea
              placeholder="Mesajınız"
              rows={4}
              className="w-full p-2 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Gönder
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}