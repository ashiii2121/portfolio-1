import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll simulate loading data from the JSON file
    const fetchProjects = async () => {
      try {
        const response = await fetch("/src/data/projects.json");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        // Fallback to import if fetch fails
        import("../../data/projects.json").then((data) => {
          setProjects(data.default || data);
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      // In a real app, this would be an API call
      setProjects(projects.filter((project) => project.id !== id));
      alert("Project deleted successfully!");
    }
  };

  const handleAddNew = () => {
    navigate("/admin/projects/new");
  };

  const handleEdit = (id) => {
    navigate(`/admin/projects/edit/${id}`);
  };

  if (loading) {
    return (
      <div className="admin-content">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-terracotta"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-content">
      <div className="admin-card">
        <div className="admin-card-header">
          <h3>Projects</h3>
          <button
            onClick={handleAddNew}
            className="admin-btn admin-btn-primary"
          >
            Add New Project
          </button>
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
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
                    <td>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(project.id)}
                          className="admin-btn admin-btn-secondary admin-btn-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(project.id)}
                          className="admin-btn admin-btn-danger admin-btn-sm"
                        >
                          Delete
                        </button>
                      </div>
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

export default AdminProjects;
