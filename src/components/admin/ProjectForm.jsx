import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import projectsData from "../../data/projects.json";

const ProjectForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    year: new Date().getFullYear().toString(),
    area: "",
    style: "",
    category: "interior", // Add category field with default value
    thumbnail: null,
    thumbnailPreview: "",
    images: [{ file: null, preview: "" }],
    brief: "",
    role: "",
    testimonial: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditing) {
      // In a real app, this would be an API call
      // For now, we'll simulate fetching data from the JSON file
      const project = projectsData.find((p) => p.id === parseInt(id));
      if (project) {
        setFormData({
          ...project,
          category: project.category || "interior", // Set default category if not present
          thumbnail: null,
          thumbnailPreview: project.thumbnail,
          images: project.images.map((img) => ({
            file: null,
            preview: img,
            url: img, // Store original URL for editing
          })),
        });
      }
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        thumbnail: file,
        thumbnailPreview: preview,
      }));
    }
  };

  const handleImageChange = (index, file) => {
    if (file) {
      const preview = URL.createObjectURL(file);
      const newImages = [...formData.images];
      newImages[index] = { file, preview };
      setFormData((prev) => ({
        ...prev,
        images: newImages,
      }));
    }
  };

  const addImageField = () => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, { file: null, preview: "" }],
    }));
  };

  const removeImageField = (index) => {
    if (formData.images.length > 1) {
      const newImages = [...formData.images];
      newImages.splice(index, 1);
      setFormData((prev) => ({
        ...prev,
        images: newImages,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // In a real app, this would upload files to a server
      // For now, we'll just show an alert with the file information
      const projectData = {
        ...formData,
        id: isEditing
          ? parseInt(id)
          : Math.max(...projectsData.map((p) => p.id), 0) + 1,
        thumbnail: formData.thumbnailPreview,
        images: formData.images.map((img) => img.preview),
      };

      // Remove file objects and temporary previews for display
      const displayData = { ...projectData };
      delete displayData.thumbnail;
      delete displayData.images;

      console.log("Project data:", displayData);
      console.log("Thumbnail file:", formData.thumbnail);
      console.log(
        "Image files:",
        formData.images.map((img) => img.file)
      );

      if (isEditing) {
        alert(
          "Project updated successfully! In a real application, files would be uploaded to the server."
        );
      } else {
        alert(
          "Project created successfully! In a real application, files would be uploaded to the server."
        );
      }

      navigate("/admin/projects");
    } catch (err) {
      console.error("Error saving project:", err);
      setError("Failed to save project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-content">
      <div className="admin-card">
        <div className="admin-card-header">
          <h3>{isEditing ? "Edit Project" : "Add New Project"}</h3>
        </div>
        <div className="admin-card-body">
          {error && (
            <div className="admin-alert admin-alert-error">{error}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="admin-form-group">
              <label className="admin-form-label">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="admin-form-control"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="admin-form-group">
                <label className="admin-form-label">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="admin-form-control"
                  required
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Year</label>
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="admin-form-control"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="admin-form-group">
                <label className="admin-form-label">Area</label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="admin-form-control"
                  placeholder="e.g., 1,200 sq ft"
                  required
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-form-label">Style</label>
                <input
                  type="text"
                  name="style"
                  value={formData.style}
                  onChange={handleChange}
                  className="admin-form-control"
                  required
                />
              </div>
            </div>

            {/* Add Category Field */}
            <div className="admin-form-group">
              <label className="admin-form-label">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="admin-form-control"
                required
              >
                <option value="interior">Interior</option>
                <option value="exterior">Exterior</option>
              </select>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Thumbnail</label>
              <div className="flex items-center gap-4">
                {formData.thumbnailPreview && (
                  <div className="w-24 h-24 rounded-md overflow-hidden border">
                    <img
                      src={formData.thumbnailPreview}
                      alt="Thumbnail preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleThumbnailChange(e)}
                    className="admin-form-control"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Upload a thumbnail image (recommended size: 800x600)
                  </p>
                </div>
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Project Images</label>
              {formData.images.map((image, index) => (
                <div key={index} className="flex gap-4 mb-4 items-start">
                  {image.preview && (
                    <div className="w-24 h-24 rounded-md overflow-hidden border">
                      <img
                        src={image.preview}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleImageChange(index, e.target.files[0])
                      }
                      className="admin-form-control"
                    />
                    <div className="flex gap-2 mt-2">
                      {formData.images.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeImageField(index)}
                          className="admin-btn admin-btn-danger admin-btn-sm"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addImageField}
                className="admin-btn admin-btn-secondary admin-btn-sm"
              >
                Add Another Image
              </button>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Brief Description</label>
              <textarea
                name="brief"
                value={formData.brief}
                onChange={handleChange}
                className="admin-form-control"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="admin-form-control"
                required
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-form-label">Testimonial</label>
              <textarea
                name="testimonial"
                value={formData.testimonial}
                onChange={handleChange}
                className="admin-form-control"
                rows="3"
              ></textarea>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={loading}
                className="admin-btn admin-btn-primary"
              >
                {loading
                  ? "Saving..."
                  : isEditing
                  ? "Update Project"
                  : "Create Project"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/admin/projects")}
                className="admin-btn admin-btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
