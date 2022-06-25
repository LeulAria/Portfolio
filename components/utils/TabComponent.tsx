import React, { useState } from 'react'

interface Tabs {
  title: string;
  icon: JSX.Element;
  content: JSX.Element;
}

interface Props {
  tabs: Tabs[]
}

const TabComponent = ({ tabs }: Props) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-700 sticky top-[65px] z-30 bg-white/70 dark:bg-black/40 backdrop-blur-[4px]">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {
            tabs.map((tab, index) => (
              <li className="mr-2" key={tab.title}>
                <a
                  href="#"
                  className={`inline-flex p-4 ${currentTab === index && 'border-b-2 text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500'} rounded-t-lg group"
                  aria-current="page`}
                  onClick={() => setCurrentTab(index)}
                >
                  {tab.icon}
                  {tab.title}
                </a>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="mt-10">
        {
          tabs[currentTab].content
        }
      </div>
    </>
  )
}

export default TabComponent