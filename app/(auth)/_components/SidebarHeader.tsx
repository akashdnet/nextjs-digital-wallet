import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { SidebarHeader } from '@/components/ui/sidebar'

export default function SidebarHeaderComponent() {
    return (
        <SidebarHeader>
            <div className="flex items-center gap-3 p-3 bg-gray-50 border-b">
                {/* Profile Image */}
                <Avatar className='w-16 h-16'>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
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
        </SidebarHeader>
    )
}
