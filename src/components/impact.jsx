import { Link } from "react-router-dom";

function Impact({image, title, description, buttonText, reverse=false, to="/projects"}) {
    return (
        <div>
            <section className={`flex flex-col ${
                reverse ? 'md:flex-row-reverse' : 'md:flex-row'
            } items-center gap-10 px-6 md:px-16 lg:px-14 py-16 bg-[#574C3F]`}>
                <div className="w-full md:w-1/2">
                 <img
                    src={image}
                    alt={title}
                    className="w-full h-72 md:h-96 object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 space-y-10">
                    <h1 className="text-3xl font-semibold mb-4 text-white">{title}</h1>
                    <p className="text-base leading-7 text-white">{description}</p>
                    <Link to={to} className="inline-block bg-[#39868E] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300 sm:text-base">
                        {buttonText}
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Impact;