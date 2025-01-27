import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  REGISTER_ROUTE,
} from "./routes";
const navMenu = [
  { auth: true,
    route: HOME_ROUTE,
    label: "Home",
  },
  { auth: true,
    route: ABOUT_ROUTE, 
    label: "About"
 },
  { auth: true,
     route: CONTACT_ROUTE, 
     label: "Contact" 
    },
  { auth: true, 
    route: PRODUCT_ROUTE, 
    label: "Product" 
},
  { auth: false,
     route: LOGIN_ROUTE,
      label: "Login" 
    },
  { auth: false, 
    route: REGISTER_ROUTE, 
    label: "Register" 
},
];
export default navMenu;
