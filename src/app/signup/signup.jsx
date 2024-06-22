"use client";

import { Auth } from "@supabase/auth-ui-react";
import React from "react";
import supabase from "../../lib/supabase";

const customTheme = {
  dark: {
    colors: {
      brand: "#BEE702",
      brandAccent: "#BEE702",
      brandButtonText: "#141414",
      defaultButtonBackground: "#F5F5F5",
      defaultButtonBackgroundHover: "#BEE702",
      defaultButtonBorder: "#BEE702",
      defaultButtonText: "#141414",
      dividerBackground: "#F5F5F5",
      inputBackground: "transparent",
      inputBorder: "#F5F5F5",
      inputBorderHover: "#BEE702",
      inputBorderFocus: "#BEE702",
      inputText: "#F5F5F5",
      inputLabelText: "#BEE702",
      inputPlaceholder: "darkgray",
      messageText: "#BEE702",
      messageTextDanger: "red",
      anchorTextColor: "#F5F5F5",
      anchorTextHoverColor: "#BEE702",
    },
    space: {
      spaceSmall: "4px",
      spaceMedium: "8px",
      spaceLarge: "16px",
      labelBottomMargin: "8px",
      anchorBottomMargin: "4px",
      emailInputSpacing: "4px",
      socialAuthSpacing: "4px",
      buttonPadding: "10px 15px",
      inputPadding: "10px 15px",
    },
    fontSizes: {
      baseBodySize: "13px",
      baseInputSize: "14px",
      baseLabelSize: "14px",
      baseButtonSize: "14px",
    },

    borderWidths: {
      buttonBorderWidth: "1px",
      inputBorderWidth: "1px",
    },
    radii: {
      borderRadiusButton: "4px",
      buttonBorderRadius: "4px",
      inputBorderRadius: "4px",
    },
  },
};

const SignUpAuth = () => {
  return (
    <Auth
      supabaseClient={supabase}
      theme="dark"
      appearance={{ theme: customTheme }}
      localization={{
        variables: {
          sign_in: {
            email_label: "Email address",
            password_label: "Password",
          },
        },
      }}
      providers={["google"]}
      view="sign_up"
    />
  );
};

const App = () => {
  return (
    <div className="relative flex w-screen h-screen items-center justify-center bg-[#141414]">
      <div className="w-[500px] h-[500px] flex items-center justify-center bg-white/10 rounded-lg backdrop-blur-md shadow-md border border-white/30 px-[20px] py-[30px]">
        <div>
          <SignUpAuth />
        </div>
      </div>
    </div>
  );
};

export default App;
