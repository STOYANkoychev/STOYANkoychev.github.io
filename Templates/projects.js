export default function (content) {
  content.innerHTML = `
        <h2>Projects</h2>
          
            <section id="projects">
  <div class="project-container">
    <h3>Project 1: Portfolio Website</h3>
    <div class="video-wrapper">
      <video id="video1" width="1000" poster="/Images/PicProject1.png">
        <source src="/Images/Project1Video.mp4" type="video/mp4">
      
      </video>
      <button onclick="playVideo('video1')">Play</button>
      <a href="https://github.com/STOYANkoychev/STOYANkoychev.github.io.git" target="_blank">View on GitHub</a>
    </div>
  </div>

  <div class="project-container">
    <h3>Project 2:  </h3> 
    <div class="video-wrapper">
      <video id="video2" width="1000" poster="/Images/PicProject2.png">
        <source src="/Images/ComingSoon2.mp4">
       
      </video>
      <button onclick="playVideo('video2')">Play</button>
      <a href="https://github.com/yourusername/project2" target="_blank">View on GitHub</a>
    </div>
  </div>

  <div class="project-container">
    <h3>Project 3: Task Management App</h3>
    <div class="video-wrapper">
      <video id="video3" width="1000" poster="/Images/PicProject3.png">
        <source src="/Images/ComingSoon3.mp4">
       
      </video>
      <button onclick="playVideo('video3')">Play</button>
      <a href="https://github.com/yourusername/project3" target="_blank">View on GitHub</a>
    </div>
  </div>

  <!-- Add more projects in the same way -->
</section>


        

      
    `;
}
