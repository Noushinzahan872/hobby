
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const topics = [
  {
    title: 'Creativity',
    description:
      'Explore your imagination through arts, music, and innovative DIY projects. Let your ideas flow!',
    icon: '🎨',
  },
  {
    title: 'Community',
    description:
      'Connect with like-minded people, join local events, and grow your network of hobbyists.',
    icon: '🤝',
  },
  {
    title: 'Learning',
    description:
      'Attend workshops, skill sessions, and hobby classes to sharpen your passion into expertise.',
    icon: '📚',
  },
];

const TopicCard = ({ title, description, icon }) => (
  <div className=" p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="font-bold text-xl text-indigo-600">{title}</h3>
    <p className=" mt-2 text-sm">{description}</p>
  </div>
);

const AboutUs = () => {
  return (
    <div className=" py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          We Are Passionate About{' '}
          <span className="text-indigo-600">
            <Typewriter
              words={['Creativity', 'Community', 'Hobbies', 'Learning']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-10">
          Hobby-HUB is your go-to place to discover your interests, connect with passionate people,
          and grow your skills through fun and engaging content.
        </p>
      </div>

      {/* Info Cards Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {topics.map((topic, index) => (
          <TopicCard key={index} {...topic} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;





// import React from 'react';
// import { Typewriter } from 'react-simple-typewriter';

// const AboutUs = () => {
//   return (
//     <section className="min-h-[70vh] bg-gradient-to-br from-indigo-100 via-white to-pink-100 flex flex-col justify-center items-center text-center px-4 py-12">
//       <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//         We Are Passionate About{' '}
//         <span className="text-indigo-600">
//           <Typewriter
//             words={['Creativity', 'Community', 'Hobbies', 'Learning']}
//             loop={true}
//             cursor
//             cursorStyle="|"
//             typeSpeed={70}
//             deleteSpeed={50}
//             delaySpeed={1500}
//           />
//         </span>
//       </h1>

//       <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
//         Hobby-HUB is your go-to place to discover your interests, connect with passionate people,
//         and grow your skills through fun and engaging content.
//       </p>

//     </section>
//   );
// };

// export default AboutUs;
