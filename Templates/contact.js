export default function (content) {
  content.innerHTML = `
        <h2>Contact</h2>
        <form action="mailto:stoyan6sss@gmail.com" method="post" enctype="text/plain">
            <input type="text" name="name" placeholder="Your Name">
            <input type="email" name="email" placeholder="Your Email">
            <input type="tel" name="phone" placeholder="Your Telephone">
            <input type="text" name="subject" placeholder="Subject">
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit">Send</button>
        </form>
    `;
}
