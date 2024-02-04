import React, { useState } from 'react';
import Form from 'React/Form';

const AddRestaurantForm = () => {
  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    // Handle the payload as needed (e.g., send it to a server)
    console.log(payload) //we will change what we do with this object later.
  };

  return (
    <div>
      <h2>Add a Restaurant</h2>
      <form onSubmit={submitForm}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Enter Address"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Restaurant Picture</Form.Label>
          <Form.Control
            type="file"
            name="restaurantPicture"
            accept="image/*"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Food Style</Form.Label>
          <Form.Control
            as="select"
            name="foodStyle"
          >
            <option value="italian">Italian</option>
            <option value="mexican">Mexican</option>
            <option value="chinese">Chinese</option>
            {/* Add more options as needed */}
          </Form.Control>
        </Form.Group>

      </form>
    </div>
  );
};

export default AddRestaurantForm;
