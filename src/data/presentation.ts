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
  mail: "olusegunfatodu@gmail.com",
  title: "Hi, I’m Segun 👋",
  //profile: "/profile.webp",
  description:
    "I am a *Devops Intern*, I have learnt infracture as a code, containerization with docker and kubernetes, cloud platform like AWS and Azure,monitoring and logging,networking and security.
    :[
      
    {
      label: "GitHub",
      link: "https://github.com/Olussegun",
    },
    
  ],
};

export default presentation;
