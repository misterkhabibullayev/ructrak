import { lazy } from "react";

const HomePage = lazy(() => import("./HomePage")); // bitti
const CatalogPage = lazy(() => import("./CatalogPage"));
const NewsPage = lazy(() => import("./NewsPage")); // bitti
const PhotoGalleryPage = lazy(() => import("./PhotoGalleryPage"));
const SearchPage = lazy(() => import("./SearchPage"));
const ServicePage = lazy(() => import("./ServicePage")); // bitti
const ContactsPage = lazy(() => import("./ContactsPage")); // bitti
const CartPage = lazy(() => import("./CartPage"));
const FavoritesPage = lazy(() => import("./FavoritesPage"));
const NotFoundPage = lazy(() => import("./NotFoundPage")); // bitti
const ProductDetailesPage = lazy(() => import("./ProductDetailesPage"));
const CatalogFilterPage = lazy(() => import("./CatalogFilterPage"));
const NewsDeteiles = lazy(() => import("./NewsDetailes")); // bitti
const SuppliersPage = lazy(() => import("./SuppliersPage")); // bitti
const LeasingPage = lazy(() => import("./LeasingPage"));

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
  NewsDeteiles,
  SuppliersPage,
  LeasingPage,
};
