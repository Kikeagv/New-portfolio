import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:enrique@example.com" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

export function Contact() {
  return (
    <section className="py-8 px-6 bg-linear-to-br from-blue-50 via-purple-50 to-neutral-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-neutral-900 mb-6">Let&#39;s Work Together</h2>
          <p className="text-neutral-600 mb-12 max-w-2xl mx-auto">
            I&#39;m always interested in hearing about new projects and opportunities.{" "}
            Whether you have a question or just want to say hi, feel free to reach
            out.
          </p>

          <motion.a
            href="mailto:enrique@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-5 bg-neutral-900 text-white rounded-full shadow-lg shadow-neutral-900/20 hover:shadow-xl hover:shadow-neutral-900/30 transition-shadow mb-12"
          >
            Get in touch
          </motion.a>

          <div className="flex items-center justify-center gap-6 mb-12">
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-900 transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>

          <p className="text-sm text-neutral-400">
            © 2025 Enrique García. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
