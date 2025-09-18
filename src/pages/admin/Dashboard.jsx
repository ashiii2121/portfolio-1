import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projectsData from "../../data/projects.json";

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalImages: 0,
    totalTestimonials: 0,
  });

  useEffect(() => {
    setProjects(projectsData);

    // Calculate stats
    const totalProjects = projectsData.length;
    const totalImages = projectsData.reduce(
      (acc, project) => acc + project.images.length,
      0
    );
    const totalTestimonials = projectsData.filter(
      (project) => project.testimonial
    ).length;

    setStats({
      totalProjects,
      totalImages,
      totalTestimonials,
    });
  }, []);

  return (
    <div className="admin-content">
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-icon">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <div className="admin-stat-content">
            <h3>{stats.totalProjects}</h3>
            <p>Total Projects</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="admin-stat-content">
            <h3>{stats.totalImages}</h3>
            <p>Total Images</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
          <div className="admin-stat-content">
            <h3>{stats.totalTestimonials}</h3>
            <p>Testimonials</p>
          </div>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h3>Recent Projects</h3>
          <Link to="/admin/projects" className="admin-btn admin-btn-secondary">
            View All Projects
          </Link>
        </div>
        <div className="admin-card-body">
          <div className="overflow-x-auto">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Location</th>
                  <th>Year</th>
                  <th>Style</th>
                </tr>
              </thead>
              <tbody>
                {projects.slice(0, 5).map((project) => (
                  <tr key={project.id}>
                    <td>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-md object-cover"
                            src={project.thumbnail}
                            alt={project.title}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-charcoal">
                            {project.title}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="text-sm text-charcoal/70">
                        {project.location}
                      </div>
                    </td>
                    <td>
                      <div className="text-sm text-charcoal/70">
                        {project.year}
                      </div>
                    </td>
                    <td>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-terracotta/10 text-terracotta">
                        {project.style}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
