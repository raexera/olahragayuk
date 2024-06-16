import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SignUp from "../app/signup/signup";
import SignIn from "../app/signin/signin";

describe("SignUp", () => {
  it("renders a SignUp", () => {
    render(<SignUp />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it("renders a form field for email input", () => {
    render(<SignUp />);

    const emailInput = screen.getByLabelText("Email");

    expect(emailInput).toBeInTheDocument();
  });

  it("renders a form field for password input", () => {
    render(<SignUp />);

    const passwordInput = screen.getByLabelText("Password");

    expect(passwordInput).toBeInTheDocument();
  });
});
