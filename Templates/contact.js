export default function (content) {
  content.innerHTML = `
        <h2 id="contact-text-title">Contact</h2>

          <div class="email-contact"> 
           
                <p><i class="fas fa-envelope-open-text fa-2x"></i>  :   stoyan.koychev.pro@gmail.com </i></p>
          </div>


        
        <div class="contact-form-container">
        <h3>Contact Me</h3>
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
       
 
    `;
}
