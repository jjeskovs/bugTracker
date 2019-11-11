import axios from "axios";

export default {
  // Gets all projects
  getProjects: function () {
    return axios.get("/api/projects");
  },
  // Gets the project with the given id
  getProject: function (id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the project with the given id
  deleteProject: function (id) {
    return axios.delete("/api/projects/" + id);
  },
  // Saves a project to the database
  saveProject: function (projectData) {
    return axios.post("/api/projects", projectData);
  },

  // Gets all bugs
  getBugs: function () {
    return axios.get("/api/issues");
  },
  // Saves a bug to the database
  saveBug: function (bugData) {
    return axios.post("/api/issues", bugData);
  },
  // Gets the bug with the given id
  getBug: function (id) {
    return axios.get("/api/issues/" + id);
  },
};
