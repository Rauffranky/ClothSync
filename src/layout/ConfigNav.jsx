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
  { id: 2, name: "Browse Tenants", href: "/browse-tenants" },
  // { id: 3, name: "Laundries", href: "/" },
  // { id: 4, name: "Tenants", href: "/" },
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
    // { id: 2, label: "Support", href: "/admin/chat", Icon: Mail, badge: 2 },
    { id: 3, label: "Tenant", href: "/admin/tenants", Icon: GraduationCap },
    { id: 4, label: "Laundry", href: "/admin/laundries", Icon: Users },
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
  tenant: [
    {
      id: 1,
      label: "Dashboard",
      href: "/tenant/dashboard",
      Icon: TbSmartHome,
    },
    // {
    //   id: 2,
    //   label: "Inbox",
    //   href: "/tenant/inbox",
    //   Icon: Mail,
    //   badge: 3,
    //   submenus: [
    //     {
    //       id: 21,
    //       label: "All Messages",
    //       href: "/tenant/all-messages",
    //       badge: 1,
    //     },
    //     { id: 22, label: "Students Messages", href: "/tenant/student-chat" },
    //     {
    //       id: 23,
    //       label: "New Lessons",
    //       href: "/tenant/lesson-requests",
    //       badge: 1,
    //     },
    //     { id: 24, label: "Disputes", href: "/tenant/dispute", badge: 1 },
    //     { id: 25, label: "Support", href: "/tenant/support", badge: 1 },
    //   ],
    // },
    { id: 3, label: "Bookings", href: "/tenant/bookings", Icon: Calendar },
    // {
    //   id: 4,
    //   label: "Students",
    //   href: "#",
    //   Icon: Users,
    //   submenus: [
    //     {
    //       id: 41,
    //       label: "Private Lesson",
    //       href: "/tenant/private-lesson",
    //       badge: 1,
    //     },
    //   ],
    // },
    // { id: 5, label: "Calendar", href: "/tenant/calendar", Icon: Calendar },
    // { id: 6, label: "Timetables", href: "/tenant/timetables", Icon: Clock },
    // { id: 7, label: "Reviews", href: "/tenant/review-page", Icon: Star },
    { id: 8, label: "Payments", href: "/tenant/payments", Icon: CreditCard },
    {
      id: 9,
      label: "Profile",
      href: "/tenant/profile",
      Icon: UserCircle,
      submenus: [
        { id: 91, label: "General", href: "/tenant/profile/general" },
        { id: 92, label: "Introduction", href: "/tenant/profile/introduction" },
        {
          id: 93,
          label: "Qualification",
          href: "/tenant/profile/qualification",
        },
        { id: 94, label: "Subjects", href: "/tenant/profile/subjects" },
        { id: 95, label: "Secure & ID", href: "/tenant/profile/secure-id" },
        { id: 96, label: "Ranking", href: "/tenant/profile/ranking" },
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
  laundries: [
    {
      id: 1,
      label: "Dashboard",
      href: "/laundries/dashboard",
      Icon: TbSmartHome,
    },
    {
      id: 2,
      label: "Inbox",
      // href: "/tenant/inbox",
      Icon: Mail,
      badge: 3,
      submenus: [
        {
          id: 21,
          label: "My Chat",
          href: "/laundries/chat",
          badge: 1,
        },
        { id: 22, label: "Support", href: "/laundries/support-chat", badge: 1 },
        { id: 24, label: "Disputes", href: "/laundries/dispute-chat", badge: 1 },
      ],
    },
    {
      id: 3,
      label: "Tenants",
      href: "/laundries/tenants",
      Icon: Users,
      submenus: [
        { id: 31, label: "All Tenants", href: "/laundries/all-tenants" },
        { id: 32, label: "Favorite Tenants", href: "/laundries/favorite-tenants" },
      ],
    },
    {
      id: 4,
      label: "Lessons",
      href: "/laundries/lessons",
      Icon: GraduationCap,
      submenus: [
        { id: 41, label: "Upcoming Lessons", href: "/laundries/upcoming-lesson" },
        { id: 42, label: "Past Lesson", href: "/laundries/past-lessons" },
      ],
    },
    { id: 5, label: "Timetables", href: "/laundries/time-table", Icon: Clock },
    {
      id: 6,
      label: "Reviews",
      href: "/laundries/reviews",
      Icon: Star,
      submenus: [
        { id: 61, label: "My Tenants", href: "/laundries/my-tenant" },
        { id: 62, label: "Reviews", href: "/laundries/reviews" },
      ],
    },
    { id: 7, label: "Payment", href: "/laundries/payment", Icon: CreditCard },
    { id: 8, label: "Dispute", href: "/laundries/dispute", Icon: MessageCircleMore },
    {
      id: 9,
      label: "Profile",
      href: "/laundries/profile",
      Icon: UserCircle,
      submenus: [
        { id: 91, label: "General", href: "/laundries/general-profile" },
        { id: 92, label: "Security", href: "/laundries/secure-id" },
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
