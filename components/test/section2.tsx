import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface CADExperience {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  date: string;
  technologies: string[];
}

const CADExperiences: CADExperience[] = [
  {
    id: 2,
    title: "CATIA Mekanik Parça Tasarımı",
    description:
      "CATIA kullanarak uzaktan kumandalı, eşya taşıyabilen küçük bir araba tasarladım. Bu projede mekanik montaj, parametrik modelleme ve hareket simülasyonları gerçekleştirdim.",
    imageUrl: "/assets/wheelbarrow.png",
    videoUrl: "/assets/videos/catia-demo-1.mp4",
    date: "2024-03-28",
    technologies: [
      "Kinematik Simülasyon",
      "Yüzey Tasarımı",
      "3D Montaj tasarımı",
    ],
  },
  {
    id: 1,
    title: "AutoCAD 3D Modelleme Projesi",
    description:
      "AutoCAD kullanarak endüstriyel bir tesisin detaylı 3D modellemesini gerçekleştirdim. Bu projede tasarım ve simülasyon aşamalarına odaklandım.",
    imageUrl: "/assets/1.jpg",
    videoUrl: "/assets/videos/catia-demo-1.mp4",
    date: "2023-02-15",
    technologies: ["AutoCAD", "3D Modelleme", "Tasarım ve Simülasyon"],
  },
];

const Section2: React.FC = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<CADExperience | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openModal = (experience: CADExperience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <section className="absolute top-[100vh] w-full py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-black dark:to-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          CAD Uygulama Tecrübelerim
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CADExperiences.map((experience) => (
            <motion.div
              key={experience.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              onClick={() => openModal(experience)}
            >
              <Image
                className="w-full h-48 object-cover"
                src={experience.imageUrl}
                alt={experience.title}
                width={500} // Set the width of the image (adjust as needed)
                height={300} // Set the height of the image (adjust as needed)
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {experience.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  {experience.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <video
              ref={videoRef}
              className="w-full h-[300px] object-cover"
              controls
              autoPlay
              muted
              loop
            >
              <source src={selectedExperience.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                {selectedExperience.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {selectedExperience.description}
              </p>
              <button
                className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                onClick={closeModal}
              >
                Kapat
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Section2;
