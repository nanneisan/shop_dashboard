import Dashboard from "../pages/Dashboard";
import City from "../pages/City";
import CityAdd from "../pages/City/CityAdd";
import Township from "../pages/Township";
import UserGroup from "../pages/UserGroup";
import UserRegister from "../pages/UserRegister";

const routes = [
  { name: "city", component: City },
  { name: "city_entry", component: CityAdd },
  { name: "township", component: Township },
  { name: "promotion", component: Township },
  { name: "usergroup", component: UserGroup },
  { name: "userregister", component: UserRegister },
  { name: "wholesale", component: Dashboard },
  { name: "retailshop", component: Dashboard },
  { name: "delivery", component: Dashboard },
  { name: "brand", component: Dashboard },
  { name: "category", component: Dashboard },
  { name: "pack", component: Dashboard },
  { name: "product", component: Dashboard },
  { name: "orderreports", component: Dashboard },
  { name: "wholesaleorders", component: Dashboard },
  { name: "deliveryorders", component: Dashboard },
];

export default { routes };
