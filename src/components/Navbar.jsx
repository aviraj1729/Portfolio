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
    path: "https://files.devaviraj.me/Resume_Avi_Raj.pdf",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/aviraj1729",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    path: "https://github.com/aviraj1729",
  },
  {
    name: "Twitter",
    icon: <FaSquareXTwitter />,
    path: "https://x.com/aviraj1729",
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
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
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
              <div className="flex-1 flex items-center justify-center lg:justify-start">
                <div className="flex-shrink-0">
                  <h1 className="font-bold myfont text-2xl dark:border-white border-black border-2 rounded-lg cursor-pointer px-3 py-1 whitespace-nowrap">
                    My portfolio
                  </h1>
                </div>
              </div>
              <div className="hidden lg:flex lg:items-center lg:space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    download={item.download ? "" : undefined}
                    className={classNames(
                      "group relative rounded-md px-3 py-2 text-sm text-center whitespace-nowrap font-medium inline-flex items-center",
                      "hover:bg-gray-700 hover:text-white dark:text-gray-300 text-black",
                    )}
                  >
                    <span className="px-2 py-1 text-lg">{item.icon}</span>
                    <span className="absolute lg:hidden hover:flex lg:group-hover:flex bg-gray-800 text-white text-sm rounded-md px-2 py-1 -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.path}
                  target={item.download ? "_self" : "_blank"}
                  download={item.download ? "" : undefined}
                  className={classNames(
                    "flex flex-wrap items-center text-center whitespace-nowrap px-3 py-2 text-base font-medium",
                    "hover:text-white dark:text-gray-300 text-black",
                  )}
                >
                  <span className="px-2 py-1 text-lg">{item.icon}</span>
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
