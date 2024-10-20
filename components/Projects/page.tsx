"use client";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Projects() {
  const t = useTranslations("projects");
  const { theme } = useTheme();

  const [themeAlt, setThemeAlt] = useState("Light");
  const [dynamicClass, setDynamicClass] = useState("default-class");

  useEffect(() => {
    setThemeAlt(theme === "dark" ? "Dark" : "Light");
    setDynamicClass(theme === "dark" ? "dark-class" : "light-class");
  }, [theme]);

  const projectKeys = Array.from({ length: 8 }, (_, i) => i);

  const experiences = [
    ["HTML", "CSS", "JavaScript", `PHP-${themeAlt}`, `MySQL-${themeAlt}`],
    [`Python-${themeAlt}`, "HTML", "CSS", "JavaScript"],
    [
      `Ubuntu-${themeAlt}`,
      `React-${themeAlt}`,
      `MaterialUI-${themeAlt}`,
      "Redux",
      "CSS",
      `ExpressJS-${themeAlt}`,
      "JavaScript",
      "MongoDB",
      `NodeJS-${themeAlt}`,
    ],
    [
      `Npm-${themeAlt}`,
      `React-${themeAlt}`,
      "CSS",
      `ExpressJS-${themeAlt}`,
      "MongoDB",
      `NodeJS-${themeAlt}`,
    ],
    [
      "Nginx",
      `React-${themeAlt}`,
      `MaterialUI-${themeAlt}`,
      "Redux",
      "CSS",
      `ExpressJS-${themeAlt}`,
      "JavaScript",
      "MongoDB",
      `NodeJS-${themeAlt}`,
    ],
    [`TensorFlow-${themeAlt}`, `ThreeJS-${themeAlt}`, "HTML", "JavaScript"],
    [`ThreeJS-${themeAlt}`, `React-${themeAlt}`, "HTML", "JavaScript"],
    ["Arduino", "C", "Html"],
  ];

  return (
    <div className={dynamicClass}>
      {" "}
      {projectKeys.map((key) => (
        <article
          className="flex flex-col justify-between border-t border-indigo-150 pt-6 mt-2"
          key={key}
        >
          <div>
            <h2 className="font-bold underline underline-offset-4 mb-2">
              {t(`${key + 1}.title`)}
            </h2>
            <p>{t(`${key + 1}.description`)} </p>
          </div>
          {experiences[key] && (
            <div>
              {experiences[key].map((img, id) => (
                <Image
                  key={img + id}
                  alt={`${img} ${themeAlt}`}
                  src={`/assets/icons/${img}.svg`}
                  width={40}
                  height={40}
                  className="inline-block p-2 cursor-pointer"
                />
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
