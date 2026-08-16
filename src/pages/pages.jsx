import { lazy } from "react";

const HomePage = lazy(() => import("./HomePage"));
const CatalogPage = lazy(() => import("./CatalogPage"));
const NewsPage = lazy(() => import("./NewsPage"));
const PhotoGalleryPage = lazy(() => import("./PhotoGalleryPage"));
const SearchPage = lazy(() => import("./SearchPage"));
const ServicePage = lazy(() => import("./ServicePage"));
const ContactsPage = lazy(() => import("./ContactsPage"));

export {
  HomePage,
  CatalogPage,
  NewsPage,
  PhotoGalleryPage,
  SearchPage,
  ServicePage,
  ContactsPage,
};
