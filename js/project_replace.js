const PROJECT1 = "../projects/project1.html";
const PROJECT2 = "../projects/project2.html";
const PROJECT3 = "../projects/project3.html";
const PROJECT4 = "../projects/project4.html";

document.addEventListener("DOMContentLoaded", function () {
  loadProjectSection("project1", PROJECT1, "#keyInfo");
  loadProjectSection("project2", PROJECT2, "#keyInfo");
  loadProjectSection("project3", PROJECT3, "#keyInfo");
  loadProjectSection("project4", PROJECT4, "#keyInfo");
});

function loadProjectSection(projectId, file, selector) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      // Create a temporary DOM element to parse the fetched HTML
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = data;

      // Extract the section based on the selector (e.g., #bodyinfo)
      const section = tempDiv.querySelector(selector);

      if (section) {
        // Insert the section's HTML into the target element on the page
        document.getElementById(projectId).innerHTML = section.outerHTML;
      } else {
        console.error("Section not found:", selector);
      }
    })
    .catch((error) => console.error("Error loading project content:", error));
}
