

function Works({ darkMode }) {
    const works = [
        {
            id: 1,
            title: 'drinks',
            desc: '3d design for soft drink',
            video: 'video-1.mp4',
            tags: ['Blender', 'Photoshop']
        },
        {
            id: 2,
            title: 'skin cream',
            desc: '3d design to skin cream',
            video: 'video-2.mp4',
            tags: ['Blender']
        },
    ]

    return (
        <section
            id='works'
            style={{
                backgroundColor: darkMode ? '#111827' : '#f9fafb'
            }}
            className='relative py-24'
        >
            <div className='container mx-auto px-4 '>
                <div className='text-center ' data-aos='fade-up'
                >
                    <h2
                        className=' text-3xl sm:text-4xl font-bold mb-3 '
                        style={{
                            color: darkMode ? 'yellow' : '#1f2937'
                        }}> My Works
                    </h2>
                    <p className='max-w-xl mx-auto mb-8'
                        style={{
                            color: darkMode ? '#d1d5db' : '#6b7280'
                        }}>
                        A short case of my recent work
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2
                lg:grid-cols-3 gap-5 mb-12'>
                    {works.map((work, index) => (
                        <div key={work.id}
                            style={{
                                background: darkMode
                                    ? 'linear-gradient(to right ,#1f2937 ,#111827)'
                                    : 'linear-gradient(to right ,#ffffff ,#f59e0bs)',
                                borderColor: darkMode ? '#374151' : 'e5e7eb'
                            }}
                            className='group rounded-xl  border duration-300
                             hover:border-orange-500/50 transition-all'
                            data-aos='fade-up'
                            data-aos-delay={index * 100}
                        >
                            <div className='h-54 overflow-hidden rounded-t-xl'>
                                <video src={work.video} controls
                                    className='w-full h-full object-cover group-hover:scale-110
                                transition-transform duration-500 '></video>
                            </div>
                            <div className='p-4'>
                                <h3 className='text-lg font-bold mb-2'
                                    style={{
                                        color: darkMode ? 'white ' : '#1f2937'
                                    }}>{work.title}</h3>
                                <p
                                    className='text-sm mb-3'
                                    style={{
                                        color: darkMode ? '#d1d5db' : '#6b7280'
                                    }}>{work.desc}</p>
                                <div className='flex flex-wrap gap-1.5 mb-4'>
                                    {works.tags?.map((tag, index) => (
                                        <span
                                            key={index}
                                            style={{
                                                backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                                                color: darkMode ? '#d1d5db' : '#4b5563'
                                            }}
                                            className='px-2 py-1 text-xs rounded-full'>
                                            {tag}

                                        </span>
                                    ))}

                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Works
