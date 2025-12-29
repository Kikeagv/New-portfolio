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
    <section className="bg-linear-to-br from-blue-50 via-purple-50 to-neutral-50 px-6 py-8">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-neutral-900">Let&#39;s Work Together</h2>
          <p className="mx-auto mb-12 max-w-2xl text-neutral-600">
            I&#39;m always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out.
          </p>

          <motion.a
            href="mailto:enrique@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-12 inline-block rounded-full bg-neutral-900 px-10 py-5 text-white shadow-lg shadow-neutral-900/20 transition-shadow hover:shadow-xl hover:shadow-neutral-900/30"
          >
            Get in touch
          </motion.a>

          <div className="mb-12 flex items-center justify-center gap-6">
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
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
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
