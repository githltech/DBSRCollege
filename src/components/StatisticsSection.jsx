import React, { useEffect, useState ,useRef} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const data = [
  {
    // label: "Highest Package",
    // value: 12,
    // prefix: "₹",
    // suffix: "Lpa",
    // finalValue: 12,
    // icon: "fa-briefcase",
    label: "Students",
    value: 4315,
    prefix: "",
    suffix: "",
    finalValue: 4315,
    icon: "fa-briefcase",
  },
  // {
  //   label: "Offers For 2024 Batch",
  //   value: 1600,
  //   icon: "fa-handshake",
  // },
  // {
  //   label: "Total Offers in Last 5 Years",
  //   value: 9877,
  //   icon: "fa-calendar-alt",
  // },
  
  {
    // label: "NIRF All India Rank",
    // value: 171,
    // icon: "fa-trophy",
    label: "Courses",
    value: 10,
    icon: "fa-trophy",

  },
  // {
  //   label: "Top Recruiters",
  //   value: 500,
  //   icon: "fa-building",
  // },
  // {
  //   label: "Patent Publications",
  //   value: 191,
  //   icon: "fa-file-alt",
  // },
  {
    // label: "Ph.D Faculties",
    // value: 188,
    // icon: "fa-user-graduate",
    label: "Professors",
    value: 254,
    icon: "fa-user-graduate",
  },
  {
    label: "Companies Visited",
    value: 9972,
    icon: "fa-chart-line",
  }
];

const CounterCard = ({ label, value, prefix = "", suffix = "", finalValue = value, icon }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  });

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 10);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(finalValue || Math.floor(end));
        } else {
          setCount(Math.floor(start));
        }
      }, 10);

      return () => clearInterval(timer);
    }
  }, [isVisible, value, finalValue]);


  return (
    <div ref={cardRef} className="text-center p-4 bg-white shadow-lg shadow-pink-200">
      <div className="flex justify-center items-center mb-4">
        <i className={`fas ${icon} text-[#2B334F] text-4xl`}></i>
      </div>
      <div className="text-red-500 text-5xl font-bold">
        {prefix}
        {count}
        {suffix}+
      </div>
      <div className="text-gray-900 text-sm font-semibold mt-2">{label}</div>
    </div>
  );
};

const StatisticsSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <CounterCard
              key={index}
              icon={item.icon}
              label={item.label}
              value={item.value}
              prefix={item.prefix || ""}
              suffix={item.suffix || ""}
              finalValue={item.finalValue}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
