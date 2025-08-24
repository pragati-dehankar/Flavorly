import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About constructor");
  }

  componentDidMount() {
    console.log("About componentDidMount");
  }

  render() {
    console.log("About render");
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">About Flavourly</h1>

        <p className="text-lg mb-4">
          <strong>Flavourly</strong> is a personal practice project to explore building a food delivery app. 
          It helps users browse restaurants, add meals to a cart, and experience a realistic ordering workflow.
        </p>

        <p className="text-lg mb-4">
          The main goal of this project is to learn and implement key features like user-friendly UI, order tracking, 
          and seamless interactions using modern web technologies.
        </p>

        <p className="text-lg mb-4">
          Built with <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Redux toolkit</strong>, this clone demonstrates 
          how food delivery platforms like Swiggy function on the front-end.
        </p>

        
      </div>
    );
  }
}

export default About;
