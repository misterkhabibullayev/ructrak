import { lazy } from "react";

const HomePage = lazy(() => import("./HomePage")); // bitti
const CatalogPage = lazy(() => import("./CatalogPage")); // bitti
const NewsPage = lazy(() => import("./NewsPage")); // bitti
const PhotoGalleryPage = lazy(() => import("./PhotoGalleryPage"));
const SearchPage = lazy(() => import("./SearchPage"));
const ServicePage = lazy(() => import("./ServicePage")); // bitti
const ContactsPage = lazy(() => import("./ContactsPage")); // bitti
const CartPage = lazy(() => import("./CartPage")); // bitti
const FavoritesPage = lazy(() => import("./FavoritesPage")); // bitti
const NotFoundPage = lazy(() => import("./NotFoundPage")); // bitti
const ProductDetailesPage = lazy(() => import("./ProductDetailesPage"));
const CatalogFilterPage = lazy(() => import("./CatalogFilterPage")); // bitti
const NewsDeteiles = lazy(() => import("./NewsDetailes")); // bitti
const SuppliersPage = lazy(() => import("./SuppliersPage")); // bitti
const LeasingPage = lazy(() => import("./LeasingPage")); // bitti
const VacanciesPage = lazy(() => import("./VacansiesPage")); // bitti
const AboutPage = lazy(() => import("./AboutPage")); // bitti

export {
  HomePage, // bitti
  CatalogPage, // bitti
  NewsPage, // bitti
  PhotoGalleryPage,
  SearchPage,
  ServicePage, // bitti
  ContactsPage, // bitti
  CartPage,
  FavoritesPage,
  NotFoundPage, // bitti
  ProductDetailesPage,
  CatalogFilterPage,
  NewsDeteiles, // bitti
  SuppliersPage, // bitti
  LeasingPage, // bitti
  VacanciesPage, // bitti
  AboutPage,
};
