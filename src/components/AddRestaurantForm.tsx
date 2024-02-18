//import React from 'react';
import { Form, Button } from 'react-bootstrap'; // Example using Reactstrap forms

//firestore
import { FIREBASE_FIRESTORE } from '../firebase/firebase';

const AddRestaurantForm: React.FC = () => {
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => { //form element?
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    /* //Tingyu's:
    const payload: Record<string, string> = {}; //payload type, edited this section 
    formData.forEach((value, key) => {
      payload[key] = value.toString();
    });
    */

    //Inman's:
    const payload = Object.fromEntries(formData);
    // Handle the payload as needed (e.g., send it to a server)
    console.log(payload) //we will change what we do with this object later.
    

    /*
    //Firestore implementation, but "collection" issue
    try {
      const firestore = FIREBASE_FIRESTORE;
      await firestore.collection('restaurants').add(payload);
      console.log('Added restaurant successfully!');
        //or navigate to another page, or show sucess message
    } catch (error) {
      console.error('Error adding restraunt: ', error);
    }
    */
    

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
            <option value="">Select Food Style</option>
            <option value="italian">Italian</option>
            <option value="mexican">Mexican</option>
            <option value="chinese">Chinese</option>
            </Form.Control>
            <Form.Control
            as="select"
            name="price"
          >
            <option value="">Select Food Style</option>
            <option value="$10-20">$10-20</option>
            <option value="$20-50">$20-50</option>
            <option value="50+">$50+</option>
            {/* Add more options as needed */}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
      </form>
    </div>
  );
};

export default AddRestaurantForm;
