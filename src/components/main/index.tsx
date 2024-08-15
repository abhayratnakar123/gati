"use-client";
import React from "react";
import ProductCard from "../prodect";
import customSoftwareIcon from "../../../public/images/banner-bg.png";
import AboutCard from "@/components/Card/AboutCard";

const MissionVision = [
  {
    title: "Customer Satisfaction",
    description:
      "We don’t believe in a transactional approach, when we present our offerings to clients, we assume the role of technology partners that lasts a lifetime. Our offerings are crafted in a manner that holds with customer satisfaction as a priority, backed by seamless communication channels.",
  },
  {
    title: "Gati Way of life",
    description:
      "We aim to challenging and motivating our employees to perform above their potential. With an encouraging environment and constructive inputs we drive employees to better themselves while nurturing creativity and revolutionary ideas for a better tomorrow.",
  },

  {
    title: "Giving It Back To Society",
    description:
      "Extending an offering of Industrial Training to several college students, we give back to the community. While it furnishes students with exposure to niches it also acts as a unique learning curve.",
  },
];

const imageIds = [
  "8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6",
  "80480f8a-69ad-4c30-88ba-f4e7ee08fc51",
  "140d376c-13f2-4823-b397-b3de733bf560",
  "0ae217f1-b695-4661-bd3d-6440eebc2c5c",
  "67017079-51e1-4245-9bf1-b5957eb66c74",
  "515313ac-7ec9-4c6e-95db-80dac2f8b960",
  "c513fc32-3ab9-4cca-911e-0b2642ac7206",
  "5731a5a7-689f-49ae-abf1-6e6dc00c2043",
  "cb51d286-530f-42be-9e91-9c850522f127",
  "44ba8437-f6fd-4a51-bfd3-262d7528f7a4",
];

export const Main = () => {
  return (
    <div>
      <div className="text-white h-full p-32 flex lg:flex-row items-center justify-center md:flex-col sm:flex-col">
        <div className="flex flex-col max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <style>
            {`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .fadeInUp {
        animation: fadeInUp 1.5s ease-out forwards;
      }
    @keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

@keyframes marquee2 {
  0% { transform: translateX(100%); }
  100% { transform: translateX(0); }
}

.animate-marquee {
  animation: marquee 40s linear infinite;
}

.animate-marquee2 {
  animation: marquee2 40s linear infinite;
}

.group:hover .animate-marquee,
.group:hover .animate-marquee2 {
  animation-play-state: paused;
}
    
    `}
          </style>

          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6 fadeInUp">
            Experience the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              New Era
            </span>{" "}
            of Computing
          </h1>

          <p
            className="text-xl text-gray-300 mb-8 fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            The effortless world of spatial computing, ready for you to explore
            in the palm of your hands!
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 transition duration-300 transform hover:scale-105">
              Explore Products
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition duration-300 transform hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>
        <div className="w-full">
          <img
            src="/images/banner-bg.png"
            alt="Banner Background"
            className="w-full h-auto"
          />
        </div>
      </div>
      {/* Prodecgt Section  */}

      <section className="bg-black  py-20">
        <div className="container mx-auto px-4">
          <p className="text-4xl md:text-5xl lg:text-6xl p-10 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700 mb-16">
            Navigate Your Digital Realm with Athena
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Advanced Recognition",
                description:
                  "Cutting-edge AI accurately tracks users in real-time, enabling seamless interactions and unlocking advanced functionalities.",
                icon: "🔍",
              },
              {
                title: "Enhanced User Experience",
                description:
                  "Seamlessly integrate with daily routines, providing intuitive interactions that enhance productivity without disruption.",
                icon: "✨",
              },
              {
                title: "AR Potential Unleashed",
                description:
                  "Revolutionary software blends physical activity with digital tasks, transforming work and education through AR technology.",
                icon: "🚀",
              },
              {
                title: "Engaging Interactions",
                description:
                  "Immerse yourself in digital content through gesture controls, voice commands, and virtual object manipulation.",
                icon: "🖐️",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-750"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{feature.icon}</span>
                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl p-10 lg:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700 mb-16">
            Empowering Humanity with AI
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-between w-[100%]">
            <div className="lg:w-1/2 mb-10 lg:mb-0 ">
              <img
                src="/images/bimg1.png"
                alt="AI and Human Interaction"
                className="rounded-lg shadow-2x h-auto w-[70%]"
              />
            </div>

            <div className="lg:w-[50%]">
              <p className="text-xl text-gray-300 leading-relaxed mb-8 h-[15rem]">
                As AI and technology rapidly evolve, they're reshaping every
                facet of our lives. With advancing capabilities, AI is becoming
                an integral part of our daily routines. Embracing active AI
                interaction opens doors to unprecedented possibilities, ushering
                in an era where our engagement with technology is more
                intelligent, intuitive, and beneficial to our well-being.
              </p>

              <button className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:opacity-90 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Begin Your AI Journey
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Images  */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl p-10 lg:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700 mb-16">
            Trusted by Industry Leaders
          </h2>

          <div className="relative overflow-hidden">
            <div className="flex space-x-16 animate-marquee group-hover:pause">
              {[...Array(10)].map((_, index) => (
                <img
                  key={index}
                  loading="lazy"
                  src={`https://cdn.builder.io/api/v1/image/assets/TEMP/${imageIds[index]}?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&`}
                  className="h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  alt={`Partner ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute top-0 flex space-x-16 animate-marquee2 group-hover:pause">
              {[...Array(10)].map((_, index) => (
                <img
                  key={index}
                  loading="lazy"
                  src={`https://cdn.builder.io/api/v1/image/assets/TEMP/${imageIds[index]}?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&`}
                  className="h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  alt={`Partner ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto">
        <div className="text-4xl md:text-5xl mt-20 lg:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700 mb-16">
          Explore
        </div>
        <div className="h-full w-full pt-12 p-4 mt-10 ">
          <div className="grid gap-14 md:grid-cols-3 md:gap-5">
            <div className="rounded-xl bg-[#212121] p-6 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                <svg
                  viewBox="0 0 33 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                >
                  <path
                    d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <h1 className="text-white mb-3 text-xl font-medium lg:px-14">
                Sedentary Lifestyle
              </h1>
              <p className="px-4 text-gray-500">
                Prolonged sedentary behavior in work and study environments is
                leading to an escalation in health issues.
              </p>
            </div>
            <div
              data-aos-delay="150"
              className="rounded-xl bg-[#212121] p-6 text-center shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
                <svg
                  viewBox=" 0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                >
                  <path
                    d="M12 0C11.0532 0 10.2857 0.767511 10.2857 1.71432V5.14285H13.7142V1.71432C13.7142 0.767511 12.9467 0 12 0Z"
                    fill="#F5F5FC"
                  ></path>
                  <path
                    d="M36 0C35.0532 0 34.2856 0.767511 34.2856 1.71432V5.14285H37.7142V1.71432C37.7143 0.767511 36.9468 0 36 0Z"
                    fill="#F5F5FC"
                  ></path>
                  <path
                    d="M42.8571 5.14282H37.7143V12C37.7143 12.9468 36.9468 13.7143 36 13.7143C35.0532 13.7143 34.2857 12.9468 34.2857 12V5.14282H13.7142V12C13.7142 12.9468 12.9467 13.7143 11.9999 13.7143C11.0531 13.7143 10.2856 12.9468 10.2856 12V5.14282H5.14285C2.30253 5.14282 0 7.44535 0 10.2857V42.8571C0 45.6974 2.30253 48 5.14285 48H42.8571C45.6975 48 48 45.6974 48 42.8571V10.2857C48 7.44535 45.6975 5.14282 42.8571 5.14282ZM44.5714 42.8571C44.5714 43.8039 43.8039 44.5714 42.857 44.5714H5.14285C4.19605 44.5714 3.42854 43.8039 3.42854 42.8571V20.5714H44.5714V42.8571Z"
                    fill="#F5F5FC"
                  ></path>
                  <path
                    d="M13.7142 23.9999H10.2857C9.33889 23.9999 8.57138 24.7674 8.57138 25.7142C8.57138 26.661 9.33889 27.4285 10.2857 27.4285H13.7142C14.661 27.4285 15.4285 26.661 15.4285 25.7142C15.4285 24.7674 14.661 23.9999 13.7142 23.9999Z"
                    fill="#F5F5FC"
                  ></path>
                  <path
                    d="M25.7143 23.9999H22.2857C21.3389 23.9999 20.5714 24.7674 20.5714 25.7142C20.5714 26.661 21.3389 27.4285 22.2857 27.4285H25.7143C26.6611 27.4285 27.4286 26.661 27.4286 25.7142C27.4286 24.7674 26.6611 23.9999 25.7143 23.9999Z"
                    fill="#F5F5FC"
                  ></path>
                  <path
                    d="M37.7143 23.9999H34.2857C33.3389 23.9999 32.5714 24.7674 32.5714 25.7142C32.5714 26.661 33.3389 27.4285 34.2857 27.4285H37.7143C38.6611 27.4285 39.4286 26.661 39.4286 25.7142C39.4286 24.7674 38.661 23.9999 37.7143 23.9999Z"
                    fill="#F5F5FC"
                  ></path>
                  <path
                    d="M13.7142 30.8571H10.2857C9.33889 30.8571 8.57138 31.6246 8.57138 32.5714C8.57138 33.5182 9.33889 34.2857 10.2857 34.2857H13.7142C14.661 34.2857 15.4285 33.5182 15.4285 32.5714C15.4285 31.6246 14.661 30.8571 13.7142 30.8571Z"
                    fill="#F5F5FC"
                  ></path>
                  <path
                    d="M25.7143 30.8571H22.2857C21.3389 30.8571 20.5714 31.6246 20.5714 32.5714C20.5714 33.5182 21.3389 34.2857 22.2857 34.2857H25.7143C26.6611 34.2857 27.4286 33.5182 27.4286 32.5714C27.4286 31.6246 26.6611 30.8571 25.7143 30.8571Z"
                    fill="#F5F5FC"
                  ></path>
                  <path
                    d="M37.7143 30.8571H34.2857C33.3389 30.8571 32.5714 31.6246 32.5714 32.5714C32.5714 33.5182 33.3389 34.2857 34.2857 34.2857H37.7143C38.6611 34.2857 39.4286 33.5182 39.4286 32.5714C39.4285 31.6246 38.661 30.8571 37.7143 30.8571Z"
                    fill="#F5F5FC"
                  ></path>
                  <path
                    d="M13.7142 37.7142H10.2857C9.33889 37.7142 8.57138 38.4817 8.57138 39.4286C8.57138 40.3754 9.33889 41.1428 10.2857 41.1428H13.7142C14.661 41.1428 15.4285 40.3753 15.4285 39.4284C15.4285 38.4816 14.661 37.7142 13.7142 37.7142Z"
                    fill="#F5F5FC"
                  ></path>
                  <path
                    d="M25.7143 37.7142H22.2857C21.3389 37.7142 20.5714 38.4817 20.5714 39.4285C20.5714 40.3754 21.3389 41.1429 22.2857 41.1429H25.7143C26.6611 41.1429 27.4286 40.3754 27.4286 39.4285C27.4286 38.4817 26.6611 37.7142 25.7143 37.7142Z"
                    fill="#F5F5FC"
                  ></path>
                  <path
                    d="M37.7143 37.7142H34.2857C33.3389 37.7142 32.5714 38.4817 32.5714 39.4285C32.5714 40.3754 33.3389 41.1429 34.2857 41.1429H37.7143C38.6611 41.1429 39.4286 40.3754 39.4286 39.4285C39.4286 38.4817 38.661 37.7142 37.7143 37.7142Z"
                    fill="#F5F5FC"
                  ></path>
                </svg>
              </div>
              <h1 className="text-white mb-3 text-xl font-medium lg:px-14 ">
                Mental Fatigue
              </h1>
              <p className="px-4 text-gray-500">
                Long term Static interaction with technological devices
                contributes to mental fatigue and reduced productivity.
              </p>
            </div>
            <div
              data-aos-delay="300"
              className="rounded-xl bg-[#212121] p-6 text-center shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
                <svg
                  viewBox="0 0 55 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                >
                  <path
                    d="M8.25 19.25C11.2836 19.25 13.75 16.7836 13.75 13.75C13.75 10.7164 11.2836 8.25 8.25 8.25C5.21641 8.25 2.75 10.7164 2.75 13.75C2.75 16.7836 5.21641 19.25 8.25 19.25ZM46.75 19.25C49.7836 19.25 52.25 16.7836 52.25 13.75C52.25 10.7164 49.7836 8.25 46.75 8.25C43.7164 8.25 41.25 10.7164 41.25 13.75C41.25 16.7836 43.7164 19.25 46.75 19.25ZM49.5 22H44C42.4875 22 41.1211 22.6102 40.1242 23.5984C43.5875 25.4977 46.0453 28.9266 46.5781 33H52.25C53.7711 33 55 31.7711 55 30.25V27.5C55 24.4664 52.5336 22 49.5 22ZM27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75ZM14.8758 23.5984C13.8789 22.6102 12.5125 22 11 22H5.5C2.46641 22 0 24.4664 0 27.5V30.25C0 31.7711 1.22891 33 2.75 33H8.41328C8.95469 28.9266 11.4125 25.4977 14.8758 23.5984Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <h1 className="text-white mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">
                Technological Constraints
              </h1>
              <p className="px-4 text-gray-500">
                The potential of AR to stimulate physical engagement and create
                immersive experiences is largely untapped in work and education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Text Animation  */}
      <section className="flex flex-col items-center justify-center">
        <div className="lg:m-10">
          <div className="lg:flex lg:flex-row sm:flex-col gap-20 mt-[100px] justify-center mx-28">
            {/* Prodect Cards  */}

            <div className="">
            <h2 className="text-4xl mb-20 md:text-5xl lg:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700">
                  Prodects
                </h2>
              <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-[#212121] shadow-lg rounded-lg overflow-hidden">
                    <img
                      src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
                      alt="Headless UI"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 md:p-6">
                      <h3 className="text-xl font-semibold text-indigo-500 dark:text-indigo-300 mb-2">
                        Headless UI
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">
                        Completely unstyled, fully accessible UI components,
                        designed to integrate beautifully with Tailwind CSS.
                      </p>
                      <a
                        href="#"
                        className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>

                  <div className="bg-[#212121] shadow-lg rounded-lg overflow-hidden">
                    <img
                      src="https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg"
                      alt="Heroicons"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 md:p-6">
                      <h3 className="text-xl font-semibold text-purple-500 dark:text-purple-300 mb-2">
                        Heroicons
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">
                        A set of 450+ free MIT-licensed SVG icons. Available as
                        basic SVG icons and via first-party React and Vue
                        libraries.
                      </p>
                      <a
                        href="#"
                        className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>

                  <div className="bg-[#212121] shadow-lg rounded-lg overflow-hidden">
                    <img
                      src="https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg"
                      alt="Hero Patterns"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4 md:p-6">
                      <h3 className="text-xl font-semibold text-cyan-500 dark:text-cyan-300 mb-2">
                        Hero Patterns
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">
                        A collection of over 100 free MIT-licensed high-quality
                        SVG patterns for you to use in your web projects.
                      </p>
                      <a
                        href="#"
                        className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
