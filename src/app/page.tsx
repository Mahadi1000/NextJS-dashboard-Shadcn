import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";
import StatsCards from "@/components/StatsCards";
import ActivityFeed from "@/components/ActivityFeed";
import ProjectOverview from "@/components/ProjectOverview";
import WelcomeHeader from "@/components/WelcomeHeader";
import QuickActions from "@/components/QuickActions";

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <WelcomeHeader />

      {/* Stats Cards Row */}
      <StatsCards />

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
        {/* Bar Chart - Takes 2 columns on large screens */}
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
          <AppBarChart />
        </div>

        {/* Latest Transactions */}
        <div className="bg-primary-foreground p-4 rounded-lg">
          <CardList title="Latest Transactions" />
        </div>

        {/* Pie Chart */}
        <div className="bg-primary-foreground p-4 rounded-lg">
          <AppPieChart />
        </div>

        {/* Todo List */}
        <div className="bg-primary-foreground p-4 rounded-lg">
          <TodoList />
        </div>

        {/* Area Chart - Takes 2 columns */}
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
          <AppAreaChart />
        </div>

        {/* Popular Content */}
        <div className="bg-primary-foreground p-4 rounded-lg">
          <CardList title="Popular Content" />
        </div>
      </div>

      {/* Secondary Row - Activity, Projects, and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Activity Feed */}
        <ActivityFeed />

        {/* Project Overview */}
        <ProjectOverview />

        {/* Quick Actions */}
        <QuickActions />
      </div>
    </div>
  );
}
