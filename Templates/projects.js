export default function (content) {
  content.innerHTML = `
        <h2>Projects</h2>
       <div class="slider-container">
        <div class="slides" id="slides">
            <div class="slide">
                <a href="https://github.com/yourusername/project1" target="_blank">
                    <img src="https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Project+1" alt="Project 1">
                    <div class="slide-title">Project 1: Web Development</div>
                </a>
            </div>
            <div class="slide">
                <a href="https://github.com/yourusername/project2" target="_blank">
                    <img src="https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Project+2" alt="Project 2">
                    <div class="slide-title">Project 2: Mobile App</div>
                </a>
            </div>
            <div class="slide">
                <a href="https://github.com/yourusername/project3" target="_blank">
                    <img src="https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Project+3" alt="Project 3">
                    <div class="slide-title">Project 3: AI Development</div>
                </a>
            </div>
            <div class="slide">
                <a href="https://github.com/yourusername/project4" target="_blank">
                    <img src="https://via.placeholder.com/800x400/FFFF00/FFFFFF?text=Project+4" alt="Project 4">
                    <div class="slide-title">Project 4: Game Design</div>
                </a>
            </div>
            <div class="slide">
                <a href="https://github.com/yourusername/project5" target="_blank">
                    <img src="https://via.placeholder.com/800x400/FF00FF/FFFFFF?text=Project+5" alt="Project 5">
                    <div class="slide-title">Project 5: Data Science</div>
                </a>
            </div>
        </div>
        <div class="nav-buttons">
            <button id="prevBtn">&#10094; Previous</button>
            <button id="nextBtn">Next &#10095;</button>
        </div>
    </div>

    <script>
        const slides = document.getElementById('slides');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentIndex = 0;
        const totalSlides = slides.children.length;

        function showSlide(index) {
            const offset = -index * 100; // Adjust slide position based on index
            slides.style.transform = 'translateX(${offset}%)';
        }

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
            showSlide(currentIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
            showSlide(currentIndex);
        });
       </script>
    `;
}
