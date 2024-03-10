import { Heading, HeadingLevel } from "@ariakit/react";
import { Schools } from "@website/data/Schools";
import { Link } from "react-router-dom";

export const SchoolsPage = () => {
  return (
    <div>
      <Heading>Participating Schools</Heading>
      {Schools.sort((a, b) => a.club.name.localeCompare(b.club.name)).map((school) => (
        <HeadingLevel key={school.key}>
          <div
            id={school.key}
            className={"flex flex-row pt-8"}
          >
            <div className={"relative flex aspect-square w-48"}>
              <div className={"flex grow bg-primary-700 rounded-l-full p-2"}>
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
                <Heading className={"text-6xl"}>{school.club.name}</Heading>
                <p>{school.name}</p>
              </div>

              <div className={"flex-grow"}/>

              <div
                className={"flex flex-col bg-primary-800 p-4 w-36 text-center"}
              >
                {school.club.urls.map(url => (
                  <Link key={url.name} to={url.url} className={"text-xl pb-2"}>
                    {url.icon} {url.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </HeadingLevel>
      ))}
    </div>
  );
}
