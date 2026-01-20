const project1 = "https://files.devaviraj.me/projects/project-1.png";
const project2 = "https://files.devaviraj.me/projects/project-2.png";
const project3 = "https://files.devaviraj.me/projects/project-3.png";
const project4 = "https://files.devaviraj.me/projects/project-4.png";
const project5 = "https://files.devaviraj.me/projects/project-5.png";
const project6_1 = "https://files.devaviraj.me/projects/project-6_1.png";
const project6_2 = "https://files.devaviraj.me/projects/project-6_2.png";
const project6_3 = "https://files.devaviraj.me/projects/project-6_3.png";
const project6_4 = "https://files.devaviraj.me/projects/project-6_4.png";
const project6_5 = "https://files.devaviraj.me/projects/project-6_5.png";
const project7_1 = "https://files.devaviraj.me/projects/project-7_1.png";
const project7_2 = "https://files.devaviraj.me/projects/project-7_2.png";
const project7_3 = "https://files.devaviraj.me/projects/project-7_3.png";
const certificate1 =
  "https://files.devaviraj.me/certificate/Certificate-ICAICR-2023.pdf";
const certificate2 =
  "https://files.devaviraj.me/certificate/certificate_micro1.pdf";

const github = "https://github.com/aviraj1729";

export const DESCRIPTION = `I am a passionate robotics software developer with a knack for crafting robust and scalable computer vision modules. With one year of hands-on experience, I have honed my skills in computer vision technologies like OpenCV and YOLOv7, as well as web development technologies including Django, React, Axios, MySQL, PostgreSQL, and MongoDB. I have successfully developed and deployed projects that utilize facial recognition, object detection, and real-time data processing. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences, while continually expanding my knowledge in advanced robotics and automation systems.`;

export const ABOUT_TEXT = `I am a dedicated and innovative B.Tech student specializing in Automation and Robotics at the University School of Automation and Robotics, GGSIP University East Delhi Campus, New Delhi. With a strong foundation in computer vision, web development, and facial recognition technologies, I bring a blend of theoretical knowledge and hands-on experience to my projects and internships. As the Core Team Lead of Karuyantra, the Robotics Society at my college, I have successfully led a team of 15 members, demonstrating leadership, teamwork, and project management skills. I am passionate about advancing my expertise in robotics, computer vision, and automation systems, aiming to contribute effectively to cutting-edge technological solutions.`;

export const EDUCATION = [
  {
    year: "2021 - 2025",
    institute:
      "University School of Automation and Robotics, GGSIP University East Delhi Campus",
    cgpa: "8.1/10",
    address: "Surajmal Vihar, New Delhi",
    degree: "B.Tech in Automation and Robotics.",
  },
  {
    year: "2018 - 2020",
    institute: "St. Johns Academy",
    cgpa: "86.8%",
    address: "Hajipur, Bihar",
    degree: "Intermediate",
  },
];

export const EXPERIENCES = [
  {
    year: "Oct 2025 - Present",
    role: "Freelance Software Engineer (Backend + Mobile)",
    company: "JantaWave",
    description: `Built e-Janta, a real-time social platform by developing backend services in Node.js/Express and a cross-platform mobile app using React Native (Expo) for Android and iOS. Designed secure REST APIs with PostgreSQL schema design and authentication using JWT, enabling smooth mobile-first workflows. Implemented real-time features such as feeds and notifications using Socket.IO with Redis caching for faster responses. Containerized services using Docker and supported deployments with Nginx and cloud infrastructure.`,
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL (Neon)",
      "React Native",
      "Expo",
      "Socket.IO",
      "Redis",
      "Docker",
      "Nginx",
      "GCP",
      "JWT",
      "Git",
    ],
  },
  {
    year: "Mar 2025 - Present",
    role: "Full Stack Developer",
    company: "K2EdTech Industries Pvt. Ltd.",
    description: `Developed a full-stack web application enabling 200+ students to attend structured lectures followed by quizzes, ensuring mastery before progressing to the next topic. Integrated an AI-powered multi-LLM chat feature allowing students to clarify 700+ doubts in real time, improving engagement by 40% during testing. Implemented personalized learning roadmaps, boosting student course completion rate by 30%.`,
    technologies: [
      "Node.js",
      "Express.js",
      "React.js",
      "PostgreSQL",
      "Agora",
      "AWS",
      "Axios",
      "LLMs",
    ],
  },

  {
    year: "Aug 2023 - Sept 2024",
    role: "Computer Vision Intern",
    company: "UDIP Technologies PVT. LTD.",
    description: `As a Computer Vision Intern at UDIP Technologies Pvt. Ltd. in New Delhi, I have played a crucial role in developing and optimizing computer vision algorithms for various applications. My responsibilities have included training YOLOv7 models using datasets of over 10,000 images, achieving a 95% success rate in object detection through deep learning techniques. I have also contributed to improving computer vision models and validating the performance of smart badge systems in real-world trials, attaining a 63% success rate in object detection. Throughout my internship, I have collaborated with a team to enhance the efficiency and effectiveness of vision systems, maintained comprehensive documentation, and demonstrated strong analytical, problem-solving, and communication skills.`,
    technologies: ["Python", "OpenCV", "YOLOv7", "Django"],
  },
];

export const PROJECTS = [
  {
    title: "QueeTalk",
    timeline: "May - July 2025",
    images: [project7_1, project7_2, project7_3],
    description:
      "Chatty is a full-featured real-time chat application supporting both personal and group conversations. It was developed with a focus on speed, security, and seamless user experience, catering to over 200 users. The platform features two-factor authentication (TOTP), secure JWT-based sessions, and efficient Redis caching for socket connections. The user experience was enhanced by adding typing indicators, file sharing, emoji picker, and emoji reactions, improving engagement by 35%. Chatty achieved a message latency of under 200ms through Redis caching and file upload rate-limiting. It follows a clean Model-View architecture using Node.js and Socket.IO for real-time communication, with MongoDB as the primary data store. All media attachments are uploaded to and served from a Cloudflare R2 Bucket, ensuring fast and secure access.",

    technologies: [
      "React.js",
      "Node.js",
      "Socket.IO",
      "MongoDB",
      "Redis",
      "JWT",
      "TOTP",
      "TailwindCSS",
      "AWS-SDK",
      "CLoudflare R2 Bucket",
    ],
    github_link: `${github}/chatty`,
    demo: "https://queetalk.hawkjack.xyz/",
  },
  {
    title: "QRVars",
    timeline: "June 2025",
    images: [project6_1, project6_2, project6_3, project6_4, project6_5],
    description:
      "A smart, QR-based email automation tool I built to streamline personalized communication. It allows users to generate QR codes linked to dynamic email templates containing variables in the subject and body. When someone scans the QR code, they're prompted to fill out a form, and their responses are used to replace the placeholders. The user is then redirected to their email app with a prefilled, ready-to-send message. The system includes a real-time dashboard to monitor scans and submissions, built using Socket.io. The full-stack architecture is powered by React, Node.js/Express, Supabase for authentication and database, and Upstash Redis for fast, session-aware processing. Email delivery is securely handled via SMTP integration through Render.",
    technologies: [
      "NodeJS",
      "ReactJs",
      "Redis",
      "Socket.io",
      "Supabase",
      "OAuth",
      "Render",
      "Upstash",
    ],
    github_link: `${github}/qrvars`,
    demo: "https://qrvars.hawkjack.xyz",
  },
  {
    title: "Photo Mingle",
    timeline: "Jan. - Feb. 2025",
    images: [project4],
    description:
      "A web application which allows users to exchange their photos of an event. Developing a web app for event creation, invitations, and photo downloads via facial recognition. Implementing email invitations using SendGrid & deploying on AWS for high availability. Designing user-friendly interfaces for seamless event and photo management. Conducting extensive testing to ensure reliability and a smooth user experience. Enabling invitees to search and download event photos efficiently, enhancing user satisfaction.",
    technologies: [
      "Node.js",
      "MongoDB",
      "React.js",
      "Express.js",
      "Axios",
      "SendGrid",
    ],
    github_link: "",
    demo: "",
  },
  {
    title: "Todo API",
    timeline: "Jan. 2025",
    images: [project5],
    description:
      "A feature-rich Todo Application built with FastAPI and SQLAlchemy, providing secure user authentication and token-based authorization. Users can create, update, and manage their tasks efficiently, with features like password reset and JWT-secured endpoints. The backend is robustly designed with database management and scalability in mind.",
    technologies: [
      "FastAPI",
      "MySQL",
      "Python",
      "JWT (JSON Web Tokens)",
      "SQLAlchemy",
    ],
    github_link: `${github}/todo`,
    demo: "",
  },
  {
    title: "CollegeBurster Website",
    timeline: "Dec. 2024 - Jan. 2025",
    images: [project1],
    description:
      "A fully functional website where college students can get real-time access to class schedules, attendance records, exam marks, study material, notices, and different forms required during college.",
    technologies: ["HTML", "CSS", "Tailwind CSS", "React", "Django", "MongoDB"],
    github_link: "",
    demo: "",
  },
  {
    title: "Facial Recognition System",
    timeline: "July - Sept. 2024",
    images: [project2],
    description:
      "The Facial Recognition System successfully recognized and localized faces in real-time images and videos, showcasing a high level of accuracy and responsiveness. The project's successful completion boosted my confidence in tackling complex computer vision challenges and reinforced my passion for pursuing a career in the field of software engineering and artificial intelligence.",
    technologies: ["Python", "HTML", "Django", "CSS", "React", "Tailwind CSS"],
    github_link: `${github}/Attendance-Management-System-using-Facial-Recognition`,
    demo: "",
  },
];

export const CONTACT = {
  phoneNo: "+91 7050188600",
  email: "aviraj1729@gmail.com",
};

export const CERTIFICATIONS = [
  {
    title: "Computer Vision Intern Certificate",
    company: "micro1",
    year: "Jan. 2025",
    description:
      "Successfully passed micro1's rigorous AI interview and officially certified as a Computer Vision Intern. This certification highlights expertise in the field of computer vision, with a focus on developing intelligent systems that leverage advanced AI and machine learning techniques. As a Computer Vision Intern, the role involves creating and optimizing algorithms for tasks like object detection, image classification, and video analytics. The certification signifies strong problem-solving skills and the ability to work with cutting-edge frameworks such as TensorFlow and PyTorch.",
    pdf_certificate: certificate2,
  },
  {
    title:
      "Sixth International Conference on Advance Informatics for Computing Research",
    company: "ICAICR-2023",
    year: "Dec. 2023",
    description:
      "Participated in the Sixth International Conference on Advanced Informatics for Computing Research (ICAICR 2023), where I presented a research paper on the capabilities of smart wearable devices. My research focused on the development and implementation of advanced features such as obstacle and pothole detection, traffic signal recognition to assist elderly people in crossing roads, geofencing, and medical reminders. This work highlights the potential of smart wearables to enhance safety, mobility, and health management, showcasing their multifaceted applications in everyday life.",
    pdf_certificate: certificate1,
  },
];
