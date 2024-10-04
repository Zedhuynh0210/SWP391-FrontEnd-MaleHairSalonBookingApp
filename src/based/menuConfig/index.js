import { HeaderIcon } from "../icon/configIcon";

const MenuHeader = [
  {
    id: 1,
    link: "/",
    name: "Trang chủ",
    icon: <HeaderIcon.Home />,
  },
  {
    id: 2,
    link: "/speaking",
    name: "Nói",
    icon: <HeaderIcon.Speaking />,
  },
  // {
  //   id: 4,
  //   link: "/listen",
  //   name: "Nghe",
  //   icon: <HeaderIcon.Listen />,
  // },
  {
    id: 3,
    link: "/word",
    name: "Từ vựng",
    icon: <HeaderIcon.Word />,
  },

  {
    id: 4,
    link: "/practice",
    name: "Ôn tập",
    icon: <HeaderIcon.Practice />,
  },
];

export { MenuHeader };
