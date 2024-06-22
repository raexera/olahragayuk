"use client";

import { Auth } from "@supabase/auth-ui-react";
import { createClient } from "@supabase/supabase-js";
import React, { useEffect } from "react";

const supabase = createClient(
  "https://vhbeprujgtyzsusmnqhb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoYmVwcnVqZ3R5enN1c21ucWhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0NzQ4MzksImV4cCI6MjAzMzA1MDgzOX0.WFatNWa_PPgrIM4OXi8yOXtozn_McCUjKeUXgeQJ03M",
);

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
    fonts: {
      // bodyFontFamily: `ui-sans-serif, sans-serif`,
      // buttonFontFamily: `ui-sans-serif, sans-serif`,
      // inputFontFamily: `ui-sans-serif, sans-serif`,
      // labelFontFamily: `ui-sans-serif, sans-serif`,
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
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          window.location.href = "/";
        }
      },
    );

    return () => {
      if (authListener && authListener.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);

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
      // showLinks={false}
    />
  );
};

const App = () => {
  return (
    <div className="relative flex w-screen h-screen items-center justify-center bg-[#141414]">
      <div className="w-[500px] h-[500px] flex items-center justify-center bg-white/10 rounded-lg backdrop-blur-md shadow-md border border-white/30 px-[20px] py-[30px]">
        <div>
          <SignUpAuth />
          {/* <div className="flex items-center justify-center text-[12px] cursor-pointer hover:text-[#BEE702]">
            <p>Already have an account? Sign in</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
