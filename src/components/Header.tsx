import React, { useEffect, useRef } from 'react'

const Header = ({pathname=""}: {pathname: any}) => {
  const ref = useRef();

  const links = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "Experiances",
      href: "/experiances"
    },
    {
      name: "Blogs",
      href: "/blogs"
    },
    {
      name: "Projects",
      href: "/projects"
    }
  ]

  useEffect(() => {
    if(typeof window!==undefined) {
      // bg-black/80 
      window.addEventListener('scroll', (e) => {
        console.log('ADD: ', window.scrollY)
        if(window.scrollY > 120) {
          ref.current?.classList.add('bg-black/70')
        } else {
          ref.current?.classList.remove('bg-black/70')
        }
      })
    }
  }, [])

  return (
    <header ref={ref} id="header" className="z-40 flex w-full items-cente justify-center sticky top-0 py-7 transition-all duration-200 backdrop-blur-sm border-b border-neutral-700 ">
      <div className="flex w-full flex-col md:justify-between gap-2 md:flex-row mx-[10%] max-w-4xl">
      
        <div className="" transition:persist>
          <a href="/">
            <h3 className="font-[500] tracking-tighter text-white text-lg">leul aria</h3>
          </a>
        </div>
      
        <nav role="navigation">
          <ul role="list" className="flex flex-row gap-4" id="navigation">
            {
              links.map((link) => (
                <li>
                  <a 
                    href={link.href}
                    className={`cursor-pointer transition-color duration-200 hover:text-neutral-100 ${pathname === link.href && "text-neutral-100"}` }
                  >
                    {link.name}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
