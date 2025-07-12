"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Calendar, GraduationCap, Briefcase, Code, FileText, Linkedin, Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useScrollPosition } from "@/hooks/use-scroll-position"
import { CyclingTypewriter } from "@/components/cycling-typewriter"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/footer"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { useState, useEffect } from "react"

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

export default function PersonalWebsite() {
  const aboutRef = useScrollAnimation()
  const experienceRef = useScrollAnimation()
  const educationRef = useScrollAnimation()
  const skillsRef = useScrollAnimation()
  const archivesRef = useScrollAnimation()
  const { isScrolled } = useScrollPosition()

  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768) // 判斷是否為桌面版 (md breakpoint)
    }
    handleResize() // 初始化狀態
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // 根據是否為桌面版和是否滾動來計算動態寬度
  const dynamicRightPanelWidth = isDesktop && isScrolled ? "33.333333%" : isDesktop ? "50%" : "100%"
  // 計算左側面板的動態寬度，與右側面板互補
  const dynamicLeftPanelWidth = isDesktop && isScrolled ? "66.666667%" : isDesktop ? "50%" : "100%"

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-mono relative flex flex-col md:flex-row">
      {/* Right Panel - 在手機上顯示在上方，桌面版固定在右側 */}
      <motion.div
        className={`
          relative w-full px-8 pb-8 border-b border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center
          md:fixed md:top-0 md:right-0 md:h-screen md:p-12 md:border-b-0 md:border-l md:flex-shrink-0
          transition-all duration-500 ease-out z-50
        `}
        style={{
          width: dynamicRightPanelWidth,
        }}
      >
        {/* Theme Toggle Button - 保持 absolute 定位在右側面板內 */}
        <div className="absolute top-6 right-6 flex items-center gap-4 z-10">
          <ThemeToggle />
        </div>

        {/* Content inside the right panel, now with top padding for mobile */}
        <div
          className="relative text-center transition-all duration-500 ease-out pt-16 md:pt-0" // Added pt-16 for mobile, pt-0 for desktop
          style={{ transform: isDesktop && isScrolled ? "scale(0.8)" : "scale(1)" }}
        >
          {/* Polaroid Frame */}
          <div className="relative bg-white dark:bg-gray-900 p-6">
            <div className="w-64 h-64 mx-auto mb-6 overflow-hidden rounded-sm">
              <Image
                src="/profile-photo.png"
                alt="Profile Picture"
                width={256}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 tracking-wide">I AM</p>
            <div className="text-xl font-bold text-black dark:text-white tracking-wide min-h-[2rem] flex items-center justify-center">
              <CyclingTypewriter texts={["Maureen Lin", "an Engineer"]} typingSpeed={150} pauseDuration={2000} />
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between text-gray-400 dark:text-gray-600">
              <span>[</span>
              <span>]</span>
            </div>
          </div>

          <a
            href="mailto:mumulin1013@gmail.com"
            className="mt-10 block text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
          >
            <span className="inline-block w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "#a5ab8e" }}></span>
            Click here to contact me! 👨‍💻
          </a>
        </div>
      </motion.div>
      {/* Left Scrollable Content - 在手機上顯示在右側面板下方 */}
      <div
        className={`
          w-full px-8 overflow-y-auto
          md:px-12
          transition-all duration-500 ease-out
        `}
        style={{
          width: dynamicLeftPanelWidth, // 應用動態寬度
        }}
      >
        {/* 內容包裹器，設定最大寬度並居中 */}
        <div className="md:max-w-3xl mx-auto">
          {/* About Me Section */}
          <motion.section
            ref={aboutRef.ref}
            initial="hidden"
            animate={aboutRef.isInView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="flex flex-col justify-center py-16 md:min-h-screen md:py-20"
          >
            <h2 className="text-3xl font-bold mb-4 leading-tight">Hsin Chen Lin (林欣蓁)</h2>
            {/* Short underline for the name */}
            <motion.div
              className="w-20 h-0.5 mb-8"
              style={{ backgroundColor: "#a5ab8e" }}
              initial={{ width: 0 }}
              animate={aboutRef.isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 max-w-xl mb-8">
              Building clean, efficient systems from front to back. Currently crafting software at Yang Ming Marine Transport. Passionate about full-stack dev, data, and turning ideas into reality.
            </p>
            {/* External Links Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={aboutRef.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <Button
                asChild
                size="icon"
                className="bg-[#a5ab8e] text-white hover:bg-[#8e947a] dark:bg-[#a5ab8e] dark:hover:bg-[#8e947a] transition-colors duration-200"
              >
                <a
                  href="https://www.linkedin.com/in/54mulin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="icon"
                className="bg-[#a5ab8e] text-white hover:bg-[#8e947a] dark:bg-[#a5ab8e] dark:hover:bg-[#8e947a] transition-colors duration-200"
              >
                <a
                  href="https://github.com/54mulin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            ref={experienceRef.ref}
            initial="hidden"
            animate={experienceRef.isInView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="py-10 md:py-20 border-t border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-10 text-black dark:text-white">Experience</h2>
            <div className="space-y-10">
              {[
                {
                  title: "Software Developer",
                  company: "Yang Ming Marine Transport Corporation",
                  period: "Aug.2025 - Present",
                  description:
                    "Work on system analysis, development, and maintenance. Focused on building reliable internal applications that support global logistics operations.",
                  skills: [],
                  icon: "/YM.png",
                },
                {
                  title: "Software Engineer",
                  company: "National Taiwan Normal University, G. I. of Edu Policy & Admin",
                  period: "Mar.2024 - Jul.2025",
                  description:
                    "To enhance the efficiency of the education platform, streamlining processes such as questionnaire management and statistical analysis. Additionally, we provided features for foreign teachers and teacher training personnel, enabling schools to effectively manage and match foreign teachers and teacher training staff.",
                  skills: ["Vue.js", "JavaScript", "PHP", "Laravel", "MySQL"],
                  icon: "/NTNU.png",
                },
                {
                  title: "IT Support (Internship)",
                  company: "Academia Sinica, Institute of Mathematics",
                  period: "Jan. 2022 - Jan. 2024",
                  description:
                    "Enhanced system security via government cybersecurity setups and ISMS, achieving 95% compliance. Automated tasks with Google Apps Script, boosting productivity by 30%.",
                  skills: ["GoogleAppsScript", "JavaScript", "Java", "SpingBoot", "Python"],
                  icon: "/AS.png",
                },
              ].map((job, index) => (
                <div key={index} className="flex items-start gap-5">
                  {typeof job.icon === 'string' ? (
                    <div className="w-6 h-6 mt-1 flex-shrink-0 relative">
                      <Image
                        src={job.icon}
                        alt="Company Logo"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <job.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-black dark:text-white">{job.title}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{job.period}</span>
                    </div>
                    <p className="font-medium text-gray-600 dark:text-gray-400 mb-3 text-sm">{job.company}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="rounded-full px-3 py-1 text-xs text-white"
                          style={{ backgroundColor: "#a5ab8e" }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section
            ref={educationRef.ref}
            initial="hidden"
            animate={educationRef.isInView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="py-10 md:py-20 border-t border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-10 text-black dark:text-white">Education</h2>
            <div className="space-y-10">
              {[
                {
                  title: "Master of Computer Science and Engineering ",
                  school: "National Taiwan Ocean University, Keelung",
                  period: "Aug. 2024 - Present",
                  description:
                    "Part-Time student, expected to graduate in July 2026.",
                  subjects: ["Multi-Modal", "Machine Learning", "LLM", "Graph Data"],
                  icon: "/NTOU.png",
                },
                {
                  title: "Bachelor of Computer Science & Information Management",
                  school: "Soochow University, Taipei",
                  period: "Sep. 2021 - Jan. 2024",
                  description:
                    "Capstone project: Based Model Training and Analysis GUI Implementation - Using Food Spectra as an Example.",
                  subjects: ["Data Analysis", "Python", "Data Visualization"],
                  icon: "/SCU.png",
                },
              ].map((education, index) => (
                <div key={index} className="flex items-start gap-5">
                  {typeof education.icon === 'string' ? (
                    <div className="w-6 h-6 mt-1 flex-shrink-0 relative">
                      <Image
                        src={education.icon}
                        alt="School Logo"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <education.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-black dark:text-white">{education.title}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{education.period}</span>
                    </div>
                    <p className="font-medium text-gray-600 dark:text-gray-400 mb-3 text-sm">{education.school}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">{education.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {education.subjects.map((subject, subjectIndex) => (
                        <Badge
                          key={subjectIndex}
                          variant="secondary"
                          className="rounded-full px-3 py-1 text-xs text-white"
                          style={{ backgroundColor: "#a5ab8e" }}
                        >
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            ref={skillsRef.ref}
            initial="hidden"
            animate={skillsRef.isInView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="py-10 md:py-20 border-t border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-10 text-black dark:text-white">Skills</h2>
            <div className="grid gap-8">
              {/* Traditional Skills Grid */}
              <div className="space-y-6">
                {[
                  {
                    title: "Frontend",
                    skills: [
                      { name: "React", url: "https://react.dev/" },
                      { name: "Vue.js", url: "https://vuejs.org/" },
                      { name: "Next.js", url: "https://nextjs.org/" },
                      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
                      { name: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
                    ],
                  },
                  {
                    title: "Backend",
                    skills: [
                      { name: "Node.js", url: "https://nodejs.org/" },
                      { name: "Python", url: "https://www.python.org/" },
                      { name: "Express", url: "https://expressjs.com/" },
                      { name: "PostgreSQL", url: "https://www.postgresql.org/" },
                      { name: "MongoDB", url: "https://www.mongodb.com/" },
                      { name: "Redis", url: "https://redis.io/" },
                    ],
                  },
                  {
                    title: "Tools & Cloud",
                    skills: [
                      { name: "AWS", url: "https://aws.amazon.com/" },
                      { name: "Docker", url: "https://www.docker.com/" },
                      { name: "Git", url: "https://git-scm.com/" },
                      { name: "Figma", url: "https://www.figma.com/" },
                      { name: "Vercel", url: "https://vercel.com/" },
                      { name: "Firebase", url: "https://firebase.google.com/" },
                    ],
                  },
                ].map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">{category.title}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <a
                          key={skillIndex}
                          href={skill.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Learn more about ${skill.name}`}
                        >
                          <span className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#a5ab8e] dark:hover:text-[#a5ab8e] transition-colors duration-200">
                            {skill.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
          <motion.section
            ref={archivesRef.ref}
            initial="hidden"
            animate={archivesRef.isInView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="py-10 md:py-20 border-t border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-10 text-black dark:text-white">Archives</h2>
            <div className="grid gap-8">
              {[
                {
                  title: "Web仔從數學角度學習 AI/ ML & Data @ 2024 iThome 鐵人賽",
                  description:
                    "A 30-day series guiding web developers through the math behind AI/ML—covering linear algebra, calculus, statistics, and neural networks—in a fun, beginner-friendly way. The goal: make math less scary, and AI/ML more approachable for web developers.",
                  year: "2024",
                  icon: FileText,
                  links: [
                    { name: "iThome", url: "https://ithelp.ithome.com.tw/users/20168898/ironman/7493" }
                  ],
                },
                {
                  title: "Based Model Training and Analysis GUI Implementation - Using Food Spectra as an Example",
                  description:
                    "A Python GUI tool using Tkinter, pandas, and scikit-learn for data loading, model tuning, and result visualization—simple, efficient, and intuitive.",
                  year: "2023",
                  icon: Code,
                  links: [],
                },
                {
                  title: "twlink.app 台灣加密型實聯制(close permanently)",
                  description:
                    "A privacy-focused contact tracing system built during the COVID-19 outbreak in Taiwan. It uses RSA encryption to protect personal data, which is automatically deleted after 28 days.",
                  year: "2021",
                  icon: Code,
                  links: [
                    { name: "Medium", url: "https://54mulin.medium.com/台灣加密性實聯制-twlink-app-d7516f6e7234" },
                    { name: "Fronten-Github", url: "https://github.com/funtuan/reallink-frontend" },
                    { name: "Backend-Github", url: "https://github.com/funtuan/reallink-backend" }
                  ],
                },
                {
                  title: "口罩哪裡買?附近剩餘數量查詢 - LINE bot (close permanently)",
                  description:
                    "2020年2月6日 口罩販售實名上路，政府提供查詢的方式有衛福部健保署網站或特約藥局excel，則我們寫了一個LINE bot方便查詢自己附近的藥局，可個別詳細查看各藥局當前數量，如果還沒有口罩，希望能幫到你!",
                  year: "2020",
                  icon: Code,
                  links: [
                    { name: "新聞媒體連結-電腦王阿達", url: "https://www.kocpc.com.tw/archives/305363" }
                  ],
                },
                {
                  title: "想丟垃圾?去追圾垃車吧! - LINE bot",
                  description:
                    "準時鏟屎丟垃圾車是他的使命，選擇了一條與眾不同的路，他就是「垃圾車王」。在貓奴的驅使下，誕生「想丟垃圾?去追圾垃車吧!」",
                  year: "2019",
                  icon: Code,
                  links: [],
                },
              ].map((project, index) => (
                <div key={index} className="flex items-start gap-5">
                  <project.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-xs">{project.year}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        {project.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-[#a5ab8e] hover:text-[#8e947a] dark:text-[#a5ab8e] dark:hover:text-[#8e947a] transition-colors duration-200"
                          >
                            <Globe className="w-3 h-3" />
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
          <Footer />
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  )
}
