import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("Should load Header Component with a login button",()=>{
  render( 
    <BrowserRouter>
    <Provider store={appStore}>
      <Header/>
    </Provider>
    </BrowserRouter>
  );
  const loginButton=screen.getByRole("button");       //It's a good way than getByText();
  //const loginButton=screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});



// it("Should render Header Component with a Cart item",()=>{
//   render( 
//     <BrowserRouter>
//     <Provider store={appStore}>
//       <Header/>
//     </Provider>
//     </BrowserRouter>
//   );
//   const cartItems=screen.getByText(/about us/);       //It's a good way than getByText();
//   //const loginButton=screen.getByText("Login");
//   expect(cartItems).toBeInTheDocument();
// });



it("Should change login button to logout on click",()=>{
  render( 
    <BrowserRouter>
    <Provider store={appStore}>
      <Header/>
    </Provider>
    </BrowserRouter>
  );
  const loginButton=screen.getByRole("button",{name:"Login"});       //It's a good way than getByText();
  fireEvent.click(loginButton);
  //const loginButton=screen.getByText("Login");
  const logoutButton=screen.getByRole("button",{name:"Logout"}); 
  expect(logoutButton).toBeInTheDocument();
});