import React, { useState } from 'react';


// Define the type for the restaurant object
interface Restaurant {
  name: string;
  address: string;
  imageUrl: string;
}

const AddRestaurantForm: React.FC = () => {
  // State to store the restaurant object
  const [restaurant, setRestaurant] = useState<Restaurant>({
    name: '',
    address: '',
    imageUrl: '',
  });

  // Event handler for input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Update the restaurant object with the new value
    setRestaurant((prevRestaurant) => ({
      ...prevRestaurant,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Do something with the restaurant object (e.g., send it to a server)
    console.log('Submitted Restaurant:', restaurant);
    // Reset the form after submission
    setRestaurant({
      name: '',
      address: '',
      imageUrl: '',
    });
  };

  return (
    <div>
      <h2>Add a Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Restaurant Name:
          <input
            type="text"
            name="name"
            value={restaurant.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Restaurant Address:
          <input
            type="text"
            name="address"
            value={restaurant.address}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Image URL:
          <input
            type="url"
            name="imageUrl"
            value={restaurant.imageUrl}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
};

export default AddRestaurantForm;
