import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import QuestionsListPage from "../pages/QuestionsListPage/QuestionsListPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <QuestionsListPage /> },

        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]);