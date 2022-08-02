import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Ripple from "react-waves-effect/lib";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero__bg"></div>

      <main className="bg-white text-black flex flex-col justify-center w-full min-h-[100vh] px-[20%]">
        <div className="flex flex-grow items-center justify-center">
          <div className="basis-[80px] h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35px"
              height="35px"
              className="my-4"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35px"
              height="35px"
              className="my-4"
              viewBox="0 0 24 24"
            >
              <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35px"
              height="35px"
              className="my-4"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35px"
              height="35px"
              className="my-4"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35px"
              height="35px"
              className="my-4"
              viewBox="0 0 24 24"
            >
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
            </svg>
          </div>
          <div className="border-l pl-10">
            <h1 className="mx-auto text-center text-6xl font-[900] font-body">
              Hy i'm LeulAria
              <br />
              Software Engineer!
            </h1>

            <p className="text-center mt-3 text-xl max-w-[550px] text-zinc-600">
              Web developer . React Developer . Typescript Developer . Node
              Developer . Flutter Developer . UI/UX . DevOps . Golang . Engineer
              . Blogger.
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

      <main className="relative bg-white text-black flex flex-col justify-center w-full min-h-[100vh] px-[20%]">
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

      {/* 
      <section className="flex flex-col justify-center  w-full min-h-[50vh] bg-[#fff] px-[10%]">
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
      </section>

      <section className="flex flex-col justify-center w-full min-h-[90vh] bg-[#fff] text-black px-[10%]">
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

      <section className="flex flex-col justify-center  w-full min-h-[50vh] bg-[#fff] px-[10%]">
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

      <section className="flex flex-col justify-center  w-full min-h-[70vh] bg-[#fff] px-[10%]">
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
