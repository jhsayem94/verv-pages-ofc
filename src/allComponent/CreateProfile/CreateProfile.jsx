"use client";

import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
;
import { Button } from "@/components/ui/button";

const CreateProfile = () => {
    const [imageFiles, setImageFiles] = useState(null);
  const methods = useForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log(data);
    console.log(imageFiles);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setImageFiles(file);

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
    }
  };
    return (
        <div className="m-auto  my-14 flex w-[600px] p-[40px] flex-col justify-center items-center flex-shrink-0 rounded-[16px] border border-[#EEF1F3] shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
      <h2 className="text-colorTextPrimary text-center text-[24px] font-semibold leading-[120%] mb-10">
        Complete profile
      </h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <Input
            className="px-3 py-1.5 rounded-md border text-[16px] border-gray-400 bg-white pr-10 mb-4"
            id="firstName"
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: "First Name is required" })}
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
          <Input
            className="px-3 py-1.5 rounded-md text-[16px] border border-gray-400 bg-white pr-10 mb-4"
            id="lastName"
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: "Last Name is required" })}
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}

          <p className="text-colorTextSecondary text-[12px] font-normal leading-[140%] mb-4">
            Make sure this matches the name on your government ID. If you go by
            another name, you can add a preferred first name.
          </p>
          <Input
            className="px-3 py-1.5 rounded-md text-[16px] border border-gray-400 bg-white pr-10 mb-4"
            id="email"
            type="email"
            placeholder="Email address"
            {...register("email", { required: "Email is required" })}
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}

          <p className="text-colorTextSecondary text-[12px] font-normal leading-[140%] mb-4">
          We'll email you confirmations and receipts.
          </p>

          <div className="flex items-center justify-center bg-white text-[16px] rounded-md border border-gray-400 mb-4">
            <div className="shrink-0 pl-3">
              <p className="text-colorTextSecondary font-normal leading-[150%]">
                +44 (UK)
              </p>
            </div>
            <div className="flex-grow">
              <Input
                id="phoneNumber"
               
                type="text"
                placeholder="Phone Number"
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                })}
                className="px-3 py-1.5 border-l-0"
              />
            </div>
          </div>
          {errors.phoneNumber && (
            <span className="text-red-500">{errors.phoneNumber.message}</span>
          )}

<div className="w-full px-10">
      <MultipleSelector
        defaultOptions={OPTIONS}
        placeholder="Select frameworks you like..."
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
            no results found.
          </p>
        }
      />
    </div>

          <div className="flex-1">
            <label
              className="flex h-14 w-full cursor-pointer items-center justify-center bg-[#EEF1F3] rounded-md border border-gray-400 mb-4 shadow-sm transition-all duration-100"
              htmlFor="image"
            >
              Upload image
            </label>
            <input
              accept="image/*"
              className="hidden"
              id="image"
              type="file"
              onChange={(e) => handleImageChange(e)}
            />
          </div>

          <Button
            type="submit"
            className="bg-colorButton text-black hover:text-white border border-black w-full rounded shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-lg font-semibold"
          >
            Agree & Continue
          </Button>
        </form>
      </FormProvider>
    </div>
    );
};

export default CreateProfile;