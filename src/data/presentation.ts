type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "leulsegedtariku@gmail.com",
  title: "Welcome!",
  profile: "/profile-pic.webp",
  description:
    "with over *4 years* of experience delivering high quality software solutions. I am currently working as software engineer for <a href='https://mashreqbank.com'>*Mashreq Bank*</a>, Driving Innovation and Enhancing Customer Experiences. ",
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
