import React from 'react';

const NewsMedia = () => {
  const newsData = [
    {
      title: "International Conference on Sustainable Global Business Models: Call for Papers",
      author: "admin",
      date: "November 7, 2024",
      image: "https://dbsrcollege.in/wp-content/uploads/2023/09/news.jpg",
    },
    {
      title: "Two Day long Hands-On Workshop on Quantum Computing",
      author: "admin",
      date: "November 4, 2024",
      image: "https://dbsrcollege.in/wp-content/uploads/2023/09/event1.jpg",
    },
    {
      title: "MOU Signing Between MITCON Consultancy and DBSR",
      author: "admin",
      date: "October 21, 2024",
      image: "https://dbsrcollege.in/wp-content/uploads/2023/09/news2.jpg",
    },
    {
        title: "MOU Signing Between MITCON Consultancy and DBSR",
        author: "admin",
        date: "October 21, 2024",
        image: "https://dbsrcollege.in/wp-content/uploads/2023/09/g3.jpg",
      },
      {
        title: "MOU Signing Between MITCON Consultancy and DBSR",
        author: "admin",
        date: "October 21, 2024",
        image: "https://dbsrcollege.in/wp-content/uploads/2023/03/traget-2048x716.jpg",
      },
    // Add more news items as needed
  ];

  return (
    <div className=" py-10 lg:px-24">
    {/* Section Title */}
   <div className="flex justify-between items-center mb-4">
   <h2 className="bg-[#2B334F] text-white px-4 py-2 font-semibold sm:text-sm text-xs">News & Media</h2>
    <button className=" bg-red-600 text-white px-4 py-2 font-semibold sm:text-sm text-xs">
          JOIN US AND BECOME A PART
        </button>
   </div>
    <hr className="border-t-2 border-red-500 mb-6" />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div
        className="p-4 text-white relative bg-cover bg-center h-[28rem]"
        style={{ backgroundImage: "url('https://dbsrcollege.in/wp-content/uploads/2023/09/banner.jpg')" }} // Replace with actual path
      >
      </div>

      {/* Right-side News Items in a 2-column Layout on Large Screens */}
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {newsData.map((news, index) => (
          <div key={index} className="flex space-x-4 bg-white p-4 shadow-lg">
            <img src={news.image} alt="news-thumbnail" className="w-20 h-20 object-cover rounded-lg" />
            <div className="flex-1">
              <a href='/' className="text-sm font-semibold hover:text-red-600 mb-2 hover:underline">{news.title}</a>
              <div className="flex items-center text-xs text-blue-600">
                <span className="material-icons mr-1">person</span> {news.author}
                <span className="material-icons mx-1">calendar_today</span> {news.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default NewsMedia;
