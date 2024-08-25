import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/iiitkotalogo.png";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function SignIn() {
  const [formData, setFormData] = useState({
    instituteId: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFormData()) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signin", // Update with your API endpoint
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Store the JWT token in localStorage
      localStorage.setItem('token', response.data.token);

      // Reset the form data
      setFormData({
        instituteId: "",
        password: "",
      });

      setLoading(false);

      // Show success toast notification
      toast.success("Sign-in Successful");

      // Redirect after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000); // Delay of 3000ms (3 seconds)
      
    } catch (error) {
      console.error("There was an error signing in:", error);
      setLoading(false);
      toast.error("Sign-in Failed");
    }
  };

  const validateFormData = () => {
    // Add form validation logic if needed
    return formData.instituteId && formData.password;
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#1A1C4E]">
      <div className="md:w-[85%] md:h-[85%] w-[95%] h-auto max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="flex justify-center mb-6">
          <img src={Logo} className="w-3/5" alt="Logo" />
        </div>
        <h2 className="text-3xl font-semibold text-center text-[#32325D] mb-6">
          Sign In
        </h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
            <EmailIcon className="text-[#32325D] mr-2" />
            <input
              type="text"
              name="instituteId"
              value={formData.instituteId}
              onChange={handleChange}
              placeholder="User Name"
              required
              className="w-full px-4 py-3 border border-[#0E407C] rounded-md focus:outline-none focus:border-blue-600"
            />
          </div>
          <div className="mb-6 flex items-center">
            <LockIcon className="text-[#32325D] mr-2" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full px-4 py-3 border border-[#0E407C] rounded-md focus:outline-none focus:border-blue-600"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-[#0E407C] hover:bg-blue-600 text-white rounded-md shadow-xl w-full flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-t-2 border-gray-200 border-t-blue-500 rounded-full animate-spin mr-2" />{" "}
                Signing In...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignIn;
