//  Dynamically shw data
document.querySelectorAll(".tabNameWrapperStyle").forEach((tab) => {
  tab.addEventListener("click", function () {
    const dropDownId = this.getAttribute("data-dropdown");
    console.log("Clicked Tab Text:", dropDownId);

    const dropDown = document.getElementById(dropDownId);
    if (!dropDown) {
      console.error("Dropdown not found for ID:", dropDownId);
      return;
    }

    // Check if the clicked tab is already active
    const isAlreadyActive = dropDown.classList.contains("active");
    console.log("Is Dropdown Already Active:", isAlreadyActive);

    // Close all dropdowns first
    document.querySelectorAll(".dropDownContainer").forEach((container) => {
      container.classList.add("hidden");
      container.classList.remove("active");
    });

    // Remove active class from all tabs
    document.querySelectorAll(".tabNameWrapperStyle").forEach((tabItem) => {
      tabItem.classList.remove("active");
    });

    // Toggle the current tab and dropdown
    if (!isAlreadyActive) {
      this.classList.add("active");
      dropDown.classList.remove("hidden");
      dropDown.classList.add("active");
    }
  });
});
// Set up event listener for menu items in dropdowns
document
  .querySelectorAll(".dropDownContainer")
  .forEach((dropDownContainer, index) => {
    const menuItems = dropDownContainer.querySelectorAll(".menuItem");
    menuItems.forEach((menuItem) => {
      const infoType = menuItem.getAttribute("data-info");
      menuItem.addEventListener("mouseover", () => {
        displayInfo(infoType, index);
      });
    });
  });
// Centralized content for all menu items
const rightSideContent = {
  businessRegistration: {
    title: "Business Registration",
    items: [
      { name: "Private Limited Company", url: "#" },
      { name: "Limited Liability Partnership", url: "#" },
      { name: "One Person Company", url: "#" },
      { name: "Sole Proprietorship", url: "#" },
      { name: "Nidhi Company", url: "#" },
      { name: "Producer Company", url: "#" },
      { name: "Partnership Firm", url: "#" },
      { name: "Startup India Registration", url: "#" },
    ],
  },
  internationalBusiness: {
    title: "International Business Setup",
    items: [
      { name: "US Incorporation", url: "#" },
      { name: "Singapore Incorporation", url: "#" },
      { name: "UK Incorporation", url: "#" },
      { name: "Netherlands Incorporation", url: "#" },
      { name: "Hong Kong Company Incorporation", url: "#" },
      { name: "Dubai Company Incorporation", url: "#" },
    ],
  },
  companynamesearch: {
    title: "Company Name Search",
    items: [
      { name: "Company Name Search", url: "#" },
      { name: "Change Company Name", url: "#" },
    ],
  },
  licensesandRegistrations: {
    title: "Licenses & Registrations",
    items: [
      { name: "Digital Signature Certificate", url: "#" },
      { name: "Udyam Registration", url: "#" },
      { name: "MSME Registration", url: "#" },
      { name: "ISO Certification", url: "#" },
      { name: "FSSAI [Food License]", url: "#" },
      { name: "IEC [Import/Export Code]", url: "#" },
      { name: "Apeda RCMC", url: "#" },
      { name: "Spice Board Registration", url: "#" },
      { name: "FIEO Registration", url: "#" },
      { name: "Legal Metrology", url: "#" },
      { name: "Hallmark Registration", url: "#" },
      { name: "BIS Registration", url: "#" },
      { name: "Liquor License", url: "#" },
      { name: "CLRA Registration & Licensing", url: "#" },
      { name: "AD Code Registration", url: "#" },
      { name: "IRDAI Registration", url: "#" },
      { name: "Drug & Cosmetic License", url: "#" },
      { name: "Customs Clearance", url: "#" },
    ],
  },
  webDevelopment: {
    title: "Web Development",
    items: [{ name: "Web/E-Commerce Website Development", url: "#" }],
  },
  gstandotherindirecttax: {
    title: "GST and Other Indirect Tax",
    items: [
      {
        name: "GST Registration",
        url: "http://127.0.0.1:5500/Gst-registration/gst-registration.html",
      },
      { name: "GST Filing", url: "#" },
      { name: "GST Login Portal", url: "#" },
      { name: "HSN Code Finder", url: "#" },
      { name: "GST Cancellation and Revocation", url: "#" },
      { name: "Indirect Tax", url: "#" },
      { name: "RoDTEP", url: "#" },
    ],
  },
  changesinpvtltdcompany: {
    title: "Changes in Pvt Ltd Company",
    items: [
      { name: "Add a Director", url: "#" },
      { name: "Remove a Director", url: "#" },
      { name: "Increase Authorized Capital", url: "#" },
      { name: "Close the Pvt Ltd Company", url: "#" },
      { name: "Strike off Company", url: "#" },
      { name: "Change Objective/Activity", url: "#" },
      { name: "Change Address", url: "#" },
    ],
  },
  changesinlimitedliabilitypartnership: {
    title: "Changes In Limited Liability Partnership",
    items: [
      { name: "Add Designated Partner", url: "#" },
      { name: "Changes to LLP Agreement", url: "#" },
      { name: "Close to LLP", url: "#" },
    ],
  },
  mandatoryannualfilings: {
    title: "Mandatory Annual Filings",
    items: [
      { name: "Annual Compliance Services", url: "#" },
      { name: "LLP Annual Filings", url: "#" },
      { name: "Secretarial Audit", url: "#" },
    ],
  },
  labourcompliance: {
    title: "Labour Compliance",
    items: [
      { name: "Provident Fund (PF) Registration", url: "#" },
      { name: "ESI Registration", url: "#" },
      { name: "Professional Tax Registration", url: "#" },
      { name: "Shops and Establishments License", url: "#" },
      { name: "Employee Stock Option Plan [ESOP]", url: "#" },
      { name: "POSH Compliance", url: "#" },
      { name: "Labor Law Advisor", url: "#" },
    ],
  },
  accountingandtax: {
    title: "Accounting & Tax",
    items: [
      { name: "Accounting and Book-keeping", url: "#" },
      { name: "TDS Return Filing", url: "#" },
      { name: "Individual Income Tax Filing", url: "#" },
      { name: "Proprietorship Tax Return Filing", url: "#" },
      { name: "ITR for LLP", url: "#" },
      { name: "Corporate Tax", url: "#" },
      { name: "Income Tax Assessment", url: "#" },
      { name: "Income Tax Notice", url: "#" },
      { name: "Virtual CFO", url: "#" },
    ],
  },
  convertyourbusiness: {
    title: "Convert Your Business",
    items: [
      { name: "Proprietorship to Pvt Ltd Company", url: "#" },
      { name: "Compliance Check - Secretarial Audit", url: "#" },
      { name: "Due Diligence", url: "#" },
      { name: "RBI Compliance", url: "#" },
      { name: "Convert Partnership into LLP Company", url: "#" },
      { name: "Convert Private into Public Limited Company", url: "#" },
      { name: "Convert Private into OPC Company", url: "#" },
    ],
  },
  trademark: {
    title: "Trademark",
    items: [
      { name: "Trademark Registration", url: "#" },
      { name: "Trademark Search", url: "#" },
      { name: "Respond to TM Objection", url: "#" },
      { name: "Well Known Trademark", url: "#" },
      { name: "Trademark Watch", url: "#" },
      { name: "Trademark Renewal", url: "#" },
      { name: "Trademark Assignment", url: "#" },
      { name: "USA Trademark", url: "#" },
      { name: "International Trademark", url: "#" },
      { name: "Trademark Class Finder", url: "#" },
    ],
  },
  copyright: {
    title: "Copyright",
    items: [
      { name: "Copyright Registration", url: "#" },
      { name: "Copyright Music", url: "#" },
    ],
  },
  patent: {
    title: "Patent",
    items: [
      { name: "Indian Patent Search", url: "#" },
      { name: "Provisional Patent Application", url: "#" },
      { name: "Patent Registration", url: "#" },
    ],
  },
  infringement: {
    title: "Infringement",
    items: [
      { name: "Copyright Infringement", url: "#" },
      { name: "Patent Infringement", url: "#" },
      { name: "Trademark Infringement", url: "#" },
    ],
  },
  designregistration: {
    title: "Design Registration",
    items: [
      { name: "Logo Design", url: "#" },
      { name: "Design Registration", url: "#" },
    ],
  },
  businesscontracts: {
    title: "Business Contracts",
    items: [
      { name: "Non Disclosure Agreement NDA", url: "#" },
      { name: "Service Level Agreement", url: "#" },
      { name: "Franchise Agreement", url: "#" },
      { name: "Master Service Agreement", url: "#" },
      { name: "Shareholders Agreement", url: "#" },
      { name: "Joint Venture Agreement", url: "#" },
      { name: "Founders Agreement", url: "#" },
      { name: "Vendor Agreement", url: "#" },
      { name: "Consultancy Agreement", url: "#" },
      { name: "Memorandum of Understanding", url: "#" },
      { name: "Succession Certificate", url: "#" },
      { name: "Scope of Work Agreement", url: "#" },
      { name: "Share Purchase Agreement", url: "#" },
      { name: "Relinquishment Deed", url: "#" },
      { name: "Legal Heir Certificate", url: "#" },
      { name: "Trade Licence", url: "#" },
      { name: "Noncompete Agreement", url: "#" },
      { name: "Finance Agreement", url: "#" },
      { name: "GDPR", url: "#" },
    ],
  },
  personalandfamily: {
    title: "Personal & Family",
    items: [
      { name: "Will Registration", url: "#" },
      { name: "Probate of Will", url: "#" },
      { name: "Power of Attorney", url: "#" },
    ],
  },
  realestate: {
    title: "Real Estate",
    items: [
      { name: "Rental Agreement", url: "#" },
      { name: "Sale Deed", url: "#" },
      { name: "Gift Deed", url: "#" },
      { name: "Rental Tenant Notice", url: "#" },
    ],
  },
  notices: {
    title: "Notices",
    items: [
      { name: "Legal Notice", url: "#" },
      { name: "Legal Notice for Money Recovery", url: "#" },
      { name: "Legal Notice for recovery of dues", url: "#" },
      { name: "Cheque Bounce Notice", url: "#" },
      { name: "Legal Notice Under Consumer Protection Act", url: "#" },
    ],
  },
  hrpolicies: {
    title: "HR Policies",
    items: [
      { name: "Employment Agreement", url: "#" },
      { name: "ESOP", url: "#" },
      { name: "Payroll Maintenance", url: "#" },
    ],
  },
  fundraising: {
    title: "Fundraising",
    items: [
      { name: "Fundraising", url: "#" },
      { name: "Pitch-Deck", url: "#" },
      { name: "Business Loan", url: "#" },
      { name: "DPR Service", url: "#" },
    ],
  },
  patent: {
    title: "Patent",
    items: [
      { name: "Indian Patent Search", url: "#" },
      { name: "Provisional Patent Application", url: "#" },
      { name: "Patent Registration", url: "#" },
    ],
  },
  ngo: {
    title: "NGO",
    items: [
      { name: "NGO", url: "#" },
      { name: "Section 8 Company", url: "#" },
      { name: "Trust Registration", url: "#" },
      { name: "Society Registration", url: "#" },
      { name: "NGO Compliances", url: "#" },
      { name: "NGO Compliance", url: "#" },
      { name: "Section 8 Compliance", url: "#" },
      { name: "CSR-1 Filing", url: "#" },
      { name: "Sec.80G & Sec. 12A", url: "#" },
      { name: "Darpan Registration", url: "#" },
      { name: "FCRA Registration", url: "#" },
    ],
  },
  propertyandpersonal: {
    title: "Property & Personal",
    items: [
      { name: "Property Title Verification", url: "#" },
      { name: "Property Registration", url: "#" },
      { name: "Rera Complaint", url: "#" },
      { name: "Licenses & Registration", url: "#" },
      { name: "Gun License", url: "#" },
      { name: "Name Change & Other Conditions", url: "#" },
      { name: "Name Change", url: "#" },
      { name: "Religion Change", url: "#" },
      { name: "Gender Change", url: "#" },
      { name: "File an e-FIR", url: "#" },
      { name: "Online Police Complaint", url: "#" },
      { name: "Marriage", url: "#" },
      { name: "Marriage Registration", url: "#" },
      { name: "Court Marriage", url: "#" },
      { name: "Mutual Divorce", url: "#" },
      { name: "Divorce Alimony", url: "#" },
      { name: "Restitution of Conjugal Rights", url: "#" },
      { name: "Immigration", url: "#" },
      { name: "Corporate immigration", url: "#" },
      { name: "Family immigration", url: "#" },
      { name: "College immigration", url: "#" },
      { name: "File a Consumer Complaint", url: "#" },
      { name: "Online Consumer Complaint", url: "#" },
      { name: "E-Commerce Consumer Complaint", url: "#" },
      { name: "Insurance Consumer Complaint", url: "#" },
    ],
  },
  lawyersandexperts: {
    title: "Lawyers & Experts",
    items: [
      { name: "Labour Law Advisor", url: "#" },
      { name: "Criminal Lawyer", url: "#" },
      { name: "Labour Lawyer", url: "#" },
      { name: "Consumer Court Lawyer", url: "#" },
      { name: "Divorce Lawyer", url: "#" },
      { name: "Banking Lawyer", url: "#" },
      { name: "Immigration Lawyer", url: "#" },
      { name: "Family Lawyer", url: "#" },
      { name: "Litigation Lawyer", url: "#" },
      { name: "Intellectual Property Lawyer", url: "#" },
      { name: "Trademark Lawyer", url: "#" },
      { name: "Reply to ITR Notice", url: "#" },
      { name: "Expert Services", url: "#" },
      { name: "Technolgy, Media and, Telecom (TMT)", url: "#" },
      { name: "Risk Management and Regulatory Risk", url: "#" },
    ],
  },
};

function displayInfo(infoType, index) {
  const sectionTitle = document.querySelectorAll("#sectionTitle")[index];
  const sectionList = document.querySelectorAll("#sectionList")[index];

  if (!sectionTitle || !sectionList) return;

  const content = rightSideContent[infoType];
  console.log("Content for Info Type:", content);
  if (content) {
    const boldItems = [
      "NGO Compliance",
      "Licenses & Registration",
      "Name Change & Other Conditions",
      "File an e-FIR",
      "Marriage",
      "Immigration",
      "File a Consumer Complaint",
      "Expert Services",
    ];
    sectionTitle.textContent = content.title;
    sectionList.innerHTML = content.items
      .map((item) => {
        const isBold = boldItems.includes(item.name);
        const styles = isBold
          ? "font-weight: bold; margin-top: 15px; font-size: 15px; text-dark"
          : "";

        return `
                    <li>
                        <a 
                            href="${item.url}" 
                            style="${styles}; display: block; padding: 8px; text-decoration: none; color: inherit;"
                            onclick="handleNavItemClick('${item.name.replace(
                              /'/g,
                              "\\'"
                            )}', '${item.url}')"
                        >
                            ${item.name}
                        </a>
                    </li>
                `;
      })
      .join("");
  } else {
    sectionTitle.textContent = "Not Found";
    sectionList.innerHTML = "<li>No items to display</li>";
  }
}
// Handle navigation item clicks
function handleNavItemClick(itemName, itemUrl) {
  console.log(`Navigating to: ${itemName} at ${itemUrl}`);
  window.location.href = itemUrl;
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileDropbtns = document.querySelectorAll(".mobile-dropbtn");
  const toggleBtn = document.querySelector(".toggle-btn");
  const toggleContainer = document.querySelector(".toggle-container");

  // Toggle mobile menu
  hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  // Handle mobile dropdown menus
  mobileDropbtns.forEach((btn) => {
    btn.addEventListener("clic.nek", function () {
      const dropdownContent = thisxtElementSibling;

      // Close all other dropdowns
      document
        .querySelectorAll(".mobile-dropdown-content")
        .forEach((content) => {
          if (content !== dropdownContent) {
            content.classList.remove("active");
          }
        });

      // Toggle current dropdown
      dropdownContent.classList.toggle("active");
    });
  });

  // Toggle button dropdown
  toggleBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleContainer.classList.toggle("active");
  });

  // Close mobile menu and toggle dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".navbar")) {
      mobileMenu.classList.remove("active");
      document
        .querySelectorAll(".mobile-dropdown-content")
        .forEach((content) => {
          content.classList.remove("active");
        });
    }

    if (!event.target.closest(".toggle-container")) {
      toggleContainer.classList.remove("active");
    }
  });
});

//Message Box Scroll

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//Handle Advance search button
document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtn = document.querySelector(".verify-btn");
  const dropdown = document.querySelector(".verify-dropdown");
  const verificationContainer = document.getElementById(
    "verification-container"
  );
  // Verification options
  const verifyLink = document.getElementById("verify-certificate");
  const verifyDscLink = document.getElementById("verify-dsc");
  const verifyApplicationLink = document.getElementById(
    "verify-application-status"
  );

  // Certificate type switching
  const startupCertBtn = document.getElementById("startup-cert-btn");
  const msmeCertBtn = document.getElementById("msme-cert-btn");
  const startupVerification = document.getElementById("startup-verification");
  const msmeVerification = document.getElementById("msme-verification");
  // Toggle dropdown
  dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown.classList.toggle("active");
    dropdownBtn.classList.toggle("active");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
      dropdownBtn.classList.remove("active");
    }
  });

  // Handle verification options
  verifyLink.addEventListener("click", function (e) {
    e.preventDefault();
    verificationContainer.classList.remove("hidden");
    dropdown.classList.remove("active");
    dropdownBtn.classList.remove("active");
  });

  verifyDscLink.addEventListener("click", function (e) {
    e.preventDefault();
    alert("DSC verification will be implemented in the future.");
    dropdown.classList.remove("active");
    dropdownBtn.classList.remove("active");
  });

  verifyApplicationLink.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Application status verification will be implemented in the future.");
    dropdown.classList.remove("active");
    dropdownBtn.classList.remove("active");
  });

  // Certificate type switching
  startupCertBtn.addEventListener("click", function () {
    startupCertBtn.classList.add("active");
    msmeCertBtn.classList.remove("active");
    startupVerification.classList.remove("hidden");
    msmeVerification.classList.add("hidden");
  });

  msmeCertBtn.addEventListener("click", function () {
    msmeCertBtn.classList.add("active");
    startupCertBtn.classList.remove("active");
    msmeVerification.classList.remove("hidden");
    startupVerification.classList.add("hidden");
  });

  // Modal functionality
  const modal = document.getElementById("certificate-modal");
  const closeModal = document.querySelector(".close-modal");

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Prevent empty object errors in console
  const originalConsoleError = console.error;
  console.error = function (...args) {
    // Check if this is an empty object error
    if (
      args.length === 2 &&
      args[0] === "Error:" &&
      Object.keys(args[1]).length === 0
    ) {
      return; // Suppress this specific error
    }
    originalConsoleError.apply(console, args);
  };

  // Verify Startup Certificate
  const verifyBtn = document.getElementById("verify-btn1");
  const certificateDetails = document.getElementById("certificate-details");

  verifyBtn.addEventListener("click", function () {
    const incorporationNumber = document
      .getElementById("incorporation-number")
      .value.trim();

    if (!incorporationNumber) {
      alert("Please enter an incorporation number");
      return;
    }

    verifyBtn.textContent = "Verifying...";
    verifyBtn.disabled = true;

    // Create a URL with the incorporation number as a parameter
    const url = new URL(
      "https://api.startupindia.gov.in/sih/api/noauth/dpiit/services/recognition/certificateDetails"
    );
    url.searchParams.append("incorporationNumber", incorporationNumber);

    // Make the API request
    fetch(url.toString(), {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors", // Try with cors mode
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.status} ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data); // Log the response for debugging
        displayCertificateDetails(data);
        modal.style.display = "block";
      })
      .catch((error) => {
        console.error("Error:", error.message || error);

        // Show a more user-friendly error in the modal
        certificateDetails.innerHTML = `
        <div style="padding: 20px; background-color: #fff3f3; border: 1px solid #ffcaca; border-radius: 5px;">
          <p style="color: #d32f2f; font-weight: bold;">Verification Failed</p>
          <p>We couldn't verify the incorporation number. This could be due to:</p>
          <ul style="margin-left: 20px; margin-top: 10px;">
            <li>Invalid incorporation number</li>
            <li>Network connectivity issues</li>
            <li>The verification service is temporarily unavailable</li>
          </ul>
          <p style="margin-top: 10px;">Please try again later or contact support if the issue persists.</p>
        </div>
      `;
        modal.style.display = "block";
      })
      .finally(() => {
        verifyBtn.textContent = "Verify";
        verifyBtn.disabled = false;
      });
  });

  // MSME Certificate Verification (placeholder for future implementation)
  const verifyMsmeBtn = document.getElementById("verify-msme-btn");

  verifyMsmeBtn.addEventListener("click", function () {
    const msmeNumber = document.getElementById("msme-number").value.trim();

    if (!msmeNumber) {
      alert("Please enter an MSME registration number");
      return;
    }

    alert("MSME verification functionality will be implemented in the future.");
  });

  // Service toggle
  const serviceToggle = document.getElementById("service-toggle");

  serviceToggle.addEventListener("change", function () {
    // Toggle between company and individual services
    // This is a placeholder for future implementation
  });

  // Function to display certificate details in the modal
  function displayCertificateDetails(data) {
    // Clear previous details
    certificateDetails.innerHTML = "";

    if (!data || data.error) {
      certificateDetails.innerHTML = `
        <div style="padding: 20px; background-color: #fff3f3; border: 1px solid #ffcaca; border-radius: 5px;">
          <p style="color: #d32f2f; font-weight: bold;">No Certificate Found</p>
          <p>No certificate details found for the provided incorporation number.</p>
          <p>Please check the number and try again.</p>
        </div>
      `;
      return;
    }

    try {
      // Create a table to display the certificate details
      const table = document.createElement("table");

      // Add rows for each piece of information
      const fields = [
        { label: "Company Name", value: data.companyName || "N/A" },
        {
          label: "Incorporation Number",
          value: data.incorporationNumber || "N/A",
        },
        { label: "Certificate Number", value: data.certificateNumber || "N/A" },
        {
          label: "Recognition Date",
          value: formatDate(data.recognitionDate) || "N/A",
        },
        { label: "Status", value: data.status || "N/A" },
      ];

      // Add additional fields if they exist in the API response
      if (data.address) {
        fields.push({ label: "Address", value: data.address || "N/A" });
      }

      if (data.sector) {
        fields.push({ label: "Sector", value: data.sector || "N/A" });
      }

      // Create table rows
      fields.forEach((field) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.innerHTML = `<strong>${field.label}</strong>`;
        cell2.textContent = field.value;
      });

      certificateDetails.appendChild(table);

      // Add a verification message
      const verificationMsg = document.createElement("p");
      verificationMsg.style.marginTop = "20px";
      verificationMsg.style.fontWeight = "bold";
      verificationMsg.style.color = data.status === "Active" ? "green" : "red";
      verificationMsg.textContent =
        data.status === "Active"
          ? "This certificate is valid and recognized by the Department for Promotion of Industry and Internal Trade (DPIIT)."
          : "This certificate is not currently active. Please contact the relevant authorities for more information.";

      certificateDetails.appendChild(verificationMsg);
    } catch (error) {
      console.error("Error displaying certificate details:", error);
      certificateDetails.innerHTML =
        "<p>Error displaying certificate details. Please try again.</p>";
    }
  }

  // Helper function to format date
  function formatDate(dateString) {
    if (!dateString) return "N/A";

    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch (error) {
      return dateString;
    }
  }

  // Add keyboard support for verification
  document
    .getElementById("incorporation-number")
    .addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        verifyBtn.click();
      }
    });

  document
    .getElementById("msme-number")
    .addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        verifyMsmeBtn.click();
      }
    });
});

// Handle Explore all button clicks functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get the explore button
  const exploreButton = document.querySelector(".explore-btn");

  // Add click event listener
  exploreButton.addEventListener("click", () => {
    window.open(
      "http://127.0.0.1:5500/All%20services%20list/all-services.html",
      "_blank"
    );
  });
});

//Add your launch now functionality here
document.addEventListener("DOMContentLoaded", function () {
  // Get the button and the target section
  const launchButton = document.querySelector(".launch-btn");
  const industrySection = document.querySelector(".industry-section");

  // Add click event listener
  launchButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default action if it's a link

    industrySection.scrollIntoView({ behavior: "smooth" });
  });
});

// Handle service card clicks
document.addEventListener("DOMContentLoaded", function () {
  // Toggle switch functionality
  const toggleSwitch = document.querySelector(".switch input");
  const companyCard = document.querySelector(".service-card.company");
  const individualCard = document.querySelector(".service-card.individual");
  const companyServices = document.querySelector(".company-services");
  const individualServices = document.querySelector(".individual-services");

  toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
      companyCard.style.opacity = "0.5";
      individualCard.style.opacity = "1";
      companyServices.classList.remove("active");
      individualServices.classList.add("active");
    } else {
      companyCard.style.opacity = "1";
      individualCard.style.opacity = "0.5";
      companyServices.classList.add("active");
      individualServices.classList.remove("active");
    }
  });

  // Initialize cards opacity
  companyCard.style.opacity = "1";
  individualCard.style.opacity = "0.5";

  // Service buttons hover effect
  const serviceButtons = document.querySelectorAll(".service-btn");
  serviceButtons.forEach((button) => {
    button.addEventListener("mouseover", function () {
      this.style.transform = "scale(1.05)";
    });
    button.addEventListener("mouseout", function () {
      this.style.transform = "scale(1)";
    });
  });

  // Launch button click animation
  const launchBtn = document.querySelector(".launch-btn");
  launchBtn.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 200);
  });
});

// Counter Animation for Statistics
const statsSection = document.querySelector(".stats-section");
const numbers = document.querySelectorAll(".stat-number");
let hasAnimated = false;

// Enhanced counter animation
function animateCounter(element, target) {
  let current = 0;
  const duration = 2500;
  const steps = duration / 16;
  const increment = target / steps;
  let step = 0;

  const easeOutQuart = (t) => 1 - --t * t * t * t;

  const timer = setInterval(() => {
    step++;
    const progress = easeOutQuart(step / steps);
    current = Math.min(target * progress, target);

    if (target >= 1000) {
      element.textContent = Math.floor(current).toLocaleString() + "+";
    } else {
      element.textContent = Math.floor(current) + "+";
    }

    if (step >= steps) {
      clearInterval(timer);
    }
  }, duration / steps);
}

// Add parallax effect to stats cards
const cards = document.querySelectorAll(".stat-card");
cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
  });
});

// Intersection Observer for triggering animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        numbers.forEach((number) => {
          const target = parseInt(number.getAttribute("data-target"));
          animateCounter(number, target);
        });
      }
    });
  },
  { threshold: 0.5 }
);

// Start observing the stats section
observer.observe(statsSection);

// Statistics Section Scroll
const statsContainer = document.querySelector(".stats-container");
const scrollLeftBtn = document.querySelector(".scroll-btn.left");
const scrollRightBtn = document.querySelector(".scroll-btn.right");
const cardWidth = 300; // Width of card + gap
let autoScrollInterval;

// Manual scroll with buttons
scrollLeftBtn.addEventListener("click", () => {
  statsContainer.scrollBy({
    left: -cardWidth,
    behavior: "smooth",
  });
});

scrollRightBtn.addEventListener("click", () => {
  statsContainer.scrollBy({
    left: cardWidth,
    behavior: "smooth",
  });
});

// Auto scroll function
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    if (
      statsContainer.scrollLeft + statsContainer.clientWidth >=
      statsContainer.scrollWidth
    ) {
      // If reached the end, scroll back to start
      statsContainer.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      statsContainer.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  }, 5000); // Auto scroll every 5 seconds
}

// Stop auto scroll on user interaction
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Restart auto scroll after user interaction
function restartAutoScroll() {
  stopAutoScroll();
  startAutoScroll();
}

// Event listeners for user interaction
statsContainer.addEventListener("mouseenter", stopAutoScroll);
statsContainer.addEventListener("mouseleave", startAutoScroll);
scrollLeftBtn.addEventListener("click", restartAutoScroll);
scrollRightBtn.addEventListener("click", restartAutoScroll);

// Start auto scroll when the page loads
startAutoScroll();

//Container2//
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Lucide icons
  lucide.createIcons();

  // Auto-scroll for logos (Left & Right)
  const logosScroll = document.querySelector(".logos-scroll");
  let scrollPosition = 0;
  let scrollDirection = 1; // 1 = Right, -1 = Left
  const scrollSpeed = 0.5;
  let isHovered = false;
  let lastTimestamp = 0;

  logosScroll.addEventListener("mouseenter", () => {
    isHovered = true;
  });

  logosScroll.addEventListener("mouseleave", () => {
    isHovered = false;
  });

  function smoothScroll(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const delta = timestamp - lastTimestamp;

    if (!isHovered) {
      scrollPosition += scrollSpeed * (delta / 16) * scrollDirection;

      // Reverse direction at edges
      if (scrollPosition >= logosScroll.scrollWidth - logosScroll.clientWidth) {
        scrollDirection = 0; // Reset to start for smooth left-to-right loop
      }

      logosScroll.scrollLeft = scrollPosition;
    }

    lastTimestamp = timestamp;
    requestAnimationFrame(smoothScroll);
  }

  requestAnimationFrame(smoothScroll);

  // Smooth scroll for services with momentum
  const servicesContainer = document.querySelector(".services-container1");
  let isScrolling = false;
  let startX;
  let scrollLeft;
  let velocity = 0;
  let momentumID;

  function applyMomentum() {
    if (Math.abs(velocity) > 0.1) {
      servicesContainer.scrollLeft += velocity;
      velocity *= 0.95; // Friction
      momentumID = requestAnimationFrame(applyMomentum);
    }
  }

  servicesContainer.addEventListener("mousedown", (e) => {
    isScrolling = true;
    startX = e.pageX - servicesContainer.offsetLeft;
    scrollLeft = servicesContainer.scrollLeft;
    cancelAnimationFrame(momentumID);

    // Store the last few positions for velocity calculation
    const positions = [];
    let lastTime = Date.now();

    function trackMovement(e) {
      if (isScrolling) {
        const now = Date.now();
        positions.push({
          x: e.pageX,
          time: now,
        });

        // Keep only the last 5 positions
        if (positions.length > 5) positions.shift();

        const x = e.pageX - servicesContainer.offsetLeft;
        const walk = (x - startX) * 2;
        servicesContainer.scrollLeft = scrollLeft - walk;
      }
    }

    function stopScrolling() {
      if (positions.length > 1) {
        const last = positions[positions.length - 1];
        const first = positions[0];
        const deltaX = last.x - first.x;
        const deltaTime = last.time - first.time;
        velocity = (deltaX / deltaTime) * 16; // Convert to pixels per frame
        applyMomentum();
      }
      isScrolling = false;
      positions.length = 0;
    }

    document.addEventListener("mousemove", trackMovement);
    document.addEventListener("mouseup", function cleanup() {
      document.removeEventListener("mousemove", trackMovement);
      document.removeEventListener("mouseup", cleanup);
      stopScrolling();
    });
  });

  // Parallax effect for service cards
  const cards = document.querySelectorAll(".service-card1");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-5px)
        `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
});

// Add hover effect to feature cards
document.querySelectorAll(".feature-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-2px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// Play button click handler
document.querySelector(".play-button").addEventListener("click", () => {
  // Add your video play functionality here
  console.log("Play video clicked");
});

// PLANS FUNCTIONALITY SECTION
// document.addEventListener("DOMContentLoaded", () => {
//   const plansModal = document.getElementById("plansModal");
//   const demoModal = document.getElementById("demoModal");
//   const explorePlansBtn = document.querySelector(".explore-plans");
//   const requestDemoBtn = document.querySelector(".request-demo");
//   const closeBtns = document.querySelectorAll(".close");

//   explorePlansBtn.addEventListener("click", () => {
//     plansModal.style.display = "block";
//   });

//   requestDemoBtn.addEventListener("click", () => {
//     demoModal.style.display = "block";
//   });

//   closeBtns.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       plansModal.style.display = "none";
//       demoModal.style.display = "none";
//     });
//   });

//   window.addEventListener("click", (e) => {
//     if (e.target === plansModal) {
//       plansModal.style.display = "none";
//     }
//     if (e.target === demoModal) {
//       demoModal.style.display = "none";
//     }
//   });

//   // Demo form submission
//   const demoForm = document.getElementById("demoForm");
//   demoForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const formData = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       phone: document.getElementById("phone").value,
//       message: document.getElementById("message").value,
//     };

//     console.log("Form submitted:", formData);
//     alert("Thank you for your interest! We will contact you soon.");
//     demoModal.style.display = "none";
//     demoForm.reset();
//   });
// });

// Industry Target Path
// const industryData = {
//   1: {
//       title: 'Business Setup',
//       description: 'Our business setup services include company registration, license acquisition, documentation support, and compliance guidance. We help you navigate through the complex regulatory requirements and establish your business efficiently.'
//   },
//   2: {
//       title: 'Business Growth',
//       description: 'Accelerate your business growth with our comprehensive solutions including market analysis, expansion strategies, operational optimization, and revenue enhancement programs.'
//   },
//   3: {
//       title: 'Performance Analysis',
//       description: 'Get detailed insights into your business performance with our advanced analytics tools. Monitor KPIs, identify trends, and make data-driven decisions to improve your business outcomes.'
//   },
//   4: {
//       title: 'Business Protection',
//       description: 'Protect your business with our comprehensive security solutions including risk assessment, data protection, cyber security, and business continuity planning.'
//   },
//   5: {
//       title: 'Affordable Nearby Solution',
//       description: 'Access cost-effective business solutions in your locality. We provide convenient and accessible support services tailored to your local market needs.'
//   },
//   6: {
//       title: 'Modern IT Infrastructure',
//       description: 'Transform your business with modern IT infrastructure solutions including cloud services, digital transformation, and technology integration.'
//   },
//   7: {
//       title: 'Digital Marketing',
//       description: 'Enhance your digital presence with our comprehensive marketing solutions including SEO, social media management, content marketing, and online advertising.'
//   },
//   8: {
//       title: 'Expert Support',
//       description: 'Get expert support from our team of professionals. We provide consultation, training, and ongoing support to help your business succeed.'
//   }
// };

// Modal elements
// const modal = document.getElementById('modal1');
// const modalTitle = document.getElementById('modalTitle1');
// const modalDescription = document.getElementById('modalDescription1');
// const closeButton = document.querySelector('.close-button1');

// // Add click event listeners to all explore buttons
// document.querySelectorAll('.explore-button').forEach(button => {
//   button.addEventListener('click', () => {
//       const card = button.closest('.industry-card');
//       const id = card.dataset.id;
//       const data = industryData[id];

//       if (data) {
//           modalTitle.textContent = data.title;
//           modalDescription.textContent = data.description;
//           modal.classList.add('active');
//       }
//   })
// });

// // Close modal when clicking the close button
// closeButton.addEventListener('click', () => {
//   modal.classList.remove('active');
// });

// // Close modal when clicking outside
// modal.addEventListener('click', (e) => {
//   if (e.target === modal) {
//       modal.classList.remove('active');
//   }
// });

// // Close modal with Escape key
// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape' && modal.classList.contains('active')) {
//       modal.classList.remove('active');
//   }
// });

// Get all explore buttons in the industry section
function openModal1(industry) {
  const modal = document.getElementById("modal0");
  const modalTitle = document.getElementById("modalTitle0");

  modalTitle.textContent = industry;
  modal.classList.add("active");

  // Prevent body scrolling when modal is open
  document.body.style.overflow = "hidden";
}

function closeModal1() {
  const modal = document.getElementById("modal0");
  modal.classList.remove("active");

  // Re-enable body scrolling
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside
document.getElementById("modal0").addEventListener("click", function (event) {
  if (event.target === this) {
    closeModal1();
  }
});
// Handle Explore plan button clicks functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get the explore button
  const viewButton = document.querySelector(".view-all");

  // Add click event listener
  viewButton.addEventListener("click", () => {
    window.open(
      "http://127.0.0.1:5500/Industry-traget/industry-target.html",
      "_blank"
    );
  });
});

// Handle Explore plan button clicks functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get the explore button
  const exploreButton = document.querySelector(".explore-plans");

  // Add click event listener
  exploreButton.addEventListener("click", () => {
    window.open(
      "http://127.0.0.1:5500/Industry-traget/industry-target.html",
      "_blank"
    );
  });
});

// Tabs functionality with dynamic content
const tabContents = {
  resumes: {
    title: "Other Services Than Offered By India Certify",
    tags: [
      "GeM Registration",
      "Food Registration",
      "Udyam Registration",
      "ISO Registration",
      "PF Registration",
      "Barcode Registration",
      "Darpan Registration",
      "ZED Certification",
      "DSC Registration",
      "GST Registration",
      "Gumasta Registration",
      "ESI Registration",
      "RCMC Registration",
      "APEDA Registration",
      "BIS Registration",
      "FCRA Registration",
      "DDT DSP ISP LICENSE",
      "Startup India Registration",
      "12A And 80G Registration",
      "Only 80G Registration",
    ],
  },
  "cover-letters": {
    title: "Professional Cover Letter Templates",
    tags: [
      "Entry Level Cover Letter",
      "Professional Cover Letter",
      "Creative Cover Letter",
      "Career Change Cover Letter",
      "Internal Position Cover Letter",
      "Academic Cover Letter",
      "Executive Cover Letter",
      "Modern Cover Letter",
      "Federal Cover Letter",
      "Internship Cover Letter",
      "Teaching Cover Letter",
      "Nursing Cover Letter",
      "IT Cover Letter",
      "Sales Cover Letter",
      "Engineering Cover Letter",
      "Legal Cover Letter",
    ],
  },
  "cv-samples": {
    title: "CV Samples By Industry",
    tags: [
      "Academic CV",
      "Research CV",
      "Medical CV",
      "Scientific CV",
      "Professor CV",
      "Graduate CV",
      "International CV",
      "Postdoctoral CV",
      "Fellowship CV",
      "PhD CV",
      "Lecturer CV",
      "Researcher CV",
      "Scholarship CV",
      "Student CV",
      "Technical CV",
      "Industry CV",
      "Professional CV",
      "Executive CV",
    ],
  },
};

// Get DOM elements
const tabButtons = document.querySelectorAll(".tab-btn");
const contentArea = document.querySelector(".content-area");

// Function to update content
function updateContent(tabName) {
  const content = tabContents[tabName];

  // Update content area
  contentArea.innerHTML = `
      <h3>${content.title}</h3>
      <div class="tag-grid">
          ${content.tags
            .map((tag) => `<span class="tag">${tag}</span>`)
            .join("")}
      </div>
  `;
}

// Set initial active tab
updateContent("resumes");

// Add click handlers to tabs
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    tabButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    button.classList.add("active");

    // Update content based on selected tab
    const tabName = button.dataset.tab;
    updateContent(tabName);
  });
});

// footer
// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// DOM Elements
const helpButton = document.getElementById("helpButton");
const helpMenu = document.getElementById("helpMenu");
const closeHelp = document.getElementById("closeHelp");
const chatWidget = document.getElementById("chatWidget");
const startChat = document.getElementById("startChat");
const closeChat = document.getElementById("closeChat");
const messageInput = document.getElementById("messageInput");
const sendMessage = document.getElementById("sendMessage");
const chatMessages = document.getElementById("chatMessages");
const faqsModal = document.getElementById("faqsModal");
const showFaqs = document.getElementById("showFaqs");
const closeFaqs = document.getElementById("closeFaqs");
const knowledgeModal = document.getElementById("knowledgeModal");
const showKnowledge = document.getElementById("showKnowledge");
const closeKnowledge = document.getElementById("closeKnowledge");

// Help Menu Toggle
helpButton.addEventListener("click", () => {
  helpMenu.classList.toggle("active");
  // Close other widgets if open
  chatWidget.classList.remove("active");
  faqsModal.classList.remove("active");
  knowledgeModal.classList.remove("active");
});

closeHelp.addEventListener("click", () => {
  helpMenu.classList.remove("active");
});

// Chat Widget
startChat.addEventListener("click", () => {
  chatWidget.classList.add("active");
  helpMenu.classList.remove("active");
});

closeChat.addEventListener("click", () => {
  chatWidget.classList.remove("active");
});

// Chat Functionality
function addMessage(message, isUser = false) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${isUser ? "user" : "support"}`;
  messageDiv.innerHTML = `<p>${message}</p>`;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendMessage.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message) {
    addMessage(message, true);
    messageInput.value = "";

    // Simulate support response
    setTimeout(() => {
      addMessage(
        "Thank you for your message. Our support team will respond shortly."
      );
    }, 1000);
  }
});

messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage.click();
  }
});

// FAQs Modal
showFaqs.addEventListener("click", () => {
  faqsModal.classList.add("active");
  helpMenu.classList.remove("active");
});

closeFaqs.addEventListener("click", () => {
  faqsModal.classList.remove("active");
});

// Knowledge Base Modal
showKnowledge.addEventListener("click", () => {
  knowledgeModal.classList.add("active");
  helpMenu.classList.remove("active");
});

closeKnowledge.addEventListener("click", () => {
  knowledgeModal.classList.remove("active");
});

// Close modals when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === faqsModal) {
    faqsModal.classList.remove("active");
  }
  if (e.target === knowledgeModal) {
    knowledgeModal.classList.remove("active");
  }
});

// Prevent closing when clicking inside modal content
document.querySelectorAll(".modal-content").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

// Video data array with 10 videos
const videoData = [
  {
    id: 1,
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=300&h=533",
    title: "From Startup to Success",
    description: "How we helped a local business grow 10x",
  },
  {
    id: 2,
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Digital Transformation",
    description: "Revolutionizing traditional business",
  },
  {
    id: 3,
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Global Expansion",
    description: "Breaking into international markets",
  },
  {
    id: 4,
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Tech Innovation",
    description: "Building the future of business",
  },
  {
    id: 5,
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=300&h=533",
    title: "AI Integration",
    description: "Implementing smart solutions",
  },
  {
    id: 6,
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Team Excellence",
    description: "Building high-performance teams",
  },
  {
    id: 7,
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Market Analysis",
    description: "Data-driven decision making",
  },
  {
    id: 8,
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Sustainable Growth",
    description: "Eco-friendly business solutions",
  },
  {
    id: 9,
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Cloud Solutions",
    description: "Modern infrastructure setup",
  },
  {
    id: 10,
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Customer Success",
    description: "Building lasting relationships",
  },
  {
    id: 11,
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Remote Workforce",
    description: "Building distributed teams",
  },
  {
    id: 12,
    videoId: "dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Office Transformation",
    description: "Creating productive workspaces",
  },
];

// Keep track of currently displayed videos and their positions
let activeVideos = videoData.slice(0, 4);
let lastChangedPositions = new Set();
let hoveredPositions = new Set();
let usedAnimations = new Set();

// All available animations
const animations = [
  "fade-out-in",
  "slide-left",
  "slide-right",
  "zoom-out-in",
  "flip-card",
  "rotate-card",
  "bounce-scale",
  "twist-fade",
  "slide-up-down",
  "diagonal-slide",
  "ripple-effect",
  "glitch-effect",
  "swing-effect",
  "pulse-wave",
  "flip-vertical",
  "blur-shift",
  "elastic-bounce",
];

// Function to create a story card
function createStoryCard(video, position) {
  const card = document.createElement("div");
  card.className = "story-card";
  card.dataset.position = position;
  card.dataset.videoId = video.id;
  card.innerHTML = `
    <div class="video-container">
      <div class="thumbnail-overlay"></div>
      <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
      <button class="play-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      </button>
    </div>
    <div class="story-info">
      <h3>${video.title}</h3>
      <p>${video.description}</p>
    </div>
  `;

  card.addEventListener("mouseenter", () => {
    hoveredPositions.add(position);
  });

  card.addEventListener("mouseleave", () => {
    hoveredPositions.delete(position);
  });

  card.addEventListener("click", () => openVideoModal(video.videoId));

  setTimeout(() => card.classList.add("animate"), 100 * position);

  return card;
}

// Function to get random time between 3 and 6 seconds
function getRandomTime() {
  return Math.floor(Math.random() * (6000 - 3000) + 3000);
}

// Function to get a random position that hasn't been changed recently and isn't being hovered
function getRandomPosition() {
  let availablePositions = [];
  for (let i = 0; i < 4; i++) {
    if (!lastChangedPositions.has(i) && !hoveredPositions.has(i)) {
      availablePositions.push(i);
    }
  }

  if (availablePositions.length === 0) {
    availablePositions = [];
    for (let i = 0; i < 4; i++) {
      if (!hoveredPositions.has(i)) {
        availablePositions.push(i);
      }
    }
  }

  if (availablePositions.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * availablePositions.length);
  const position = availablePositions[randomIndex];

  lastChangedPositions.add(position);

  if (lastChangedPositions.size > 2) {
    lastChangedPositions.delete([...lastChangedPositions][0]);
  }

  return position;
}

// Function to get a random animation that hasn't been used recently
function getRandomAnimation() {
  let availableAnimations = animations.filter(
    (animation) => !usedAnimations.has(animation)
  );

  if (availableAnimations.length === 0) {
    usedAnimations.clear();
    availableAnimations = animations;
  }

  const randomIndex = Math.floor(Math.random() * availableAnimations.length);
  const animation = availableAnimations[randomIndex];

  usedAnimations.add(animation);

  if (usedAnimations.size > 5) {
    usedAnimations.delete([...usedAnimations][0]);
  }

  return animation;
}

// Function to create a unique transition effect
function createUniqueTransition(oldCard, newCard, position) {
  const animation = getRandomAnimation();
  const storiesGrid = document.getElementById("storiesGrid");

  // Create a clone of the old card for the transition
  const transitionCard = oldCard.cloneNode(true);
  transitionCard.classList.add(animation);
  transitionCard.style.position = "absolute";
  transitionCard.style.top = `${oldCard.offsetTop}px`;
  transitionCard.style.left = `${oldCard.offsetLeft}px`;
  transitionCard.style.width = `${oldCard.offsetWidth}px`;
  transitionCard.style.height = `${oldCard.offsetHeight}px`;
  transitionCard.style.zIndex = "20";

  // Add the transition card to the grid
  storiesGrid.appendChild(transitionCard);

  // Hide the original card
  oldCard.style.opacity = "0";

  // After animation completes, replace the old card with the new one
  setTimeout(() => {
    storiesGrid.removeChild(transitionCard);
    storiesGrid.replaceChild(newCard, oldCard);

    // Add a subtle entrance animation to the new card
    newCard.style.opacity = "0";
    newCard.style.transform = "scale(0.95)";

    setTimeout(() => {
      newCard.style.opacity = "1";
      newCard.style.transform = "scale(1)";
      newCard.style.transition = "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
    }, 50);
  }, 1200);

  // Return the animation name for logging
  return animation;
}

// Function to rotate videos with unique animations
function rotateVideos() {
  const storiesGrid = document.getElementById("storiesGrid");
  if (!storiesGrid) return;

  const positionToChange = getRandomPosition();

  if (positionToChange !== null) {
    // Get videos that aren't currently displayed
    const remainingVideos = videoData.filter(
      (video) => !activeVideos.some((active) => active.id === video.id)
    );

    if (remainingVideos.length > 0) {
      const randomNewVideo =
        remainingVideos[Math.floor(Math.random() * remainingVideos.length)];

      const oldCard = storiesGrid.children[positionToChange];
      if (oldCard) {
        // Create new card
        const newCard = createStoryCard(randomNewVideo, positionToChange);

        // Apply unique transition effect
        createUniqueTransition(oldCard, newCard, positionToChange);

        // Update active videos array
        activeVideos[positionToChange] = randomNewVideo;
      }
    }
  }

  setTimeout(rotateVideos, getRandomTime());
}

// Initialize the grid
function initializeGrid() {
  const storiesGrid = document.getElementById("storiesGrid");
  if (!storiesGrid) return;

  // Clear existing content
  storiesGrid.innerHTML = "";

  // Add initial videos
  activeVideos.forEach((video, index) => {
    storiesGrid.appendChild(createStoryCard(video, index));
  });

  // Start rotating videos after a delay
  setTimeout(rotateVideos, 3000);
}

// Video modal functionality
function openVideoModal(videoId) {
  const modal = document.getElementById("videoModal");
  const videoFrame = document.getElementById("videoFrame");
  if (!modal || !videoFrame) return;

  videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  modal.classList.add("active");
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  const videoFrame = document.getElementById("videoFrame");
  if (!modal || !videoFrame) return;

  videoFrame.src = "";
  modal.classList.remove("active");
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  const closeModalBtn = document.getElementById("closeModal");
  const videoModal = document.getElementById("videoModal");

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeVideoModal);
  }

  if (videoModal) {
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) {
        closeVideoModal();
      }
    });
  }

  // Initialize the grid
  initializeGrid();
});

// Email Form Submission
document.querySelector(".get-info-btn").addEventListener("click", function () {
  const email = document.querySelector(".email-input").value;
  if (email) {
    alert("Thank you! We will send more information to " + email);
    document.querySelector(".email-input").value = "";
  } else {
    alert("Please enter your email address");
  }
});

// Get DOM elements
const businessTypeSelect = document.getElementById("businessType");
const objectiveSelect = document.getElementById("objective");
const selectedBusinessType = document.getElementById("selectedBusinessType");
const selectedObjective = document.getElementById("selectedObjective");

// Update selected options display
function updateSelectedOptions() {
  selectedBusinessType.textContent = `Business Type: ${businessTypeSelect.value}`;
  selectedObjective.textContent = `Objective: ${objectiveSelect.value}`;
}

// Add event listeners to dropdowns
businessTypeSelect.addEventListener("change", updateSelectedOptions);
objectiveSelect.addEventListener("change", updateSelectedOptions);

// Modal Functions
function openModal() {
  document.getElementById("formModal").style.display = "block";
  updateSelectedOptions();
  generateCaptcha();
}

function closeModal() {
  document.getElementById("formModal").style.display = "none";
}

function closeSuccessModal() {
  document.getElementById("successModal").style.display = "none";
}

// Captcha Generation
function generateCaptcha() {
  const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("captcha").textContent = captcha;
}

// Form Submission
function submitForm(event) {
  event.preventDefault();

  // Validate captcha
  const captchaInput = document.getElementById("captchaInput").value;
  const captchaText = document.getElementById("captcha").textContent;

  if (captchaInput !== captchaText) {
    alert("Invalid Captcha! Please try again.");
    generateCaptcha();
    document.getElementById("captchaInput").value = "";
    return;
  }

  // Validate terms
  if (!document.getElementById("terms").checked) {
    alert("Please accept the Terms and Conditions");
    return;
  }

  // Close form modal and show success modal
  document.getElementById("formModal").style.display = "none";
  document.getElementById("successModal").style.display = "block";

  // Reset form
  event.target.reset();
}

// Generate initial captcha
generateCaptcha();
// Initial update of selected options
updateSelectedOptions();
