import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import defaultProfilePic from "../../assets/default-profile-pic.webp";
import logo from "../../assets/cinetik-logo.webp";
import { useLocation } from "react-router-dom";
import useMediaStore from "@/hooks/use-media-store";
import { useEffect } from "react";

const user = {
  name: "Dylan Ballard",
  email: "dylan@example.com",
  imageUrl: defaultProfilePic,
};

const navigation = [
  { name: "Discover", href: "/", current: true },
  { name: "Movies", href: "/movies", current: false },
  { name: "Series", href: "/series", current: false },
  { name: "Social", href: "/social", current: false },
  { name: "Library", href: "/library", current: false },
];

const userNavigation = [
  { name: "Profile", href: "/profile", current: false },
  { name: "Friends", href: "/friends", current: false },
  { name: "Settings", href: "/settings" },
  { name: "Sign out", href: "#" },
];

const userNotifications = [
  { name: "Notifications", href: "/notifications", current: false },
];

export function Navigation() {
  const location = useLocation();
  const setExpandedNav = useMediaStore((state) => state.setExpandedNav);

  const navigationWithCurrent = navigation.map((item) => ({
    ...item,
    current: location.pathname === item.href,
  }));

  return (
    <div className="relative z-50">
      <Disclosure
        as="nav"
        className="bg-white/10 backdrop-blur-lg border-b border-white/10"
      >
        {({ open }) => {
          // Update expandedNav state when mobile menu opens/closes
          useEffect(() => {
            setExpandedNav(open);
          }, [open, setExpandedNav]);

          return (
            <>
              <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <motion.div
                      className="shrink-0"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a href="/">
                        <img
                          className="h-12 w-auto rounded-full"
                          src={logo}
                          alt="Reel Friends Logo"
                        />
                      </a>
                    </motion.div>
                  </div>
                  <div className="hidden md:flex justify-center flex-1">
                    <div className="flex items-center space-x-4">
                      {navigationWithCurrent.map((item) => (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={cn(
                            item.current
                              ? "bg-white/10 text-white"
                              : "text-gray-300 hover:bg-white/5 hover:text-white",
                            "rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        title="Notifications"
                        href={userNotifications[0].href}
                        className="relative rounded-full bg-white/5 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </motion.a>

                      <Menu as="div" className="relative ml-3">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg bg-gray-900/70 backdrop-blur-lg py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-white/50">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={cn(
                                      active ? "bg-white/10" : "",
                                      "block px-4 py-2 text-sm text-gray-100 hover:text-white transition-all duration-200"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </motion.div>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-lg bg-white/5 p-2 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-1 px-2 pb-3 pt-2 sm:px-3"
                >
                  {navigationWithCurrent.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={cn(
                        item.current
                          ? "bg-white/10 text-white"
                          : "text-gray-300 hover:bg-white/5 hover:text-white",
                        "block rounded-lg px-3 py-2 text-base font-medium transition-all duration-200"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </motion.div>
                <div className="border-t border-white/10 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={userNotifications[0].href}
                      className="relative ml-auto shrink-0 rounded-full bg-white/5 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </motion.a>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-all duration-200"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          );
        }}
      </Disclosure>
    </div>
  );
}
