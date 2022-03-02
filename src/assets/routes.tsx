const routes = {
  root: {
    NAME: "Root",
    onboarding: {
      NAME: "Onboarding",
      login: {
        NAME: "Login"
      },
      forgotPassword: {
        NAME: "ForgotPassword"
      },
      signIn: {
        NAME: "Signin"
      },
      query: {
        NAME: "Query"
      },
    },
    dashboard: {
      NAME: "Dashboard",
      tabs: {
        NAME: "DashboardTabs",
        home: {
          NAME: "HomeTab"
        },
        settings: {
          NAME: "SettingsTab"
        },
        cart: {
          NAME: "CartTab"
        },
        profile: {
          NAME: "ProfileTab"
        }
      }
    }
  }
};

export default routes;

