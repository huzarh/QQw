import Link from "next/link";
import { FaLinkedin, FaGithub, FaBehance, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 mt-24">
      <div className="container mx-auto px-4">
        {/* Üst Kısım: İletişim Bilgileri ve Hızlı Gezinme */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim Bilgileri</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:huzarh44@gmail.com" className="hover:text-blue-600 transition-colors">
                  huzarh44@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+901234567890" className="hover:text-blue-600 transition-colors">
                  +90 534 718 9425
                </a>
              </li>
              <li>Sakarya, Türkiye</li>
            </ul>
          </div>

          {/* Hızlı Gezinme Bağlantıları */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Gezinme</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:text-blue-600 transition-colors">
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-blue-600 transition-colors">
                  Projelerim
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-blue-600 transition-colors">
                  Yetkinlikler
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-600 transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-600 transition-colors">
                  Ana Sayfa
                </Link>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya Bağlantıları */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sosyal Medya</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/huzarh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/huzarh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://behance.net/huzarh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <FaBehance size={24} />
              </a>
              <a
                href="https://twitter.com/huzarh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com/huzarh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Hızlı İletişim Formu */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bana Ulaşın</h3>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              E-posta Gönder
            </Link>
          </div>
        </div>

        {/* Alt Kısım: Telif Hakkı Bilgisi */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-8 text-center">
          <p className="text-sm">
            © 2025 Khuzair Askyer. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;