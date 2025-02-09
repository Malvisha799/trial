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
  accountingandtax: {
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
  designregistration: {
    title: "Design Registration",
    items: ["Logo Design", "Design Registration"],
  },
  businesscontracts: {
    title: "Business Contracts",
    items: [
      "Non Disclosure Agreement NDA",
      "Service Level Agreement",
      "Franchise Agreement",
      "Master Service Agreement",
      "Shareholders Agreement",
      "Joint Venture Agreement",
      "Founders Agreement",
      "Vendor Agreement",
      "Consultancy Agreement",
      "Memorandum of Understanding",
      "Succession Certificate",
      "Scope of Work Agreement",
      "Share Purchase Agreement",
      "Relinquishment Deed",
      "Legal Heir Certificate",
      "Trade Licence",
      "Noncompete Agreement",
      "Finance Agreement",
      "GDPR",
    ],
  },
  personalandfamily: {
    title: "Personal & Family",
    items: ["Will Registration", "Probate of Will", "Power of Attorney"],
  },
  realestate: {
    title: "Real Estate",
    items: [
      "Rental Agreement",
      "Sale Deed",
      "Gift Deed",
      "Rental Tenant Notice",
    ],
  },
  notices: {
    title: "Notices",
    items: [
      "Legal Notice",
      "Legal Notice for Money Recovery",
      "Legal Notice for recovery of dues",
      "Cheque Bounce Notice",
      "Legal Notice Under Consumer Protection Act",
    ],
  },
  hrpolicies: {
    title: "HR Policies",
    items: ["Employment Agreement", "ESOP", "Payroll Maintenance"],
  },
  fundraising: {
    title: "Fundraising",
    items: ["Fundraising", "Pitch-Deck", "Business Loan", "DPR Service"],
  },
  patent: {
    title: "Patent",
    items: [
      "Indian Patent Search",
      "Provisional Patent Application",
      "Patent Registration",
    ],
  },
  ngo: {
    title: "NGO",
    items: [
      "NGO",
      "Section 8 Company",
      "Trust Registration",
      "Society Registration",
      "NGO Compliances",
      "NGO Compliance",
      "Section 8 Compliance",
      "CSR-1 Filing",
      "Sec.80G & Sec. 12A",
      "Darpan Registration",
      "FCRA Registration",
    ],
  },
  propertyandpersonal: {
    title: "Property & Personal",
    items: [
      "Property Title Verification",
      "Property Registration",
      "Rera Complaint",
      "Licenses & Registration",
      "Gun License",
      "Name Change & Other Conditions",
      "Name Change",
      "Religion Change",
      "Gender Change",
      "File an e-FIR",
      "Online Police Complaint",
      "Marriage",
      "Marriage Registration",
      "Court Marriage",
      "Mutual Divorce",
      "Divorce Alimony",
      "Restitution of Conjugal Rights",
      "Immigration",
      "Corporate immigration",
      "Family immigration",
      "College immigration",
      "File a Consumer Complaint",
      "Online Consumer Complaint",
      "E-Commerce Consumer Complaint",
      "Insurance Consumer Complaint",
    ],
  },
  lawyersandexperts: {
    title: "Lawyers & Experts",
    items: [
      "Labour Law Advisor",
      "Criminal Lawyer",
      "Labour Lawyer",
      "Consumer Court Lawyer",
      "Divorce Lawyer",
      "Banking Lawyer",
      "Immigration Lawyer",
      "Family Lawyer",
      "Litigation Lawyer",
      "Intellectual Property Lawyer",
      "Trademark Lawyer",
      "Reply to ITR Notice",
      "Expert Services",
      "Technolgy, Media and, Telecom (TMT)",
      "Risk Management and Regulatory Risk",
    ],
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
        // Check for "NGO Compliance" and add custom styles
        if (boldItems.includes(item)) {
          return `<li style="font-weight: bold; margin-top: 15px; font-size: 15px; text-dark">${item}</li>`;
        }
        return `<li>${item}</li>`;
      })
      .join("");
  } else {
    sectionTitle.textContent = "Not Found";
    sectionList.innerHTML = "<li>No items to display</li>";
  }
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

// Handle button clicks
document.querySelector(".explore-btn").addEventListener("click", () => {
  console.log("Explore All clicked");
  // Add your explore functionality here
});

document.querySelector(".launch-btn").addEventListener("click", () => {
  console.log("Launch Now clicked");
  // Add your launch functionality here
});

// document.querySelector(".continue-btn").addEventListener("click", () => {
//   console.log("Continue With Company clicked");
//   // Add your continue functionality here
// });

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

// Close dropdown when clicking outside
// document.addEventListener("click", (event) => {
//   document.querySelectorAll(".service-details").forEach((dropdown) => {
//     if (!dropdown.closest(".service-card").contains(event.target)) {
//       dropdown.style.display = "none";
//     }
//   });
// });

// Handle navigation dropdown clicks
// document.querySelectorAll(".nav-link").forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("Navigation item clicked:", link.textContent.trim());
//     // Add your navigation functionality here
//   });
// });

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
