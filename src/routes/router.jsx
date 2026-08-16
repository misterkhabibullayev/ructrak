import MainLayout from "../layouts/MainLayout";
import {
  CatalogPage,
  ContactsPage,
  HomePage,
  NewsPage,
  PhotoGalleryPage,
  SearchPage,
  ServicePage,
} from "../pages/pages";

export const router = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "catalog",
        element: <CatalogPage />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "photogallery",
        element: <PhotoGalleryPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "service",
        element: <ServicePage />,
      },
      {
        path: "contacts",
        element: <ContactsPage />
      }
    ],
  },
];
