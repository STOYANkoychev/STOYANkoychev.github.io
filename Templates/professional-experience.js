export default function (content) {
  content.innerHTML = `
      <h2 class="title-prof-experience">Professional Experience</h2>
    
    <div class="company" id="fantastico">
       
          <h3>Fantastico Group OOD</h3>
          <img src="https://assets.jobs.bg/assets/logo/2022-03-31/s_e6743a0ee573aea1806b1f9d22b09944.jpg" alt="Fantastico Group OOD">
          <div class="job-description" id="sys-administrator">
             <h3>System Administrator</h3>
             <p>August 2023 - March 2024</p>
             <ul>
                <li>Install, configure, and maintain the hardware and software required for the company's business and office systems.</li>
                <li>Monitor computer systems and networks to detect and prevent potential problems.</li>
                <li>Provided technical support and assistance to employees, helping to resolve issues with computers, printers, network connections, and other technical devices.</li>
                <li>Testing new software.</li>
             </ul>
          </div> 
          <div class="job-description" id="accountant">

            <h3>Accountant, Invoice Control</h3>
            <p>February 2012</p>
            <ul>
                <li>Manages financial documentation, verifying and processing invoices to ensure accuracy and adherence to company standards.</li>
                <li>Controlled invoicing to ensure accuracy and compliance with company deliveries.</li>
                <li>Monitors payments and resolves discrepancies by coordinating with vendors and customers.</li>
                <li>Collaborates with other departments to ensure invoice accuracy and assists with audit preparation..</li>
            </ul>
         </div>

         <div class="job-description" id="operator">
            <h3>Senior Data Operator</h3>
            <p>November 2009</p>
            <ul>
                <li>Managed data entry tasks, ensuring the integrity and accuracy of information.</li>
                <li>Issued necessary documents for store operations, monitored inventory levels, and managed deliveries.</li>
                <li>Reported issues to management and assisted in resolving data-related problems</li>
                <li>Provided training and support to junior staff.</li>
            </ul>
         </div>
         <div class="job-description" id="technical-assistant">
            <h3>Technical Assistant</h3>
            <p>October 2004</p>
            <ul>
                <li>Technical support and ensured the proper proper functioning of the store's computer systems and equipment.</li>
            </ul>
         </div>
    <div class="company" id="dunev-motor-sport">
        <h3>ET Dunev Motor Sport</h3>
        <img src="/Images/Dunev logo.png" width="100" height="80" id="dmsImage">
        <div class="job-description" id="salesman">
            <h3>Seller of petroleum products</h3>
            <p>November 2001 - October 2004</p>
            <ul>
                <li>Managed the sale of petroleum products, maintained customer relations, and ensured product quality.</li>
            </ul>
        </div>
    </div>
    
    `;
}
