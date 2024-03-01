import React, { useState } from "react";
import { FaWpforms } from "react-icons/fa";
import InputComp from "./components/InputComp";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",

    password: "",

    gender: "",
    role: "",
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleNext = () => {
    if (
      (currentStep === 1 && formData.firstName && formData.lastName) ||
      (currentStep === 2 && formData.email) ||
      (currentStep === 3 && formData.password)
    ) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCurrentStep(1);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
      gender: "",
      role: "",
    });
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen px-4 lg:px-0">
        <div className="w-96 h-[350px] m-auto border p-4 shadow-lg rounded-lg">
          <div className="flex items-center justify-center gap-2 py-4">
            <FaWpforms className="text-2xl text-[#E91E63] " />

            <h1 className="font-bold text-xl text-center">Let's Get Started</h1>
          </div>
          <form
            className="flex flex-col  items-center gap-2"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-between items-center py-2">
              {[1, 2, 3, 4].map((step, index) => (
                <React.Fragment key={step}>
                  {index > 0 && (
                    <div
                      className={`
                  w-10 h-0.5  ${
                    currentStep >= step ? "bg-[#E91E63]" : "bg-gray-400"
                  }`}
                    />
                  )}
                  <div
                    className={`w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center ${
                      step <= currentStep
                        ? "bg-[#E91E63] border-[#E91E63] text-white"
                        : ""
                    }`}
                  >
                    {step}
                  </div>
                </React.Fragment>
              ))}
            </div>

            {currentStep === 1 && (
              <>
                <InputComp
                  title="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  value={formData?.firstName}
                  handleChange={handleChange}
                />
                <InputComp
                  title="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  value={formData?.lastName}
                  handleChange={handleChange}
                />
              </>
            )}
            {currentStep === 2 && (
              <>
                <InputComp
                  title="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData?.email}
                  handleChange={handleChange}
                />
              </>
            )}
            {currentStep === 3 && (
              <>
                <InputComp
                  title="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData?.password}
                  handleChange={handleChange}
                />
              </>
            )}
            {currentStep === 4 && (
              <>
                <InputComp
                  title="gender"
                  type="text"
                  placeholder="Enter your gender"
                  value={formData?.gender}
                  handleChange={handleChange}
                />
                <InputComp
                  title="role"
                  type="text"
                  placeholder="Enter your role"
                  value={formData?.role}
                  handleChange={handleChange}
                />
              </>
            )}
            <div className="w-full flex justify-between mt-2">
              <button
                className={`px-8 py-2 bg-[#E91E63] rounded-md text-white ${
                  currentStep === 1
                    ? "opacity-45 cursor-not-allowed"
                    : "opacity-100"
                }`}
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 1}
              >
                Prev
              </button>
              <button
                className={`
                
                px-8 py-2 bg-[#E91E63] rounded-md text-white ${
                  (currentStep === 1 &&
                    !(formData.firstName && formData.lastName)) ||
                  (currentStep === 2 && !formData.email) ||
                  (currentStep === 3 && !formData.password) ||
                  (currentStep === 4 && !(formData.gender && formData.role))
                    ? "opacity-45 cursor-not-allowed"
                    : "opacity-100"
                }
                `}
                type={currentStep === 4 ? "submit" : "button"}
                onClick={handleNext}
                disabled={
                  (currentStep === 1 &&
                    !(formData.firstName && formData.lastName)) ||
                  (currentStep === 2 && !formData.email) ||
                  (currentStep === 3 && !formData.password) ||
                  (currentStep === 4 && !(formData.gender && formData.role))
                }
              >
                {currentStep === 4 ? "Submit" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
