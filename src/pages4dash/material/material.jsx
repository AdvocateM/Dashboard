import Sidebar from "../../components4dash/sidebar/Sidebar";
import Navbar from "../../components4dash/navbar/Navbar";
import "./home.scss";
import React from 'react';

const Material = () => {

  const [uploadFile, setUploadFile] = React.useState();
  const [superHero, setSuperHero] = React.useState();

  // const submitForm = (event) => {
  //   event.preventDefault();
  //   const dataArray = new FormData();
  //   dataArray.append("superHeroName", superHero);
  //   dataArray.append("uploadFile", uploadFile);
  //   axios
  //     .post("/api/upload", dataArray, {
  //       headers: {
  //         "Content-Type": "multipart/form-data"
  //       }
  //     })
  //     .then((response) => {
  //       // successfully uploaded response
  //     })
  //     .catch((error) => {
  //       // error response
  //     });
  // };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div>
          <form >
            <input
              type="text"
              onChange={(e) => setSuperHero(e.target.value)}
              placeholder={"File Name / Description "}
            />
            <br />
            <input type="file" onChange={(e) => setUploadFile(e.target.files)} />
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Material;
