import { Heading, HeadingLevel } from "@ariakit/react";
import { Schools } from "@website/data/Schools";
import { Link } from "react-router-dom";

export const SchoolsPage = () => {
  return (
    <div>
      <Heading className={"text-4xl xs:text-5xl sm:text-6xl md:text-7xl m-auto pt-4"}>Participating Schools</Heading>
      {Schools.sort((a, b) => a.club.name.localeCompare(b.club.name)).map((school) => (
        <HeadingLevel key={school.key}>
          <div
            id={school.key}
            className={"flex flex-row pt-8"}
          >
            <div className={"flex flex-shrink-0 bg-neutral-950 md:bg-transparent"}>
              <div className={"flex grow bg-primary-700 rounded-br-3xl md:rounded-l-full p-2 aspect-square w-24 h-24 md:w-56 md:h-56"}>
                <div className={"flex grow bg-primary-500 p-1 rounded-full"}>
                  <img
                    className={"w-full aspect-square rounded-full"}
                    src={school.club.logo}
                    alt={school.club.name}
                  />
                </div>
              </div>
            </div>

            <div
              className={"flex flex-row bg-neutral-950 flex-grow"}
            >
              <div
                className={"flex flex-col p-4"}
              >
                <Heading className={"text-2xl xs:text-3xl sm:text-4xl md:text-5xl leading-5"}>{school.club.name}</Heading>
                <p className={"pt-1 text-xs sm:text-sm sm:text-md md:text-lg"}>{school.name}</p>
                <ul className={"pt-3 md:pt-5"}>
                  {school.club.urls.map(url => (
                    <ul key={url.name}>
                      <Link to={url.url} className={"text-xs sm:text-sm sm:text-md md:text-lg pb-2"}>
                        <span className={"pr-1"}>{url.icon}</span> {url.name}
                      </Link>
                    </ul>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </HeadingLevel>
      ))}
    </div>
  );
}
