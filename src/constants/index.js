import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import certificate1 from "../assets/certificate/Certificate-ICAICR-2023.pdf";
import certificate2 from "../assets/certificate/certificate_micro1.pdf";

export const DESCRIPTION = `I am a passionate robotics software developer with a knack for crafting robust and scalable computer vision modules. With one year of hands-on experience, I have honed my skills in computer vision technologies like OpenCV and YOLOv7, as well as web development technologies including Django, React, Axios, MySQL, PostgreSQL, and MongoDB. I have successfully developed and deployed projects that utilize facial recognition, object detection, and real-time data processing. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences, while continually expanding my knowledge in advanced robotics and automation systems.`;

export const ABOUT_TEXT = `I am a dedicated and innovative B.Tech student specializing in Automation and Robotics at the University School of Automation and Robotics, GGSIP University East Delhi Campus, New Delhi. With a strong foundation in computer vision, web development, and facial recognition technologies, I bring a blend of theoretical knowledge and hands-on experience to my projects and internships. As the Core Team Lead of Karuyantra, the Robotics Society at my college, I have successfully led a team of 15 members, demonstrating leadership, teamwork, and project management skills. I am passionate about advancing my expertise in robotics, computer vision, and automation systems, aiming to contribute effectively to cutting-edge technological solutions.`;

export const EDUCATION = [
  {
    year: "2021 - Present",
    institute:
      "University School of Automation and Robotics, GGSIP University East Delhi Campus",
    cgpa: "8.56/10(till 5th sem)",
    address: "Surajmal Vihar,New Delhi",
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
    year: "Aug 2023 - Sept 2024",
    role: "Computer Vision Intern",
    company: "UDIP Technologies PVT. LTD.",
    description: `As a Computer Vision Intern at UDIP Technologies Pvt. Ltd. in New Delhi, I have played a crucial role in developing and optimizing computer vision algorithms for various applications. My responsibilities have included training YOLOv7 models using datasets of over 10,000 images, achieving a 95% success rate in object detection through deep learning techniques. I have also contributed to improving computer vision models and validating the performance of smart badge systems in real-world trials, attaining a 63% success rate in object detection. Throughout my internship, I have collaborated with a team to enhance the efficiency and effectiveness of vision systems, maintained comprehensive documentation, and demonstrated strong analytical, problem-solving, and communication skills.`,
    technologies: ["Python", "OpenCV", "YOLOv7", "Django"],
  },
];

export const PROJECTS = [
  {
    title: "CollegeBurster Website",
    image: project1,
    description:
      "A fully functional website where college students can get real-time access to class schedules,attendance records, exam marks, study material, Notices, and diffirent forms required during college.",
    technologies: ["HTML", "CSS", "Tailwind CSS", "React", "Django", "MongoDB"],
  },
  {
    title: "Facial Recognition System",
    image: project2,
    description:
      "The Facial Recognition System successfully recognized and localized faces in real-time images and videos, showcasing a high level of accuracy and responsiveness.The project's successful completion boosted my confidence in tackling complex computer vision chalenges and reinforced my passion for pursuing a career in the field of software engineering and artificial intelligence.",
    technologies: ["Python", "HTML", "Django", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Photo Mingle",
    image: project4,
    description:
      "A web application which allow users to exchange their photos of event.Developing a web app for event creation, invitations, and photo downloads via facial recognition.Implementing email invitations using SendGrid & deploying on AWS for high availability.Designing user-friendly interfaces for seamless event and photo management.Conducting extensive testing to ensure reliability and a smooth user experience.Enabling invitees to search and download event photos efficiently, enhancing user satisfaction.",
    technologies: [
      "Node.js",
      "MongoDB",
      "React.js",
      "Express.js",
      "Axios",
      "SendGrid",
    ],
  },
];

export const CONTACT = {
  phoneNo: "+91 7050188600",
  email: "aviraj1729@gmail.com",
};

export const CERTIFICATIONS = [
  {
    title:
      "Sixth International Conference on Advance Informatics for Computing Research",
    company: "ICAICR-2023",
    year: "Dec 2023",
    description:
      "Participated in the Sixth International Conference on Advanced Informatics for Computing Research (ICAICR 2023), where I presented a research paper on the capabilities of smart wearable devices. My research focused on the development and implementation of advanced features such as obstacle and pothole detection, traffic signal recognition to assist elderly people in crossing roads, geofencing, and medical reminders. This work highlights the potential of smart wearables to enhance safety, mobility, and health management, showcasing their multifaceted applications in everyday life.",
    pdf_certificate: certificate1,
  },
  {
    title: "Computer Vision Intern Certificate",
    company: "micro1",
    year: "Jan 2025",
    description:
      "Successfully passed micro1's rigorous AI Interview and officially certified as a Computer Vision Intern. This certification highlights expertise in the field of computer vision, with a focus on developing intelligent systems that leverage advanced AI and machine learning techniques. As a Computer Vision Intern, the role involves creating and optimizing algorithms for tasks like object detection, image classification, and video analytics. The certification signifies strong problem-solving skills, the ability to work with cutting-edge frameworks such as TensorFlow and PyTorch.",
    pdf_certificate: certificate2,
  },
];
