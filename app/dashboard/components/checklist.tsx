import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
  
  export function Checklist() {
    return (
      <div className="space-y-8">
        <div className="flex items-center">
        <Checkbox id="terms1" className="scale-4" />   
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Full Blood Count</p>
            {/* <p className="text-sm text-muted-foreground">
              olivia.martin@email.com
            </p> */}
          </div>
          <div className="ml-auto font-medium"><Button>Enquire</Button></div>
        </div>
        <div className="flex items-center">
        <Checkbox id="terms1" className="scale-4" checked />   
          <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">CT Scan</p>
            {/* <p className="text-sm text-muted-foreground">jackson.lee@email.com</p> */}
          </div>
          <div className="ml-auto font-medium">Sept 9</div>
        </div>
        <div className="flex items-center">
        <Checkbox id="terms1" className="scale-4" checked />   
          <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Urea and Electrolytes</p>
            {/* <p className="text-sm text-muted-foreground">jackson.lee@email.com</p> */}
          </div>
          <div className="ml-auto font-medium">Sept 9</div>
        </div>
        <div className="flex items-center">
        <Checkbox id="terms1" className="scale-4" />   
          <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Clotting</p>
            {/* <p className="text-sm text-muted-foreground">
              isabella.nguyen@email.com
            </p> */}
          </div>
          <div className="ml-auto font-medium"><Button>Enquire</Button></div>
        </div>
        <div className="flex items-center">
        <Checkbox id="terms1" className="scale-4" checked />   
          <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Induction</p>
            {/* <p className="text-sm text-muted-foreground">will@email.com</p> */}
          </div>
          <div className="ml-auto font-medium">Sept 5</div>
        </div>
      </div>
    )
  }
  