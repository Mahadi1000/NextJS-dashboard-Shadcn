"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Users,
  FileText,
  Settings,
  BarChart3,
  Mail,
  Download,
  Upload,
} from "lucide-react";

const quickActions = [
  {
    title: "Add User",
    description: "Create new user account",
    icon: Users,
    color: "bg-blue-500 hover:bg-blue-600",
    action: "add-user",
  },
  {
    title: "New Report",
    description: "Generate analytics report",
    icon: FileText,
    color: "bg-green-500 hover:bg-green-600",
    action: "new-report",
  },
  {
    title: "View Analytics",
    description: "Check performance metrics",
    icon: BarChart3,
    color: "bg-purple-500 hover:bg-purple-600",
    action: "analytics",
  },
  {
    title: "Send Message",
    description: "Broadcast to all users",
    icon: Mail,
    color: "bg-orange-500 hover:bg-orange-600",
    action: "send-message",
  },
  {
    title: "Export Data",
    description: "Download CSV reports",
    icon: Download,
    color: "bg-teal-500 hover:bg-teal-600",
    action: "export",
  },
  {
    title: "Import Data",
    description: "Upload new dataset",
    icon: Upload,
    color: "bg-indigo-500 hover:bg-indigo-600",
    action: "import",
  },
];

const QuickActions = () => {
  return (
    <Card className="bg-primary-foreground">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className={`h-24 w-full p-3 flex flex-col items-center justify-center space-y-2 hover:scale-[1.02] transition-all duration-200 ${action.color} text-white border-none overflow-hidden`}
              onClick={() => console.log(`Action: ${action.action}`)}
            >
              <action.icon className="h-5 w-5 flex-shrink-0" />
              <div className="text-center w-full min-h-0">
                <div className="font-medium text-xs truncate w-full">
                  {action.title}
                </div>
                <div className="text-[10px] opacity-80 hidden md:block truncate w-full leading-tight">
                  {action.description}
                </div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
