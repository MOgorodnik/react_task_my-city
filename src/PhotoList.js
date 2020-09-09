import React from "react";
import { useState } from "react";
import { data } from "./data";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// console.log(data[0].imgDescr); // return []

const store = data;

const items = store.map((item) => {
  // console.log({...item});
  return <PhotoItem {...item} />;
});

function PhotoItem(props) {
  // console.log(props);
  return (
    <div className="gallery">
      <div className="img-holder">
        <img src={props.imgURI} alt={props.imgAlt} />
      </div>
      <div className="desc">"{props.imgDescr}"</div>
    </div>
  );
}

export default function PhotoList() {
  // console.log(props);
  const [loginField, setLoginField] = useState("Login");
  const handlerLoginField = (e) => setLoginField(e.target.value);

  const [passField, setPassField] = useState("Password");
  const handlerPassField = (e) => setPassField(e.target.value);

  const [textAreaField, setTextAreaField] = useState("");
  const handlerTextAreaField = (e) => setTextAreaField(e.target.value);

  const addImage = (item) => {
    const newImg = {
      imgURI: item.url,
      imgAlt: item.alt,
      imgDescr: item.desc
    };
    store.push(newImg);
  };

  return (
    <div>
      <h1 className="text-center">Gallery</h1>

      <div className="container">
        <form action="#" method="">
          <fieldset>
            <legend className="text-center"> Field for add new Image </legend>
            <div className="row">
              <div className="col-4">
                <div class="form-group">
                  {/* <label for="exampleInputEmail1">Logins</label> */}
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="exampleInputEmail1"
                    placeholder="Enter logins"
                    value={loginField}
                    onChange={handlerLoginField}
                  />
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>

                <div class="form-group">
                  {/* <label for="exampleInputPassword1">Password</label> */}
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={passField}
                    onChange={handlerPassField}
                  />
                </div>

                <div class="form-group">
                  {/* <label for="exampleFormControlInput1">Email address</label> */}
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary btn-sm btn-block mt-4"
                >
                  Submit
                </button>
              </div>
              <div className="col-4">
                <div class="form-group">
                  {/* <label for="exampleInputEmail1">Logins</label> */}
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter image's URI"
                  />
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                  {/* <label for="exampleFormControlTextarea1">
                    Photo informations
                  </label> */}
                  <textarea
                    class="form-control form-control-sm"
                    id="exampleFormControlTextarea1"
                    rows="6"
                    placeholder="Photo informations"
                    value={textAreaField}
                    onChange={handlerTextAreaField}
                  ></textarea>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>

      <hr />

      <div className="container">
        <div className="gallery-list">{items}</div>
      </div>
    </div>
  );
}
