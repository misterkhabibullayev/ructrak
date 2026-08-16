import { lazy } from "react";

const HomePage = lazy(() => import("./HomePage"));
const CatalogPage = lazy(() => import("./CatalogPage"));
const NewsPage = lazy(() => import("./NewsPage"));
const PhotoGalleryPage = lazy(() => import("./PhotoGalleryPage"));
const SearchPage = lazy(() => import("./SearchPage"));
const ServicePage = lazy(() => import("./ServicePage"));
const ContactsPage = lazy(() => import("./ContactsPage"));
const CartPage = lazy(() => import("./CartPage"));
const FavoritesPage = lazy(() => import("./FavoritesPage"));

export {
  HomePage,
  CatalogPage,
  NewsPage,
  PhotoGalleryPage,
  SearchPage,
  ServicePage,
  ContactsPage,
  CartPage,
  FavoritesPage,
};
