import { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "./components/date-range-picker"
import { MainNav } from "./components/main-nav"
import { Overview } from "./components/overview"
import { RecentSales } from "./components/recent-sales"
import { Search } from "./components/search"
import TeamSwitcher from "./components/team-switcher"
import { UserNav } from "./components/user-nav"
import { Checklist } from "./components/checklist"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default function DashboardPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Patient Dashboard - David</h2>
            {/* <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div> */}
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="documents">
                Documents
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Patient
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                History
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Knowledge Coverage</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Notification Activity</CardTitle>
                    <CardDescription>
                      {'We\'ve notified David 5 times in the last 7 days.'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Pre-surgery Checklist</CardTitle>
                    <CardDescription>
                      {'We\'ve successfully completed 3 of 5 checklist items.'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Checklist />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="documents" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Knowledge Coverage</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                {/* <Pdf /> */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
