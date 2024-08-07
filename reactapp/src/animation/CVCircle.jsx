import React from "react";

const CVCircle = () => {
  return (
    <>
      <style>
        {`
          @keyframes infinite-spinning {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .circle-container {
            position: absolute;
            top: 16px; 
            right: 16px; 
            width: 4.5rem;
            height: 4.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 20;
          }

          .circle {
            width: 4.5rem;  /* Explicitly set the width */
            height: 4.5rem; /* Explicitly set the height */
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            border: 0.5rem solid #ffba00;
            animation: infinite-spinning 8s infinite linear;
          }

          .circle h1 {
            margin: 0;
            padding: 0;
            color: black;
            font-size: 1.5rem;
            font-weight: bold;
          }

          .circle a {
            width: 100%;  /* Make sure the anchor tag takes the full width */
            height: 100%; /* Make sure the anchor tag takes the full height */
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none; /* Remove underline */
          }
        `}
      </style>
      <div className="circle-container">
        <a
          href="https://drive.google.com/file/d/1juAEu-RCv9ctOKlHEXntZpOJC234SPhF/view"
          target="_blank"
          rel="noopener noreferrer"
          className="circle"
        >
          <h1>CV</h1>
        </a>
      </div>
    </>
  );
};

export default CVCircle;
