import instagram from '../assets/instagram.png';
import email from '../assets/email.png';

function Footer({ darkMode }) {
    const currentYear = new Date().getFullYear();
    return (
        <div className='border-t'
            style={{
                background: darkMode ? 'linear-linear(to bottom , #000000 ,#111827)'
                    : 'linear-linear(to bottom , #f3f4f6 ,#e5e7eb)',
                borderColor: darkMode ? '#374151' : '#d1d5db'
            }}>
            <div className='container mx-auto px-4 py-8'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-6 text-yellow'>
                    <div ><span className='font-bold scale-200'>C</span>-2026 portfolio website</div>
                    <div>Developer Name : Mustafa M. K.</div>
                    <div className='flex gap-4 items-center '>
                        <h2> Call developer:</h2>
                        <a href="mailto:mustafaqtiew8@gmail.com"><img src={email} alt="email icon" className='w-4 h-4'/></a>
                        <a href="https://www.instagram.com/dev.mustafa1?igsh=cDY4ZjBkaDhqZmMy"><img src={instagram} alt="instagram icon" className='w-4 h-4' /></a>


                    </div>
                
                </div>
            </div>

        </div>
    )
}

export default Footer
