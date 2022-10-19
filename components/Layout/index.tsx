import React from "react";
import { Navbar, Button, Text } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";

const collapseItems = [
  {
    link: "",
    name: "Home"
  },
  {
    link: "#projects",
    name: "Projects"
  },
  {
    link: "#about_me",
    name: "About Me"
  },
  {
    link: "#experiences",
    name: "Experiences"
  },
  {
    link: "#blogs",
    name: "Blogs"
  },
  {
    link: "https://github.com/LeulAria",
    name: "Github"
  },
  {
    link: "https://www.linkedin.com/in/leularia",
    name: "LinkedIn"
  }
];

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <div className="bg-black w-full">
      <Navbar
        maxWidth="fluid"
        isBordered
        css={{ width: "100%" }}
        variant="sticky"
      >
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
          <div className="ml-3">
            Leul
            <Text b color="inherit" hideIn="xs">
              Aria
            </Text>
          </div>
        </Navbar.Brand>
        <div className="cursor-pointer">
          <Navbar.Content
            hideIn="xs"
            enableCursorHighlight
            activeColor="secondary"
          >
            <Link href="/">
              <Navbar.Item isActive>Home</Navbar.Item>
            </Link>
            <Link href="/#projects">
              <Navbar.Item>Projects</Navbar.Item>
            </Link>
            <Link href="/#experience">
              <Navbar.Item>Experience</Navbar.Item>
            </Link>
            <Link href="/#blogs">
              <Navbar.Item>Blogs</Navbar.Item>
            </Link>
          </Navbar.Content>
        </div>
        <Navbar.Content>
          <Navbar.Link
            color="inherit"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=leulsegedtariku@gmail.com"
            target="_blank"
          >
            Contact Me
          </Navbar.Link>
          <Navbar.Item>
            <Button
              auto
              rounded
              color="primary"
              onClick={() => router.push("/resume")}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 4.5V9h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v7H2V2a2 2 0 0 1 2-2h5.5L14 4.5zM13 12h1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2h1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5z" />
                </svg>
              }
              css={{ fontWeight: 800 }}
            >
              Resume
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse
          css={{
            zIndex: "9999"
          }}
        >
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                  color: "#FFF"
                }}
                href={item.link}
              >
                <span className="text-white cursor-pointer">{item.name}</span>
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
      {children}
    </div>
  );
};

export default Layout;
