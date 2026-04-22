
import contact from '../assets/contact.png';
import email from '../assets/email.png';
import instagram from '../assets/instagram.png';
import telegram from '../assets/telegram.png';
import whatsapp from '../assets/whatsapp.png';
function Contact({ darkMode }) {

    const socialIcons = [
        { icon: instagram, alt: "instagram", href: "https://www.instagram.com/27moh_3d?igsh=YXRrazZuaWE2eGI0" },
        { icon: email, alt: "email", href: "mailto:mohamedqasim0727@gmail.com" },
        { icon: telegram, alt: "telegram", href: "https://t.me/Xx34a" },
        { icon: whatsapp, alt: "whatsapp", href: "https://wa.me/9647801844247" },
    ]
    return (
        <section
            id='contact'
            style={{
                backgroundColor: darkMode ? "#111827" : "#f9fafb"
            }}
            className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hideen ">
            <div className="container mx-auto  px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos='fade-up'>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold
                    mb-2 sm:mb-3"
                        style={{
                            color: darkMode ? "white" : "#1f2937"
                        }}>Contact Us
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl"
                        style={{
                            color: darkMode ? "yellow" : "#6b7280"
                        }}>اضغط على ايقونات البرامج للتواصل</p>

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 justify-center items-center
                "
                >
                    <div className='flex justify-center lg-justify-start 
                    gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
                        {socialIcons?.map((socialIcon, index) => (
                            <a key={index}
                                href={socialIcon.href

                                }
                                target='_blank'
                                rel='noopener noreferrer'
                                data-aos-delay={`$(400 + index * 100)`}
                                className='transform hover:scale-110 transition-transform duration-300'>
                                <img src={socialIcon.icon} alt={socialIcon.alt}
                                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${darkMode
                                        ? ''
                                        : 'filter brightness-75 '
                                        }`} />

                            </a>

                        ))}

                    </div>

                    <div className="flex-justify-center order-2 lg:order-1"
                        data-aos='fade-right'>

                        <img src={contact} alt="contact img"
                            className="w-full max-w-xs sm:max-w-sm lg:max-w-md
                        h-auto object-contain "/>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Contact
