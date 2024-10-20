import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("about");

  const formatText = (el: string) => {
    return el.split(/(\/.*?\/|\n)/g).map((part, i) =>
      part.startsWith("/") && part.endsWith("/") ? (
        <strong key={i} className="underline decoration-sky-500/[.33]">
          {part.slice(1, -1)}
        </strong>
      ) : part === "\n" ? (
        <br key={i} />
      ) : (
        part
      )
    );
  };

  return (
    <div className="leading-7 text-center font-iawriter text-justify mt-6">
      <h1>{t("title")}</h1>
      <div>{formatText(t("intro"))}</div>
    </div>
  );
};

export default About;
