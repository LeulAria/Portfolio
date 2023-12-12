type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  about: string;
  description: string;
  description2: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "leulsegedtariku@gmail.com",
  title: "Welcome!",
  about: 'Hy im leul, fullstack software engineer, with over *4 years* of experience.',
  profile: "/profile-pic.webp",
  description:
    "I am currently working as software engineer for <a href='https://mashreqbank.com'>*Mashreq Bank*</a> and <a href='https://portal.expanzo.com/'>*Expanzo*</a>, driving innovation, solving problems and enhancing customer experiences.",
  description2:  "Passionate about open source, i actively contribute to and develop opensource projects and libraries, embracing the collaborative spirit that drives the evolution.",
  socials: [
    {
      label: "github",
      link: "https://twitter.com/itsstormzz_",
    },
    {
      label: "Bento",
      link: "https://bento.me/m-wolff",
    },
    {
      label: "Github",
      link: "https://github.com/MaeWolff",
    },
  ],
};

export default presentation;
