
import { Button } from "@/components/ui/button";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader
} from "@/components/ui/sidebar";
import Menu from "./Menu";
import { userMenu } from "./MenuList";




export default function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <h1 className="text-2xl font-bold">Dashboard</h1>
            </SidebarHeader>
            <SidebarContent>
                <Menu title="Admin Management" data={[]} />
                <Menu title="Agent Management" data={[]} />
                <Menu title="User Management" data={userMenu} />

            </SidebarContent>
            <SidebarFooter>
                <Button variant="destructive" className="font-bold">Logout</Button>
            </SidebarFooter>
        </Sidebar>
    )
}