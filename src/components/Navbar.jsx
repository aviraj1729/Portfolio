import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MdClose } from "react-icons/md";
import { FaLinkedin, FaGithub, FaDownload, FaBars } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const navigation = [
  {
    name: "Download CV",
    icon: <FaDownload />,
    path: "/Avi Raj_USAR.pdf",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/aviraj1729",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    path: "https://github.com/hawkjack1729",
  },
  {
    name: "Twitter",
    icon: <FaSquareXTwitter />,
    path: "https://x.com/hawkjack1729",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="my-10 w-full px-2 sm:px-6 lg:px-8 text-black dark:text-white">
            <div className="relative flex h-16 items-center flex-wrap">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <MdClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center md:justify-between justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className="font-bold myfont text-2xl dark:border-white border-black border-2 rounded-lg cursor-pointer px-3 py-1 whitespace-nowrap">
                    My portfolio
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.path}
                        target="_blank"
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "dark:text-gray-300 text-black hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm whitespace-nowrap font-medium",
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.path}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium",
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
