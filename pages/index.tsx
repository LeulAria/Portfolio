import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Ripple from "react-waves-effect/lib";
import Hero from "../components/Hero";
import Footer from "../components/Layout/Footer";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <div className="dark min-h-screen scrollbar-hide">
      <Head>
        <title>Create Next App</title>
      </Head>

      <Hero />

      <div className="container mx-auto">
        <Projects />
      </div>

      <div className="mt-10">
        <Footer />
      </div>

      {/* <main className="relative bg-white dark:bg-black text-black flex flex-col justify-center w-full min-h-[100vh] px-[20%]">
        <div className="hero__bg-2 absolute top-[200vh]"></div>
        <div className="flex flex-grow items-center justify-center">
          <div className="basis-[80px] h-[90%]"></div>
          <div className="border-l pl-10">
            <h1 className="mx-auto text-center text-6xl font-[900] font-body">
              Experiance
            </h1>

            <p className="text-center mt-3 text-xl max-w-[550px] text-zinc-600">
              I have worked for over 5+ companies in the past. 3 years of work
              experience in the field of software development.
            </p>

            <div className="flex justify-center mt-10 mx-auto">
              <Ripple>
                <button className="mx-1 px-16 py-3 bg-black text-white rounded-[2rem]">
                  Contact
                </button>
              </Ripple>
              <div className="overflow-hidden rounded-[2rem] mx-2">
                <Ripple color="#888">
                  <button className="overflow-hidden px-16 py-3 border border-black text-black rounded-[2rem]">
                    Resume
                  </button>
                </Ripple>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-auto mb-10 text-center">Powered by Vercel</p>
      </main>

      <section className="flex flex-col justify-center  w-full min-h-[50vh] bg-[#000] px-[white%]">
        <div className="mb-10">
          <h1 className="mt-0 text-center text-6xl font-[900] font-body">
            Experiences
          </h1>
          <h4 className="text-center -pt-10 text-2xl">
            My experiences as a developer.{" "}
          </h4>
        </div>
        <div className="grid grid-cols-3 gap-14 mx-[10%] mt-10">
          <div className="">
            <h1 className="mt-0 text-3xl font-[800] font-body">
              Eagle Lion (ELTS)
            </h1>
            <h4 className="-pt-10 text-xl">Senior Frontend Developer</h4>
            <h4 className="-pt-10 text-sm">July, 2022 - Current</h4>
          </div>
          <div className="">
            <h1 className="mt-0 text-3xl font-[800] font-body">
              Expanzo (part-time)
            </h1>
            <h4 className="-pt-10 text-xl">Project Lead NextJS Developer</h4>
            <h4 className="-pt-10 text-sm">Jan, 2022 - Current</h4>
          </div>
          <div className="">
            <h1 className="mt-0 text-3xl font-[800] font-body">
              Ahun app (Prime Maven)
            </h1>
            <h4 className="-pt-10 text-xl">Fullstack software developer</h4>
            <h4 className="-pt-10 text-sm">Dec, 2021 - May, 2022</h4>
          </div>
          <div className="">
            <h1 className="mt-0 text-3xl font-[800] font-body">
              2F Capital(2F Times)
            </h1>
            <h4 className="-pt-10 text-xl">React Typescript Developer</h4>
            <h4 className="-pt-10 text-sm">Jun, 2021 - Dec, 2021</h4>
          </div>
          <div className="">
            <h1 className="mt-0 text-3xl font-[800] font-body">360 Ground</h1>
            <h4 className="-pt-10 text-xl">Backend Engineer</h4>
            <h4 className="-pt-10 text-sm">Dec, 2020 - Jun, 2021</h4>
          </div>
          <div className="">
            <h1 className="mt-0 text-3xl font-[800] font-body">
              Addis Software
            </h1>
            <h4 className="-pt-10 text-xl">Fullstack software developer</h4>
            <h4 className="-pt-10 text-sm">July, 2020 - Dec, 2021</h4>
          </div>
        </div>
      </section> */}

      {/* <section className="flex flex-col justify-center w-full min-h-[90vh] bg-[#000] text-white px-[10%]">
        <div className="flex items-center justify-center">
          <div className="relative w-[250px] h-[300px] rounded-full border border-black overflow-hidden">
            <Image layout="fill" src="/imgs/me.jpg" />
          </div>
        </div>
        <h1 className="mt-10 text-center text-5xl font-[900] font-body">
          About Me
        </h1>
        <h4 className="text-center -pt-10 text-xl">
          Know more about me and my work.
        </h4>
        <div className="flex mx-auto mt-6">
          <div className="flex items-center mx-auto">
            <p className="text-center text-lg max-w-[750px] mx-auto">
              Welcome aboard my name is leul and i am an experienced fullstack
              software engineer with 3+ years of experience in the industry. I
              have Completed a Bachelor of Science in Computer Science With
              Great Distinction. I have a passion for learning and I am always
              looking to improve my skills and knowledge to become a expert and
              master on the domains that i love.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center  w-full min-h-[50vh] bg-[#000] px-[white%]">
        <div className="mb-10">
          <h1 className="mt-0 text-center text-5xl font-[900] font-body">
            My Skills
          </h1>
          <h4 className="text-center -pt-10 text-xl">
            Some of my skills that stand out.
          </h4>
        </div>
        <div className="grid grid-cols-3 gap-14 mx-[10%] mt-10">
          <div className="">
            <h1 className="mt-0 text-3xl font-[800] font-body">
              Web Development
            </h1>
            <h4 className="-pt-10 text-sm">
              Some of the tools i have worked with and loved.
            </h4>
            <h4 className="-pt-10 text-lg">
              React . Vue . Svelte . TanStack . MUI . FramerMotion . Zustand .
              Tailwind...
            </h4>
          </div>
          <div className="">
            <h1 className="mt-0 text-3xl font-[800] font-body">
              Backend Development
            </h1>
            <h4 className="-pt-10 text-sm">
              Some of the tools i have worked with and loved.
            </h4>
            <h4 className="-pt-10 text-lg">
              Docker . NodeJS . Django . FastAPI . tRPC . GraphQL . Redis .
              Postgres . PrismaORM...
            </h4>
          </div>

          <div className="">
            <h1 className="mt-0 text-3xl font-[800] font-body">
              Other Worth Mentioning
            </h1>
            <h4 className="-pt-10 text-sm">
              other tools i have familiarity with.
            </h4>
            <h4 className="-pt-10 text-lg">
              Flutter . Firebase . ReactNative . Git . Github Actions...
            </h4>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center  w-full min-h-[70vh] bg-[#000] px-[10%]">
        <div className="mb-10">
          <h1 className="mt-0 text-center text-5xl font-[900] font-body">
            Contact
          </h1>
          <h4 className="text-center -pt-10 text-xl">
            Need to get in touch contact me via the links below?
          </h4>
        </div>
        <div className="mt-4">
          <ul className="flex justify-center mt-3 space-x-4 mx-auto max-w-[400px]">
            <li>
              <a heref="https://github.com/leularia">Github</a>
            </li>
            <li>
              <a heref="https://linkedin.com/in/leularia">Linkedin</a>
            </li>
            <li>
              <a heref="https://github.com/LeulAria">Twitter</a>
            </li>
            <li>
              <a heref="https://github.com/LeulAria">Telegram</a>
            </li>
          </ul>
        </div>
      </section>

      <footer className="flex h-24 w-full items-center justify-center border-t border-black bg-[#000] text-white ">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Vercel
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
