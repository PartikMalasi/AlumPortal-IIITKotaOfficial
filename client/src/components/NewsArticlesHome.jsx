// import React, { useState } from 'react';
// import WestIcon from '@mui/icons-material/West';
// import EastIcon from '@mui/icons-material/East';

// // News Section Component
// const NewsSection = ({ startIndex, handlePrev, handleNext, newsItems }) => (
//   <div className='w-full h-full flex flex-col'>
//     <div className='w-full h-1/5 py-2 flex justify-start items-center gap-4'>
//       <button 
//         onClick={handlePrev} 
//         className='w-[5rem] h-[2.5rem] lg:w-[7rem] lg:h-[3rem] bg-blue-600 hover:bg-blue-500 text-white rounded-xl'
//         disabled={startIndex === 0} // Disable if already at the start
//       >
//         <WestIcon />
//       </button>
//       <button 
//         onClick={handleNext} 
//         className='w-[5rem] h-[2.5rem] lg:w-[7rem] lg:h-[3rem] bg-blue-600 hover:bg-blue-500 text-white rounded-xl'
//         disabled={startIndex >= newsItems.length - 2} // Disable if already at the end
//       >
//         <EastIcon />
//       </button>
//     </div>
//     <div className='w-full h-4/5 flex flex-col lg:flex-row lg:justify-evenly'>
//       {newsItems.slice(startIndex, startIndex + 2).map((news, index) => (
//         <div key={index} className='h-full w-full lg:w-2/5 border border-black rounded-xl flex justify-center items-center mb-4 lg:mb-0'>
//           {news}
//         </div>
//       ))}
//     </div>
//   </div>
// );

// // Articles Section Component
// const ArticlesSection = ({ startIndex, handlePrev, handleNext, articlesItems }) => (
//   <div className='w-full h-full flex flex-col'>
//     <div className='w-full h-1/5 py-2 flex justify-start items-center gap-4'>
//       <button 
//         onClick={handlePrev} 
//         className='w-[5rem] h-[2.5rem] lg:w-[7rem] lg:h-[3rem] bg-blue-600 hover:bg-blue-500 text-white rounded-xl'
//         disabled={startIndex === 0} // Disable if already at the start
//       >
//         <WestIcon />
//       </button>
//       <button 
//         onClick={handleNext} 
//         className='w-[5rem] h-[2.5rem] lg:w-[7rem] lg:h-[3rem] bg-blue-600 hover:bg-blue-500 text-white rounded-xl'
//         disabled={startIndex >= articlesItems.length - 2} // Disable if already at the end
//       >
//         <EastIcon />
//       </button>
//     </div>
//     <div className='w-full h-4/5 flex flex-col lg:flex-row lg:justify-evenly'>
//       {articlesItems.slice(startIndex, startIndex + 2).map((article, index) => (
//         <div key={index} className='h-full w-full lg:w-2/5 border border-black rounded-xl flex justify-center items-center mb-4 lg:mb-0'>
//           {article}
//         </div>
//       ))}
//     </div>
//   </div>
// );

// // Main Component
// const NewsArticlesHome = () => {
//   // Dummy data for news and articles blocks
//   const newsItems = ['News 1', 'News 2', 'News 3', 'News 4', 'News 5', 'News 6', 'News 7', 'News 8'];
//   const articlesItems = ['Article 1', 'Article 2', 'Article 3', 'Article 4', 'Article 5', 'Article 6', 'Article 7', 'Article 8'];

//   // State to track the index of the first block being displayed
//   const [startIndex, setStartIndex] = useState(0);

//   // State to track the currently displayed section
//   const [currentSection, setCurrentSection] = useState('news');

//   // Handler to go to the previous two blocks
//   const handlePrev = () => {
//     setStartIndex(prevIndex => Math.max(prevIndex - 2, 0));
//   };

//   // Handler to go to the next two blocks
//   const handleNext = () => {
//     const itemsLength = currentSection === 'news' ? newsItems.length : articlesItems.length;
//     setStartIndex(prevIndex => Math.min(prevIndex + 2, itemsLength - 2));
//   };

//   return (
//     <div className='w-full h-[50rem] lg:h-[40rem] border border-black p-4 flex flex-col lg:flex-row'>
//       <div className='w-full lg:w-4/5 h-full flex flex-col'>
//         {currentSection === 'news' ? (
//           <NewsSection 
//             startIndex={startIndex} 
//             handlePrev={handlePrev} 
//             handleNext={handleNext} 
//             newsItems={newsItems} 
//           />
//         ) : (
//           <ArticlesSection 
//             startIndex={startIndex} 
//             handlePrev={handlePrev} 
//             handleNext={handleNext} 
//             articlesItems={articlesItems} 
//           />
//         )}
//       </div>
//       <div className='w-full lg:w-1/5 h-1/5 lg:h-full flex flex-col justify-center items-center gap-4 lg:gap-8 px-4'>
//         <button 
//           onClick={() => { setCurrentSection('news'); setStartIndex(0); }} 
//           className='w-full h-[2.5rem] lg:h-[3rem] bg-blue-600 hover:bg-blue-500 flex justify-center items-center text-white rounded-xl'
//         >
//           News
//         </button>
//         <button 
//           onClick={() => { setCurrentSection('articles'); setStartIndex(0); }} 
//           className='w-full h-[2.5rem] lg:h-[3rem] bg-blue-600 hover:bg-blue-500 flex justify-center items-center text-white rounded-xl'
//         >
//           Articles
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NewsArticlesHome;


import React from 'react'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

const NewsArticlesHome = () => {
  return (
    <div className='w-full h-[37rem] flex flex-col p-8'>
        <div className='w-full h-[3rem] flex'>
            <div className='w-[70%] h-full flex justify-start gap-4'>
                <button className='w-2/5 h-full shadow-xl rounded-md text-center bg-[#0E407C] text-white'>Announcements</button>
                <button className='w-2/5 h-full shadow-xl rounded-md text-center text-[#19194D]'>News</button>
            </div>
            <div className='w-[30%] h-full flex justify-end gap-2'>
                <button className='w-[5rem] h-full bg-[#19194D] text-white rounded-md shadow-xl hover:bg-[#0b0b26] transition-all duration-300 ease-in-out'><WestIcon /></button>
                <button className='w-[5rem] h-full bg-[#19194D] text-white rounded-md shadow-xl hover:bg-[#0b0b26] transition-all duration-300 ease-in-out'><EastIcon /></button>
            </div>
        </div>
    </div>
  )
}

export default NewsArticlesHome
