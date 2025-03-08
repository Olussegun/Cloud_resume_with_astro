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
  title: "Hi, I am olusegun 👋",
  //profile: "/profile.webp",
  description:
  " am a *Devops Intern*, I have learnt infracture as a code, containerization with docker and kubernetes, cloud platform like AWS and Azure,monitoring and logging,networking and security.",
  socials: [
  
  
  {
  label: "LinkedIn",
  link: "https://linkedin.com/in/olusegunfatodu",
  },
  {
  label: "GitHub",
  link: "https://github.com/olusegun",
  },
  
  ],
  };
  
  export default presentation;