import { Heading, HeadingLevel } from "@ariakit/react";
import { Sponsors } from "@website/data/Sponsors.tsx";
import { Link } from "react-router-dom";

export const SponsorsPage = () => {
  return (
    <div>
      <Heading className={"text-4xl xs:text-5xl sm:text-6xl md:text-7xl m-auto pt-4"}>This Year<span className={"font-extrabold"}>'</span>s Sponsors</Heading>
      {Sponsors.sort((a, b) => a.name.localeCompare(b.name)).map((sponsor) => (
        <HeadingLevel key={sponsor.key}>
          <div
            id={sponsor.key}
            className={"flex flex-row pt-8"}
          >
            <div className={"flex flex-shrink-0 bg-neutral-950"}>
              <div className={"flex grow bg-primary-700 rounded-br-3xl p-2 aspect-square w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52"}>
                <div className={"flex grow bg-primary-500 p-1 rounded-full"}>
                  <img
                    className={"w-full aspect-square rounded-full"}
                    src={sponsor.logo}
                    alt={sponsor.name}
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
                <Heading className={"text-2xl xs:text-3xl sm:text-4xl md:text-5xl leading-5"}>{sponsor.name}</Heading>
                <Link to={sponsor.website.url} className={"text-xs sm:text-sm sm:text-md md:text-lg pb-3 pt-1"} target={"_blank"}>
                  <span className={"pr-1"}>{sponsor.website.icon}</span> {sponsor.website.name}
                </Link>
                <HeadingLevel>
                  <Heading className={"xs:text-1xl sm:text-2xl md:text-3xl"}>
                    Prize Contributions
                  </Heading>
                  <ul>
                    {sponsor.prizes.map(url => (
                      <ul key={url.name}>
                        <Link to={url.url} className={"text-xs sm:text-sm sm:text-md md:text-lg pb-2"} target={"_blank"}>
                          <span className={"pr-1"}>{url.icon}</span> {url.name}
                        </Link>
                      </ul>
                    ))}
                  </ul>
                </HeadingLevel>
              </div>
            </div>
          </div>
        </HeadingLevel>
      ))}
    </div>
  );
}
