import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout/Index.jsx";
import LandingLayout from "../layout/LandingLayout.jsx";
import AuthLayout from "../layout/AuthLayout.jsx";
import Test from "../pages/test.jsx";
import StudentMessagePage from "../pages/tutor/chat/student-message.jsx";
import DisputePage from "../pages/tutor/chat/dispute.jsx";
import TermCondition from "../pages/auth/term&condition.jsx";
import ClassDetailPage from "../pages/tutor/class-detail.jsx";
import UploadDocuments from "../pages/auth/UploadDocuments.jsx";
import YourQualifications from "../pages/auth/YourQualifications.jsx";
import AddCoreSubject from "../pages/auth/AddCoreSubject.jsx";
import YourAvailability from "../pages/auth/YourAvailability.jsx";
import ProfilePreviewPage from "../pages/auth/ProfilePreview.jsx";
import StripVerification from "../pages/auth/strip-verification.jsx";

const HomePage = lazy(() => import("../pages/Home.jsx"));
const LandingPage = lazy(() => import("../pages/landing-page/Home.jsx"));
const BrowseTutors = lazy(
  () => import("../pages/landing-page/BrowseTutor.jsx"),
);
const AboutPage = lazy(() => import("../pages/landing-page/About.jsx"));
const TutorDetail = lazy(() => import("../pages/landing-page/TutorDetail.jsx"));
const FaqPage = lazy(() => import("../pages/landing-page/faq.jsx"));
const Chat = lazy(() => import("../section/chat/index.jsx"));
const TypographyPage = lazy(() => import("../pages/typography.jsx"));
const AccountTypeSelection = lazy(
  () => import("../pages/auth/AccountTypeSelection.jsx"),
);
const TutorRegister = lazy(() => import("../pages/auth/TutorRegister.jsx"));
const EnterOtp = lazy(() => import("../pages/auth/EnterOtp.jsx"));
const EmailConfirmed = lazy(() => import("../pages/auth/EmailConfirmed.jsx"));
const TwoFactorAuth = lazy(() => import("../pages/auth/TwoFactorAuth.jsx"));
const Login = lazy(() => import("../pages/auth/Login.jsx"));
const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword.jsx"));
const NewPassword = lazy(() => import("../pages/auth/NewPassword.jsx"));
const CreateTutorProfile = lazy(
  () => import("../pages/auth/CreateTutorProfile.jsx"),
);
const IntroductionVideo = lazy(
  () => import("../pages/auth/IntroductionVideo.jsx"),
);
const AllMessagesPage = lazy(
  () => import("../pages/tutor/chat/all-messages.jsx"),
);
const LessonRequestsPage = lazy(
  () => import("../pages/tutor/chat/lesson-requests.jsx"),
);
const BookingsPage = lazy(() => import("../pages/tutor/Bookings.jsx"));
const PrivateLessonPage = lazy(
  () => import("../pages/tutor/students/private-lesson/index.jsx"),
);
const CalendarPage = lazy(
  () => import("../section/tutor-portal/calendar/index.jsx"),
);
const ReviewPage = lazy(() => import("../pages/tutor/review-page.jsx"));
const PaymentsPage = lazy(() => import("../pages/tutor/Payments.jsx"));
const ProfileGeneralPage = lazy(
  () => import("../pages/tutor/profile/General.jsx"),
);
const ProfileIntroductionPage = lazy(
  () => import("../pages/tutor/profile/Introduction.jsx"),
);
const ProfileQualificationPage = lazy(
  () => import("../pages/tutor/profile/Qualification.jsx"),
);
const ProfileSubjectsPage = lazy(
  () => import("../pages/tutor/profile/Subjects.jsx"),
);
const ProfileSecureIDPage = lazy(
  () => import("../pages/tutor/profile/SecureID.jsx"),
);
const ProfileRankingPage = lazy(
  () => import("../pages/tutor/profile/Ranking.jsx"),
);

//admin
const AdminChatPage = lazy(() => import("../pages/admin/admin-chat.jsx"));
const TutorAdminPage = lazy(
  () => import("../pages/admin/tutor-page-admin.jsx"),
);
const TutorAdminDetail = lazy(
  () => import("../pages/admin/tutor-detail-admin.jsx"),
);
const ParentAdminPage = lazy(() => import("../pages/admin/parent-page.jsx"));
const ParentAdminDetail = lazy(
  () => import("../pages/admin/parent-detail-admin.jsx"),
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
const SupportChatPageTutor = lazy(
  () => import("../pages/tutor/chat/support.jsx"),
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

//parent
const MyChatPage = lazy(() => import("../pages/parent/chat/my-chat-page.jsx"));
const SupportChatPage = lazy(
  () => import("../pages/parent/chat/support-chat.jsx"),
);
const DisputeChatPage = lazy(
  () => import("../pages/parent/chat/dispute-chat.jsx"),
);
const AllTutorPage = lazy(() => import("../pages/parent/all-tutor-page.jsx"));
const FavoriteTutorPage = lazy(
  () => import("../pages/parent/favorite-tutor-page.jsx"),
);
const UpcomingLessonPage = lazy(
  () => import("../pages/parent/upcoming-lesson-page.jsx"),
);
const PastLessonPage = lazy(() => import("../pages/parent/past-lesson-page.jsx"));
const TimetablePage = lazy(() => import("../pages/parent/timetable-page.jsx"));
const MyTutorParentPage = lazy(() => import("../pages/parent/my-tutor-parent.jsx"));
const ReviewParentPage = lazy(() => import("../pages/parent/reviews-page.jsx"));
const ParentPaymentPage = lazy(() => import("../pages/parent/payment-page.jsx"));
const GeneralProfilePageParent = lazy(() => import("../pages/parent/general-profile-page.jsx"));
const ParentSecureIDPage = lazy(() => import("../pages/parent/secure-id-page.jsx"));
const ParentDisputePage = lazy(() => import("../pages/parent/dispute-page.jsx"));
const UpcomingLessonDetailsPage = lazy(() => import("../pages/parent/upcoming-lesson-details.jsx"));
const PastLessonDetailsPage = lazy(() => import("../pages/parent/past-lesson-details.jsx"));
// Portal components
const AdminDashboardPage = lazy(() => import("../pages/admin/Dashboard.jsx"));
const TutorDashboardPage = lazy(() => import("../pages/tutor/Dashboard.jsx"));
const StudentDashboardPage = lazy(
  () => import("../pages/student/dashboard.jsx"),
);
const StudentOrderDetailsPage = lazy(
  () => import("../pages/student/order-details.jsx"),
);
const ParentDashboardPage = lazy(() => import("../pages/parent/dashboard.jsx"));

const NotFound = lazy(() => import("../pages/NotFound.jsx"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
            {/* Landing Pages */}
            <Route element={<LandingLayout />}>
              <Route index element={<Navigate to="/auth/login" replace />} />
              <Route path="/home" element={<LandingPage />} />
              <Route path="/browse-tutors" element={<BrowseTutors />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/tutor/:slug" element={<TutorDetail />} />
              <Route path="/faq" element={<FaqPage />} />
            </Route>

            {/* Auth Pages */}
            <Route element={<AuthLayout />}>
              <Route
                path="/auth/account-type"
                element={<AccountTypeSelection />}
              />
              <Route
                path="/auth/register/tutor"
                element={<TutorRegister role="tutor" />}
              />
              <Route
                path="/auth/register/parent"
                element={<TutorRegister role="parent" />}
              />
              <Route path="/auth/verify-otp" element={<EnterOtp />} />
              <Route
                path="/auth/email-confirmed"
                element={<EmailConfirmed />}
              />
              <Route path="/auth/2fa" element={<TwoFactorAuth />} />
              <Route path="/auth/login" element={<Login />} />
              <Route
                path="/auth/forgot-password"
                element={<ForgotPassword />}
              />
              <Route path="/auth/new-password" element={<NewPassword />} />
              <Route
                path="/auth/create-tutor-profile"
                element={<CreateTutorProfile />}
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
              <Route
                path="/auth/add-core-subject"
                element={<AddCoreSubject />}
              />
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
            <Route path="/admin" element={<Layout portal="admin" />}>
              <Route
                index
                element={<Navigate to="/admin/dashboard" replace />}
              />
              <Route path="dashboard" element={<AdminDashboardPage />} />
              <Route path="chat" element={<AdminChatPage />} />
              <Route path="tutors" element={<TutorAdminPage />} />
              <Route path="tutor/:slug" element={<TutorAdminDetail />} />
              <Route path="parents" element={<ParentAdminPage />} />
              <Route path="parents/:slug" element={<ParentAdminDetail />} />
              <Route path="payments" element={<PaymentPage />} />
              <Route path="disputes" element={<AdminDisputePage />} />
              <Route path="disputes/:id" element={<AdminDisputeDetailPage />} />
              <Route path="reviews" element={<ReviewPageAdmin />} />
              <Route path="reports" element={<AdminReportsPage />} />
              <Route
                path="settings/hero-section"
                element={<HeroSectionPage />}
              />
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

            {/* Tutor Portal */}
            <Route path="/tutor" element={<Layout portal="tutor" />}>
              <Route
                index
                element={<Navigate to="/tutor/dashboard" replace />}
              />
              <Route path="dashboard" element={<TutorDashboardPage />} />
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
              <Route path="support" element={<SupportChatPageTutor />} />

              {/* Profile Nested Routes */}
              <Route path="profile">
                <Route
                  index
                  element={<Navigate to="/tutor/profile/general" replace />}
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

            {/* Parent Portal */}
            <Route path="/parents" element={<Layout portal="parents" />}>
              <Route
                index
                element={<Navigate to="/parents/dashboard" replace />}
              />
              <Route path="dashboard" element={<ParentDashboardPage />} />
              <Route path="chat" element={<MyChatPage />} />
              <Route path="support-chat" element={<SupportChatPage />} />
              <Route path="dispute-chat" element={<DisputeChatPage />} />
              <Route path="all-tutors" element={<AllTutorPage />} />
              <Route path="favorite-tutors" element={<FavoriteTutorPage />} />
              <Route path="time-table" element={<TimetablePage />} />
              <Route path="upcoming-lesson" element={<UpcomingLessonPage />} />
              <Route path="past-lessons" element={<PastLessonPage />} />
              <Route path="my-tutor" element={<MyTutorParentPage />} />
              <Route path="reviews" element={<ReviewParentPage />} />
              <Route path="payment" element={<ParentPaymentPage />} />
              <Route path="general-profile" element={<GeneralProfilePageParent />} />
              <Route path="secure-id" element={<ParentSecureIDPage />} />
              <Route path="dispute" element={<ParentDisputePage />} />
              <Route path="upcoming-lesson-details" element={<UpcomingLessonDetailsPage />} />
              <Route path="past-lesson-details" element={<PastLessonDetailsPage />} />
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
