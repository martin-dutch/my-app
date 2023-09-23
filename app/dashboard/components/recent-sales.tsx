import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Final check on pre-op needs</p>
          {/* <p className="text-sm text-muted-foreground">
            olivia.martin@email.com
          </p> */}
        </div>
        <div className="ml-auto font-medium">Sept 20</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">Confirmation of appointment</p>
          {/* <p className="text-sm text-muted-foreground">jackson.lee@email.com</p> */}
        </div>
        <div className="ml-auto font-medium">Sept 19</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">Exercice program 3</p>
          {/* <p className="text-sm text-muted-foreground">
            isabella.nguyen@email.com
          </p> */}
        </div>
        <div className="ml-auto font-medium">Sept 18</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">Exercice program 2</p>
          {/* <p className="text-sm text-muted-foreground">will@email.com</p> */}
        </div>
        <div className="ml-auto font-medium">Sept 15</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">Exercice program 1</p>
          {/* <p className="text-sm text-muted-foreground">sofia.davis@email.com</p> */}
        </div>
        <div className="ml-auto font-medium">Sept 13</div>
      </div>
    </div>
  )
}
