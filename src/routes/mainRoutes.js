import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";

export const mainRoutes = [
  {
    name: { en: "Home", ua: "Головна", ru: "Главная" },
    path: "/",
    icon: "",
    component: HomePage,
    exact: true,
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: { en: "Products", ua: "Продукти", ru: "Продукты" },
    path: "/products",
    icon: "",
    component: ProductsPage,
    exact: false,
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: { en: "Cart", ua: "Кошик", ru: "Корзина" },
    path: "/cart",
    icon: "",
    component: CartPage,
    exact: true,
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: {
      en: "Administration",
      ua: "Адмiнiстрування",
      ru: "Администрирование",
    },
    path: "/admin",
    icon: "",
    component: AdminPage,
    exact: true,
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: { en: "Registration", ua: "Реєстрація", ru: "Регистрация" },
    path: "/register",
    icon: "",
    component: AuthPage,
    exact: true,
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: { en: "login", ua: "Реєстрація", ru: "Регистрация" },
    path: "/login",
    icon: "",
    component: AuthPage,
    exact: true,
    isPrivate: false,
    isRestricted: true,
  },
];
