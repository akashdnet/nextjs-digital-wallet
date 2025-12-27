import { BsCashCoin, BsPhoneFlip } from "react-icons/bs"
import { FaMoneyBillTrendUp } from "react-icons/fa6"
import { LuLayoutDashboard } from "react-icons/lu"


export const userMenu = [
    {
        title: "Overview",
        url: "/dashboard/overview",
        icon: LuLayoutDashboard,
    },
    {
        title: "Send Money",
        url: "/dashboard/send-money",
        icon: FaMoneyBillTrendUp,
    },
    {
        title: "Cash Out",
        url: "/dashboard/cash-out",
        icon: BsCashCoin,
    },
    {
        title: "Top Up",
        url: "/dashboard/top-up",
        icon: BsPhoneFlip,
    },]

