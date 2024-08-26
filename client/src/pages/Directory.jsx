import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/Footer.jsx';
import AlumniCard from '../components/AlumniCard.jsx';

const H = 'calc(100vh - 6.825rem)';

const Directory = () => {
  const [alumni, setAlumni] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    instituteId: '',
    graduationYear: '',
    company: '',
    role: '',
    branch: '',
    city: '',
  });
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [graduationYears, setGraduationYears] = useState([]);

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/alumni');
        console.log('Fetched Alumni Data:', response.data); // Log data
        setAlumni(response.data);
        setFilteredAlumni(response.data); // Set initial filtered list
        
        // Extract unique graduation years and sort them
        const years = [...new Set(response.data.map(alumnus => alumnus.graduationYear))];
        years.sort((a, b) => a - b); // Sort years in ascending order
        setGraduationYears(years);
      } catch (error) {
        console.error('Error fetching alumni data:', error);
      }
    };

    fetchAlumni();
  }, []);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const filtered = alumni.filter(alumnus => {
      return (
        (filters.name ? alumnus.name.toLowerCase().includes(filters.name.toLowerCase()) : true) &&
        (filters.instituteId ? alumnus.instituteId.toLowerCase().includes(filters.instituteId.toLowerCase()) : true) &&
        (filters.graduationYear ? alumnus.graduationYear === filters.graduationYear : true) &&
        (filters.company ? alumnus.currentCompany.toLowerCase().includes(filters.company.toLowerCase()) : true) &&
        (filters.role ? alumnus.role.toLowerCase().includes(filters.role.toLowerCase()) : true) &&
        (filters.branch ? alumnus.branch.toLowerCase().includes(filters.branch.toLowerCase()) : true) &&
        (filters.city ? alumnus.city.toLowerCase().includes(filters.city.toLowerCase()) : true)
      );
    });
    setFilteredAlumni(filtered);
    console.log('Filters applied:', filters);
  };

  const handleReset = () => {
    setFilters({
      name: '',
      instituteId: '',
      graduationYear: '',
      company: '',
      role: '',
      branch: '',
      city: '',
    });
    setFilteredAlumni(alumni); // Reset the filtered list to show all alumni
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-100">
      <Navbar />
      <div className="w-full mt-[9rem]" style={{ height: H }}>
        <div className="w-full h-auto p-4 flex gap-4">
          <div className="w-[20%] h-auto flex flex-col gap-4">
            <div className="mb-4">
              <div className="text-2xl font-bold text-gray-800">Filter</div>
              <div className="border-b-2 border-teal-500 w-16 mt-1"></div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={filters.name}
                onChange={handleFilterChange}
                className="h-12 px-4 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-300"
              />
              <input
                type="text"
                name="instituteId"
                placeholder="Institute ID"
                value={filters.instituteId}
                onChange={handleFilterChange}
                className="h-12 px-4 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-300"
              />
              <select
                name="graduationYear"
                value={filters.graduationYear}
                onChange={handleFilterChange}
                className="h-12 px-4 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-300"
              >
                <option value="">Select Graduation Year</option>
                {graduationYears.map(year => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={filters.company}
                onChange={handleFilterChange}
                className="h-12 px-4 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-300"
              />
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={filters.role}
                onChange={handleFilterChange}
                className="h-12 px-4 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-300"
              />
              <input
                type="text"
                name="branch"
                placeholder="Branch"
                value={filters.branch}
                onChange={handleFilterChange}
                className="h-12 px-4 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-300"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={filters.city}
                onChange={handleFilterChange}
                className="h-12 px-4 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-300"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-1/2 h-12 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="w-1/2 h-12 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="w-[80%] h-[35.5rem] flex flex-col gap-4">
            <div className="w-full h-auto bg-white p-4 shadow-md rounded-lg">
              <p className="text-lg font-semibold text-gray-800">
                Found {filteredAlumni.length} alumni through your search
              </p>
            </div>
            <div className="w-full h-full bg-white p-4 overflow-y-scroll custom-scrollbar">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {filteredAlumni.map(alumnus => (
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
