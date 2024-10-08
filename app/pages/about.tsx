// pages/about.js

const About = () => {
  return (
    <div className="leading-7  text-center font-iawriter">
      <h1>Hakkımda</h1>
      <p>
        Merhaba, ben{" "}
        <strong className="underline decoration-sky-500/[.33]">Uzeyir</strong>,
        Front-end
        {/* asılında nodejs expressjs . restfull api 2 ugulamalı deneyimlerim var*/}
        alanında deneyimli bir{" "}
        <strong className="underline decoration-sky-500/[.33]">yazılım</strong>{" "}
        geliştiricisiyim. Uzmanlıklarım arasında{" "}
        <strong className="underline decoration-sky-500/[.33]">
          React, Nextjs
        </strong>{" "}
        ve kullanıcı arayüzü tasarımı yer almakta. İnsanlara, bu alanda sahip
        olduğum bilgi ve tecrübelerle yardımcı oluyorum.
      </p>
      <p>
        İhtiyaçlarınıza göre özelleştirilmiş çözümler sunarak size en iyi
        şekilde destek olabilirim. Detaylar ve hizmetlerim hakkında bilgi almak
        için lütfen iletişime geçin.
      </p>
    </div>
  );
};

export default About;
