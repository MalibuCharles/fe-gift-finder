import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import "../App.css";

export default function Question({
  setIsProduct,
  isProduct,
  isFirst,
  setIsFirst,
  setAge,
  age,
}) {
  //styling
  const quesBar = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div className="back-image">
      {isFirst === "true" ? (
        <section style={quesBar}>
          <h1>Question 1: What's their gender?</h1>
          <div className="questionBox">
            <div>
              <Button
                variant="contained"
                style={{ backgroundColor: "#F1F1F1", marginTop: "10px",width:"100px", color: "black" }}
                onClick={() => {
                  setIsFirst("false");
                  localStorage.setItem("isfirst", "false");
                }}
              >
                Female
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                style={{ backgroundColor: "#F1F1F1", marginTop: "10px",width:"100px", color: "black" }}
                onClick={() => {
                  setIsFirst("false");
                  localStorage.setItem("isfirst", "false");
                }}
              >
                Male
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <section style={quesBar}>
          {" "}
          <h1>Question 2: What's their age?</h1>
          <div className="questionBox">
            <div className="questionBar">
              <Button
                variant="contained"
                style={{ backgroundColor: "#F1F1F1", marginTop: "10px",width:"200px", color: "black" }}
                onClick={() => {
                  setIsProduct("true");
                  localStorage.setItem("isproduct", isProduct);
                  setAge(0);
                  localStorage.setItem("age", age);
                }}
              >
                pre-teen(6-12)
              </Button>
            </div>
            <div className="questionBar">
              <Button
                variant="contained"
                style={{ backgroundColor: "#F1F1F1", marginTop: "10px",width:"200px", color: "black" }}
                onClick={() => {
                  setIsProduct("true");
                  localStorage.setItem("isproduct", isProduct);
                  setAge(1);
                  localStorage.setItem("age", age);
                }}
              >
                teen(13-19)
              </Button>
            </div>
            <div className="questionBar">
              <Button
                variant="contained"
                style={{ backgroundColor: "#F1F1F1", marginTop: "10px",width:"200px", color: "black" }}
                onClick={() => {
                  setIsProduct("true");
                  localStorage.setItem("isproduct", isProduct);
                  setAge(2);
                  localStorage.setItem("age", age);
                }}
              >
                young-adult(20-30)
              </Button>
            </div>
            <div className="questionBar">
              <Button
                variant="contained"
                style={{ backgroundColor: "#F1F1F1", marginTop: "10px" ,width:"200px", color: "black"}}
                onClick={() => {
                  setIsProduct("true");
                  localStorage.setItem("isproduct", isProduct);
                  setAge(3);
                  localStorage.setItem("age", age);
                }}
              >
                adult(30-infinty)
              </Button>
            </div>
          </div>
          <Button
            variant="contained"
            style={{ backgroundColor: "#F1F1F1", marginTop: "10px", color: "black" }}
            onClick={() => {
              setIsFirst("true");
              localStorage.setItem("isfirst", "true");
            }}
          >
            Back
          </Button>
        </section>
      )}
    </div>
    
  );
}
