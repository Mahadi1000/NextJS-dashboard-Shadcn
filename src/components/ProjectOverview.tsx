import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const projectsData = [
  {
    id: 1,
    name: "E-commerce Platform",
    progress: 85,
    status: "In Progress",
    dueDate: "Dec 15, 2024",
    team: 5,
    priority: "High",
  },
  {
    id: 2,
    name: "Mobile App Redesign",
    progress: 60,
    status: "In Progress",
    dueDate: "Jan 20, 2025",
    team: 3,
    priority: "Medium",
  },
  {
    id: 3,
    name: "Analytics Dashboard",
    progress: 100,
    status: "Completed",
    dueDate: "Nov 30, 2024",
    team: 4,
    priority: "Low",
  },
  {
    id: 4,
    name: "API Integration",
    progress: 25,
    status: "Planning",
    dueDate: "Feb 28, 2025",
    team: 2,
    priority: "High",
  },
];

const ProjectOverview = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Planning":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-orange-100 text-orange-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="bg-primary-foreground">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Project Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projectsData.map((project) => (
            <div key={project.id} className="p-4 border rounded-lg bg-card/50">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-medium text-foreground">
                    {project.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Due: {project.dueDate}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Badge
                    className={`text-xs ${getStatusColor(project.status)}`}
                  >
                    {project.status}
                  </Badge>
                  <Badge
                    className={`text-xs ${getPriorityColor(project.priority)}`}
                  >
                    {project.priority}
                  </Badge>
                </div>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{project.team} team members</span>
                <span>
                  {project.progress === 100
                    ? "Completed"
                    : `${100 - project.progress}% remaining`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectOverview;
