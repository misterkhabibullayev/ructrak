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
const NotFoundPage = lazy(() => import("./NotFoundPage"));
const ProductDetailesPage = lazy(() => import("./ProductDetailesPage"));
const CatalogFilterPage = lazy(() => import("./CatalogFilterPage"));
const NewsDeteiles = lazy(() => import("./NewsDetailes"));

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
  NotFoundPage,
  ProductDetailesPage,
  CatalogFilterPage,
  NewsDeteiles
};
