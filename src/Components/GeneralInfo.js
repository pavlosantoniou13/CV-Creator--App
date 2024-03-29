import Multiselect from 'multiselect-react-dropdown';
import React, { useState } from 'react'

export default function GeneralInfo(props) {
   
    const handleSubmit = (e) => {
        e.preventDefault()
       
    }


    const data = [
      "English",
      "Spanish",
      "German",
      "Greek",
      "French",
      "Mandarin Chinese",
      "Hindi/Urdu",
      "Arabic",
      "Bengali",
      "Portuguese",
      "Russian",
      "Japanese",
      "Javanese",
      "Punjabi",
      "Wu",
      "French",
      "Telugu",
      "Vietnamese",
      "Marathi",
      "Korean",
      "Tamil",
      "Italian",
      "Turkish",
      "Cantonese/Yue",
    ];
    
  console.log(props.languages)

  return (
    <header>
      <div className="card">
        <h1>General Information</h1>
        <div className="card-box">
          <form onSubmit={handleSubmit}>
            <div className="upper">
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="input"
                  type="text"
                  placeholder="First Name..."
                  required
                  onChange={props.handleChange}
                  id="name"
                  value={props.name}
                />
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Last Name..."
                  required
                  onChange={props.handleChange}
                  id="lastName"
                  value={props.lastName}
                />
              </div>
            </div>
            <div className="lower">
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  className="input"
                  type="email"
                  placeholder="Email..."
                  required
                  onChange={props.handleChange}
                  id="email"
                  value={props.email}
                />
              </div>
              <div className="phone">
                <label htmlFor="phone">Phone number</label>
                <input
                  className="input"
                  type="number"
                  placeholder="(00)+ 123-456-789"
                  required
                  onChange={props.handleChange}
                  id="phone"
                  value={props.phone}
                />
              </div>
            </div>
            <div className="lower">
              <div className="location">
                <label htmlFor="location">Location</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Location..."
                  required
                  onChange={props.handleChange}
                  id="location"
                  value={props.location}
                />
              </div>
              <div className="profession">
                <label htmlFor="profession">Profession</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Profession..."
                  required
                  onChange={props.handleChange}
                  id="profession"
                  value={props.profession}
                />
              </div>
            </div>
            <div className="lower">
              <div className="location">
                <label htmlFor="location">Linkedin</label>
                <input
                  className="input"
                  type="url"
                  placeholder="Linkedin..."
                  required
                  onChange={props.handleChange}
                  id="linkedin"
                  value={props.linkedin}
                />
              </div>
              <div className="profession">
                <label htmlFor="profession">GitHub</label>
                <input
                  className="input"
                  type="url"
                  placeholder="GitHub..."
                  required
                  onChange={props.handleChange}
                  id="github"
                  value={props.github}
                />
              </div>
            </div>

            <div className="tasksContainer">
              <div>Languages</div>
              <Multiselect
                isObject={false}
                onRemove={(e) => {
                  props.handleLanguage(e);
                }}
                onSelect={(e) => {
                  props.handleLanguage(e);
                }}
                options={data}
                showCheckbox
                selectedValues={props.languages}
              />
            </div>

            <div className="tasksContainer">
              <div className="about">
                <div>About</div>
                <div>
                  <textarea
                    type="text"
                    placeholder="Write something about yourself..."
                    onChange={props.handleChange}
                    id="about"
                    value={props.about}
                  />
                </div>
              </div>
            </div>

            <div className="tasksContainer">
              <div className="about">
                <div>Hobbies & Voluntary work</div>
                <div>
                  <textarea
                    type="text"
                    placeholder="Things that you are intersted in..."
                    onChange={props.handleChange}
                    id="hobbies"
                    value={props.hobbies}
                  />
                </div>
              </div>
            </div>
            <div className="imageContainer">
              Upload a profile image
              <input
                onChange={props.handleUpload}
                type="file"
                accept="image/*"
              />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
