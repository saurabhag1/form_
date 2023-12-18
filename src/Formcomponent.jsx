import React, { useState } from "react";
import "./App.css";

const Formcomponent = () => {
  const [formData, SetformData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    PANNo: "",
    GSTNo: "",
    Profilephoto: null,
    Pincode: "",
    City: "",
    State: "",
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };
  const handlechange = (e) => {
    SetformData({ ...formData, [e.target.name]: e.target.value });
  };

  const [error, seterror] = useState({});

  const validateForm = () => {
    const newerror = {};
    // name error
    if (!formData.Name.trim()) {
      newerror.name = "Name is Empty..";
    }
    // email error
    if (!formData.Email.trim()) {
      newerror.email = "Email is Empty..";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.Email)
    ) {
      newerror.email = "Email is IN Vallid..";
    }
    // phone error
    if (!formData.Phone.trim()) {
      newerror.phone = "Phone is Empty..";
    } else if (!/^\d{10}$/.test(formData.Phone)) {
      newerror.phone = "Phone no is IN Vallid..";
    }
    // PAN CARD NO
    if (!formData.PANNo.trim()) {
      newerror.Pan = "PAN CARD NO is Empty..";
    } else if (
      !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.PANNo.toUpperCase())
    ) {
      newerror.pan = "PAN CARD is IN Vallid..";
    }
    // GST CARD NO
    if (!formData.GSTNo.trim()) {
      newerror.Pan = "GST CARD NO is Empty..";
    } else if (
      !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9A-Z]{1}$/.test(
        formData.GSTNo
      )
    ) {
      newerror.pan = "GST CARD is IN Vallid..";
    }
    // PIN code
    if (!formData.Pincode.trim()) {
      newerror.pin = "PIN  is Empty..";
    } else if (!/^\d{6}$/.test(formData.Pincode)) {
      newerror.pin = "PIN is IN Vallid..";
    }
    // CITY code
    if (!formData.City.trim()) {
      newerror.city = "City is Empty..";
    }
    // STATE code
    if (!formData.State.trim()) {
      newerror.state = "Sate is Empty..";
    }
    // profile photo
    if (!formData.Profilephoto) {
      newerror.profile = "Profile is Empty ..";
    } else if (!/\.(jpg|jpeg|png|gif)$/.test(formData.Profilephoto)) {
      newerror.profile = "Not valid file formate..";
    }

    seterror(newerror);
    return Object.keys(newerror).length;
  };

  return (
    <div>
      <form onSubmit={handlesubmit} className="form">
        <label For="Name">NAME:</label>
        <input
          onChange={handlechange}
          id="Name"
          name="Name"
          value={formData.Name}></input>
        {error.name && <span>{error.name}</span>}
        <label For="Name">EMAIL:</label>
        <input
          onChange={handlechange}
          id="Email"
          name="Email"
          value={formData.Email}></input>
        {error.email && <span>{error.email}</span>}
        <label For="Name">PHONE:</label>
        <input
          onChange={handlechange}
          id="Phone"
          name="Phone"
          type="number"
          value={formData.Phone}></input>
        {error.phone && <span>{error.phone}</span>}
        <label For="Name">PAN CARD NO:</label>
        <input
          onChange={handlechange}
          id="PANNo"
          name="PANNo"
          type="text"
          value={formData.PANNo}></input>
        {error.pan && <span>{error.pan}</span>}
        <label For="Name">GST NO:</label>
        <input
          onChange={handlechange}
          id="GSTNo"
          name="GSTNo"
          type="number"
          value={formData.GSTNo}></input>
        {error.gst && <span>{error.gst}</span>}
        <label For="Name">PROFILE PHOTO:</label>
        <input
          onChange={handlechange}
          id="Profilephoto"
          name="Profilephoto"
          type="file"
          value={formData.Profilephoto}></input>
        {error.profile && <span>{error.profile}</span>}
        {/* //{error.pan && <span>{error.pan}</span>} */}
        <label For="Pincode">PIN CODE:</label>
        <input
          onChange={handlechange}
          id="Pincode"
          name="Pincode"
          type="number"
          value={formData.Pincode}></input>
        {error.pin && <span>{error.pin}</span>}
        <label For="City">CITY:</label>
        <input
          onChange={handlechange}
          id="City"
          name="City"
          type="text"
          value={formData.City}></input>
        {error.city && <span>{error.city}</span>}
        <label For="State">PIN CODE:</label>
        <input
          onChange={handlechange}
          id="State"
          name="State"
          type="text"
          value={formData.State}></input>
        {error.state && <span>{error.state}</span>}
        <br></br>
        <button type="submit" style={{ color: "black" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formcomponent;
