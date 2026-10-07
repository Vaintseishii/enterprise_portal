"use client"
import { api } from "~/trpc/react";

export default function ProjectsDashboard() {
    // will display all the projects

    const { data: projects, isLoading } = api.project.getAll.useQuery();
    
    if (isLoading) return <div className="p-8 text-gray-500">Patience...</div>;

    return <div className="space-y-4">
        {projects?.map((project) => (
            <div key={project.id} className="border p-4 rounded shadow-sm bg-white">
                <h2 className="font-semibold text-lg">{project.title}</h2>
                <p className="text-gray-600 text-sm">{project.description || "No description provided."}</p>
                <span className="text-xs text-blue-600 font-medium mt-2 inline-block">{project.tasks.length} Active Tasks</span>
            </div>
        ))}
    </div>
}