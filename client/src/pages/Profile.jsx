import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx'; // Ensure Navbar is properly imported
import Footer from '../components/Footer.jsx'; // Ensure Footer is properly imported

const ProfilePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/profile/${id}`);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <p className="text-center text-gray-700">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="w-full mt-24 p-4 flex justify-center">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
          <div className="flex flex-col items-center">
            <img
              src={user.profilePicture || 'default-profile-pic.png'} // Default image if none is provided
              alt={`${user.name}'s profile`}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">{user.name}</h1>
            <div className="w-full border-b-2 border-teal-500 mb-4"></div>
            <div className="flex flex-col gap-4">
              <p className="text-lg"><strong>Institute ID:</strong> {user.instituteId}</p>
              <p className="text-lg"><strong>Branch:</strong> {user.branch}</p>
              <p className="text-lg"><strong>Email:</strong> {user.personalEmail}</p>
              <p className="text-lg"><strong>Phone Number:</strong> {user.phoneNumber}</p>
              <p className="text-lg"><strong>City:</strong> {user.city}</p>
              <p className="text-lg"><strong>State:</strong> {user.state}</p>
              <p className="text-lg"><strong>Country:</strong> {user.country}</p>
              <p className="text-lg"><strong>Graduation Year:</strong> {user.graduationYear}</p>
              <p className="text-lg"><strong>Past Companies:</strong> {user.pastCompanies}</p>
              <p className="text-lg"><strong>Current Company:</strong> {user.currentCompany}</p>
              <p className="text-lg"><strong>Role:</strong> {user.role}</p>
              <p className="text-lg"><strong>LinkedIn:</strong> <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">{user.linkedin}</a></p>
              <p className="text-lg"><strong>Achievements:</strong> {user.achievements}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ProfilePage;
