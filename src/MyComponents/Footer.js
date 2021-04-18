import React from "react";

export const Footer = () => {
  const myStyle = {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%"
  };
  return (
    <footer className="bg-dark text-light mt-4 py-3" style={myStyle}>
      <p className="text-center">Copyright &copy; MyTodosList.com</p>
    </footer>
  );
};
