import { Metadata } from "next";
import { appMetaData } from "@/lib/appMetaData";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: "GUZERGAH Otonom Sürücü Arayüzü",
    description: "LIDAR ve kamera verilerini gerçek zamanlı olarak görüntüleyin.",
    openGraph: {
      title: "GUZERGAH Otonom Sürücü Arayüzü",
      description: "LIDAR ve kamera verilerini gerçek zamanlı olarak görüntüleyin.",
      images: [
        {
          url: `${appMetaData.siteUrl}/assets/robot_tr.png`, // Resmin tam URL'si
          width: 1200,
          height: 630,
          alt: "GUZERGAH Otonom Sürücü Arayüzü",
        },
      ],
      url: `${appMetaData.siteUrl}/${params.locale}/test`, // Dinamik URL
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "GUZERGAH Otonom Sürücü Arayüzü",
      description: "LIDAR ve kamera verilerini gerçek zamanlı olarak görüntüleyin.",
      images: [
        {
          url: `${appMetaData.siteUrl}/assets/robot_tr.png`, // Resmin tam URL'si
          width: 1200,
          height: 630,
          alt: "GUZERGAH Otonom Sürücü Arayüzü",
        },
      ],
    },
  };
}