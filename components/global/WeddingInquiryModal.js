"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import image from "../../assets/images/modal-image/shaadi.png";
import Image from "next/image";
import logo from "../../assets/images/logo/logo.svg";
import Arrow from "../../assets/images/vector-arrow.png";

const initialFormData = {
  brideName: "",
  groomName: "",
  phone: "",
  email: "",
  date: "",
  guests: "",
  nights: "",
};

const WeddingInquiryModal = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.brideName.trim()) {
      newErrors.brideName = "Bride's name is required";
    }
    if (!formData.groomName.trim()) {
      newErrors.groomName = "Groom's name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.date.trim()) {
      newErrors.date = "Date is required";
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.date = "Wedding date cannot be in the past";
      }
    }
    if (!formData.guests.trim()) {
      newErrors.guests = "Number of guests is required";
    }
    if (!formData.nights.trim()) {
      newErrors.nights = "Number of stay nights is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsClosing(true);

        setTimeout(() => {
          onClose();
          setIsClosing(false);
        }, 300);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "phone") {
      updatedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (!validate()) return;

    setLoading(true);

    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 10000);

    try {
      const response = await fetch("/api/wedding-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit inquiry");
      }

      setFormData(initialFormData);

      setIsClosing(true);

      setTimeout(() => {
        onClose();
        router.push("/thank-you");
      }, 300);
    } catch (error) {
      console.error(error);

      alert(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 bg-black/50 flex justify-center items-center z-[9999] transition-opacity duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className="bg-[#FBF9F9] rounded-[22px] flex flex-col md:flex-row w-[90%] max-w-3xl shadow-lg relative overflow-hidden h-[580px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hidden md:block md:w-1/2">
          <div className="flex items-center justify-between gap-4 mt-5">
            <div className="px-10 pb-5 pt-3">
              <Image src={logo} alt="Logo" className="w-15 h-15" />
            </div>
          </div>
          <div className="px-10">
            <p className="font-bold text-[32px] lora mt-0 mb-5 text-start leading-tight">
              Let's Begin your wedding journey with the{" "}
              <span className="text-[#C95D2F]">Blessing Of Gods</span>.
            </p>
          </div>
          <div className="md:h-[250px] lg:h-[300px] md:w-[300px] lg:w-[350px] rounded-lg mx-10">
            <Image
              src={image}
              alt="Wedding"
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <button
          type="button"
          aria-label="Close modal"
          className="absolute top-4 right-4 cursor-pointer text-gray-500"
          onClick={handleClose}
        >
          <IoIosCloseCircle className="w-[50px] h-[50px]" />
        </button>
        <div className="w-full md:w-1/2 p-6 md:p-10">
          <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <div className="flex flex-col gap-1 text-start">
                <label htmlFor="brideName">Bride&apos;s Name</label>
                <input
                  id="brideName"
                  name="brideName"
                  type="text"
                  value={formData.brideName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border px-4 py-2 rounded border-gray-300"
                />
                {errors.brideName && (
                  <p className="text-red-500 text-sm">{errors.brideName}</p>
                )}
              </div>
              <div className="flex flex-col gap-1 text-start">
                <label htmlFor="groomName">Groom&apos;s Name</label>
                <input
                  id="groomName"
                  name="groomName"
                  type="text"
                  value={formData.groomName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border px-4 py-2 rounded border-gray-300"
                />
                {errors.groomName && (
                  <p className="text-red-500 text-sm">{errors.groomName}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1 text-start">
              <label htmlFor="phone">Phone Number</label>
              <div className="flex">
                <span className="flex items-center px-3 rounded-lg bg-gray-100">
                  +91
                </span>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  maxLength={10}
                  inputMode="numeric"
                  placeholder="eg: 9876543210"
                  pattern="\d*"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full border px-4 py-2 rounded border-gray-300
                 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            <div className="flex flex-col gap-1 text-start">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="eg: xyz@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded border-gray-300"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="flex gap-3">
              <div className="flex flex-col gap-1 text-start">
                <label htmlFor="date">Wedding Date</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full border px-4 py-2 rounded border-gray-300"
                />
                {errors.date && (
                  <p className="text-red-500 text-sm">{errors.date}</p>
                )}
              </div>
              <div className="flex flex-col gap-1 text-start">
                <label htmlFor="guests">
                  No. of Guests
                </label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  placeholder="eg: 100"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded border-gray-300"
                />
                {errors.guests && (
                  <p className="text-red-500 text-sm">{errors.guests}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1 text-start">
              <label htmlFor="nights">No. of Stay Nights Required</label>
              <input
                id="nights"
                name="nights"
                type="number"
                min="1"
                placeholder="eg: 2"
                value={formData.nights}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded border-gray-300"
              />
              {errors.nights && (
                <p className="text-red-500 text-sm">{errors.nights}</p>
              )}
            </div>

            <button
              type="submit"
              className={`bg-[#C95D2F] font-semibold py-4 px-6 rounded mt-2 mb-5 text-white ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2 ">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Loading...
                </div>
              ) : (
                "Submit My Wedding Request"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WeddingInquiryModal;
