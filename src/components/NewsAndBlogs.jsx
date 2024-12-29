import React from 'react';

const NewsAndBlogs = () => {
  const blogs = [
    {
      id: 1,
      category: 'STUDENT',
      title: 'Exploring Global Perspectives: Cultural Diversity in University Classrooms',
      author: 'Bobbie Navarro',
      date: 'November 2, 2024',
      summary: 'A enim tincidunt egestas vestibulum maximus dis est tortor pulvinar. Taciti donec ultricies nisl eu dignissim...',
      image: 'https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/row-of-multicultural-teenage-students-of-university-sitting-by-desk-at-lecture.jpg',
    },
    {
      id: 2,
      category: 'SEMINAR',
      title: 'Innovative Teaching Methods Shaping the Future of University Education',
      author: 'Bobbie Navarro',
      date: 'November 29, 2023',
      summary: 'A enim tincidunt egestas vestibulum maximus dis est tortor pulvinar. Taciti donec ultricies nisl eu dignissim...',
      image: 'https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/maths-teacher-teaching-students-at-school.jpg',
    },
    {
      id: 3,
      category: 'EDUCATION',
      title: 'Building Resilience: Strategies for Effective School Education Management',
      author: 'Bobbie Navarro',
      date: 'November 29, 2023',
      summary: 'A enim tincidunt egestas vestibulum maximus dis est tortor pulvinar. Taciti donec ultricies nisl eu dignissim...',
      image: 'https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/a-young-asian-high-school-student-studies-using-a-laptop-computer-a-group-of-classmates-in-class-.jpg',
    },
    {
      id: 4,
      category: 'LEARNING',
      title: 'Building Resilience: Strategies for Effective School Education Management',
      author: 'Bobbie Navarro',
      date: 'November 19, 2023',
      summary: 'A enim tincidunt egestas vestibulum maximus dis est tortor pulvinar. Taciti donec ultricies nisl eu dignissim...',
      image: 'https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/university-students-using-laptops-and-digital-tablet-working-together.jpg',
    },
    {
      id: 5,
      category: 'EDUCATION',
      title: 'Building Resilience: Strategies for Effective School Education Management',
      author: 'Bobbie Navarro',
      date: 'November 29, 2023',
      summary: 'A enim tincidunt egestas vestibulum maximus dis est tortor pulvinar. Taciti donec ultricies nisl eu dignissim...',
      image: 'https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/group-of-happy-international-students-posing-outdoors-near-university-building.jpg',
    },
    {
      id: 6,
      category: 'CAMPUS LIFE',
      title: 'Building Resilience: Strategies for Effective School Education Management',
      author: 'Bobbie Navarro',
      date: 'November 29, 2023',
      summary: 'A enim tincidunt egestas vestibulum maximus dis est tortor pulvinar. Taciti donec ultricies nisl eu dignissim...',
      image: 'https://tebewebe.online/edupreme/wp-content/uploads/sites/63/2023/11/happy-students-studying-on-break-using-laptop-on-campus-lawn-with-university-building-on-background.jpg',
    },
  ];

  return (
    <>
      <div className="py-10 px-4 bg-gray-100 lg:px-24">
        <h2 className="bg-[#2B334F] inline-block mb-4 text-white px-4 py-2 font-semibold sm:text-sm text-xs">DBSR Blogs</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md overflow-hidden border-2 border-l-0 border-r-0 border-t-0 border-b-red-600 rounded-lg" // Previous version
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <span className="absolute bottom-[-10px] left-2 bg-red-600 text-white text-xs font-bold px-4 py-1">
                  {blog.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="mt-4 text-lg font-semibold">{blog.title}</h3>
                <div className="mt-2 text-gray-500 text-sm flex items-center">
                  <span className="mr-2">👤 {blog.author}</span>
                  <span>📅 {blog.date}</span>
                </div>
                <p className="mt-3 text-gray-600 text-xs">{blog.summary}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-red-700 text-xs font-semibold hover:underline"
                >
                  READ MORE →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsAndBlogs;
