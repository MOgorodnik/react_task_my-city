import React from "react";
import { useState } from "react";

export default function PhotoAddForm(props) {
  // console.log('PhotoAddForm', props);

  const { initialFormData } = props;

  const [formData, updateFormData] = useState(initialFormData);

  const handlerChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    })
  }
  const handlerSubmit = (e) => {
    e.preventDefault();
    props.addCard(formData);
    updateFormData(initialFormData)
  }

  return (

      <div className="container">
        <form action="#" method="" onSubmit={handlerSubmit}>
          <fieldset>
            <legend className="text-center"> Field for add new Image </legend>
            <div className="row">
              <div className="col-4">
                <div class="form-group">
                  {/* <label for="exampleInputLogin">Login</label> */}
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="exampleInputLogin"
                    placeholder="Enter login"
                    value={formData.login}
                    name="login"
                    onChange={handlerChange}
                    autofocus="true"
                    // value={loginField}
                    // onChange={handlerLoginField}
                  />
                  <small id="loginHelp" class="form-text text-muted"></small>
                </div>

                <div class="form-group">
                  {/* <label for="exampleInputPassword1">Password</label> */}
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="password"
                    onChange={handlerChange}
                  />
                </div>

                <div class="form-group">
                  {/* <label for="exampleFormControlInput1">Email address</label> */}
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="exampleFormControlInput1"
                    value={formData.email}
                    name="email"
                    onChange={handlerChange}
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
                  {/* <label for="exampleInputEmail1">URL</label> */}
                  <input
                    type="url"
                    class="form-control form-control-sm"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter image's URI"
                    value={formData.imgURI}
                    name="imgURI"
                    onChange={handlerChange}
                  />
                  <small id="urlHelp" class="form-text text-muted"></small>
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
                    name="imgDescr"
                    onChange={handlerChange}
                  ></textarea>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
  );
}
