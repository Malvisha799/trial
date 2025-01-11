//  Dynamically shw data
document.querySelectorAll(".tabNameWrapperStyle").forEach((tab) => {
  tab.addEventListener("click", function () {
    const dropDownId = this.getAttribute("data-dropdown");
    console.log("Clicked Tab Text:", dropDownId);

    // const tabId = tabText
    // ?.toLowerCase()
    // .replace(/[^a-z0-9&]/g, '') // Sanitize text to match dropdown IDs
    // .replace(/\s+/g, '');
    // console.log('Sanitized Tab ID:', tabId);

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

document.querySelectorAll('.dropDownContainer').forEach((dropDownContainer, index) => {
  const menuItems = dropDownContainer.querySelectorAll('.menuItem');
  menuItems.forEach((menuItem) => {
    const infoType = menuItem.getAttribute('data-info');
    menuItem.addEventListener('mouseover', () => {
      displayInfo(infoType, index);
    })
  })
});

// Centralized content for all menu items
const rightSideContent = {
  businessRegistration: {
    title: "Business Registration",
    items: [
      "Private Limited Company",
      "Limited Liability Partnership",
      "One Person Company",
      "Sole Proprietorship",
      "Nidhi Company",
      "Producer Company",
      "Partnership Firm",
      "Startup India Registration",
    ],
  },
  internationalBusiness: {
    title: "International Business Setup",
    items: [
      "US Incorporation",
      "Singapore Incorporation",
      "UK Incorporation",
      "Netherlands Incorporation",
      "Hong Kong Company Incorporation",
      "Dubai Company Incorporation",
    ],
  },
  companynamesearch: {
    title: "Company Name Search",
    items: ["Company Name Search", "Change Company Name"],
  },
  licensesandRegistrations: {
    title: "Licenses & Registrations",
    items: [
      "Digital Signature Certificate",
      "Udyam Registration",
      "MSME Registration",
      "ISO Certification",
      "FSSAI [Food License]",
      "IEC [Import/Export Code]",
      "Apeda RCMC",
      "Spice Board Registration",
      "FIEO Registration",
      "Legal Metrology",
      "Hallmark Registration",
      "BIS Registration",
      "Liquor License",
      "CLRA Registration & Licensing",
      "AD Code Registration",
      "IRDAI Registration",
      "Drug & Cosmetic License",
      "Customs Clearance",
    ],
  },
  webDevelopment: {
    title: "Web Development",
    items: ["Web/E-Commerce Website Development"],
  },
  gstandotherindirecttax: {
    title: "GST and Other Indirect Tax",
    items: [
      "GST Registration",
      "GST Filing",
      "GST Login Portal",
      "HSN Code Finder",
      "GST Cancellation and Revocation",
      "Indirect Tax",
      "RoDTEP",
    ],
  },
  changesinpvtltdcompany: {
    title: "Changes in Pvt Ltd Company",
    items: [
      "Add a Director",
      "Remove a Director",
      "Increase Authorized Capital",
      "Close the Pvt Ltd Company",
      "Strike off Company",
      "Change Objective/Activity",
      "Change Address",
    ],
  },
  changesinlimitedliabilitypartnership: {
    title: "Changes In Limited Liability Partnership",
    items: [
      "Add Designated Partner",
      "Changes to LLP Agreement",
      "Close to LLP",
    ],
  },
  mandatoryannualfilings: {
    title: "Mandatory Annual Filings",
    items: [
      "Annual Compliance Services",
      "LLP Annual Filings",
      "Secretarial Audit",
    ],
  },
  labourcompliance: {
    title: "Labour Compliance",
    items: [
      "Provident Fund (PF) Registration",
      "ESI Registration",
      "Professional Tax Registration",
      "Shops and Establishments License",
      "Employee Stock Option Plan [ESOP]",
      "POSH Compliance",
      "Labor Law Advisor",
    ],
  },
  accountingAndTax: {
    title: "Accounting & Tax",
    items: [
      "Accounting and Book-keeping",
      "TDS Return Filing",
      "Individual Income Tax Filing",
      "Proprietorship Tax Return Filing",
      "ITR for LLP",
      "Corporate Tax",
      "Income Tax Assessment",
      "Income Tax Notice",
      "Virtual CFO",
    ],
  },
  convertyourbusiness: {
    title: "Convert Your Business",
    items: [
      "Proprietorship to Pvt Ltd Company",
      "Compliance Check - Secretarial Audit",
      "Due Diligence",
      "RBI Compliance",
      "Convert Partnership into LLP Company",
      "Convert Private into Public Limited Company",
      "Convert Private into OPC Company",
    ],
  },
  trademark: {
    title: "Trademark",
    items: [
      "Trademark Registration",
      "Trademark Search",
      "Respond to TM Objection",
      "Well Known Trademark",
      "Trademark Watch",
      "Trademark Renewal",
      "Trademark Assignment",
      "USA Trademark",
      "International Trademark",
      "Trademark Class Finder",
    ],
  },
  copyright: {
    title: "Copyright",
    items: ["Copyright Registration", "Copyright Music"],
  },
  patent: {
    title: "Patent",
    items: [
      "Indian Patent Search",
      "Provisional Patent Application",
      "Patent Registration",
    ],
  },
  infringement: {
    title: "Infringement",
    items: [
      "Copyright Infringement",
      "Patent Infringement",
      "Trademark Infringement",
    ],
  },
  designRegistration: {
    title: "Design Registration",
    items: ["Logo Design", "Design Registration"],
  },
};

function displayInfo(infoType, index) {
  const sectionTitle = document.querySelectorAll("#sectionTitle")[index];
  const sectionList = document.querySelectorAll("#sectionList")[index];

  if (!sectionTitle || !sectionList) {
    console.error("Section elements not found!");
    return;
  }
  const content = rightSideContent[infoType];

  if (content) {
    sectionTitle.textContent = content.title;
    sectionList.innerHTML = content.items
      .map((item) => `<li>${item}</li>`)
      .join("");
  } else {
    sectionTitle.textContent = "Not Found";
    sectionList.innerHTML = "<li>No items to display</li>";
  }
}
