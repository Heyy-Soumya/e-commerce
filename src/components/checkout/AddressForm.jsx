import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShippingAddress } from '../../features/orders/orderSlice';

const AddressForm = ({ onNext }) => {
  const dispatch = useDispatch();
  const initial = {
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    email: '',
  };
  const [values, setValues] = useState(initial);

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setShippingAddress(values));
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          name="fullName"
          required
          value={values.fullName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email (for receipt)</label>
        <input
          type="email"
          name="email"
          required
          value={values.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Address</label>
        <input
          name="address"
          required
          value={values.address}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">City</label>
          <input
            name="city"
            required
            value={values.city}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Postal Code</label>
          <input
            name="postalCode"
            required
            value={values.postalCode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Country</label>
        <input
          name="country"
          required
          value={values.country}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded hover:bg-blue-600"
      >
        Continue to Review
      </button>
    </form>
  );
};

export default AddressForm;