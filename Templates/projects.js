export default function (content) {
  content.innerHTML = `
        <h2>Projects</h2>
        <div class="projects-list">
            <div class="project">
                <img src="project1-thumbnail.jpg" alt="Project 1">
                <div>
                    <h3>Project 1</h3>
                    <p>Short description of project 1. <a href="project1-link">View Project</a></p>
                </div>
            </div>
            <div class="project">
                <img src="project2-thumbnail.jpg" alt="Project 2">
                <div>
                    <h3>Project 2</h3>
                    <p>Short description of project 2. <a href="project2-link">View Project</a></p>
                </div>
            </div>
        </div>
    `;
}
