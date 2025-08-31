import Image from 'next/image';
import Link from 'next/link';
import TypingEffect from '../shared/typing-effect';
import Reveal from '../shared/reveal';

const HeroSection = () => {
  return (
    <section id="home" className="flex items-center min-h-screen pt-20 pb-10">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <Reveal className="md:col-span-2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground uppercase">
            Cao Lê Minh Khoa
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground h-8">
            <TypingEffect />
          </p>
          <p className="max-w-xl mx-auto md:mx-0 text-muted-foreground">
            A passionate Computer Science student with a love for building innovative solutions in AI and cloud computing. I enjoy exploring the depths of technology, from neural networks to scalable system design.
          </p>
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <Link href="#about" className="ghost-button">
              About Me
            </Link>
            <Link href="#projects" className="ghost-button">
              View Projects
            </Link>
          </div>
        </Reveal>

        <Reveal className="flex justify-center" direction="right" delay={200}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-border-pulse"></div>
            <Image
              src="https://picsum.photos/200/200"
              data-ai-hint="profile picture"
              alt="Cao Lê Minh Khoa"
              width={200}
              height={200}
              className="relative rounded-full border-4 border-background object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HeroSection;
