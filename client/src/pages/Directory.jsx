import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';
import SearchIcon from '@mui/icons-material/Search';
import AlumniCard from '../components/AlumniCard.jsx';

const H = 'calc(100vh - 6.825rem)';

const Directory = () => {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/alumni');
        console.log('Fetched Alumni Data:', response.data); // Log data
        setAlumni(response.data);
      } catch (error) {
        console.error('Error fetching alumni data:', error);
      }
    };

    fetchAlumni();
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar />
      <div className="w-full mt-[9rem] overflow-y-scroll" style={{ height: H }}>
        <div className="w-full h-auto p-3 flex gap-2">
          <div className="w-[20%] h-auto flex flex-col gap-2">
            <div className="h-[4rem] flex items-center justify-center">
              <div className="relative w-full h-full max-w-md">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-full pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <SearchIcon
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  style={{ fontSize: 24 }}
                />
              </div>
            </div>
            <div className="h-[4rem] bg-gray-300 flex items-center justify-center">Name</div>
            <div className="h-[4rem] bg-gray-300 flex items-center justify-center">Graduation Year</div>
            <div className="h-[4rem] bg-gray-300 flex items-center justify-center">Company</div>
            <div className="h-[4rem] bg-gray-300 flex items-center justify-center">Role</div>
            <div className="h-[4rem] bg-gray-300 flex items-center justify-center">Location</div>
            <div className="h-[4rem] bg-gray-300 flex items-center justify-center">Alumni in your City</div>
            <div className="h-[4rem] flex gap-2 items-center justify-center">
              <div className="w-1/2 h-full bg-gray-300 flex justify-center items-center">Reset</div>
              <div className="w-1/2 h-full bg-gray-300 flex justify-center items-center">Submit</div>
            </div>
          </div>
          <div className="w-[80%] h-[35.5rem] flex flex-col gap-2">
            <div className="w-full h-[10%] border border-black"></div>
            <div className="w-full h-[90%] border border-black p-2 overflow-y-scroll">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {alumni.map(alumnus => (
                  <AlumniCard key={alumnus._id} alumniData={alumnus} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Directory;
