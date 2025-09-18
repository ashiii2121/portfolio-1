import React, { useState } from "react";

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    siteName: "Interior Design Portfolio",
    adminEmail: "",
    notificationEmails: true,
    maintenanceMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would be an API call
    console.log("Settings saved:", settings);
    alert("Settings saved successfully!");
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-playfair text-charcoal mb-2">
          Settings
        </h1>
        <p className="text-charcoal/70">Manage your site configuration</p>
      </div>

      <div className="bg-ivory rounded-xl shadow-md p-6 border border-charcoal/10">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mb-6">
            <div>
              <label
                htmlFor="siteName"
                className="block text-sm font-medium text-charcoal mb-1"
              >
                Site Name
              </label>
              <input
                type="text"
                id="siteName"
                name="siteName"
                value={settings.siteName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-charcoal/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-terracotta"
              />
            </div>

            <div>
              <label
                htmlFor="adminEmail"
                className="block text-sm font-medium text-charcoal mb-1"
              >
                Admin Email
              </label>
              <input
                type="email"
                id="adminEmail"
                name="adminEmail"
                value={settings.adminEmail}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-charcoal/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-terracotta"
                placeholder="admin@example.com"
              />
            </div>

            <div className="flex items-center">
              <input
                id="notificationEmails"
                name="notificationEmails"
                type="checkbox"
                checked={settings.notificationEmails}
                onChange={handleChange}
                className="h-4 w-4 text-terracotta focus:ring-terracotta border-charcoal/30 rounded"
              />
              <label
                htmlFor="notificationEmails"
                className="ml-2 block text-sm text-charcoal"
              >
                Enable notification emails
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="maintenanceMode"
                name="maintenanceMode"
                type="checkbox"
                checked={settings.maintenanceMode}
                onChange={handleChange}
                className="h-4 w-4 text-terracotta focus:ring-terracotta border-charcoal/30 rounded"
              />
              <label
                htmlFor="maintenanceMode"
                className="ml-2 block text-sm text-charcoal"
              >
                Maintenance mode
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-terracotta hover:bg-terracotta/90 text-ivory font-medium py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 bg-ivory rounded-xl shadow-md p-6 border border-charcoal/10">
        <h2 className="text-xl font-bold font-playfair text-charcoal mb-4">
          Admin Password
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="currentPassword"
              className="block text-sm font-medium text-charcoal mb-1"
            >
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              className="w-full px-3 py-2 border border-charcoal/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-terracotta"
            />
          </div>
          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-charcoal mb-1"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="w-full px-3 py-2 border border-charcoal/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-terracotta"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-charcoal mb-1"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 border border-charcoal/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-terracotta"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-terracotta hover:bg-terracotta/90 text-ivory font-medium py-2 px-6 rounded-lg transition-colors duration-200">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
