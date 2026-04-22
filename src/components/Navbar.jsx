import { useState } from 'react';
import { motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from "lucide-react"

function Navbar({ darkMode, toggleDarkMode }) {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const navItems = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Works", link: "#works" },
        { name: "Contact", link: "#contact" },

    ];

    const lightColor = {
        navBg: 'bg-linear-to-br  from-orange-200 to-white',
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-800',
        textHover: 'text-orange-500',
        textActive: 'text-orange-600',
        indicator: 'from-orange-500 to-amber-500',
        button: 'from-orange-500 to-amber-500'
    };

    const darkColor = {
        navBg: 'bg-linear-to-br  from-gray-700 to-black',
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        textHover: 'text-yellow-400',
        textActive: 'text-yellow-400',
        indicator: 'from-orange-500 to-amber-500',
        button: 'from-yellow-500 to-amber-500'
    };

    const colors = darkMode ? darkColor : lightColor;

    const handleNavClick = (itemNane) => {
        setActiveSection(itemNane.toLowerCase())
        setIsMenuOpen(false)
    };

    return (
        <div className='flex justify-center w-full fixed z-50 mt-4'>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{
                    duration: 0.5
                }}
                className={`flex items-center justify-center ${colors.navBg}
            backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-8 shadow-lg`}
            >
                <div className="flex items-center justify-between w-full space-x-8">
                    <motion.a
                        href='/'
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2"
                    >
                        <span className={`text-xl font-bold bg-gradient-to-r
                            from-yellow-600 to-yellow-300 bg-clip-text text-transparent`}>
                            Portfolio
                        </span>
                    </motion.a>

                    <div className='hidden lg:flex items-center space-x-6'>
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                onClick={() => handleNavClick(item.name)}
                                className='relative'
                            >
                                <motion.span className={`font-medium transition-colors duration-300
                                ${activeSection === item.name.toLowerCase()
                                        ? colors.textActive
                                        : `${colors.textSecondary} hover:text-yellow-500`
                                    }
                                `
                                }

                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.name}
                                </motion.span>
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r 
                                        rounded-full *
                                    ${colors.indicator}`}

                                >

                                </motion.div>

                            </a>

                        ))}
                    </div>
                    <div className='flex items-center space-x-2'>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full ${darkMode
                                ? 'bg-gray-700'
                                : 'bg-gray-200'} transition-colors `}
                            aria-label={darkMode
                                ? 'Swith to light mode'
                                : 'Switch to dark mode'}>
                            {darkMode ? (
                                <Sun className="w-5 h-5" text-yellow-300 />
                            ) : (
                                <Moon className="w-5 h-5 text-yellow-700" />
                            )}

                        </motion.button>


                    </div>
                    <div className='flex lg:hidden items-center space-x-4 px-2'>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-lg ${darkMode
                                ? 'bg-gray-700'
                                : 'bg-gray-200'
                                }`}>
                            {isMenuOpen ? (
                                <X className={`w-5 h-5 ${darkMode
                                    ? 'text-white'
                                    : 'text-gray-700'
                                    }`} />
                            ) : (
                                <Menu className={`w-5 h-5 ${darkMode
                                    ? 'text-white'
                                    : 'text-gray-700'
                                    }`} />
                            )}

                        </motion.button>


                    </div>


                </div>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}

                        className={`absolute top-full left-0 right-0 mt-2 lg:hidden
                        ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-lg rounded-xl shadow-lg border
                         ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                    >
                        <div className='px-4 py-3 space-y-2'>
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.link}
                                    onClick={() => handleNavClick(item.name)}
                                    className="block"
                                >
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className={`py-3 px-4 rounded-lg text-center
                                        ${activeSection === item.name.toLowerCase()
                                                ? darkMode ? 'bg-gray-800' : 'bg-orange-50'
                                                : ''
                                            }`}
                                    >
                                        <span
                                            className={`font-medium ${activeSection === item.name.toLowerCase()
                                                ? colors.textActive
                                                : colors.textSecondary
                                                }`}>
                                            {item.name}
                                        </span>
                                    </motion.div>
                                </a>
                            ))}

                        </div>
                    </motion.div>
                )}

            </motion.nav>

        </div>
    )
}

export default Navbar
