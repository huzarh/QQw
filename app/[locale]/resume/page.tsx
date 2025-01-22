 
import ClientComponent from './client';
import { globalMetaInfo } from '../../../lib/info';

export const metadata = {
  title: "Resume",
  description: globalMetaInfo.defaultDescription,
  openGraph: {
    title: "Resume | Üzeyir Askyer",
    description: "Mekatronik Mühendisliği Öğrencisi | IoT ve Otomasyon Sistemleri Geliştirici",
    url: globalMetaInfo.defaultUrl,
    type: 'website',
    images: [
      {
        url: "https://www.uzeyiraskyer.com/assets/resume/resume.png",
        width: 1200,
        height: 630,
        alt: 'Khuzair Asker - FullStack Developer',
      },
    ],
    siteName: globalMetaInfo.siteName,
  },
  twitter: {
    card: 'summary_large_image',
    title: "Resume | Üzeyir Askyer",
    description: "Mekatronik Mühendisliği Öğrencisi | IoT ve Otomasyon Sistemleri Geliştirici",
    images: ["https://www.uzeyiraskyer.com/assets/resume/resume.png"],
  },
};

export default function Page() {
  return <ClientComponent />;
}
