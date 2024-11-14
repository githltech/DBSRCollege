import React, { useEffect, useState } from "react";

const data = [
  { label: "Highest Package", value: 1200000, prefix: "₹", suffix: "Lpa.", finalValue: 12 },
  { label: "Offers For 2024 Batch", value: 1600 },
  { label: "Total Offers in last 5 Years", value: 9877 },
  { label: "Offers 10 Lakhs & Above", value: 208 },
  { label: "NIRF All India Rank", value: 171 },
  { label: "Top Recruiters", value: 500 },
  { label: "Patent Publications", value: 191 },
  { label: "Ph.D Faculties", value: 188 },
];

const CounterCard = ({ label, value, prefix = "", suffix = "", finalValue = value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [value, finalValue]);

  return (
    <div className="text-center p-4">
      <div className="text-[#A73AA4E8] text-5xl font-bold">
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
    <section className="bg-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <CounterCard
              key={index}
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
