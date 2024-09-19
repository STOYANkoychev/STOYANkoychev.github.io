export default function (content) {
  content.innerHTML = `
      <h2 class="title-prof-experience">Professional Experience</h2>
    
    <div class="company" id="fantastico">
       
         <div class="content-wrapper">
           <div class="company-img">
               <img src="https://www.fantastico.bg/attachments/News/436/gallery/1024-768px-Fantastico-group-NOVINI_thumb-news.jpg" alt="Fantastico Group OOD">
          </div>
          <h3>Fantastico Group OOD</h3>
        </div>

          <div class="job-description" id="sys-administrator">
             <h4>System Administrator</h4>
             <p>August 2023 - March 2024</p>
             <ul>
                <li>Install, configure, and maintain the hardware and software required for the company's business and office systems.</li>
                <li>Monitor computer systems and networks to detect and prevent potential problems.</li>
                <li>Provided technical support and assistance to employees, helping to resolve issues with computers, printers, network connections, and other technical devices.</li>
                <li>Testing new software.</li>
             </ul>
          </div> 
          <div class="job-description" id="accountant">

            <h4>Accountant, Invoice Control</h4>
            <p>February 2012</p>
            <ul>
                <li>Manages financial documentation, verifying and processing invoices to ensure accuracy and adherence to company standards.</li>
                <li>Controlled invoicing to ensure accuracy and compliance with company deliveries.</li>
                <li>Monitors payments and resolves discrepancies by coordinating with vendors and customers.</li>
                <li>Collaborates with other departments to ensure invoice accuracy and assists with audit preparation..</li>
            </ul>
         </div>

         <div class="job-description" id="operator">
            <h4>Senior Data Operator</h4>
            <p>November 2009</p>
            <ul>
                <li>Managed data entry tasks, ensuring the integrity and accuracy of information.</li>
                <li>Issued necessary documents for store operations, monitored inventory levels, and managed deliveries.</li>
                <li>Reported issues to management and assisted in resolving data-related problems</li>
                <li>Provided training and support to junior staff.</li>
            </ul>
         </div>
         <div class="job-description" id="technical-assistant">
            <h4>Technical Assistant</h4>
            <p>October 2004</p>
            <ul>
                <li>Technical support and ensured the proper proper functioning of the store's computer systems and equipment.</li>
            </ul>
         </div>
         <div class="company" id="dunev-motor-sport">

         <div class="content-wrapper">
             <div class="company-img">
                <img src="/Images/Dunev logo.png"  id="dmsImage">
            </div>
            <h3>ET Dunev Motor Sport</h3>
        </div>
        <div class="job-description" id="salesman">
            <h4>Seller of petroleum products</h4>
            <p>November 2001 - October 2004</p>
            
            <ul>
                <li>Managed the sale of petroleum products, maintained customer relations, and ensured product quality.</li>
            </ul>
        </div>
    </div>
    
    `;
}
