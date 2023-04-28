import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <main className={`${inter.className} mx-auto w-[95%] max-w-[1140px]`}>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full">
          <h1 className="pb-4 text-3xl font-bold">About us</h1>
          <p className="w-full text-lg text-gray lg:w-[90%]">
            Welcome to Swaron.io page, a organization dedicated to providing
            free educational content for students interested in computer science
            and information technology. <br /> Inspired by the legacy of Aaron
            Swartz, we believe that knowledge should be free and accessible to
            all. Our goal is to empower individuals around the world to learn
            valuable and useful skills that can be applied in their personal and
            professional lives. We offer high-quality online courses,
            educational resources, and study materials, all for free. Join us
            and start your journey towards learning computer science and IT
            today!
          </p>
        </div>
        <div className="w-full py-14 2xl:w-1/2">
          <Image
            className="mb-4"
            alt="Aaron Swartz"
            width={1000}
            height={80}
            src={
              "https://cdn.discordapp.com/attachments/1015005616663691425/1099393087081554060/swartz130211_560.png"
            }
          />
          <i className="mb-4 text-sm text-gray">
            &ldquo;With so many of us around the world, let&rsquo;s not just
            send a strong message against the privatization of knowledge -
            let&rsquo;s make it a thing of the past&rdquo;. – Aaron Swartz
          </i>
        </div>
      </div>
    </main>
  );
}
