import MainLayout from "../layouts/MainLayout";
import {
  CartPage,
  CatalogFilterPage,
  CatalogPage,
  ContactsPage,
  FavoritesPage,
  HomePage,
  NewsPage,
  NotFoundPage,
  PhotoGalleryPage,
  ProductDetailesPage,
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
        path: "catalog/:filter",
        element: <CatalogFilterPage />
      },
      {
        path: "catalog/:filter/:detailes",
        element: <ProductDetailesPage />
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
