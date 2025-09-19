import React from "react";
import hero from "../assets/hero-sec.png";
import {
  UserPlus,
  ListChecks,
  Vote,
  BarChart3,
  ShieldCheck,
  Lock,
  UserCheck,
  Smartphone,
  Eye,
  Globe,
  Activity,
} from "lucide-react";

const Home = () => {
  const steps = [
    {
      icon: <UserPlus className="w-10 h-10 text-blue-600" />,
      title: "Register / Login",
      desc: "Create an account or log in securely to start voting.",
    },
    {
      icon: <ListChecks className="w-10 h-10 text-green-600" />,
      title: "Choose Election",
      desc: "Browse available elections and select the one you want to join.",
    },
    {
      icon: <Vote className="w-10 h-10 text-yellow-600" />,
      title: "Cast Your Vote",
      desc: "Make your choice with a single click, quickly and securely.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-purple-600" />,
      title: "View Results",
      desc: "See real-time election results with full transparency.",
    },
  ];

  const features = [
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: "End-to-End Encryption",
      desc: "Every vote is securely encrypted from the moment you cast it until final counting.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
      title: "Anonymous & Fair Counting",
      desc: "Votes are counted fairly and anonymously to ensure unbiased results.",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-purple-600" />,
      title: "Verified Voter ID",
      desc: "Only verified voters can participate, preventing fraud or duplication.",
    },
  ];
  const benefits = [
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Easy to Use",
      desc: "A simple and intuitive interface designed for everyone.",
      color: "bg-blue-500",
    },
    {
      icon: <Eye className="w-8 h-8 text-white" />,
      title: "Transparent Process",
      desc: "Clear and open elections with complete transparency.",
      color: "bg-green-500",
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Accessible Anywhere",
      desc: "Vote from any device, anytime, anywhere in the world.",
      color: "bg-purple-500",
    },
    {
      icon: <Activity className="w-8 h-8 text-white" />,
      title: "Real-time Updates",
      desc: "Track live voting results and updates instantly.",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-500 to-blue-300 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6 mb-6 md:ml-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Your <span className="text-yellow-400">Voice</span>,<br />
              Your <span className="text-yellow-400">Choice</span>,<br />
              Your <span className="text-yellow-400">Vote</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100">
              Secure and Accessible Online Elections. Cast your vote anytime,
              anywhere with trust and transparency.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 rounded-lg bg-yellow-400 text-blue-900 font-semibold hover:bg-yellow-300 transition">
                Login to Vote
              </button>
              <button className="px-6 py-3 rounded-lg border border-white font-semibold hover:bg-white hover:text-blue-600 transition">
                View Results
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end ">
            <img
              src={hero}
              alt="Voting Illustration"
              className="w-full max-w-md drop-shadow-2xl h-120"
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            How It <span className="text-blue-600">Works</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🔒 Security & <span className="text-blue-600">Trust</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We prioritize integrity and transparency at every step of the
              election process. Our platform is built with cutting-edge
              technology to ensure your vote is secure, anonymous, and
              verifiable.
            </p>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Why Choose <span className="text-blue-600">Our System</span>
          </h2>

          {/* Timeline style layout */}
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center text-center px-4 mb-12 md:mb-0"
              >
                {/* Circle Icon */}
                <div
                  className={`${benefit.color} w-16 h-16 flex items-center justify-center rounded-full shadow-lg mb-4`}
                >
                  {benefit.icon}
                </div>

                {/* Title + Desc */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm max-w-xs mx-auto">
                  {benefit.desc}
                </p>

                {/* Connecting Line (only between items) */}
                {index !== benefits.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-0 right-0 mx-auto w-full h-1 bg-gray-300 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
