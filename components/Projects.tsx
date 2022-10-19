import { Button, Card, Col, Grid, Row, Text } from "@nextui-org/react";

export default function Projects() {
  const list = [
    {
      title: "Expanzo Dho r.s.o",
      img: "/projects/expanzo.jpg",
      description:
        "Built a company search database as a NextJS and Frontend developer at Expanzo Dho r.s.o",
      url: "https://expanzo.com"
    },
    {
      title: "Ahun.app Website",
      img: "/projects/ahun.jpg",
      description: "Done a web platform for ahun.app from the ground up.",
      url: "https://ahun.app"
    },
    {
      title: "Unmute",
      img: "/projects/unmute.jpg",
      description: "Developed an online platform for searching jobs online",
      url: "https://unmute.strategytap.dev/"
    },
    {
      title: "Get Rooms",
      img: "/projects/getrooms.png",
      description:
        "Worked on An online hotel booking web application, contributed as a frontend developer polishing ui and functionality.",
      url: "https://getrooms.et/"
    },
    {
      title: "Nedaj",
      img: "/projects/nedaj.png",
      description:
        "Project of eaglelion have participated on building internal dashboard and landing page.",
      url: "https://nedajethiopia.com/"
    },
    {
      title: "Lique Design",
      img: "/projects/liqdesign.png",
      description:
        "Developed a simple landing page for a small software agency company.",
      url: "https://liqdesign.com/"
    },
    {
      title: "Strategytaps",
      img: "/projects/strategytap.png",
      description: "Landing page developed for strategytap startup company",
      url: "https://www.strategytap.dev/"
    },
    {
      title: "Axum Hub",
      img: "/projects/axumhub.png",
      description:
        "A personal project, that allows developers to manage, communicate and collaborate have chat, vidcall and more... ",
      url: "https://axumhub.netlify.app/"
    }
  ];

  return (
    <div className="">
      <div className="mb-10">
        <h1 className="">Projects</h1>
        <p className="-mt-5">
          Some of my personal and professional projects i have worked on.
        </p>
      </div>
      <Grid.Container justify="flex-start">
        {list.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <div className="w-full border-[2px] border-black relative h-[380px] group overflow-clip cursor-pointer">
              <div className="absolute overflow-clip top-0 left-0 w-full h-full bg-white">
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute min-w-full min-h-full object-cover transition-all duration-500 group-hover:scale-125 group-hover:-rotate-6"
                />
              </div>
              <div className="absolute backdrop-blur-[2px] -bottom-[100%] bg-black/80 left-0 flex h-full w-full z-[99] transition-all duration-300 group-hover:-bottom-[40%]">
                <div className="px-[4%] py-5">
                  <h4>{item.title}</h4>
                  <p className="-mt-2 mb-4">{item.description}</p>
                  <a href={item.url}>
                    <Button
                      flat
                      auto
                      rounded
                      ripple
                      color="secondary"
                      iconRight={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-white w-3 h-3"
                          viewBox="0 0 512 512"
                        >
                          <title>Open</title>
                          <path
                            d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                          />
                        </svg>
                      }
                    >
                      <Text size={12} weight="bold" transform="uppercase">
                        Check a demo
                      </Text>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
}
