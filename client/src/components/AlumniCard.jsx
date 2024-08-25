import React, { useEffect, useRef, useState } from 'react';

// Modal Component
const Modal = ({ isOpen, onClose, imageSrc }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    // Handler to close modal when clicking outside of the modal content
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Add event listener to document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div
        ref={modalRef}
        className="relative w-[25rem] h-[25rem] bg-transparent"
      >
        <img src={imageSrc} alt="Full size" className="w-full h-full object-contain" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white p-2 rounded-full"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const AlumniCard = ({ alumniData }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  if (!alumniData) {
    return <div className="text-center text-gray-500">No data available</div>;
  }

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  return (
    <>
      <div className="bg-white h-[12rem] p-3 rounded-lg shadow-md hover:shadow-xl hover:cursor-pointer transition-shadow duration-500 ease-in-out flex gap-4">
        <div className='w-[40%] h-full flex flex-col items-center'>
          <div className='w-full h-3/4 flex justify-center items-center'>
            <div
              className='w-[120px] h-[120px] border-2 border-blue-500 rounded-full overflow-hidden cursor-pointer'
              onClick={() => openModal(alumniData.profilePicture)}
            >
              <img 
                src={alumniData.profilePicture} 
                alt="Profile" 
                className='w-full h-full object-cover' 
              />
            </div>
          </div>
          <div className='w-full h-1/4 flex justify-center items-center'>
            <a 
              href={alumniData.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className='w-full flex justify-center'
            >
              <button className='w-full py-1 px-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold'>
                LinkedIn
              </button>
            </a>
          </div>
        </div>
        <div className='w-[60%] h-full flex flex-col justify-center gap-2 px-2'>
          <div className='text-lg font-bold text-gray-800'>{alumniData.name}</div>
          <div className='text-sm text-gray-600'>{alumniData.branch}, {alumniData.graduationYear}</div>
          <div className='text-sm text-gray-600'>{alumniData.role}</div>
          <div className='text-sm text-gray-600'>{alumniData.currentCompany}, {alumniData.city}</div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={closeModal} imageSrc={selectedImage} />
    </>
  );
};

export default AlumniCard;
