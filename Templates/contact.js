export default function (content) {
  content.innerHTML = `
   
        <div class="contact-form-container">
        <h2>Contact Us</h2>
        <form action="mailto:stoyan.koychev.pro@gmail.com" method="post" enctype="text/plain">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required>
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="Your Phone" required>
            </div>
            <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" required>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit">Send</button>
        </form>


     </div>
     <div class="social-icons-contact">
                <a href="https://www.linkedin.com/in/stoyan-koychev-21382a326/" target="_blank"><i class="fa-brands fa-linkedin fa-3x fa-beat"></i></a>
                
                <a href="https://github.com/STOYANkoychev" target="_blank"><i class="fab fa-github fa-3x fa-beat"></i></a>

                <a href="https://www.twitter/" target="_blank"><i class="fab fa-twitter-square fa-3x fa-beat"></i></a>

                <a href="https://www.facebook/" target="_blank"><i class="fab fa-facebook-square fa-3x fa-beat"></i></a>
               

         </div>  
         <div class="email-contact"> 
             <ul>
                 <li>
                     <p><i class="fas fa-envelope-open-text fa-2x"></i>  :   stoyan.koychev.pro@gmail.com </i></p>
                </li>
            </ul>
        </div>
     
 
    `;
}
