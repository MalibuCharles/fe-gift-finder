import React from "react";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import '../App.css'


export default function Question({
  setIsProduct,
  isProduct,
  isFirst,
  setIsFirst,
  setAge,
  age,
}) 


{

  //styling
  const quesBar = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div className="back-image">
        {isFirst === 'true' ? (
        <section style={quesBar}>
          <h1>Q1: What's their gender?</h1>
          <div>
            <div>
              <Button
                                 variant="contained"
                                 style={{backgroundColor: "hotPink", marginTop: "10px"}}
               
                onClick={() => {
                  setIsFirst('false');
                  localStorage.setItem("isfirst", 'false');
                }}
              >
                male
              </Button>
            </div>
            <div>
              <Button
                                variant="contained"
                                style={{backgroundColor: "hotPink", marginTop: "10px"}}
              
                onClick={() => {
                  setIsFirst('false');
                  localStorage.setItem("isfirst", 'false');
                }}
              >
                female
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <section style={quesBar}>
          {" "}
          <h1>Q2: What's their age?</h1>
          <div>
            <div>
              <Button
                                variant="contained"
                                style={{backgroundColor: "hotPink", marginTop: "10px"}}
              
                onClick={() => {
                  setIsProduct('true');
                  localStorage.setItem("isproduct", isProduct);
                  setAge(0);
                  localStorage.setItem("age",age)
                }}
              >
                pre-teen(6-12)
              </Button>
            </div>
            <div>
              <Button
                                variant="contained"
                                style={{backgroundColor: "hotPink", marginTop: "10px"}}
              
                onClick={() => {
                  setIsProduct('true');
                  localStorage.setItem("isproduct", isProduct);
                  setAge(1);
                  localStorage.setItem("age",age)
                }}
              >
                teen(13-19)
              </Button>
            </div>
            <div>
              <Button
                                variant="contained"
                                style={{backgroundColor: "hotPink", marginTop: "10px"}}
              
                onClick={() => {
                  setIsProduct('true');
                  localStorage.setItem("isproduct", isProduct);
                  setAge(2);
                  localStorage.setItem("age",age)
                }}
              >
                young-adult(20-30)
              </Button>
            </div>
            <div>
              <Button
                                variant="contained"
                                style={{backgroundColor: "hotPink", marginTop: "10px"}}
              
                onClick={() => {
                  setIsProduct('true');
                  localStorage.setItem("isproduct", isProduct);
                  setAge(3);
                  localStorage.setItem("age",age)
                }}
              >
                adult(30-infinty)
              </Button>
            </div>
          </div>
          <Button
                variant="contained"
                style={{backgroundColor: "hotPink", marginTop: "10px"}}
          
            onClick={() => {
              setIsFirst('true');
              localStorage.setItem("isfirst", 'true');
            }}
          >
            Back
          </Button>
        </section>
      )}
    </div>
  );
}
