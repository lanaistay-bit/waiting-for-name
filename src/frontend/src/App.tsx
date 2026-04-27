import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

// ─── Existing pages ────────────────────────────────────────────────────────────
const HomePage = lazy(() =>
  import("./pages/HomePage").then((m) => ({ default: m.HomePage })),
);
const DMSPage = lazy(() =>
  import("./pages/DMSPage").then((m) => ({ default: m.DMSPage })),
);
const FacultyPage = lazy(() =>
  import("./pages/FacultyPage").then((m) => ({ default: m.FacultyPage })),
);
const FacultyProfilePage = lazy(() =>
  import("./pages/FacultyProfilePage").then((m) => ({
    default: m.FacultyProfilePage,
  })),
);
const BoardOfGovernancePage = lazy(() =>
  import("./pages/BoardOfGovernancePage").then((m) => ({
    default: m.default,
  })),
);
const AuthoritiesPage = lazy(() =>
  import("./pages/AuthoritiesPage").then((m) => ({ default: m.default })),
);
const AboutUniversityPage = lazy(() =>
  import("./pages/AboutUniversityPage").then((m) => ({ default: m.default })),
);
const AdministrationPage = lazy(() =>
  import("./pages/AdministrationPage").then((m) => ({ default: m.default })),
);
const ViceChancellorPage = lazy(() =>
  import("./pages/ViceChancellorPage").then((m) => ({ default: m.default })),
);
const RegistrarPage = lazy(() =>
  import("./pages/RegistrarPage").then((m) => ({ default: m.default })),
);
const AdminProfilePage = lazy(() =>
  import("./pages/AdminProfilePage").then((m) => ({ default: m.default })),
);

// ─── New section pages ─────────────────────────────────────────────────────────
const AdmissionsPage = lazy(() =>
  import("./pages/AdmissionsPage").then((m) => ({ default: m.default })),
);
const AcademicsPage = lazy(() =>
  import("./pages/AcademicsPage").then((m) => ({ default: m.default })),
);
const SchoolOfEngineeringPage = lazy(() =>
  import("./pages/SchoolOfEngineeringPage").then((m) => ({
    default: m.default,
  })),
);
const ResearchPage = lazy(() =>
  import("./pages/ResearchPage").then((m) => ({ default: m.default })),
);
const StudentLifePage = lazy(() =>
  import("./pages/StudentLifePage").then((m) => ({ default: m.default })),
);
const FacilitiesPage = lazy(() =>
  import("./pages/FacilitiesPage").then((m) => ({ default: m.default })),
);
const PlacementsPage = lazy(() =>
  import("./pages/PlacementsPage").then((m) => ({ default: m.default })),
);

// ─── Root ─────────────────────────────────────────────────────────────────────
const rootRoute = createRootRoute();

// ─── Existing routes (preserved) ──────────────────────────────────────────────
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <HomePage />
    </Suspense>
  ),
});

const dmsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/academics/schools/school-of-multidisciplinary-sciences/department-of-management-studies",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <DMSPage />
    </Suspense>
  ),
});

const facultyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/academics/schools/school-of-multidisciplinary-sciences/department-of-management-studies/faculty",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <FacultyPage />
    </Suspense>
  ),
});

const facultyProfileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faculty/$facultyId",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <FacultyProfilePage />
    </Suspense>
  ),
});

const boardOfGovernanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about-us/board-of-governance",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <BoardOfGovernancePage />
    </Suspense>
  ),
});

const authoritiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about-us/authorities-boards-committees",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AuthoritiesPage />
    </Suspense>
  ),
});

const aboutUniversityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about-us/about-university",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AboutUniversityPage />
    </Suspense>
  ),
});

const administrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/administration",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AdministrationPage />
    </Suspense>
  ),
});

const viceChancellorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/administration/vice-chancellor",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ViceChancellorPage />
    </Suspense>
  ),
});

const registrarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/administration/registrar",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <RegistrarPage />
    </Suspense>
  ),
});

const adminProfileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/administration/$adminId",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AdminProfilePage />
    </Suspense>
  ),
});

// ─── New section routes ────────────────────────────────────────────────────────

const admissionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admissions",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AdmissionsPage />
    </Suspense>
  ),
});

const admissionsSectionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admissions/$sectionId",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AdmissionsPage />
    </Suspense>
  ),
});

const academicsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/academics",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AcademicsPage />
    </Suspense>
  ),
});

const academicsSectionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/academics/$sectionId",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AcademicsPage />
    </Suspense>
  ),
});

const schoolOfEngineeringRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/academics/schools/school-of-engineering",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <SchoolOfEngineeringPage />
    </Suspense>
  ),
});

const schoolOfMultidisciplinaryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/academics/schools/school-of-multidisciplinary-sciences",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <DMSPage />
    </Suspense>
  ),
});

const researchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/research",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ResearchPage />
    </Suspense>
  ),
});

const researchSectionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/research/$sectionId",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ResearchPage />
    </Suspense>
  ),
});

const studentLifeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/student-life",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <StudentLifePage />
    </Suspense>
  ),
});

const studentLifeSectionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/student-life/$sectionId",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <StudentLifePage />
    </Suspense>
  ),
});

const facilitiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/facilities",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <FacilitiesPage />
    </Suspense>
  ),
});

const facilitiesSectionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/facilities/$sectionId",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <FacilitiesPage />
    </Suspense>
  ),
});

const placementsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/placements",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <PlacementsPage />
    </Suspense>
  ),
});

const placementsSectionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/placements/$sectionId",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <PlacementsPage />
    </Suspense>
  ),
});

// ─── Route tree ────────────────────────────────────────────────────────────────
const routeTree = rootRoute.addChildren([
  homeRoute,
  // DMS & faculty (specific paths before generic /academics/:sectionId)
  dmsRoute,
  facultyRoute,
  facultyProfileRoute,
  // About Us
  boardOfGovernanceRoute,
  authoritiesRoute,
  aboutUniversityRoute,
  // Administration
  administrationRoute,
  viceChancellorRoute,
  registrarRoute,
  adminProfileRoute,
  // New section pages — specific routes before parameterised ones
  admissionsRoute,
  admissionsSectionRoute,
  // School-specific routes (must come before /academics/$sectionId catch-all)
  schoolOfEngineeringRoute,
  schoolOfMultidisciplinaryRoute,
  // Academics generic must come after specific school paths
  academicsRoute,
  academicsSectionRoute,
  researchRoute,
  researchSectionRoute,
  studentLifeRoute,
  studentLifeSectionRoute,
  facilitiesRoute,
  facilitiesSectionRoute,
  placementsRoute,
  placementsSectionRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-full border-2 border-accent/30 border-t-accent animate-spin" />
        <p className="text-sm text-muted-foreground">Loading…</p>
      </div>
    </div>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
