import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import "./NewDataForm.css";
import { TextFieldComponent } from "../TextField/TextFieldComponent";
import { Calender } from "../DatePicker/Calender";
import { SportActivityDropdown } from "../Dropdown/SportActivityDropdown";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewFormDataAction } from "../../redux/action/overviewAction";

export const NewDataForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [studentData, setStudentData] = useState({
    fullName: "",
    studentId: "",
    standard: "",
    address: "",
    dob: new Date(),
    sportActivity: "Cricket",
  });

  const handleChange = (event) => {
    let data = { ...studentData };
    data[event.target.name] = event.target.value;
    setStudentData(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      studentData.fullName.trim().length === 0 ||
      studentData.studentId.trim().length === 0 ||
      studentData.standard.trim().length === 0 ||
      studentData.address.trim().length === 0
    ) {
      alert("Please fill all the fields to submit the form");
    } else {
      dispatch(addNewFormDataAction(studentData));
      history.goBack();
    }
  };

  useEffect(() => {
    return () => {
      setStudentData({
        fullName: "",
        studentId: "",
        standard: "",
        address: "",
        dob: new Date(),
        sportActivity: "Cricket",
      });
    };
  }, []);

  return (
    <Grid container className="content-container">
      <Grid item xs={12} className="formContainer">
        <form>
          <span className="formTitle">ADD NEW STUDENT DATA</span>
          <TextFieldComponent
            label="Full Name"
            placeholder={"Full Name...."}
            value={studentData.fullName}
            type={"text"}
            name="fullName"
            onChange={(event) => {
              handleChange(event);
            }}
          />

          <TextFieldComponent
            label="Student Id"
            placeholder={"Student Id...."}
            value={studentData.studentId}
            type={"text"}
            name="studentId"
            onChange={(event) => {
              handleChange(event);
            }}
          />

          <TextFieldComponent
            label="Student Standard"
            placeholder={"Student Standard...."}
            value={studentData.standard}
            type={"text"}
            name="standard"
            onChange={(event) => {
              handleChange(event);
            }}
          />

          <TextFieldComponent
            label="Student Address"
            placeholder={"Student Address...."}
            value={studentData.address}
            type={"text"}
            name="address"
            onChange={(event) => {
              handleChange(event);
            }}
          />

          <div className="formComponentContainer">
            <span className="formComponentContainerLabel">Date of birth</span>
            <Calender
              selected={studentData.dob}
              onChange={(date) => {
                setStudentData({ ...studentData, dob: date });
              }}
            />
          </div>

          <div className="formComponentContainer">
            <span className="formComponentContainerLabel">Date of birth</span>
            <SportActivityDropdown
              data={["Cricket", "Baseball", "Basketball", "Hockey"]}
              value={studentData.sportActivity}
              onSelectItem={(item) => {
                setStudentData({ ...studentData, sportActivity: item });
              }}
            />
          </div>

          <div className="buttonContainer">
            <button
              className="button confirmBTN"
              onClick={(event) => {
                handleSubmit(event);
              }}
            >
              Sumit
            </button>
            <button
              className="button goBackBTN"
              onClick={(event) => {
                event.preventDefault();
                history.goBack();
              }}
            >
              Go Back
            </button>
          </div>
        </form>
      </Grid>
    </Grid>
  );
};
