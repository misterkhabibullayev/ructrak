import { lazy } from "react";

const HomePage = lazy(() => import("./HomePage")); // bitti
const CatalogPage = lazy(() => import("./CatalogPage")); // bitti
const NewsPage = lazy(() => import("./NewsPage")); // bitti
const SearchPage = lazy(() => import("./SearchPage")); // bitti
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
const PhotoGalleryPage = lazy(() => import("./PhotoGalleryPage")); // bitti
const PartnersPage = lazy(() => import("./PartnersPage")); // bitti
const ReviewsPage = lazy(() => import("./ReviewsPage")); // bitti
const CertifikatsPage = lazy(() => import("./CertifikatsPage")); // bitti
const VideosPage = lazy(() => import("./VideosPage")); // bitti
const ReklamsMaterialPage = lazy(() => import("./ReklamsMaterialPage")); // bitti
const RemontPage = lazy(() => import("./RemontPage"));

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
  VacanciesPage,
  AboutPage,
  PartnersPage,
  ReviewsPage,
  CertifikatsPage,
  VideosPage,
  ReklamsMaterialPage,
  RemontPage,
};
