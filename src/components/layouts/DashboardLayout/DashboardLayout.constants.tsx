import {
  CiBookmark,
  CiGrid41,
  CiSettings,
  CiShoppingTag,
  CiViewList,
  CiWallet,
} from "react-icons/ci";

const SIDEBAR_ADMIN = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/admin",
    icon: <CiGrid41 />,
  },
  {
    key: "event",
    label: "Events",
    href: "/admin/event",
    icon: <CiViewList />,
  },
  {
    key: "category",
    label: "Category",
    href: "/admin/category",
    icon: <CiShoppingTag />,
  },
  {
    key: "banner",
    label: "Banner",
    href: "/admin/banner",
    icon: <CiBookmark />,
  },
  {
    key: "transaction",
    label: "Transactions",
    href: "/admin/transactions",
    icon: <CiWallet />,
  },
];

const SIDEBAR_MEMBER = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/member",
    icon: <CiGrid41 />,
  },
  {
    key: "setting",
    label: "Settings",
    href: "/member/settings",
    icon: <CiSettings />,
  },
  {
    key: "transaction",
    label: "Transactions",
    href: "/member/transactions",
    icon: <CiWallet />,
  },
];

export { SIDEBAR_ADMIN, SIDEBAR_MEMBER };
