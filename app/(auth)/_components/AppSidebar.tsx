
import { Button } from "@/components/ui/button";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter
} from "@/components/ui/sidebar";
import Menu from "./Menu";
import { adminMenu, agentMenu, userMenu } from "./MenuList";
import SidebarHeaderComponent from "./SidebarHeader";




export default function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeaderComponent />
            <SidebarContent>
                <Menu title="Admin Management" data={adminMenu} />
                <Menu title="Agent Management" data={agentMenu} />
                <Menu title="User Management" data={userMenu} />

            </SidebarContent>
            <SidebarFooter>
                <Button variant="destructive" className="font-bold">Logout</Button>
            </SidebarFooter>
        </Sidebar>
    )
}