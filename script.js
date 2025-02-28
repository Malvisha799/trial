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
  let scrollDirection = -1; // 1 = Right, -1 = Left
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
        scrollDirection = -1; // Move Left
      } else if (scrollPosition <= 0) {
        scrollDirection = 1; // Move Right
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
document.addEventListener("DOMContentLoaded", () => {
  const plansModal = document.getElementById("plansModal");
  const demoModal = document.getElementById("demoModal");
  const explorePlansBtn = document.querySelector(".explore-plans");
  const requestDemoBtn = document.querySelector(".request-demo");
  const closeBtns = document.querySelectorAll(".close");

  explorePlansBtn.addEventListener("click", () => {
    plansModal.style.display = "block";
  });

  requestDemoBtn.addEventListener("click", () => {
    demoModal.style.display = "block";
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      plansModal.style.display = "none";
      demoModal.style.display = "none";
    });
  });

  window.addEventListener("click", (e) => {
    if (e.target === plansModal) {
      plansModal.style.display = "none";
    }
    if (e.target === demoModal) {
      demoModal.style.display = "none";
    }
  });

  // Demo form submission
  const demoForm = document.getElementById("demoForm");
  demoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    };

    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We will contact you soon.");
    demoModal.style.display = "none";
    demoForm.reset();
  });
});
// Tabs functionality with dynamic content
const tabContents = {
  resumes: {
      title: "Other Services Than Offered By India Certify",
      tags: [
          "GeM Registration", "Food Registration", "Udyam Registration",
          "ISO Registration", "PF Registration", "Barcode Registration",
          "Darpan Registration", "ZED Certification", "DSC Registration",
          "GST Registration", "Gumasta Registration", "ESI Registration",
          "RCMC Registration", "APEDA Registration", "BIS Registration",
          "FCRA Registration", "DDT DSP ISP LICENSE", "Startup India Registration",
          "12A And 80G Registration", "Only 80G Registration"
      ]
  },
  "cover-letters": {
      title: "Professional Cover Letter Templates",
      tags: [
          "Entry Level Cover Letter", "Professional Cover Letter",
          "Creative Cover Letter", "Career Change Cover Letter",
          "Internal Position Cover Letter", "Academic Cover Letter",
          "Executive Cover Letter", "Modern Cover Letter",
          "Federal Cover Letter", "Internship Cover Letter",
          "Teaching Cover Letter", "Nursing Cover Letter",
          "IT Cover Letter", "Sales Cover Letter",
          "Engineering Cover Letter", "Legal Cover Letter"
      ]
  },
  "cv-samples": {
      title: "CV Samples By Industry",
      tags: [
          "Academic CV", "Research CV", "Medical CV",
          "Scientific CV", "Professor CV", "Graduate CV",
          "International CV", "Postdoctoral CV", "Fellowship CV",
          "PhD CV", "Lecturer CV", "Researcher CV",
          "Scholarship CV", "Student CV", "Technical CV",
          "Industry CV", "Professional CV", "Executive CV"
      ]
  }
};

// Get DOM elements
const tabButtons = document.querySelectorAll('.tab-btn');
const contentArea = document.querySelector('.content-area');

// Function to update content
function updateContent(tabName) {
  const content = tabContents[tabName];
  
  // Update content area
  contentArea.innerHTML = `
      <h3>${content.title}</h3>
      <div class="tag-grid">
          ${content.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
  `;
}

// Set initial active tab
updateContent('resumes');

// Add click handlers to tabs
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
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
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=300&h=533",
    title: "From Startup to Success",
    description: "How we helped a local business grow 10x",
  },
  {
    id: 2,
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Digital Transformation",
    description: "Revolutionizing traditional business",
  },
  {
    id: 3,
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Global Expansion",
    description: "Breaking into international markets",
  },
  {
    id: 4,
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Tech Innovation",
    description: "Building the future of business",
  },
  {
    id: 5,
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=300&h=533",
    title: "AI Integration",
    description: "Implementing smart solutions",
  },
  {
    id: 6,
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Team Excellence",
    description: "Building high-performance teams",
  },
  {
    id: 7,
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Market Analysis",
    description: "Data-driven decision making",
  },
  {
    id: 8,
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Sustainable Growth",
    description: "Eco-friendly business solutions",
  },
  {
    id: 9,
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Cloud Solutions",
    description: "Modern infrastructure setup",
  },
  {
    id: 10,
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Customer Success",
    description: "Building lasting relationships",
  },
  {
    id: 11,
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Remote Workforce",
    description: "Building distributed teams",
  },
  {
    id: 12,
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=300&h=533",
    title: "Office Transformation",
    description: "Creating productive workspaces",
  }
];

// Keep track of currently displayed videos and their positions
let activeVideos = videoData.slice(0, 4);
let lastChangedPositions = new Set();
let hoveredPositions = new Set();
let usedAnimations = new Set();

// All available animations
const animations = [
  'fade-out-in',
  'slide-left',
  'slide-right',
  'zoom-out-in',
  'flip-card',
  'rotate-card',
  'bounce-scale',
  'twist-fade',
  'slide-up-down',
  'diagonal-slide',
  'ripple-effect',
  'glitch-effect',
  'swing-effect',
  'pulse-wave',
  'flip-vertical',
  'blur-shift',
  'elastic-bounce'
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
  let availableAnimations = animations.filter(animation => !usedAnimations.has(animation));
  
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
  transitionCard.style.position = 'absolute';
  transitionCard.style.top = `${oldCard.offsetTop}px`;
  transitionCard.style.left = `${oldCard.offsetLeft}px`;
  transitionCard.style.width = `${oldCard.offsetWidth}px`;
  transitionCard.style.height = `${oldCard.offsetHeight}px`;
  transitionCard.style.zIndex = '20';
  
  // Add the transition card to the grid
  storiesGrid.appendChild(transitionCard);
  
  // Hide the original card
  oldCard.style.opacity = '0';
  
  // After animation completes, replace the old card with the new one
  setTimeout(() => {
    storiesGrid.removeChild(transitionCard);
    storiesGrid.replaceChild(newCard, oldCard);
    
    // Add a subtle entrance animation to the new card
    newCard.style.opacity = '0';
    newCard.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
      newCard.style.opacity = '1';
      newCard.style.transform = 'scale(1)';
      newCard.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
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
  storiesGrid.innerHTML = '';
  
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

// Modal Functions
function openModal() {
  document.getElementById("formModal").style.display = "block";
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
