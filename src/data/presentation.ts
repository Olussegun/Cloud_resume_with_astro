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
  mail: "akpavieekemena@gmail.com",
  title: "Hi, I’m Ekems 👋",
  //profile: "/profile.webp",
  description:
    "I am a *Devops Engineer*, have worked previously as Cloud, DevOps and Solutions Engineer and have been in the tech industry for *3 years*. I am passionate about helping people get into cloud and sharing my learnings in Cloud, DevOps and now Developer Relations.",
  socials: [
    {
      label: "YouTube",
      link: "https://youtube.com/@ekemenaakpavie",
    },
    {
      label: "X",
      link: "https://twitter.com/lord_ekems",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/ekemenaakpavie",
    },
    {
      label: "GitHub",
      link: "https://github.com/ekemena97",
    },
    
  ],
};

export default presentation;
