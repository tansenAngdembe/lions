import React from "react";
import { useTranslation } from "react-i18next";

const LeoClubs = () => {
  const {t} = useTranslation();
  const clubs = [
    { id: 1, name: "MidClub", charterDate: "2024-09-18", clubId: 19399, memberCount: 9000, dues: "None" },
    { id: 2, name: "NorthStars", charterDate: "2022-06-12", clubId: 18221, memberCount: 7400, dues: "Paid" },
    { id: 3, name: "South Unity", charterDate: "2023-03-09", clubId: 19002, memberCount: 6000, dues: "Pending" },
    { id: 4, name: "East Horizon", charterDate: "2021-08-14", clubId: 17645, memberCount: 5200, dues: "Paid" },
    { id: 5, name: "West Valley", charterDate: "2020-10-05", clubId: 16588, memberCount: 6300, dues: "None" },
    { id: 6, name: "Skyline Youth", charterDate: "2022-01-11", clubId: 17893, memberCount: 5800, dues: "Paid" },
    { id: 7, name: "Riverstone", charterDate: "2023-07-19", clubId: 18877, memberCount: 7100, dues: "Pending" },
    { id: 8, name: "Golden Era", charterDate: "2024-02-28", clubId: 19500, memberCount: 8500, dues: "None" },
    { id: 9, name: "Unity Pioneers", charterDate: "2021-12-21", clubId: 16945, memberCount: 4900, dues: "Paid" },
    { id: 10, name: "Bright Future", charterDate: "2020-09-30", clubId: 16090, memberCount: 4500, dues: "Pending" },
    { id: 11, name: "Sunset Lions", charterDate: "2022-05-06", clubId: 18122, memberCount: 7800, dues: "Paid" },
    { id: 12, name: "Ocean Pearl", charterDate: "2023-11-12", clubId: 19188, memberCount: 6700, dues: "None" },
    { id: 13, name: "Mountain Spirit", charterDate: "2021-04-01", clubId: 17230, memberCount: 5600, dues: "Pending" },
    { id: 14, name: "Lighthouse Crew", charterDate: "2020-06-15", clubId: 15870, memberCount: 4800, dues: "Paid" },
    { id: 15, name: "Nova Circle", charterDate: "2022-03-23", clubId: 17999, memberCount: 6900, dues: "None" },
    { id: 16, name: "Starlight League", charterDate: "2024-01-01", clubId: 19422, memberCount: 8200, dues: "Pending" },
    { id: 17, name: "Harmony Heights", charterDate: "2021-10-29", clubId: 16880, memberCount: 5100, dues: "Paid" },
    { id: 18, name: "Legacy United", charterDate: "2023-05-05", clubId: 18700, memberCount: 7300, dues: "None" },
    { id: 19, name: "Pioneer Rise", charterDate: "2020-11-20", clubId: 16175, memberCount: 6200, dues: "Paid" },
    { id: 20, name: "Zenith Path", charterDate: "2022-08-08", clubId: 18330, memberCount: 7600, dues: "Pending" },
  ];
  

  return (
    <section className='flex justify-center items-center flex-col p-10 pt-52'>
      <h1 className="text-4xl text-heading mb-3">{t("header.teams.leo-district.club")}</h1>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">SN</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Account Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Charter Date</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Club ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Member Count</th>
              <th className="border border-gray-300 px-4 py-2 text-left">District-Multiple Dues</th>
            </tr>
          </thead>
          <tbody>
            {clubs.map((club, index) => (
              <tr key={club.clubId}>
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{club.name}</td>
                <td className="border border-gray-300 px-4 py-2">{club.charterDate}</td>
                <td className="border border-gray-300 px-4 py-2">{club.clubId}</td>
                <td className="border border-gray-300 px-4 py-2">{club.memberCount}</td>
                <td className="border border-gray-300 px-4 py-2">{club.dues}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default LeoClubs;
