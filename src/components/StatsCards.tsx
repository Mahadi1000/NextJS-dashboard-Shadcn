import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  TrendingUp,
  DollarSign,
  Activity,
  ShoppingCart,
  Eye,
} from "lucide-react";

const statsData = [
  {
    title: "Total Users",
    value: "12,459",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "Revenue",
    value: "$45,231",
    change: "+8.2%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Orders",
    value: "1,234",
    change: "-2.1%",
    trend: "down",
    icon: ShoppingCart,
    color: "text-orange-600",
  },
  {
    title: "Page Views",
    value: "89,423",
    change: "+15.3%",
    trend: "up",
    icon: Eye,
    color: "text-purple-600",
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {statsData.map((stat, index) => (
        <Card key={index} className="bg-primary-foreground">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center space-x-1 text-xs">
              <Badge
                variant={stat.trend === "up" ? "default" : "destructive"}
                className="text-xs"
              >
                {stat.change}
              </Badge>
              <span className="text-muted-foreground">from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
