/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Guranna Gouda's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Guranna Gouda Portfolio",
    type: "website",
    url: "http://Gurupatil0003.com/",
  },
};

//Home Page
const greeting = {
  title: "Guranna Gouda",
  logo_name: "Guru",
  nickname: "Guru Patil",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "",
  portfolio_repository:
    "https://github.com/Gurupatil0003",
  githubProfile: "https://github.com/Gurupatil0003",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Gurupatil0003",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/guranna-gouda-039870228/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/c/",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:gurupatil327@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com//",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com//",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning, Generative AI and statistical use cases",
        "⚡ Experience of working with Computer Vision, Machine Learning and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "mdi:language-r",
          style: {
            backgroundColor: "",
            color: "#3499cd",
            width:60,
            height:60,
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "devicon:python-wordmark",
          style: {
            backgroundColor: "",
            color: "#ccc733",
            width:60,
            height:60,
          },
        },

        {
          skillName: "scikitlearn",
          fontAwesomeClassname: "devicon:scikitlearn",
          style: {
            backgroundColor: "",
            color: "",
            width:60,
            height:60,
          },
         
        },
        {
          skillName: "Data-Visualization",
          fontAwesomeClassname: "logos:sourcegraph",
          style: {
            backgroundColor: "",
            color: "",
            width:60,
            height:60,
          },
        },
        {
          skillName: "Deep Learning",
          fontAwesomeClassname: "eos-icons:neural-network",
          style: {
            backgroundColor: "",
            color: "#1699da",
            width:60,
            height:60,
          },
        },
        
      ],
    },
    
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Work across the full stack, building highly scalable distributed solutions that enable positive user experiences and measurable business growth",
        "⚡ Knowledge of multiple back-end languages (e.g. Python)",
        "⚡ Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript - Angular, React, Node.js, XML, jQuery)",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            backgroundColor: "",
            color: "",
          },
        },
       
        {
          skillName: "Django",
          fontAwesomeClassname: "logos:django-icon",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "skill-icons:flask-dark",
          style: {
            color: "",
          },
        },
        {
          skillName: "Rest-Api",
          fontAwesomeClassname: "logos:apiary",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon:nodejs",
          style: {
          color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
          color: "#CB3837",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Data Engineer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Understanding of data warehouse and Extract, Transform, Load (ETL) tools like Amazon Redshift",
        "⚡ Create and maintain optimal data pipeline architecture",
        "⚡ Knowledge of big data tools such as MongoDB, Kafka, and Hadoop",
      ],
      softwareSkills: [
        {
          skillName: "Hadoop",
          fontAwesomeClassname: "devicon:hadoop",
          style: {
            backgroundColor: "transparent",
            width:60,
            height:60,
          },
        },
        {
          skillName: "Spark",
          fontAwesomeClassname: "devicon-plain:apachespark-wordmark",
          style: {
            backgroundColor: "",
            color: "#D00000",
            width:60,
            height:60,
          },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "devicon:apachekafka-wordmark",
          style: {
            backgroundColor: "transparent",
            width:60,
            height:60,
          },
        },
        {
          skillName: "cassandra",
          fontAwesomeClassname: "logos:cassandra",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
            width:60,
            height:60,
          },
        },
        {
          skillName: "cassandra",
          fontAwesomeClassname: "vscode-icons:file-type-azurepipelines",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
            width:60,
            height:60,
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },

  ],
  
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/gurupatil122333",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Case Western Reserve University",
      subtitle: "Computational Data Science",
      logo_path: "Four-Line-Logo-on-Blue.webp",
      alt_name: "Case Western Reserve University",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
        "⚡ 🎓 Grade:-A"
      ],
      website_link: "https://case.edu/",
    },
    {
      title: "Shridevi Institute of Technology Tumkuru",
      subtitle: "B.Tech. in Electronics and Communication Engineering ",
      logo_path: "siet.jpg",
      alt_name: "Tumkuru, Karnataka",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, NLP, AI, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
        "⚡  CGPA: 9.6 🏅 Rank: 2/27 "
      ],
      website_link: "https://www.shrideviengineering.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Technical Specialist",
          company: "Bytexl",
          company_url: "https://www.bytexl.com/",
          logo_path: "bytexl.png",
          duration: "july 2023 - Ongoing",
          location: "Hyderabad, Telangana",
          description:
            "Develop, design and deploy five unique algorithms based on advanced statical analysis and big data modeling, which helped personalize requirements, strengthen business relationship and boosted company revenue. Customize training programs based on specific requirements and learning objectives",
          color: "#0879bf",
        },
        {
          title: "Data Scientist",
          company: "Soothsayer Analytics",
          company_url: "https://soothsayeranalytics.com/",
          logo_path: "sooth.jpg",
          duration: "Feb 2023 - Apr 2023",
          location: "Bengaluru,Karnataka",
          description:
            "Applied logistic regression model to predict the pattern of sales for 63+ products with an 80% accuracy. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. Researched TensorFlow LSTM network for speech recognition, OpenCV object tracking algorithm.",
          color: "#9b1578",
        },
        {
          title: "Data Scientist",
          company: "TuringMinds.Ai",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "upGrad-TuringMinds.jpg",
          duration: "Dec 2021 - Feb 2023",
          location: "Bengaluru,Karnataka",
          description:
            "Analyze, process and interpret complex customer data sets for several Billion-Dollar business using querying, visual and analytics techniques, resulting in 35% increase in customer satisfaction. Developed an NLP System that can automatically classified 7.5K email as spam or advertising mail using 11+ NLP method",
          color: "#fc1f20",
        },
        {
          title: "AI Mentor",
          company: "Meraki Business Solutions",
          company_url:
            "https://www.linkedin.com/company/meraki-business-solutions-staffing-training-consulting/mycompany/",
          logo_path: "meraki_training_consultants_logo.jpeg",
          duration: "Apr 2023 - Jun 2023",
          location: "Bengaluru,Karnataka",
          description:
            "Working on ML projects of the company in the field of Machine learning. Working on the whole Machine Learning pipeline Develop, design and deploy five unique algorithms based on advanced statical analysis and big data modeling, which helped personalize requirements, strengthen business relationship and boosted company revenue",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "SCII TUmkuru.",
          company_url: "https://www.scii.in/",
          logo_path: "logo.gif",
          duration: "May 2022 - Aug 2022",
          location: "Tumkuru, Karnataka",
          description:
            "Developed more than 10 highly functional web applications to analyze and process data for different clients.Designed and created a knowledge management platform using technologies like Python, node.js, restApi, Mongodb, React, and Docker. Played a key role in the development, improvement, and operation of web-based software ",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "SCII TUmkuru.",
          company_url: "https://www.delhivery.com/",
          logo_path: "logo.gif",
          duration: "Aug 2020 - Sept 2020",
          location: "Tumkuru, Karnataka",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Robotic operating System Intern",
          company: "Decibel Lab",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "decibelslab_logo.jpeg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is Electronic Based Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
        {
          title: "Machine Learning Intern",
          company: "iNeuron.ai",
          company_url:
            "https://ineuron.ai/",
          logo_path: "th (4).jpeg",
          duration: "Nov 2021 - Dec 2021",
          location: "Work From Home",
          description:
            "Deployed a Recommendation engine to production to conditionally Recommend other items based on past history increasing order size by 7%. •Assisted the implementation and deployment of systems used for natural language input and pre-processing, data collection machine learning model training, and deployment of machine learning model.",
          color: "#0071C5",
        },
        

      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Content Creator",
          company: "Facebook",
          company_url: "https://www.facebook.com/",
          logo_path: "face.png",
          duration: "Aug 2020 - Present",
          location: "Work From Home",
          description:
          "50k Family on Facebook. Content Creators are responsible for designing and generating engaging content in various formats, which can include written articles, videos, social media posts, and podcasts. They craft content that is tailored to appeal to specific audiences and meets the objectives of the organization or client.. ",
          color: "#D83B01",
        },
        {
          title: "Content Developer",
          company: "Instagram",
          company_url: "https://www.instagram.com",
          logo_path: "instag.jpeg",
          duration: "Oct 2019 - Present",
          location: "Work From Home",
          description:
            "50k Family on Instargram. Content Creators are responsible for designing and generating engaging content in various formats, which can include written articles, videos, social media posts, and podcasts. They craft content that is tailored to appeal to specific audiences and meets the objectives of the organization or client.. ",
          color: "#000000",
        },
        {
          title: "Content Developer",
          company: "Youtube",
          company_url: "https://www.youtube.com/",
          logo_path: "utube.jpeg",
          duration: "Oct 2019 - Present",
          location: "Work From Home",
          description:
            "10k Family on youtube. Content Creators are responsible for designing and generating engaging content in various formats, which can include written articles, videos, social media posts, and podcasts. They craft content that is tailored to appeal to specific audiences and meets the objectives of the organization or client. ",
          color: "#000000",
        },
        {
          title: "Content Writer",
          company: "Medium",
          company_url: "https://medium.com",
          logo_path: "medi.png",
          duration: "Oct 2019 - Present",
          location: "Work From Home",
          description:
            "Utilize AI tools and software to generate written content for various platforms. Stay updated with the latest AI advancements and apply them to content creation processes. Revise and edit AI-generated content to ensure it meets quality standards and guidelines. ",
          color: "#000000",
        },
        {
          title: "Hackthon Member",
          company: "Kaggle",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "kaggle.png",
          duration: "Jan 2018 - Present",
          location: "Work-from-Home",
          description:
            "AI hackathons enable data scientists to solve real-world data challenges using artificial intelligence and machine learning. To maximize human potential, they leverage AI to develop creative solutions.  These competitions can be narrowly focused on a particular issue, such as healthcare, money, or the environment, or they can be open-ended, allowing teams to develop original solutions to any issue.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - Present",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Student performance Analysis Using AI Virtual Game",
      createdAt: "2024",
      description: "This project leverages an AI-powered virtual game environment to analyze and predict student performance. By integrating deep learning algorithms with game-based learning, the system provides real-time insights into students’ academic progress.",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Data Analysis Of Student Job Entry",
      createdAt: "2022",
      description: "Solving Students Problem to find there dream Company Chooosing Our Application. Here our Application Will Recommend Company According to There Resume using DL and NLP Method",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "gurupatil1.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://hashnode.com/@Gurupatil0003/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Dwaraka nagar, Yalahanak, T.A.-Banagaluru, Dist.-Banagaluru, karnataka - 585303",
    locality: "Bengaluru",
    country: "IN",
    region: "Karnataka",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Yelahanka+New+town/@13.1065132,77.5669018,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1916f1b66fbd:0x724901ff4e68ebfb!8m2!3d13.106508!4d77.5694767!16s%2Fg%2F11v0917pj_?entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
