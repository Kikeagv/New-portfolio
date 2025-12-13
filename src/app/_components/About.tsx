import { motion } from 'framer-motion';
import { Award, Users, Lightbulb, Target } from 'lucide-react';

const stats = [
  { icon: Award, value: '5+', label: 'Years Experience' },
  { icon: Users, value: '50+', label: 'Projects Delivered' },
  { icon: Lightbulb, value: '100+', label: 'Research Sessions' },
  { icon: Target, value: '40%', label: 'Avg. UX Improvement' },
];

const skills = [
  'User Research',
  'UX/UI Design',
  'Prototyping',
  'Design Systems',
  'Usability Testing',
  'Information Architecture',
  'Interaction Design',
  'Visual Design',
];

export function About() {
  return (
    <section className="py-8 px-6 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">About Me</h2>
            <div className="space-y-4 text-neutral-300">
              <p>
                I&#39;m a UX/UI designer specializing in financial services, with a passion for making complex 
                banking systems accessible and delightful for everyday users.
              </p>
              <p>
                My approach combines rigorous user research with intentional design decisions. I believe 
                that great design isn&#39;t just about aesthetics—it&#39;s about understanding user needs and 
                creating solutions that truly work.
              </p>
              <p>
                Based in Mexico, I&#39;ve worked with fintech startups and established banks to transform 
                digital experiences that millions of users interact with daily.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                >
                  <Icon className="w-8 h-8 mb-4 text-blue-400" />
                  <div className="text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-white mb-8">Skills & Expertise</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-neutral-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
