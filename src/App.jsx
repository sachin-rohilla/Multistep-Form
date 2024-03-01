import React, { useState } from "react";
import InputComp from "./components/InputComp";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
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
      (currentStep === 2 && formData.email && formData.confirmEmail) ||
      (currentStep === 3 && formData.password && formData.confirmPassword)
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

  console.log(formData, currentStep);
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-96 h-96 m-auto border p-4 shadow-lg rounded-lg">
          <h1 className="font-bold text-xl text-center">Multi Step Form</h1>
          <form
            className="flex flex-col  items-center gap-2"
            onSubmit={handleSubmit}
          >
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
                  placeholder="enter your email"
                  value={formData?.email}
                  handleChange={handleChange}
                />
                <InputComp
                  title="confirmEmail"
                  type="email"
                  placeholder="enter your confirm email"
                  value={formData?.confirmEmail}
                  handleChange={handleChange}
                />
              </>
            )}

            {currentStep === 3 && (
              <>
                <InputComp
                  title="password"
                  type="password"
                  placeholder="enter your password"
                  value={formData?.password}
                  handleChange={handleChange}
                />
                <InputComp
                  title="confirmPassword"
                  type="password"
                  placeholder="enter your confirm password"
                  value={formData?.confirmPassword}
                  handleChange={handleChange}
                />
              </>
            )}

            {currentStep === 4 && (
              <>
                <InputComp
                  title="gender"
                  type="text"
                  placeholder="enter your gender"
                  value={formData?.gender}
                  handleChange={handleChange}
                />
                <InputComp
                  title="role"
                  type="text"
                  placeholder="enter your role"
                  value={formData?.role}
                  handleChange={handleChange}
                />
              </>
            )}

            <div className="w-full flex justify-between">
              <button
                className={`px-4 py-2 bg-blue-400 rounded-md text-white ${
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
                className="px-4 py-2 bg-blue-400 rounded-md text-white"
                type={currentStep === 4 ? "submit" : "button"}
                onClick={handleNext}
                disabled={
                  (currentStep === 1 &&
                    !(formData.firstName && formData.lastName)) ||
                  (currentStep === 2 &&
                    !(formData.email && formData.confirmEmail)) ||
                  (currentStep === 3 &&
                    !(formData.password && formData.confirmPassword)) ||
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
