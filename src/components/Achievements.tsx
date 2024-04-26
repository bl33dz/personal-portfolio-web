import React from "react";

const Achievements: React.FC<{}> = () => {
  const achievements = [
    {
      title: "IT Today HackToday 2023",
      description: "2nd Winner",
      image_url:
        "https://media.licdn.com/dms/image/C560BAQEZ6OivoZcmVw/company-logo_200_200/0/1679813270538/ittoday_logo?e=1721865600&v=beta&t=TdbFfatMQk0JlHmICW7cyexvF7ii22wfPk82o51Bo4s",
    },
    {
      title: "Gemastik XVI 2023: Divisi Keamanan Siber",
      description: "4th Place (Honorable Mention)",
      image_url:
        "https://gemastik.kemdikbud.go.id/assets-frontsite/kompetisi/gemastik/img/logo/logo-gemastik.png",
    },
    {
      title: "CTF ARA: A Renewal Agent 4.0",
      description: "2nd Winner",
      image_url:
        "https://media.licdn.com/dms/image/D560BAQGyN17lejmzFg/company-logo_200_200/0/1697792678682?e=1721865600&v=beta&t=sZxYzkCs0EiJlEmUCW5Okw_tPfzZGUoEpxNyBMDBP9A",
    },
    {
      title: "CTF COMPFEST 14",
      description: "2nd Winner",
      image_url:
        "https://media.licdn.com/dms/image/D560BAQF62CFbQZSaow/company-logo_200_200/0/1711978751131/compfest_logo?e=1721865600&v=beta&t=wXcgWgoOZLbb2fEXqkQBepev0P912bZNFttN8nz-8as",
    },
    {
      title: "IT Today HackToday 2022",
      description: "3rd Winner",
      image_url:
        "https://media.licdn.com/dms/image/C560BAQEZ6OivoZcmVw/company-logo_200_200/0/1679813270538/ittoday_logo?e=1721865600&v=beta&t=TdbFfatMQk0JlHmICW7cyexvF7ii22wfPk82o51Bo4s",
    },
    {
      title: "KKS TNI-AD Kategori Mahasiswa",
      description: "2nd Winner",
      image_url:
        "https://media.licdn.com/dms/image/C560BAQHq9XyYarZF3Q/company-logo_200_200/0/1630664816325?e=1721865600&v=beta&t=k_aDp-LXZABcSJ2UkV2aaZllcz_Yz_-hJB3djvH5nDA",
    },
    {
      title: "KKS TNI-AD Kategori Pelajar (High School)",
      description: "1st Winner",
      image_url:
        "https://media.licdn.com/dms/image/C560BAQHq9XyYarZF3Q/company-logo_200_200/0/1630664816325?e=1721865600&v=beta&t=k_aDp-LXZABcSJ2UkV2aaZllcz_Yz_-hJB3djvH5nDA",
    },
    {
      title: "CTF iCyption 2020 (High School)",
      description: "1st Winner",
      image_url:
        "https://media.licdn.com/dms/image/C4E0BAQH4_rcyldo-1Q/company-logo_200_200/0/1630603372617/telkom_university_logo?e=1721865600&v=beta&t=WY6_Dk-afMqPQdeAyJMYf4sOMIIJWFNrM6eVIQ2YpYM",
    },
  ];

  return (
    <div
      className="text-white text-center pt-20 mb-20 flex flex-col justify-center items-center"
      id="achievements"
    >
      <div className="w-full max-w-[700px]">
        <h1 className="text-4xl font-semibold mb-10">
          <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-green-500 to-lime-400">
            MY
          </span>{" "}
          ACHIEVEMENTS
        </h1>

        <div className="flex flex-col gap-4 items-center justify-center">
          {achievements.map((achievement) => (
            <a
              className="rounded w-3/4 grid grid-cols-12 p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform bg-white/20 shadow-lg ring-1 ring-black/5"
              href="#"
            >
              <div className="col-span-12 md:col-span-2 flex items-center justify-center">
                <img
                  className="h-12 w-12 rounded"
                  src={achievement.image_url}
                  alt="Telkom University Logo"
                />
              </div>

              <div className="col-span-12 md:col-span-10 xl:-ml-5">
                <p className="text-green-600 font-semibold">
                  {achievement.title}
                </p>
                <p className="text-sm text-white font-light">
                  {achievement.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
