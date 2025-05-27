'use client';

import { motion } from 'framer-motion'
import { WrenchScrewdriverIcon, BeakerIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import PhotoGallery from './components/PhotoGallery'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-gradient" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Sina Yousefi
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Reliability and Maintenance Engineer | RAMS Specialist
          </h2>
          <div className="flex justify-center gap-4">
            <a href="#about" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Learn More
            </a>
            <a href="#contact" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition">
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* Core Competencies Section */}
      <section id="competencies" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CompetencyCard 
              icon={<WrenchScrewdriverIcon className="h-12 w-12 text-blue-600" />}
              title="Reliability & Maintenance"
              items={[
                "FMECA",
                "RCA",
                "Predictive Maintenance",
                "Asset Management",
                "Weibull Analysis"
              ]}
            />
            <CompetencyCard 
              icon={<BeakerIcon className="h-12 w-12 text-purple-600" />}
              title="RAMS & Safety"
              items={[
                "SIL Analysis",
                "Functional Safety",
                "QRA",
                "HAZOP",
                "NORSOK Standards"
              ]}
            />
            <CompetencyCard 
              icon={<ChartBarIcon className="h-12 w-12 text-green-600" />}
              title="Data Analysis"
              items={[
                "Machine Learning",
                "Statistical Analysis",
                "Process Data Analytics",
                "Monte Carlo Simulation"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          <div className="space-y-12">
            <ExperienceCard 
              title="Reliability Engineer"
              company="Alcoa Norway, Mosjøen"
              period="Jul 2022 – Present"
              achievements={[
                "Lead reliability analyses for critical gas and flue gas treatment systems",
                "Implemented machine learning-based predictive maintenance",
                "Developed real-time dashboard with SEEQ Process Analytics",
                "Performed systematic Root Cause Analysis"
              ]}
            />
            <ExperienceCard 
              title="Maintenance Planner"
              company="Telavang Group, Tehran"
              period="Jul 2017 – Sep 2018"
              achievements={[
                "Developed data analytical methods for preventive maintenance",
                "Optimized spare parts inventory through statistical analysis",
                "Coordinated daily maintenance operations"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section id="personal" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Beyond Engineering</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Hobbies & Interests</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                  Gaming & Board Games
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                  Reading Non-Fiction Books
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                  Fishing in Norwegian Waters
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                  Cabin Trips with Family
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                  Quality Time with Family
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                  Hiking in Norwegian Nature
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="space-y-4">
                <LanguageBar language="Norwegian" level="B1" percentage={60} />
                <LanguageBar language="English" level="C2" percentage={95} />
                <LanguageBar language="Persian" level="Native" percentage={100} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Photo Gallery</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            A glimpse into my professional and personal life in Norway
          </p>
          <PhotoGallery />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg mb-8">
            I&apos;m always interested in new opportunities and collaborations.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="mailto:yousefisina9@yahoo.com"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Email Me
            </a>
            <a 
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function CompetencyCard({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ExperienceCard({ title, company, period, achievements }: { 
  title: string, 
  company: string, 
  period: string, 
  achievements: string[] 
}) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{company}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{period}</p>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="h-2 w-2 bg-blue-600 rounded-full mt-2"></span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function LanguageBar({ language, level, percentage }: { language: string, level: string, percentage: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{language}</span>
        <span>{level}</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
        <div 
          className="h-full bg-blue-600 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
