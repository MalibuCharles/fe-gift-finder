import React from "react";
import { useState, useEffect } from "react";

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
    <div>
      {isFirst === 'true' ? (
        <section style={quesBar}>
          <h1>Q1: What's their gender?</h1>
          <div>
            <div>
              <button
                onClick={() => {
                  setIsFirst('false');
                  localStorage.setItem("isfirst", 'false');
                }}
              >
                male
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setIsFirst('false');
                  localStorage.setItem("isfirst", 'false');
                }}
              >
                female
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section style={quesBar}>
          {" "}
          <h1>Q2: What's their age?</h1>
          <div>
            <div>
              <button
                onClick={() => {
                  setIsProduct('true');
                  localStorage.setItem("isproduct", isProduct);
                  setAge(0);
                  localStorage.setItem("age",age)
                }}
              >
                pre-teen(6-12)
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setIsProduct('true');
                  localStorage.setItem("isproduct", isProduct);
                  setAge(1);
                  localStorage.setItem("age",age)
                }}
              >
                teen(13-19)
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setIsProduct('true');
                  localStorage.setItem("isproduct", isProduct);
                  setAge(2);
                  localStorage.setItem("age",age)
                }}
              >
                young-adult(20-30)
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setIsProduct('true');
                  localStorage.setItem("isproduct", isProduct);
                  setAge(3);
                  localStorage.setItem("age",age)
                }}
              >
                adult(30-infinty)
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              setIsFirst('true');
              localStorage.setItem("isfirst", 'true');
            }}
          >
            Back
          </button>
        </section>
      )}
    </div>
  );
}
