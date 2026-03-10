import {
  LayoutDashboard,
  Users,
  BookOpen,
  Settings,
  LogOut,
  MessageSquare,
  Calendar,
  CreditCard,
  GraduationCap,
  MessageCircleMore,
  UserCircle,
  Mail,
  Star,
  FileText,
  Clock,
} from "lucide-react";
import { TbSmartHome } from "react-icons/tb";
export const NAV_MENU = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Browse Tutors", href: "/browse-tutors" },
  // { id: 3, name: "Parents", href: "/" },
  // { id: 4, name: "Tutors", href: "/" },
  { id: 4, name: "About Us", href: "/about" },
  { id: 5, name: "FAQ’s", href: "/faq" },
];

export const NAV = {
  admin: [
    {
      id: 1,
      label: "Dashboard",
      href: "/admin/dashboard",
      Icon: TbSmartHome,
    },
    { id: 2, label: "Support", href: "/admin/chat", Icon: Mail, badge: 2 },
    { id: 3, label: "Tutor", href: "/admin/tutors", Icon: GraduationCap },
    { id: 4, label: "Parent", href: "/admin/parents", Icon: Users },
    { id: 5, label: "Payment", href: "/admin/payments", Icon: CreditCard },
    { id: 6, label: "Dispute", href: "/admin/disputes", Icon: MessageCircleMore },
    { id: 7, label: "Reviews", href: "/admin/reviews", Icon: Star },
    { id: 8, label: "Report", href: "/admin/reports", Icon: FileText },
    {
      id: 9,
      label: "Settings",
      href: "/admin/settings",
      Icon: Settings,
      submenus: [
        { id: 91, label: "Hero section", href: "/admin/settings/hero-section" },
        { id: 92, label: "Faq's", href: "/admin/settings/faqs" },
        { id: 93, label: "Contact Us", href: "/admin/settings/contact-us" },
        { id: 94, label: "About Us", href: "/admin/settings/about-us" },
        { id: 95, label: "Our Mission", href: "/admin/settings/our-mission" },
        { id: 96, label: "Terms & Conditions", href: "/admin/settings/terms-condition" },
      ]
    },
    { id: 10, label: "Logout", href: "/", Icon: LogOut },
  ],
  tutor: [
    {
      id: 1,
      label: "Dashboard",
      href: "/tutor/dashboard",
      Icon: TbSmartHome,
    },
    {
      id: 2,
      label: "Inbox",
      href: "/tutor/inbox",
      Icon: Mail,
      badge: 3,
      submenus: [
        {
          id: 21,
          label: "All Messages",
          href: "/tutor/all-messages",
          badge: 1,
        },
        { id: 22, label: "Students Messages", href: "/tutor/student-chat" },
        {
          id: 23,
          label: "New Lessons",
          href: "/tutor/lesson-requests",
          badge: 1,
        },
        { id: 24, label: "Disputes", href: "/tutor/dispute", badge: 1 },
        { id: 25, label: "Support", href: "/tutor/support", badge: 1 },
      ],
    },
    { id: 3, label: "Bookings", href: "/tutor/bookings", Icon: Calendar },
    {
      id: 4,
      label: "Students",
      href: "#",
      Icon: Users,
      submenus: [
        {
          id: 41,
          label: "Private Lesson",
          href: "/tutor/private-lesson",
          badge: 1,
        },
      ],
    },
    { id: 5, label: "Calendar", href: "/tutor/calendar", Icon: Calendar },
    { id: 6, label: "Timetables", href: "/tutor/timetables", Icon: Clock },
    { id: 7, label: "Reviews", href: "/tutor/review-page", Icon: Star },
    { id: 8, label: "Payments", href: "/tutor/payments", Icon: CreditCard },
    {
      id: 9,
      label: "Profile",
      href: "/tutor/profile",
      Icon: UserCircle,
      submenus: [
        { id: 91, label: "General", href: "/tutor/profile/general" },
        { id: 92, label: "Introduction", href: "/tutor/profile/introduction" },
        {
          id: 93,
          label: "Qualification",
          href: "/tutor/profile/qualification",
        },
        { id: 94, label: "Subjects", href: "/tutor/profile/subjects" },
        { id: 95, label: "Secure & ID", href: "/tutor/profile/secure-id" },
        { id: 96, label: "Ranking", href: "/tutor/profile/ranking" },
      ],
    },
    { id: 10, label: "Logout", href: "/auth/login", Icon: LogOut },
  ],
  student: [
    {
      id: 1,
      label: "Dashboard",
      href: "/student/dashboard",
      Icon: TbSmartHome,
    },
    {
      id: 2,
      label: "Inbox",
      href: "/student/chat",
      Icon: Mail,
      badge: 3,
    },
    { id: 3, label: "Timetables", href: "/student/time-table", Icon: Clock },
    // { id: 5, label: "Settings", href: "/student/settings", Icon: Settings },
    { id: 4, label: "Logout", href: "/", Icon: LogOut },
  ],
  parents: [
    {
      id: 1,
      label: "Dashboard",
      href: "/parents/dashboard",
      Icon: TbSmartHome,
    },
    {
      id: 2,
      label: "Inbox",
      // href: "/tutor/inbox",
      Icon: Mail,
      badge: 3,
      submenus: [
        {
          id: 21,
          label: "My Chat",
          href: "/parents/chat",
          badge: 1,
        },
        { id: 22, label: "Support", href: "/parents/support-chat", badge: 1 },
        { id: 24, label: "Disputes", href: "/parents/dispute-chat", badge: 1 },
      ],
    },
    {
      id: 3,
      label: "Tutors",
      href: "/parents/tutors",
      Icon: Users,
      submenus: [
        { id: 31, label: "All Tutors", href: "/parents/all-tutors" },
        { id: 32, label: "Favorite Tutors", href: "/parents/favorite-tutors" },
      ],
    },
    {
      id: 4,
      label: "Lessons",
      href: "/parents/lessons",
      Icon: GraduationCap,
      submenus: [
        { id: 41, label: "Upcoming Lessons", href: "/parents/upcoming-lesson" },
        { id: 42, label: "Past Lesson", href: "/parents/past-lessons" },
      ],
    },
    { id: 5, label: "Timetables", href: "/parents/time-table", Icon: Clock },
    {
      id: 6,
      label: "Reviews",
      href: "/parents/reviews",
      Icon: Star,
      submenus: [
        { id: 61, label: "My Tutors", href: "/parents/my-tutor" },
        { id: 62, label: "Reviews", href: "/parents/reviews" },
      ],
    },
    { id: 7, label: "Payment", href: "/parents/payment", Icon: CreditCard },
    { id: 8, label: "Dispute", href: "/parents/dispute", Icon: MessageCircleMore },
    {
      id: 9,
      label: "Profile",
      href: "/parents/profile",
      Icon: UserCircle,
      submenus: [
        { id: 91, label: "General", href: "/parents/general-profile" },
        { id: 92, label: "Security", href: "/parents/secure-id" },
      ],
    },
    { id: 10, label: "Logout", href: "/auth/login", Icon: LogOut },
  ],
};

export const HEADER_NAV = {
  default: [
    { id: 1, name: "About Us", href: "/about" },
    { id: 2, name: "Contact Us", href: "/contact" },
  ],
};
