
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { SidebarFooter } from '@/components/ui/sidebar'
import { Avatar } from '@radix-ui/react-avatar'

export default function SidebarFooterComponent() {
    return (
        <SidebarFooter>
            <div className="flex items-center gap-3 p-3 bg-gray-50 border-b">
                {/* Profile Image */}
                <Avatar className='w-16 h-16 rounded-full'>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>Avatar</AvatarFallback>
                </Avatar>

                {/* User Info */}
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-800">
                        Abdullah
                    </span>

                    {/* Role with subtle highlight */}
                    <span className="inline-block text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-600 font-medium w-fit">
                        Admin
                    </span>

                    <span className="text-xs text-gray-500">
                        abdullah@example.com
                    </span>
                </div>
            </div>
            <Button variant="destructive" className="font-bold">Logout</Button>
        </SidebarFooter>
    )
}
