import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout/Index.jsx";
import LandingLayout from "../layout/LandingLayout.jsx";
import AuthLayout from "../layout/AuthLayout.jsx";
import Test from "../pages/test.jsx";
import StudentMessagePage from "../pages/tenant/chat/student-message.jsx";
import DisputePage from "../pages/tenant/chat/dispute.jsx";
import TermCondition from "../pages/auth/term&condition.jsx";
import ClassDetailPage from "../pages/tenant/class-detail.jsx";
import UploadDocuments from "../pages/auth/UploadDocuments.jsx";
import YourQualifications from "../pages/auth/YourQualifications.jsx";
import AddCoreSubject from "../pages/auth/AddCoreSubject.jsx";
import YourAvailability from "../pages/auth/YourAvailability.jsx";
import ProfilePreviewPage from "../pages/auth/ProfilePreview.jsx";
import StripVerification from "../pages/auth/strip-verification.jsx";

const HomePage = lazy(() => import("../pages/Home.jsx"));
const LandingPage = lazy(() => import("../pages/landing-page/Home.jsx"));
const BrowseTenants = lazy(
  () => import("../pages/landing-page/BrowseTenant.jsx"),
);
const AboutPage = lazy(() => import("../pages/landing-page/About.jsx"));
const TenantDetail = lazy(
  () => import("../pages/landing-page/TenantDetail.jsx"),
);
const FaqPage = lazy(() => import("../pages/landing-page/faq.jsx"));
const Chat = lazy(() => import("../section/chat/index.jsx"));
const TypographyPage = lazy(() => import("../pages/typography.jsx"));
const AccountTypeSelection = lazy(
  () => import("../pages/auth/AccountTypeSelection.jsx"),
);
const TenantRegister = lazy(() => import("../pages/auth/TenantRegister.jsx"));
const EnterOtp = lazy(() => import("../pages/auth/EnterOtp.jsx"));
const EmailConfirmed = lazy(() => import("../pages/auth/EmailConfirmed.jsx"));
const TwoFactorAuth = lazy(() => import("../pages/auth/TwoFactorAuth.jsx"));
const Login = lazy(() => import("../pages/auth/Login.jsx"));
const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword.jsx"));
const NewPassword = lazy(() => import("../pages/auth/NewPassword.jsx"));
const CreateTenantProfile = lazy(
  () => import("../pages/auth/CreateTenantProfile.jsx"),
);
const IntroductionVideo = lazy(
  () => import("../pages/auth/IntroductionVideo.jsx"),
);
const AllMessagesPage = lazy(
  () => import("../pages/tenant/chat/all-messages.jsx"),
);
const LessonRequestsPage = lazy(
  () => import("../pages/tenant/chat/lesson-requests.jsx"),
);
const BookingsPage = lazy(() => import("../pages/tenant/Bookings.jsx"));
const PrivateLessonPage = lazy(
  () => import("../pages/tenant/students/private-lesson/index.jsx"),
);
const CalendarPage = lazy(
  () => import("../section/tenant-portal/calendar/index.jsx"),
);
const ReviewPage = lazy(() => import("../pages/tenant/review-page.jsx"));
const PaymentsPage = lazy(() => import("../pages/tenant/Payments.jsx"));
const ProfileGeneralPage = lazy(
  () => import("../pages/tenant/profile/General.jsx"),
);
const ProfileIntroductionPage = lazy(
  () => import("../pages/tenant/profile/Introduction.jsx"),
);
const ProfileQualificationPage = lazy(
  () => import("../pages/tenant/profile/Qualification.jsx"),
);
const ProfileSubjectsPage = lazy(
  () => import("../pages/tenant/profile/Subjects.jsx"),
);
const ProfileSecureIDPage = lazy(
  () => import("../pages/tenant/profile/SecureID.jsx"),
);
const ProfileRankingPage = lazy(
  () => import("../pages/tenant/profile/Ranking.jsx"),
);

//admin
const AdminChatPage = lazy(() => import("../pages/admin/admin-chat.jsx"));
const TenantAdminPage = lazy(
  () => import("../pages/admin/tenant-page-admin.jsx"),
);
const TenantAdminDetail = lazy(
  () => import("../pages/admin/tenant-detail-admin.jsx"),
);
const LaundryAdminPage = lazy(() => import("../pages/admin/laundry-page.jsx"));
const LaundryAdminDetail = lazy(
  () => import("../pages/admin/laundry-detail-admin.jsx"),
);
const PaymentPage = lazy(() => import("../pages/admin/payment-page.jsx"));
const AdminDisputePage = lazy(() => import("../pages/admin/dispute-page.jsx"));
const AdminDisputeDetailPage = lazy(
  () => import("../pages/admin/dispute-detail.jsx"),
);
const ReviewPageAdmin = lazy(() => import("../pages/admin/review-page.jsx"));
const AdminReportsPage = lazy(() => import("../pages/admin/report-page.jsx"));
const HeroSectionPage = lazy(
  () => import("../pages/admin/settings/hero-section.jsx"),
);
const SupportChatPageTenant = lazy(
  () => import("../pages/tenant/chat/support.jsx"),
);
const AdminFaqPage = lazy(() => import("../pages/admin/settings/faq.jsx"));
const AdminAboutUsPage = lazy(
  () => import("../pages/admin/settings/about-us.jsx"),
);
const AdminOurMissionPage = lazy(
  () => import("../pages/admin/settings/our-mission.jsx"),
);
const AdminContactUsPage = lazy(
  () => import("../pages/admin/settings/contact-us.jsx"),
);
const AdminTermsConditionsPage = lazy(
  () => import("../pages/admin/settings/terms-conditions.jsx"),
);

//Student
const StudentChatPage = lazy(() => import("../pages/student/student-chat.jsx"));
const TimeTablePage = lazy(() => import("../pages/student/time-table.jsx"));

//laundry
const MyChatPage = lazy(() => import("../pages/laundry/chat/my-chat-page.jsx"));
const SupportChatPage = lazy(
  () => import("../pages/laundry/chat/support-chat.jsx"),
);
const DisputeChatPage = lazy(
  () => import("../pages/laundry/chat/dispute-chat.jsx"),
);
const AllTenantPage = lazy(
  () => import("../pages/laundry/all-tenant-page.jsx"),
);
const FavoriteTenantPage = lazy(
  () => import("../pages/laundry/favorite-tenant-page.jsx"),
);
const UpcomingLessonPage = lazy(
  () => import("../pages/laundry/upcoming-lesson-page.jsx"),
);
const PastLessonPage = lazy(
  () => import("../pages/laundry/past-lesson-page.jsx"),
);
const TimetablePage = lazy(() => import("../pages/laundry/timetable-page.jsx"));
const MyTenantLaundryPage = lazy(
  () => import("../pages/laundry/my-tenant-laundry.jsx"),
);
const ReviewLaundryPage = lazy(
  () => import("../pages/laundry/reviews-page.jsx"),
);
const LaundryPaymentPage = lazy(
  () => import("../pages/laundry/payment-page.jsx"),
);
const GeneralProfilePageLaundry = lazy(
  () => import("../pages/laundry/general-profile-page.jsx"),
);
const LaundrySecureIDPage = lazy(
  () => import("../pages/laundry/secure-id-page.jsx"),
);
const LaundryDisputePage = lazy(
  () => import("../pages/laundry/dispute-page.jsx"),
);
const UpcomingLessonDetailsPage = lazy(
  () => import("../pages/laundry/upcoming-lesson-details.jsx"),
);
const PastLessonDetailsPage = lazy(
  () => import("../pages/laundry/past-lesson-details.jsx"),
);
// Portal components
const AdminDashboardPage = lazy(() => import("../pages/admin/Dashboard.jsx"));
const TenantDashboardPage = lazy(() => import("../pages/tenant/Dashboard.jsx"));
const StudentDashboardPage = lazy(
  () => import("../pages/student/dashboard.jsx"),
);
const StudentOrderDetailsPage = lazy(
  () => import("../pages/student/order-details.jsx"),
);
const LaundryDashboardPage = lazy(
  () => import("../pages/laundry/dashboard.jsx"),
);

const NotFound = lazy(() => import("../pages/NotFound.jsx"));

const TenantLoginPage = lazy(() => import("../pages/auth/TenantLoginPage.jsx"));
const AdminLoginPage = lazy(() => import("../pages/auth/AdminLoginPage.jsx"));
const LaundryLoginPage = lazy(
  () => import("../pages/auth/LaundryLoginPage.jsx"),
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          {/* Landing Pages */}
          <Route element={<LandingLayout />}>
            <Route index element={<Navigate to="/auth/admin-login" replace />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/browse-tenants" element={<BrowseTenants />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tenant/:slug" element={<TenantDetail />} />
            <Route path="/faq" element={<FaqPage />} />
          </Route>

          {/* Auth Pages */}
          <Route element={<AuthLayout />}>
            {/* <Route
                path="/auth/account-type"
                element={<AccountTypeSelection />}
              /> */}

            <Route path="/auth/tenant-login" element={<TenantLoginPage />} />
            <Route path="/auth/admin-login" element={<AdminLoginPage />} />
            <Route path="/auth/laundry-login" element={<LaundryLoginPage />} />
            <Route
              path="/auth/register/tenant"
              element={<TenantRegister role="tenant" />}
            />
            <Route
              path="/auth/register/laundry"
              element={<TenantRegister role="laundry" />}
            />
            <Route path="/auth/verify-otp" element={<EnterOtp />} />
            <Route path="/auth/email-confirmed" element={<EmailConfirmed />} />
            <Route path="/auth/2fa" element={<TwoFactorAuth />} />
            {/* <Route path="/auth/login" element={<Login />} /> */}
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/auth/new-password" element={<NewPassword />} />
            <Route
              path="/auth/create-tenant-profile"
              element={<CreateTenantProfile />}
            />
            <Route
              path="/auth/introduction-video"
              element={<IntroductionVideo />}
            />
            <Route
              path="/auth/upload-documents"
              element={<UploadDocuments />}
            />
            <Route
              path="/auth/your-qualifications"
              element={<YourQualifications />}
            />
            <Route path="/auth/add-core-subject" element={<AddCoreSubject />} />
            <Route
              path="/auth/your-availability"
              element={<YourAvailability />}
            />
            <Route
              path="/auth/strip-verification"
              element={<StripVerification />}
            />
            <Route
              path="/auth/profile-preview"
              element={<ProfilePreviewPage />}
            />

            <Route path="/auth/term-condition" element={<TermCondition />} />
          </Route>

          {/* Client Portal */}
          <Route path="/app" element={<Layout portal="client" />}>
            <Route index element={<Navigate to="/app/dashboard" replace />} />
            <Route path="dashboard" element={<HomePage />} />
            <Route path="chat" element={<Chat />} />
            <Route path="typography" element={<TypographyPage />} />
          </Route>

          {/* Admin Portal */}
          <Route path="/admin/" element={<Layout portal="admin" />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboardPage />} />
            <Route path="chat" element={<AdminChatPage />} />
            <Route path="tenants" element={<TenantAdminPage />} />
            <Route path="tenant/:slug" element={<TenantAdminDetail />} />
            <Route path="laundries" element={<LaundryAdminPage />} />
            <Route path="laundries/:slug" element={<LaundryAdminDetail />} />
            <Route path="payments" element={<PaymentPage />} />
            <Route path="disputes" element={<AdminDisputePage />} />
            <Route path="disputes/:id" element={<AdminDisputeDetailPage />} />
            <Route path="reviews" element={<ReviewPageAdmin />} />
            <Route path="reports" element={<AdminReportsPage />} />
            <Route path="settings/hero-section" element={<HeroSectionPage />} />
            <Route path="settings/faqs" element={<AdminFaqPage />} />
            <Route path="settings/about-us" element={<AdminAboutUsPage />} />
            <Route
              path="settings/our-mission"
              element={<AdminOurMissionPage />}
            />
            <Route
              path="settings/contact-us"
              element={<AdminContactUsPage />}
            />
            <Route
              path="settings/terms-condition"
              element={<AdminTermsConditionsPage />}
            />
          </Route>

          {/* Tenant Portal */}
          <Route path="/tenant" element={<Layout portal="tenant" />}>
            <Route
              index
              element={<Navigate to="/tenant/dashboard" replace />}
            />
            <Route path="dashboard" element={<TenantDashboardPage />} />
            <Route path="all-messages" element={<AllMessagesPage />} />
            <Route path="student-chat" element={<StudentMessagePage />} />
            <Route path="lesson-requests" element={<LessonRequestsPage />} />
            <Route path="dispute" element={<DisputePage />} />
            <Route path="bookings" element={<BookingsPage />} />
            <Route path="class-detail" element={<ClassDetailPage />} />
            <Route path="private-lesson" element={<PrivateLessonPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="review-page" element={<ReviewPage />} />
            <Route path="payments" element={<PaymentsPage />} />
            <Route path="support" element={<SupportChatPageTenant />} />

            {/* Profile Nested Routes */}
            <Route path="profile">
              <Route
                index
                element={<Navigate to="/tenant/profile/general" replace />}
              />
              <Route path="general" element={<ProfileGeneralPage />} />
              <Route
                path="introduction"
                element={<ProfileIntroductionPage />}
              />
              <Route
                path="qualification"
                element={<ProfileQualificationPage />}
              />
              <Route path="subjects" element={<ProfileSubjectsPage />} />
              <Route path="secure-id" element={<ProfileSecureIDPage />} />
              <Route path="ranking" element={<ProfileRankingPage />} />
            </Route>
          </Route>

          {/* Student Portal */}
          <Route path="/student" element={<Layout portal="student" />}>
            <Route
              index
              element={<Navigate to="/student/dashboard" replace />}
            />
            <Route path="dashboard" element={<StudentDashboardPage />} />
            <Route path="order-details" element={<StudentOrderDetailsPage />} />
            <Route path="chat" element={<StudentChatPage />} />
            <Route path="time-table" element={<TimeTablePage />} />
          </Route>

          {/* Laundry Portal */}
          <Route path="/laundries" element={<Layout portal="laundries" />}>
            <Route
              index
              element={<Navigate to="/laundries/dashboard" replace />}
            />
            <Route path="dashboard" element={<LaundryDashboardPage />} />
            <Route path="chat" element={<MyChatPage />} />
            <Route path="support-chat" element={<SupportChatPage />} />
            <Route path="dispute-chat" element={<DisputeChatPage />} />
            <Route path="all-tenants" element={<AllTenantPage />} />
            <Route path="favorite-tenants" element={<FavoriteTenantPage />} />
            <Route path="time-table" element={<TimetablePage />} />
            <Route path="upcoming-lesson" element={<UpcomingLessonPage />} />
            <Route path="past-lessons" element={<PastLessonPage />} />
            <Route path="my-tenant" element={<MyTenantLaundryPage />} />
            <Route path="reviews" element={<ReviewLaundryPage />} />
            <Route path="payment" element={<LaundryPaymentPage />} />
            <Route
              path="general-profile"
              element={<GeneralProfilePageLaundry />}
            />
            <Route path="secure-id" element={<LaundrySecureIDPage />} />
            <Route path="dispute" element={<LaundryDisputePage />} />
            <Route
              path="upcoming-lesson-details"
              element={<UpcomingLessonDetailsPage />}
            />
            <Route
              path="past-lesson-details"
              element={<PastLessonDetailsPage />}
            />
          </Route>

          {/* Test Route */}
          <Route path="/test" element={<Test />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
