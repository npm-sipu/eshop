import { useState } from "react";
import { useNavigate } from "react-router";
import { Address } from "../hooks/useTypes";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../store/store";
import { saveShippingAddress } from "../store/slices/cartSlice";

const Shipping: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Address>();

  const dispatch = useAppDispatch();
  const shippingAddress = useAppSelector((state) => state.cart.shippingAddress);

  const onSubmit: SubmitHandler<Address> = (data) => {
    dispatch(saveShippingAddress(data));
  };

  console.log(shippingAddress);

  return (
    <div className='flex items-center justify-center flex-col'>
      <h1 className='text-2xl font-bold mb-4'>Shipping</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label htmlFor='name' className='block mb-1 font-medium'>
            Name
          </label>
          <input
            type='text'
            id='name'
            {...register("name")}
            className={`border rounded px-2 py-1 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <span className='text-red-500 text-sm'>{errors.name.message}</span>
          )}
        </div>

        <div className='mb-4'>
          <label htmlFor='street' className='block mb-1 font-medium'>
            Street
          </label>
          <input
            type='text'
            id='street'
            {...register("street")}
            className={`border rounded px-2 py-1 ${
              errors.street ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.street && (
            <span className='text-red-500 text-sm'>
              {errors.street.message}
            </span>
          )}
        </div>

        <div className='mb-4'>
          <label htmlFor='city' className='block mb-1 font-medium'>
            City
          </label>
          <input
            type='text'
            id='city'
            {...register("city")}
            className={`border rounded px-2 py-1 ${
              errors.city ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.city && (
            <span className='text-red-500 text-sm'>{errors.city.message}</span>
          )}
        </div>

        <div className='mb-4'>
          <label htmlFor='state' className='block mb-1 font-medium'>
            State
          </label>
          <input
            type='text'
            id='state'
            {...register("state")}
            className={`border rounded px-2 py-1 ${
              errors.state ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.state && (
            <span className='text-red-500 text-sm'>{errors.state.message}</span>
          )}
        </div>

        <div className='mb-4'>
          <label htmlFor='country' className='block mb-1 font-medium'>
            Country
          </label>
          <input
            type='text'
            id='country'
            {...register("country")}
            className={`border rounded px-2 py-1 ${
              errors.country ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.country && (
            <span className='text-red-500 text-sm'>
              {errors.country.message}
            </span>
          )}
        </div>

        <div className='mb-4'>
          <label htmlFor='pincode' className='block mb-1 font-medium'>
            Pincode
          </label>
          <input
            type='text'
            id='pincode'
            {...register("pincode")}
            className={`border rounded px-2 py-1 ${
              errors.pincode ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.pincode && (
            <span className='text-red-500 text-sm'>
              {errors.pincode.message}
            </span>
          )}
        </div>

        <div className='mb-4'>
          <label htmlFor='mobile' className='block mb-1 font-medium'>
            Mobile
          </label>
          <input
            type='text'
            id='mobile'
            {...register("mobile")}
            className={`border rounded px-2 py-1 ${
              errors.mobile ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.mobile && (
            <span className='text-red-500 text-sm'>
              {errors.mobile.message}
            </span>
          )}
        </div>

        <button className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Shipping;

// <div>
//   <h1>Shipping</h1>

//   <form onSubmit={handleSubmit(onSubmit)}>
//     <label htmlFor='name'>Name</label>
//     <input type='text' id='name' {...register("name")} />

//     <label htmlFor='street'>street</label>
//     <input type='text' id='street' {...register("street")} />

//     <label htmlFor='city'>city</label>
//     <input type='text' id='city' {...register("city")} />

//     <label htmlFor='state'>state</label>
//     <input type='text' id='state' {...register("state")} />

//     <label htmlFor='country'>country</label>
//     <input type='text' id='country' {...register("country")} />

//     <label htmlFor='pincode'>pincode</label>
//     <input type='text' id='pincode' {...register("pincode")} />

//     <label htmlFor='mobile'>mobile</label>
//     <input type='text' id='mobile' {...register("mobile")} />

//     <button>Submit</button>
//   </form>
// </div>
