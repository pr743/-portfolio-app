const services = [
    {
        title: "Full Stack Web Apps",
        desc: "Scalable MERN applications with authentication, APIs, and database design."
    },
    {
        title: "AI Integration",
        desc: "AI-powered features like chat assistants and automation systems."
    },
    {
        title: "Frontend UI/UX",
        desc: "Modern, responsive UI with smooth animations and clean design."
    }
];

const Services = () => {
    return (
        <div className="py-24 px-6 bg-black text-white text-center">

            <h2 className="text-4xl font-bold mb-12">What I Build</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                {services.map((item, i) => (
                    <div
                        key={i}
                        className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-purple-500 transition"
                    >
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Services;