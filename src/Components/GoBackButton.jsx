import React from "react";
import { useNavigate } from "react-router-dom";

export default function GoBackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(-1);
      }}
    >
      <div className="opacity-70">Go Back</div>
    </button>
  );
}
