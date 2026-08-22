import MainLayout from "../layouts/MainLayout";
import {
  CartPage,
  CatalogPage,
  ContactsPage,
  FavoritesPage,
  HomePage,
  NewsPage,
  NotFoundPage,
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
        element: <ContactsPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ],
  },
];
