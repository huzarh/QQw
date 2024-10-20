"use client";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import React from "react";
import Image from "next/image"; // Import the Image component

export default function Projects() {
  const t = useTranslations("projects");
  const { theme } = useTheme();

  const projectKeys = Array.from({ length: 8 }, (_, i) => i);

  const experiences = [
    [
      "HTML",
      "CSS",
      "JavaScript",
      `PHP-${theme === "dark" ? "Dark" : "Light"}`,
      `MySQL-${theme === "dark" ? "Dark" : "Light"}`,
    ],
    [
      `Python-${theme === "dark" ? "Dark" : "Light"}`,
      "HTML",
      "CSS",
      "JavaScript",
    ],
    [
      `Ubuntu-${theme === "dark" ? "Dark" : "Light"}`,
      `React-${theme === "dark" ? "Dark" : "Light"}`,
      `MaterialUI-${theme === "dark" ? "Dark" : "Light"}`,
      "Redux",
      "CSS",
      `ExpressJS-${theme === "dark" ? "Dark" : "Light"}`,
      "JavaScript",
      "MongoDB",
      `NodeJS-${theme === "dark" ? "Dark" : "Light"}`,
    ],
    [
      `Npm-${theme === "dark" ? "Dark" : "Light"}`,
      `React-${theme === "dark" ? "Dark" : "Light"}`,
      "CSS",
      `ExpressJS-${theme === "dark" ? "Dark" : "Light"}`,
      "MongoDB",
      `NodeJS-${theme === "dark" ? "Dark" : "Light"}`,
    ],
    [
      "Nginx",
      `React-${theme === "dark" ? "Dark" : "Light"}`,
      `MaterialUI-${theme === "dark" ? "Dark" : "Light"}`,
      "Redux",
      "CSS",
      `ExpressJS-${theme === "dark" ? "Dark" : "Light"}`,
      "JavaScript",
      "MongoDB",
      `NodeJS-${theme === "dark" ? "Dark" : "Light"}`,
    ],
    [
      `TensorFlow-${theme === "dark" ? "Dark" : "Light"}`,
      `ThreeJS-${theme === "dark" ? "Dark" : "Light"}`,
      "HTML",
      "JavaScript",
    ],
    [
      `ThreeJS-${theme === "dark" ? "Dark" : "Light"}`,
      `React-${theme === "dark" ? "Dark" : "Light"}`,
      "HTML",
      "JavaScript",
    ],
    ["Arduino", "C", "Html"],
  ];

  return (
    <div>
      {projectKeys.map((key) => {
        return (
          <article
            className="flex flex-col justify-between border-t border-indigo-150 pt-6 mt-2"
            key={key}
          >
            <div>
              <h2 className="font-bold underline underline-offset-4 mb-2">
                {t(`${key + 1}.title`)} {/* key + 1 */}
              </h2>
              <p>{t(`${key + 1}.description`)} </p> {/* key + 1 */}
            </div>
            {experiences[key] && (
              <div>
                {experiences[key].map((img, id) => (
                  <Image
                    key={img + id}
                    alt={img}
                    src={`/assets/icons/${img}.svg`}
                    width={40} // Set width for the image
                    height={40} // Set height for the image
                    className="inline-block p-2 cursor-pointer"
                  />
                ))}
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
