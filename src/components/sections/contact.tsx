import { Github, Linkedin, Facebook, Instagram, Phone, Mail, University } from 'lucide-react';
import Link from 'next/link';
import Reveal from '../shared/reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const socialLinks = [
  { icon: Github, href: 'https://github.com/khoalearningcode', name: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/cao-khoa-1b09141b8/', name: 'LinkedIn' },
  { icon: Facebook, href: 'https://www.facebook.com/cao.khoa.140', name: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/caokhoa298/', name: 'Instagram' },
];

const contactDetails = [
  { icon: Phone, text: '(+84) 977385259' },
  { icon: Mail, text: 'godminhkhoa@gmail.com' },
  { icon: University, text: 'khoa.caoleminh@hcmut.edu.vn' },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <Reveal className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get In Touch</h2>
        <p className="mt-4 text-muted-foreground">
          My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Reveal direction="left" className="space-y-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border/20 p-6">
            <h3 className="text-2xl font-semibold text-accent mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-center gap-4">
                  <detail.icon className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">{detail.text}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/20 p-6">
            <h3 className="text-2xl font-semibold text-accent mb-6">Find Me Online</h3>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="bg-transparent border-accent/50 text-accent/80 hover:bg-accent/10 hover:text-accent hover:border-accent">
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal direction="right" delay={200}>
          <Card className="bg-card/50 backdrop-blur-sm border-border/20">
            <CardContent className="p-6">
              <form action="mailto:your-email@example.com" method="post" encType="text/plain" className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <Input id="name" name="name" type="text" placeholder="Your Name" required className="bg-background/50" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <Input id="email" name="email" type="email" placeholder="Your Email" required className="bg-background/50" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <Textarea id="message" name="message" placeholder="Your Message" required rows={5} className="bg-background/50" />
                </div>
                <div>
                  <Button type="submit" className="w-full ghost-button">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
