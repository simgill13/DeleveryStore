import Login from "components/containers/Logincontainer";
import Browse from "components/views/Browse";
import App from "components/containers/App";
import Cart from "components/views/Cart";

// <Router>
//       <Switch>
//         <Route exact path="/" component={App} />
//         <Route path="/login" component={Login} />
//         <Route path="/logout" component={Login} />
//         <Route
//           path="/browse"
//           render={props => {
//             singleAuthCheck();
//             return <Browse {...props} />;
//           }}
//         />
//         <Route path="/cart" component={Cart} />
//       </Switch>
//     </Router>
// const indexRoutes = [
//   {
//     path: "/",
//     component: App
//   },
//   { path: "/login", component: Login },
//   { path: "/logout", component: Login },
//   { path: "/browse", component: Browse }
// ];

const routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/login",
    component: Login
  },
  ,
  {
    path: "/logout",
    component: Login
  },
  {
    path: "/browse",
    component: Browse,
    routes: [
      {
        path: "/browse/:topicId",
        component: Browse
      }
    ]
  }
];
export default routes;
