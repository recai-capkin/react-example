import React, { useState } from 'react';
import data from './../../Data/newJson.json'
import UserData from './../../Data/data.json'
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [stack,SetStack]=useState([])
  const sonData =[]

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    const jsonData = JSON.stringify(formData);
    console.log(jsonData)

     data.push(jsonData)
     console.log(data);
     SetStack(jsonData)
     sonData.push(jsonData)
     sonData.forEach((item) => {
        const veri = JSON.parse(item)
        console.log(veri.name)
    });
    // JSON verisini istediğiniz şekilde kullanabilirsiniz
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
