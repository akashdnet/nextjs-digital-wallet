
import { Separator } from "@/components/ui/separator";
import {
    Sidebar,
    SidebarContent
} from "@/components/ui/sidebar";
import Menu from "./Menu";
import { adminMenu, agentMenu, userMenu } from "./MenuList";
import SidebarFooterComponent from "./SidebarFooterComponent";
import SidebarLogo from "./SidebarLogo";



export default function AppSidebar() {
    return (
        <Sidebar>
            <SidebarLogo />
            <Separator />
            <SidebarContent>
                <Menu title="Admin Management" data={adminMenu} />
                <Menu title="Agent Management" data={agentMenu} />
                <Menu title="User Management" data={userMenu} />

            </SidebarContent>
            <Separator />
            <SidebarFooterComponent />
        </Sidebar>
    )
}