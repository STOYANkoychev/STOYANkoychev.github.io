export default function (content) {
  content.innerHTML = `
        <h2>Skills</h2>
        <div class="skills-box">
            <div class="skill">
                <span>Accounting</span>
                <div class="skill-bar"><div class="skill-level" style="width: 90%">Accounting</div></div>
            </div>
            <div class="skill">
                <span>QA Testing</span>
                <div class="skill-bar"><div class="skill-level" style="width: 70%">QA Testing</div></div>
            </div>
            <div class="skill">
                <span>Communication</span>
                <div class="skill-bar"><div class="skill-level" style="width: 85%">Communication</div></div>
            </div>
            <div class="skill">
                <span>Teamwork</span>
                <div class="skill-bar"><div class="skill-level" style="width: 80%">Teamwork</div></div>
            </div>
            <div class="skill">
                <span>Finance and Investments</span>
                <div class="skill-bar"><div class="skill-level" style="width: 75%">Finance and Investments</div></div>
            </div>
        </div>
    `;
}
