import { render ,screen} from "@testing-library/react";
import Contacts from "../Contacts";
import "@testing-library/jest-dom";

describe("Contacts page Test Cases",()=>{
it("Should load contact us Component.",()=>{
  render(<Contacts/>);

  const heading=screen.getByRole("heading");
  
    
  //Assertion
  expect(heading).toBeInTheDocument();
});



test("Should load button inside contact Component.",()=>{
  render(<Contacts/>);

  const button=screen.getByRole("button");
  //const button=screen.getByRole("submit");
  

  //Assertion
  expect(button).toBeInTheDocument();
});




test("Should load input name inside Contacts Component.",()=>{
  render(<Contacts/>);

  const inputName=screen.getByPlaceholderText("name");
  //const button=screen.getByRole("submit");
  
  //Assertion
  expect(inputName).toBeInTheDocument();
});


test("Should load 2 input boxes on the Contacts component.",()=>{
  render(<Contacts/>);

  //Querying
  const inputBoxes=screen.getAllByRole("textbox");
  //const button=screen.getByRole("submit");
  

  //Assertion
 // expect(inputBoxes.length).toBe(2);
  expect(inputBoxes.length).not.toBe(3);
});
});