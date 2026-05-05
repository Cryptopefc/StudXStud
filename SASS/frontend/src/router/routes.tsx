import { AdminRoute } from "../components/common/AdminRoute";
import type { RouteObject } from "react-router-dom";
import { ProtectedRoute } from "../components/common/ProtectedRoute";
import { AdminDashboardPage } from "../pages/AdminDashboardPage";
import { CvBuilderPage } from "../pages/CvBuilderPage";
import { ForgotPasswordPage } from "../pages/ForgotPasswordPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { LandingPage } from "../pages/LandingPage";
import { MentorApplyPage } from "../pages/MentorApplyPage";
import { MentorAppointmentsPage } from "../pages/MentorAppointmentsPage";
import { MentorDirectoryPage } from "../pages/MentorDirectoryPage";
import { MentorProfilePage } from "../pages/MentorProfilePage";
import { MyOffersPage } from "../pages/MyOffersPage";
import { MyRequestsPage } from "../pages/MyRequestsPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProfilePage } from "../pages/ProfilePage";
import { RegisterPage } from "../pages/RegisterPage";
import { SkillsBoardPage } from "../pages/SkillsBoardPage";
import { ContactPage } from "../pages/ContactPage";

export const routes: RouteObject[] = [
  { path: "/", element: <LandingPage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  { path: "/mentors", element: <ProtectedRoute><MentorDirectoryPage /></ProtectedRoute> },
  { path: "/mentors/:mentorId", element: <ProtectedRoute><MentorProfilePage /></ProtectedRoute> },
  { path: "/mentor/appointments", element: <ProtectedRoute><MentorAppointmentsPage /></ProtectedRoute> },
  { path: "/mentor/apply", element: <ProtectedRoute><MentorApplyPage /></ProtectedRoute> },
  { path: "/cv-builder", element: <ProtectedRoute><CvBuilderPage /></ProtectedRoute> },
  { path: "/admin/dashboard", element: <AdminRoute><AdminDashboardPage /></AdminRoute> },
  { path: "/profile", element: <ProtectedRoute><ProfilePage /></ProtectedRoute> },
  { path: "/skills", element: <ProtectedRoute><SkillsBoardPage /></ProtectedRoute> },
  { path: "/my-requests", element: <ProtectedRoute><MyRequestsPage /></ProtectedRoute> },
  { path: "/my-offers", element: <ProtectedRoute><MyOffersPage /></ProtectedRoute> },
  { path: "*", element: <NotFoundPage /> }
];
