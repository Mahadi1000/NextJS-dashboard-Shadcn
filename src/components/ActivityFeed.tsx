import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const recentActivities = [
  {
    id: 1,
    user: "John Doe",
    action: "created a new project",
    time: "2 minutes ago",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    type: "create",
  },
  {
    id: 2,
    user: "Sarah Wilson",
    action: "completed payment task",
    time: "5 minutes ago",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=40&h=40&fit=crop&crop=face",
    type: "complete",
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "updated user profile",
    time: "10 minutes ago",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    type: "update",
  },
  {
    id: 4,
    user: "Emma Davis",
    action: "uploaded new documents",
    time: "15 minutes ago",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    type: "upload",
  },
  {
    id: 5,
    user: "Alex Chen",
    action: "sent a message",
    time: "20 minutes ago",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    type: "message",
  },
];

const ActivityFeed = () => {
  const getBadgeColor = (type: string) => {
    switch (type) {
      case "create":
        return "bg-green-100 text-green-800";
      case "complete":
        return "bg-blue-100 text-blue-800";
      case "update":
        return "bg-yellow-100 text-yellow-800";
      case "upload":
        return "bg-purple-100 text-purple-800";
      case "message":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="bg-primary-foreground">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={activity.avatar} alt={activity.user} />
                  <AvatarFallback>
                    {activity.user
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium text-foreground">
                      {activity.user}
                    </p>
                    <Badge
                      className={`text-xs ${getBadgeColor(activity.type)}`}
                    >
                      {activity.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {activity.action}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
