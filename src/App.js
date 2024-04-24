import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPages";
import Root from "./routes/Root";
import Contact, { loader as contactLoader } from "./routes/Contact";
import { loader as rootLoader, action as rootAction } from "./routes/Root";
import EditContact, { action as editAction } from "./routes/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
