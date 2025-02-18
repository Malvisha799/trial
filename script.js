@import url("https://fonts.googleapis.com/css2?family=Euphoria+Script&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}

.alt-nav {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 4px;
}

.alt-nav::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, #4867aa, #f83f37);
}
.navbar {
  display: flex;
  width: 100%;
  justify-content: space-between; /* Ensure proper spacing for other elements like logo and right-side items */
  align-items: center;
}

.custom-dropdown-menu {
  width: 690px;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: none;
}
.custom-dropdown-menu .row {
  margin: 0;
}
.custom-dropdown-menu .col-md-6 {
  padding: 0;
}
.dropdown:hover .custom-dropdown-menu {
  display: block;
}
.menu {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-size: 16px;
}
.tabsContainer {
  display: flex;
  justify-content: center;
  gap: 0;
  text-align: center;
  align-items: center;
}
.tabNameWrapperStyle {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.5; /* Adjust line height to match text size */
  height: 50px;
}
/* Add a border for the active state */
.tabNameWrapperStyle.active {
  border-bottom: 3px solid #f83f37; /* Adjust color to match your design */
  /* padding-bottom: 2px; Space for the border */
  padding-bottom: 0px; /* Ensure no padding conflict */
  box-sizing: border-box;
}
/* Default Arrow Style */
.arrow {
  transition: transform 0.3s ease;
  margin-left: 3px;
  font-size: 16px;
}
/* Rotate Arrow for Active State */
.tabNameWrapperStyle.active .arrow {
  transform: rotate(180deg); /* Flip the arrow */
}
.dropDownContainer {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  display: none;
  background: #f7f7f7;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 850px;
  /* max-height: 500px; */
  /* overflow-y: auto; */
  border-radius: 8px;
  padding: 5px;
  gap: 5px;
  /* transition: opacity 0.3s ease, visibility 0.3s ease; */
  /* flex-direction: column; */
  min-height: 400px;
  /* right: auto; */
  transform: translateX(-20px);
  z-index: 9999;
  opacity: 1 !important;
  /* visibility: visible !important; */
}
.dropDownContainer.active {
  display: flex !important;
  flex-direction: column;
  opacity: 1;
  visibility: visible;
}
.dropdown:hover .dropDownContainer {
  display: flex;
}
/* Hover Effect for Tabs (Optional) */
.tabNameWrapperStyle:hover + .dropDownContainer {
  display: flex; /* If you want dropdowns to appear on hover */
}

.leftNavWrapper {
  display: flex;
  gap: 5px;
}
.leftNavContainer {
  width: 300px;
  flex-shrink: 0;
  overflow: hidden;
  height: 550px;
}
.leftNavContainer span :hover {
  background: white;
  transition: background 0.3s ease;
}
.rightSection {
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  flex-grow: 1;
  background-color: #ffffff;
  max-height: 600px;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100% - 310px);
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 4px;
  justify-content: flex-start;
  min-height: 200px;
}
.rightSection::-webkit-scrollbar {
  width: 6px;
}
.rightSection::-webkit-scrollbar-thumb {
  background-color: #173069;
  border-radius: 4px;
}
.rightSection::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}
.menuItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  background: transparent;
  width: 100%;
  height: auto;
  transition: background color 0.3s ease;
  border: none;
  outline: none;
  box-shadow: none;
  gap: 10px;
}
#sectionList {
  max-height: 150px;
  margin-top: 10px;
  padding: 0;
  list-style: none;
}
.menuItem img {
  margin-right: 5px;
  margin-left: 8px;
  margin-top: 10px;
  width: 40px;
  height: 40px;
  display: inline-block;
}
.menuItem span {
  color: #333;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  display: inline-block;
  margin-top: 10px;
  position: relative;
  padding-right: 20px;
  flex-grow: 1;
  text-align: left;
}
.menuItem span::after {
  content: ">";
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  color: #070707;
  font-size: 20px;
  transition: color 0.3s ease;
  margin-left: auto;
}
.menuItem:hover {
  background: white;
  transition: background 0.3s ease;
}
.rightSection h3 {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
  margin-top: 10px;
}
.rightSection ul {
  max-width: 420px;
  padding: 0;
  list-style-type: none;
}
.rightSection ul li {
  margin-bottom: 6px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 380px;
  padding: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 1px solid #f8f8f8;
}
.rightSection ul li span {
  display: inline-block;
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rightSection ul li img {
  margin-right: 10px;
}
.rightSection ul li:hover {
  background: #f9f9f9;
}
.appointmentContainer {
  padding: 10px;
  background: #ffffff;
  border-radius: 4px;
  margin-left: 310px;
  margin-right: 5px;
  font-size: small;
  margin-top: 0px;
}
.bookAppointment {
  display: flex;
  align-items: center;
  position: sticky;
  bottom: 0;
  background: #e0ebff;
  padding: 12px;
  justify-content: space-between;
  border-radius: 8px;
  font-weight: bold;
}
.bookAppointment img {
  margin-right: 10px;
}
.bookAppointment p {
  margin: 0;
  margin-right: 1px;
  flex-grow: 1;
}
.bookAppointment a {
  color: #4d7aff;
  text-decoration: underline;
  font-weight: bold;
  font-size: 0.97rem;
}
.bookAppointment a:hover {
  text-decoration: underline;
}

/* Digital button and toggle container */
.digital-container {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 10px;
}

/* Digital button styles */
.uiverse {
  --duration: 7s;
  --easing: linear;
  --c-color-1: rgba(26, 240, 255, 0.7);
  --c-color-2: #291affd7;
  --c-color-3: #da5fd56c;
  --c-color-4: rgb(131, 159, 253);
  --c-shadow: rgba(160, 122, 145, 0.5);
  --c-shadow-inset-top: rgba(67, 93, 175, 0.9);
  --c-shadow-inset-bottom: rgba(255, 250, 215, 0.8);
  --c-radial-inner: #7098ce;
  --c-radial-outer: #001229;
  --c-color: #fff;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  position: relative;
  cursor: pointer;
  border: none;
  display: table;
  border-radius: 24px;
  padding: 0;
  margin: 0;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.05em;
  line-height: 1.5;
  color: var(--c-color);
  background: radial-gradient(
    circle,
    var(--c-radial-inner),
    var(--c-radial-outer) 80%
  );
  box-shadow: 0 0 14px var(--c-shadow);
  --glow-color: #f3b2ee;
  --glow-spread-color: rgba(191, 123, 255, 0.781);
  --enhanced-glow-color: rgb(231, 206, 255);
  --btn-color: rgb(100, 61, 136);
  border: 0.18em solid var(--glow-color);
  background-color: var(--btn-color);
}

.uiverse:before {
  content: "";
  pointer-events: none;
  position: absolute;
  z-index: 3;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 24px;
  box-shadow: inset 0 3px 12px var(--c-shadow-inset-top),
    inset 0 -3px 4px var(--c-shadow-inset-bottom);
}

.uiverse .wrapper {
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  overflow: hidden;
  border-radius: 24px;
  min-width: 100px;
  padding: 1px 0;
}

.uiverse .wrapper span {
  display: inline-block;
  position: relative;
  z-index: 1;
}

.uiverse:hover {
  --duration: 1400ms;
  color: #21103b;
}

.uiverse .wrapper .circle {
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  filter: blur(var(--blur, 8px));
  background: var(--background, transparent);
  transform: translate(var(--x, 0), var(--y, 0)) translateZ(0);
  animation: var(--animation, none) var(--duration) var(--easing) infinite;
}

.uiverse .wrapper .circle.circle-1,
.uiverse .wrapper .circle.circle-9,
.uiverse .wrapper .circle.circle-10 {
  --background: var(--c-color-4);
}

.uiverse .wrapper .circle.circle-3,
.uiverse .wrapper .circle.circle-4 {
  --background: var(--c-color-2);
  --blur: 14px;
}

.uiverse .wrapper .circle.circle-5,
.uiverse .wrapper .circle.circle-6 {
  --background: var(--c-color-3);
  --blur: 16px;
}

.uiverse .wrapper .circle.circle-2,
.uiverse .wrapper .circle.circle-7,
.uiverse .wrapper .circle.circle-8,
.uiverse .wrapper .circle.circle-11,
.uiverse .wrapper .circle.circle-12 {
  --background: var(--c-color-1);
  --blur: 12px;
}

.uiverse .wrapper .circle.circle-1 {
  --x: 0;
  --y: -40px;
  --animation: circle-1;
}

.uiverse .wrapper .circle.circle-2 {
  --x: 92px;
  --y: 8px;
  --animation: circle-2;
}

.uiverse .wrapper .circle.circle-3 {
  --x: -12px;
  --y: -12px;
  --animation: circle-3;
}

.uiverse .wrapper .circle.circle-4 {
  --x: 80px;
  --y: -12px;
  --animation: circle-4;
}

.uiverse .wrapper .circle.circle-5 {
  --x: 12px;
  --y: -4px;
  --animation: circle-5;
}

.uiverse .wrapper .circle.circle-6 {
  --x: 56px;
  --y: 16px;
  --animation: circle-6;
}

.uiverse .wrapper .circle.circle-7 {
  --x: 8px;
  --y: 28px;
  --animation: circle-7;
}

.uiverse .wrapper .circle.circle-8 {
  --x: 28px;
  --y: -4px;
  --animation: circle-8;
}

.uiverse .wrapper .circle.circle-9 {
  --x: 20px;
  --y: -12px;
  --animation: circle-9;
}

.uiverse .wrapper .circle.circle-10 {
  --x: 64px;
  --y: 16px;
  --animation: circle-10;
}

.uiverse .wrapper .circle.circle-11 {
  --x: 4px;
  --y: 4px;
  --animation: circle-11;
}

.uiverse .wrapper .circle.circle-12 {
  --blur: 14px;
  --x: 52px;
  --y: 4px;
  --animation: circle-12;
}

@keyframes circle-1 {
  33% {
    transform: translate(0px, 16px) translateZ(0);
  }

  66% {
    transform: translate(12px, 64px) translateZ(0);
  }
}

@keyframes circle-2 {
  33% {
    transform: translate(80px, -10px) translateZ(0);
  }

  66% {
    transform: translate(72px, -48px) translateZ(0);
  }
}

@keyframes circle-3 {
  33% {
    transform: translate(20px, 12px) translateZ(0);
  }

  66% {
    transform: translate(12px, 4px) translateZ(0);
  }
}

@keyframes circle-4 {
  33% {
    transform: translate(76px, -12px) translateZ(0);
  }

  66% {
    transform: translate(112px, -8px) translateZ(0);
  }
}

@keyframes circle-5 {
  33% {
    transform: translate(84px, 28px) translateZ(0);
  }

  66% {
    transform: translate(40px, -32px) translateZ(0);
  }
}

@keyframes circle-6 {
  33% {
    transform: translate(28px, -16px) translateZ(0);
  }

  66% {
    transform: translate(76px, -56px) translateZ(0);
  }
}

@keyframes circle-7 {
  33% {
    transform: translate(8px, 28px) translateZ(0);
  }

  66% {
    transform: translate(20px, -60px) translateZ(0);
  }
}

@keyframes circle-8 {
  33% {
    transform: translate(32px, -4px) translateZ(0);
  }

  66% {
    transform: translate(56px, -20px) translateZ(0);
  }
}

@keyframes circle-9 {
  33% {
    transform: translate(20px, -12px) translateZ(0);
  }

  66% {
    transform: translate(80px, -8px) translateZ(0);
  }
}

@keyframes circle-10 {
  33% {
    transform: translate(68px, 20px) translateZ(0);
  }

  66% {
    transform: translate(100px, 28px) translateZ(0);
  }
}

@keyframes circle-11 {
  33% {
    transform: translate(4px, 4px) translateZ(0);
  }

  66% {
    transform: translate(68px, 20px) translateZ(0);
  }
}

@keyframes circle-12 {
  33% {
    transform: translate(56px, 0px) translateZ(0);
  }

  66% {
    transform: translate(60px, -32px) translateZ(0);
  }
}

.star-1 {
  position: absolute;
  top: 20%;
  left: 20%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
}

.star-2 {
  position: absolute;
  top: 45%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-3 {
  position: absolute;
  top: 40%;
  left: 40%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-4 {
  position: absolute;
  top: 20%;
  left: 40%;
  width: 8px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-5 {
  position: absolute;
  top: 25%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-6 {
  position: absolute;
  top: 5%;
  left: 50%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.8s ease;
}

/* button:hover {
  background: transparent;
  color: #fec195;
  box-shadow: 0 0 25px #fec1958c;
} */

button:hover .star-1 {
  position: absolute;
  top: -80%;
  left: -30%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

button:hover .star-2 {
  position: absolute;
  top: -25%;
  left: 10%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

button:hover .star-3 {
  position: absolute;
  top: 55%;
  left: 25%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

button:hover .star-4 {
  position: absolute;
  top: 30%;
  left: 80%;
  width: 8px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

button:hover .star-5 {
  position: absolute;
  top: 25%;
  left: 115%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

button:hover .star-6 {
  position: absolute;
  top: 5%;
  left: 60%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

.fil0 {
  fill: #173069;
}

/* Toggle button styles */
.toggle-container {
  position: relative;
}

.toggle-btn {
  background: none;
  border: none;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
}

.toggle-btn:hover {
  background-color: #f3f4f6;
}

.toggle-icon {
  color: #4b5563;
}

.toggle-dropdown {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  min-width: 160px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 1.2rem;
}

.toggle-dropdown a {
  color: #4b5563;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 0.875rem;
  transition: background-color 0.2s;
}

.toggle-dropdown a:hover {
  background-color: #f3f4f6;
  color: #2563eb;
}

.toggle-container.active .toggle-dropdown {
  display: block;
}

/* Hamburger menu */
.hamburger {
  display: none;
  cursor: pointer;
  color: #4b5563;
}

.hamburger:hover {
  color: #2563eb;
}

/* Hero section styles */
.hero {
  color: white;
  padding: 4rem 0 0 0;
  text-align: center;
  background: #001229;
  /* background:no-repeat */
}

.hero h1 {
  font-size: 2.4rem;
  font-family: "Euphoria Script", cursice;
  margin-bottom: 1.5rem;
  color: white;
}

.hero h2 {
  font-size: 2.5rem;
  font-family: "Euphoria Script", cursive;
  margin: 1.5rem 0 2rem 0;
  color: white;
}

/* Search bar styles */
.search-container {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  position: relative;
}

.verify-dropdown {
  position: relative;
  text-align: left;
}

.verify-btn {
  background: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem 0 0 0.5rem;
  border-right: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: #4b5563;
}

.verify-options {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  min-width: 200px;
  z-index: 100;
}

.verify-options a {
  display: block;
  padding: 0.5rem 1rem;
  color: #4b5563;
  text-decoration: none;
}

.verify-options a:hover {
  background: #f3f4f6;
}

.verify-dropdown:hover .verify-options {
  display: block;
}

.search-input {
  flex: 1;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
}

.explore-btn {
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(-45deg, #279bc9, #34d399);
  color: white;
  border: none;
  padding: 0 1.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  cursor: pointer;
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.explore-btn:hover {
  background: #16a34a;
}

/* .explore-btn {
  line-height: 1;
  text-decoration: none;
  display: inline-flex;
  border: none;
  cursor: pointer;
  align-items: center;
  gap: 0.75rem;
  background-color: var(--clr);
  color: #fff;
  border-radius: 10rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  padding-left: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color 0.3s;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(-45deg, #279bc9, #34d399);
  border: none;
  padding: 0 1.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  cursor: pointer;
  font-weight: bold;
} */

/* .button__icon-wrapper {
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  position: relative;
  color: var(--clr);
  background-color: #fff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  overflow: hidden;
} */

/* .explore-btn:hover {
  background-color: #16a34a;
  color: white;
} */
/* 
.button:hover .button__icon-wrapper {
  color: #000;
}

.button__icon-svg--copy {
  position: absolute;
  transform: translate(-150%, 150%);
}

.explore-btn:hover .button__icon-svg:first-child {
  transition: transform 0.3s ease-in-out;
  transform: translate(150%, -150%);
}

.explore-btn:hover .button__icon-svg--copy {
  transition: transform 0.3s ease-in-out 0.1s;
  transform: translate(0);
} */

/* Service buttons styles */
.service-buttons {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  /* background: #012C4F; */
}
.service-btn {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  color: white;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 1px solid #264ca5;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.service-btn:hover {
  color: black;
  box-shadow: inset 0 -100px 0 0 white;
  background: white;
}

.service-btn:active {
  transform: scale(0.9);
}
.launch-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  cursor: pointer;
  margin: 4rem 0;
}
.launch-btn:hover {
  background: white;
  color: black;
}

/* Service cards styles */
.services-section {
  background: #001229;
  padding: 20px;
}

.service-cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
}

.service-card {
  background: white;
  padding: 1rem 0 0 0;
  border-radius: 0.5rem;
  width: 100px;
  text-align: center;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease;
}

.service-card.company {
  background: linear-gradient(-45deg, #279bc9, #34d399);
  color: white;
  padding: 1rem 0 0 0;
  border-radius: 0.5rem;
  width: 180px;
  text-align: center;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease;
}

.service-card.individual {
  background: white;
  color: #4b5563;
  padding: 1rem 0 0 0;
  border-radius: 0.5rem;
  width: 180px;
  text-align: center;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease;
}

/* Service Lists Styles */
.service-lists {
  padding: 0.5rem 0.1rem 0.5rem 0.1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  max-width: auto;
  margin-left: auto;
  margin-right: auto;
}

.service-list {
  display: none;
}

.service-list.active {
  display: block;
}

.service-list h4 {
  font-size: 1.4rem;
  margin: 0.5rem;
  color: #2196f3;
  text-align: center;
}

.service-list h6 {
  font-size: 1rem;
  margin: 1rem;
  color: #2196f3;
  text-align: start;
}

.service-list ul {
  list-style: none;
  display: flex;
  /* flex-wrap: wrap; */
  gap: 0;
  justify-content: center;
}

.service-list ul li {
  flex: 0 1 calc(33.333%);
  padding: 0.11rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
  color: #fff;
  position: relative;
}

.service-list ul li:not(:last-child)::after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 70%;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.2);
}

.service-list ul li:hover {
  color: #2196f3;
}

.services-section h3 {
  font-size: 1rem;
  text-align: center;
  color: white;
  font-weight: bold;
  font-family: "Bebas Neue";
}

/* Toggle Switch Styles */
.toggle-container1 {
  display: flex;
  justify-content: center;
  gap: 10px;
  background-color: white;
  border-radius: 50px;
  height: max-content;
  padding: 2px;
  margin-top: 90px;
  color: black;
  border: 5px solid #f59e0b;
}
.toggle-label {
  align-content: center;
}
/* The switch - the box around the slider */
.switch {
  font-size: 12px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
  margin-top: 8px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #171717;
  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
  transition: 0.4s;
  border-radius: 50px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.5em;
  border-radius: 50%;
  left: 0.3em;
  bottom: 0.3em;
  background-color: white;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #ccc;
  /* box-shadow: inset 2px 5px 10px rgb(0, 0, 0); */
}

input:checked + .slider:before {
  transform: translateX(1.5em) rotate(360deg);
}

/* Statistics Section */
.stats-section {
  /* background: linear-gradient(135deg, #279bc9 0%, #34d399 100%); */
  padding: 1rem 3rem;
  margin-top: 0;
  position: relative;
  overflow: hidden;
}

.stats-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: url("https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=2000&q=80")
    center/cover; */
  opacity: 0.1;
  z-index: 0;
}

.stats-container {
  max-width: 100%;
  margin: 0 1rem;
  display: flex;
  height: 210px;
  gap: 2rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  position: relative;
  z-index: 1;
}

.stats-container::-webkit-scrollbar {
  display: none;
}

.stat-card {
  flex: 0 0 155px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  margin-top: 10px;
}

.stat-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: translateY(-100%);
  transition: transform 0.5s ease;
}

.stat-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
}

.stat-card:hover::before {
  transform: translateY(0);
}

.stat-icon {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  position: absolute;
  z-index: 2;
  bottom: -22px;
  right: 10px;
}

.stat-icon i {
  background: linear-gradient(100deg, #dcb4af 20%, #bbc4d3 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  transition: transform 0.3s ease;
}

.stat-card:hover .stat-icon i {
  transform: scale(1.2) rotate(5deg);
}

.stat-number {
  font-size: 1.2rem;
  font-weight: bold;
  background: linear-gradient(135deg, #1e2738 0%, #2a3a5f 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Arial", sans-serif;
  text-align: start;
  margin-right: 0.1rem;
  z-index: 1;
  color: #173069;
}

.stat-label {
  font-size: 0.875rem;
  color: #4b5563;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  z-index: 1;
  transition: color 0.3s ease;
  text-align: center;
  margin-top: 15px;
}

.stat-card:hover .stat-label {
  color: #2563eb;
}

/* Adding Folded Corner Effect */
.stat-card::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 110px;
  height: 100px;
  background: #e8f2fc;
  clip-path: polygon(100% 0, 0 100%, 100% 100%);
  box-shadow: -4px -4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
}

/* Scroll Buttons */
.scroll-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #173069;
  backdrop-filter: blur(10px);
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-btn:hover {
  background: #2563eb;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
}

.scroll-btn:hover i {
  color: white;
}

.scroll-btn.left {
  left: 1.5rem;
}

.scroll-btn.right {
  right: 1.5rem;
}

.scroll-btn i {
  color: white;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

/* Conatiner2 */
.container2 {
  max-width: 1400px;
  /* margin: 0 0.5rem; */
  padding: 0.5rem;
  background: #001229;
}

/* Logos Section */
.logos-section {
  background: linear-gradient(90deg, #000b1e 0%, #001233 100%);
  border-radius: 50px;
  padding: 2rem;
  /* margin-bottom: 4rem; */
  overflow: hidden;
  position: relative;
}

.logos-scroll {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1.5rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  mask-image: linear-gradient(
    90deg,
    transparent,
    #000 5%,
    #000 95%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    #000 5%,
    #000 95%,
    transparent
  );
}

.logos-scroll::-webkit-scrollbar {
  display: none;
}

.logo {
  flex: 0 0 auto;
  color: #fff;
  font-weight: 500;
  padding: 0.5rem;
  white-space: nowrap;
  opacity: 0.7;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.logo i {
  width: 24px;
  height: 24px;
  stroke-width: 1.5;
}

.logo:hover {
  opacity: 1;
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.logo span {
  font-size: 0.95rem;
  letter-spacing: 0.5px;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.scroll-dot {
  width: 30%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  position: absolute;
  left: 0;
  animation: scrollIndicator 2s infinite;
}

@keyframes scrollIndicator {
  0% {
    left: -30%;
  }
  100% {
    left: 100%;
  }
}
/* Services Section */
.containerNew {
  background: #fff;
  border-radius: 50px;
  padding: 2rem 1rem 2rem 1rem;
  color: #000;
  margin: 0 2rem 2rem 2rem;
}

@media (max-width: 768px) {
  .container2 {
    padding: 1rem;
  }

  .logos-section,
  .containerNew {
    border-radius: 30px;
    padding: 1.5rem;
  }

  .containerNew h1 {
    font-size: 2rem;
  }

  .logo {
    padding: 0.75rem 1rem;
  }

  .logo i {
    width: 20px;
    height: 20px;
  }

  .logo span {
    font-size: 0.85rem;
  }
}

/* Help Section */

@media (min-width: 768px) {
  .containerNew {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}

/* Left Content */
.content-left {
  width: 100%;
  justify-items: center;
}
.content-left h2 {
  font-size: 1.875rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  text-align: center;
}

.content-left p {
  color: #666;
  margin-bottom: 2rem;
  padding: 0 1rem 0 1rem;
}

.play-button {
  display: flex;
  gap: 0.5rem;
  background-color: #f97316;
  color: white;
  padding: 0.5rem 0.8rem;
  border: none;
  border-radius: 9999px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  align-items: center;
  margin: 0 0 1rem 0;
}

.play-button:hover {
  background-color: #ea580c;
}

.play-button svg {
  width: 20px;
  height: 20px;
}

/* Features Grid */
.features-grid {
  display: flex;
  /* grid-template-columns: 4fr; */
  gap: 1rem;
}

@media (min-width: 640px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.feature-card {
  padding: 0.9rem;
  background-color: white;
  border: 1px solid #f1f1f1;
  border-radius: 0.5rem;
  transition: box-shadow 0.2s;
  width: 60%;
}

.feature-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.feature-card .icon {
  margin-bottom: 0.75rem;
  color: #22c55e;
}

.feature-card h3 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.feature-card p {
  font-size: 0.75rem;
  color: #666;
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}

/* Success Stories Section */
/* Success Stories Section */
.success-stories-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #000b1e 0%, #001233 100%);
  position: relative;
  overflow: hidden;
}

.success-stories-section::before {
  content: "";
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at center,
    rgba(67, 97, 238, 0.1) 0%,
    transparent 50%
  );
  animation: pulse 15s infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0.2;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 600;
  position: relative;
  text-shadow: 0 0 20px rgba(67, 97, 238, 0.5);
}

.section-subtitle {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  margin-bottom: 3rem;
  position: relative;
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.story-card {
  position: relative;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  border-radius: 20px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
}

.story-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.story-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(67, 97, 238, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.story-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.story-card:hover::before {
  opacity: 1;
}

.video-container {
  position: relative;
  aspect-ratio: 9/16;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
}

.video-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(0.9);
}

.story-card:hover .video-thumbnail {
  transform: scale(1.08);
  filter: brightness(1.1);
}

.thumbnail-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  z-index: 1;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.story-card:hover .thumbnail-overlay {
  opacity: 0.4;
}

.play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.play-btn svg {
  width: 24px;
  height: 24px;
  color: #000b1e;
  margin-left: 4px;
  transition: transform 0.3s ease;
}

.story-card:hover .play-btn {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}

.play-btn:hover {
  background: #fff;
  transform: translate(-50%, -50%) scale(1.1) !important;
  box-shadow: 0 0 30px rgba(67, 97, 238, 0.5);
}

.play-btn:hover svg {
  transform: scale(1.1);
}

.story-info {
  padding: 1.5rem;
  transform: translateY(5px);
  opacity: 0.9;
  transition: all 0.3s ease;
}

.story-card:hover .story-info {
  transform: translateY(0);
  opacity: 1;
}

.story-info h3 {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  position: relative;
  padding-left: 0;
  transition: padding-left 0.3s ease;
}

.story-card:hover .story-info h3 {
  padding-left: 10px;
}

.story-info h3::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 3px;
  height: 0;
  background: #4361ee;
  transform: translateY(-50%);
  transition: height 0.3s ease;
  opacity: 0;
}

.story-card:hover .story-info h3::before {
  height: 100%;
  opacity: 1;
}

.story-info p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.4;
  transition: transform 0.3s ease;
}

.story-card:hover .story-info p {
  transform: translateX(10px);
}

/* Video Modal */
.video-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.video-modal.active {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
}

.modal-content {
  position: relative;
  width: 100%;
  max-width: 380px;
  aspect-ratio: 9/16;
  background: #000;
  border-radius: 20px;
  overflow: hidden;
  transform: scale(0.9) translateY(30px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.video-modal.active .modal-content {
  transform: scale(1) translateY(0);
}

.close-modal {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  transform: scale(0);
}

.video-modal.active .close-modal {
  transform: scale(1);
  animation: rotateIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
}

@keyframes rotateIn {
  from {
    transform: scale(0) rotate(-180deg);
    opacity: 0;
  }
  to {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
}

.close-modal:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.close-modal svg {
  width: 20px;
  height: 20px;
  color: #fff;
  transition: transform 0.3s ease;
}

.close-modal:hover svg {
  transform: rotate(90deg);
}

.video-wrapper {
  width: 100%;
  height: 100%;
}

iframe {
  width: 100%;
  height: 100%;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .stories-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .stories-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .stories-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }
}

/* Testimonial Sectiona */
.containerTest {
  max-width: 1210px;
  margin: 0 auto;
  background: #001229;
  padding: 1rem;
}

.testimonials-section {
  position: relative;
  padding: 1rem 2rem;
  overflow: hidden;
}
.testimonials-section h1 {
  overflow: hidden;
  background: #01306e;
  color: white;
  text-align: center;
  /* padding: 0.5rem 0 0.5rem 0; */
}
.testimonials-container {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0.5rem;
  /* mask-image: linear-gradient(90deg, 
      transparent, 
      #000 5%, 
      #000 95%, 
      transparent
  );
  -webkit-mask-image: linear-gradient(90deg, 
      transparent, 
      #000 5%, 
      #000 95%, 
      transparent
  ); */
}

.testimonials-container::-webkit-scrollbar {
  display: none;
}

.testimonial-card {
  flex: 0 0 220px;
  background: linear-gradient(180deg, #bad0f3, #dcb4af);
  border-radius: 5px;
  padding: 1rem 1rem 1rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2.9px solid rgba(255, 255, 255, 0.2);
  /* background: transparent;
  border-radius: 2px;
  border: 1px solid; */
}

.profile-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.profile-info h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 0.25rem;
}

.profile-info p {
  font-size: 0.9rem;
  color: rgba(41, 40, 40, 0.699);
}

.achievement {
  text-align: left;
}

.achievement h2 {
  font-size: 1.2rem;
  color: black;
  font-weight: 500;
  margin: 0;
  padding: 0;
}

.achievement .amount {
  font-size: 2rem;
  font-weight: 700;
  color: #4caf50;
  /* letter-spacing: 1px; */
  margin: 0;
  padding: 0;
  line-height: 1.1;
}

.achievement p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  /* margin-bottom: 1rem; */
  color: #000;
  /* margin: 0; */
}

/* .achievement .scheme {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  color: #000;
} */

/* Industry Target Section */
.industry-section {
  padding: 1rem 2rem;
  background: #fff;
  border-radius: 30px;
  margin: 1rem 2.5rem;
}

.industry-title {
  text-align: center;
  font-size: 2.5rem;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  color: #000b1e;
  font-weight: 600;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.industry-card {
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 15rem;
}

.industry-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  background: #f0f7ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.service-icon {
  width: 40px;
  height: 40px;
  color: #0066ff;
}

.industry-card h3 {
  font-size: 1.2rem;
  color: #000b1e;
  /* margin-bottom: 1rem; */
  font-weight: 600;
}

.industry-card p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.explore-button {
  background: #0066ff;
  color: white;
  border: none;
  padding: 0.1rem 2rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.explore-button:hover {
  background: #0052cc;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 102, 255, 0.3);
}

@media (max-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .testimonials-section {
    padding: 1rem;
  }

  .testimonial-card {
    flex: 0 0 280px;
    padding: 1.25rem;
  }

  .profile-img {
    width: 50px;
    height: 50px;
  }

  .achievement .amount {
    font-size: 1.75rem;
  }

  .services-section {
    padding: 2rem 1rem;
    margin: 1rem;
  }

  .services-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .service-card {
    padding: 1.5rem;
  }
}

/* New Plans Section Styles */
.plans-section {
  background: #173069;
  color: white;
  padding: 2rem 0;
  /* border-radius: 1rem; */
  margin: 0;
  justify-content: center;
  display: flex;
  gap: 4rem;
}

.plans-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
  text-align: left;
}

.plans-section p {
  color: #ccc;
  margin-bottom: 1.5rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.action-buttons button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
}

.explore-plans {
  background: white;
  color: black;
}

.request-demo {
  background: transparent;
  color: white;
  border: 1px solid white !important;
}

/* Resume Section Styles */
.resume-section {
  background: #4f46e5;
  color: white;
  padding: 2rem 1rem;
  text-align: center;
  /* border-radius: 1rem; */
  /* margin: 2rem 0; */
}

.resume-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
}

.resume-section p {
  color: #e0e7ff;
  margin-bottom: 1.5rem;
}

.all-examples {
  background: #6366f1;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-bottom: 2rem;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.tab-btn {
  background: transparent;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  position: relative;
}

.tab-btn.active::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: white;
}

.services1-grid {
  background: white;
  color: #1a1a1a;
  padding: 2rem;
  border-radius: 1rem;
}

.services1-grid h3 {
  color: #ef4444;
  margin-bottom: 1.5rem;
}

.service1-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.tag {
  background: #f3f4f6;
  color: #1f2937;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}

.tag:hover {
  background: #e5e7eb;
}

/* Modal Styles */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 800px;
  width: 90%;
  margin: 2rem auto;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

.close {
  position: absolute;
  right: 1.5rem;
  top: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.plan-card {
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
}

.plan-card h3 {
  color: #1f2937;
  margin-bottom: 1rem;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4f46e5;
  margin-bottom: 1rem;
}

.plan-card ul {
  list-style: none;
  margin-bottom: 1.5rem;
}

.plan-card li {
  margin-bottom: 0.5rem;
  color: #4b5563;
}

.select-plan {
  background: #4f46e5;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 100%;
}

/* Form Styles */
.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #374151;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
}

.submit-demo {
  background: #4f46e5;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 100%;
}

/* FOOTER */
.containerLast {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Footer Base */
.footer {
  position: relative;
  background: linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%);
  color: #9ca3af;
  overflow: hidden;
}

/* Decorative Elements */
.decorative-elements {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.1;
  animation: pulse 4s infinite;
}

.orb-1 {
  top: -10rem;
  right: -10rem;
  width: 20rem;
  height: 20rem;
  background: #3b82f6;
}

.orb-2 {
  top: 5rem;
  left: 50%;
  width: 15rem;
  height: 15rem;
  background: #8b5cf6;
  animation-delay: 1s;
}

.orb-3 {
  bottom: -10rem;
  left: -10rem;
  width: 20rem;
  height: 20rem;
  background: #10b981;
  animation-delay: 2s;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.15;
  }
}

/* Logo Section */
.logo-section {
  /* align-content: left; */
  margin-bottom: 4rem;
  padding-top: 4rem;
}

.logo-container {
  display: inline-block;
  background: linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899);
  padding: 0.25rem;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
  transition: transform 0.3s;
}

.logo-container:hover {
  transform: scale(1.05);
}

.logo-inner {
  background: #111827;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
}

.logo-inner h2 {
  font-size: 1.875rem;
  font-weight: 700;
  background: linear-gradient(to right, #60a5fa, #a78bfa, #f472b6);
  -webkit-background-clip: text;
  background-clip: border-box;
  color: transparent;
}

.company-description {
  max-width: 36rem;
  /* margin: 0 auto; */
  color: #9ca3af;
  /* text-align: left; */
}

/* Footer Grid */
.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  padding: 2rem 0;
  margin: 0.5rem;
}

/* Footer Sections */
.footer-section h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid;
  display: inline-block;
  transition: border-color 0.3s;
}

.footer-section:nth-child(1) h3 {
  border-color: #3b82f6;
}
.footer-section:nth-child(1):hover h3 {
  border-color: #60a5fa;
}

.footer-section:nth-child(2) h3 {
  border-color: #8b5cf6;
}
.footer-section:nth-child(2):hover h3 {
  border-color: #a78bfa;
}

.footer-section:nth-child(3) h3 {
  border-color: #10b981;
}
.footer-section:nth-child(3):hover h3 {
  border-color: #34d399;
}

.footer-section:nth-child(4) h3 {
  border-color: #ef4444;
}
.footer-section:nth-child(4):hover h3 {
  border-color: #f87171;
}

/* Quick Links */
.quick-links {
  list-style: none;
}

.quick-links li {
  margin-bottom: 0.75rem;
}

.quick-links a {
  display: flex;
  align-items: center;
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s;
}

.quick-links a:hover {
  color: white;
}

.quick-links i {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  transition: transform 0.3s;
}

.quick-links a:hover i {
  transform: translateX(0.25rem);
}

/* Newsletter Form */
.newsletter-form p {
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.input-group {
  position: relative;
}

.input-group input {
  width: 100%;
  padding: 0.75rem 3rem 0.75rem 1rem;
  background: rgba(31, 41, 55, 0.5);
  border: 1px solid #374151;
  border-radius: 0.5rem;
  color: white;
  transition: border-color 0.3s;
}

.input-group input:focus {
  outline: none;
  border-color: #8b5cf6;
}

.input-group button {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s;
}

.input-group button:hover {
  color: white;
}

.input-group button i {
  width: 1.25rem;
  height: 1.25rem;
  transform: rotate(-45deg);
  transition: transform 0.3s;
}

.input-group button:hover i {
  transform: rotate(-45deg) scale(1.1);
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s;
}

.contact-item:hover {
  color: white;
}

.icon-container {
  padding: 0.5rem;
  background: rgba(31, 41, 55, 0.5);
  border-radius: 0.5rem;
  transition: background-color 0.3s;
}

.contact-item:hover .icon-container {
  background: rgba(16, 185, 129, 0.2);
}

.icon-container i {
  width: 1.25rem;
  height: 1.25rem;
}

/* Social Icons */
.social-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: rgba(31, 41, 55, 0.5);
  border-radius: 0.5rem;
  color: #9ca3af;
  text-decoration: none;
  transition: all 0.3s;
  border: 1px solid #374151;
}

.social-link i {
  width: 1.25rem;
  height: 1.25rem;
}

.social-link.facebook:hover {
  background: #1877f2;
  color: white;
  border-color: #1877f2;
}

.social-link.twitter:hover {
  background: #1da1f2;
  color: white;
  border-color: #1da1f2;
}

.social-link.instagram:hover {
  background: #e4405f;
  color: white;
  border-color: #e4405f;
}

.social-link.linkedin:hover {
  background: #0077b5;
  color: white;
  border-color: #0077b5;
}

/* Disclaimer */
.disclaimer {
  margin: 4rem 2rem 0 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(31, 41, 55, 0.5);
  text-align: center;
}

.copyright {
  margin-bottom: 2rem;
}

.legal {
  font-size: 1rem;
  color: #6b7280;
}

/* Responsive Design */
@media (min-width: 768px) {
  .disclaimer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
    text-align: left;
  }

  .legal {
    text-align: right;
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }

  .social-grid {
    grid-template-columns: 1fr;
  }
}

/* FAQ and Contact Form Section */
.faq-contact-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 2rem 0;
  color: white;
  background: #0f2046;
}

/* FAQ Side */
.faq-side {
  padding: 0 1.5rem 0 1rem;
}

.faq-side h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 600;
  color: white;
  padding: 1.5rem 1rem;
}

.faq-list {
  margin-bottom: 3rem;
}

.faq-item {
  border-bottom: 2px solid rgba(255, 255, 255, 0.178);
}

.faq-question {
  width: 100%;
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(48, 48, 48);
  border: none;
  color: #fff;
  font-size: 1.1rem;
  text-align: left;
  cursor: pointer;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}

.faq-question svg {
  transition: transform 0.3s ease;
  padding-right: 0.5rem;
}

.faq-question.active svg {
  transform: rotate(180deg);
}

.faq-answer {
  display: none;
  padding: 0 0 1.5rem;
  color: rgba(255, 255, 255, 0.7);
}

.faq-answer.active {
  display: block;
}

.faq-footer {
  margin-top: 1rem;
}

.faq-footer h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: white;
}

.faq-footer p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
}

.email-signup {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.email-input {
  flex: 1;
  padding: 0.8rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: transparent;
  color: #fff;
}

.get-info-btn {
  padding: 0.8rem 1.5rem;
  background: #0066ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.get-info-btn:hover {
  background: #0052cc;
}

.privacy-text {
  font-size: 0.9rem;
}

.privacy-text a {
  color: #0066ff;
  text-decoration: none;
}

/* Contact Side */
.contact-side {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
}

.contact-header h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
}

.form-type {
  margin-bottom: 2rem;
}

.form-type p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
}

.type-select-container {
  position: relative;
}

.type-select {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.type-select:hover {
  background: rgba(255, 255, 255, 0.05);
}

.type-select .highlight {
  color: #4caf50;
  position: relative;
  padding-right: 1.5rem;
}

.dropdown-arrow {
  transition: transform 0.3s ease;
}

.type-select.active .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(10, 0, 0, 0);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 0.5rem 0;
  min-width: 200px;
  display: none;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.dropdown-menu.active {
  display: block;
}
.dropdown-menu.business-type-dropdown {
  background: #273e5c;
  color: white;
}
.dropdown-menu.revenue-type-dropdown {
  background: #273e5c;
}
.dropdown-item {
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: rgb(255, 255, 255);
}

.dropdown-item:hover {
  background: rgb(255, 255, 255);
  color: #4caf50;
}

.revenue-type-dropdown {
  left: auto;
  right: 0;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form select {
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: #fff;
}

.country-select {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}

.form-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.form-checkbox label {
  gap: 0.5rem;
  color: white;
  margin-top: 0.5rem;
}

.form-disclaimer {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.form-disclaimer a {
  color: #0066ff;
  text-decoration: none;
}

.lets-go-btn {
  padding: 1rem;
  background: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.lets-go-btn:hover {
  background: #45a049;
}

@media (max-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .testimonials-section {
    padding: 1rem;
  }

  .testimonial-card {
    flex: 0 0 280px;
    padding: 1.25rem;
  }

  .profile-img {
    width: 50px;
    height: 50px;
  }

  .achievement .amount {
    font-size: 1.75rem;
  }

  .services-section {
    padding: 2rem 1rem;
    margin: 1rem;
  }

  .services-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .service-card {
    padding: 1.5rem;
  }

  .industry-card {
    padding: 1.5rem;
  }

  .button-group {
    flex-direction: column;
  }

  .resume-section {
    padding: 2rem 1rem;
  }

  .resume-section h1 {
    font-size: 2rem;
  }

  .tab-container {
    flex-wrap: wrap;
  }

  .tags-container {
    gap: 0.5rem;
  }

  .tag {
    font-size: 0.8rem;
  }

  .faq-contact-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .faq-side {
    padding-right: 0;
  }

  .email-signup {
    flex-direction: column;
  }

  .country-select {
    grid-template-columns: 1fr;
  }
}

/* Footer styles */
/* footer {
  background-color: #1a237e;
  color: white;
  padding: 1rem;
} */

.footer-content {
  max-width: 1210px;
  /* margin: 0 auto; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a237e;
  color: white;
  padding: 0.5rem;
}

.payment-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.payment-info img {
  height: 1rem;
  width: auto;
}

/* Bottom Header styles */
.bottom-header {
  background-color: #0a1435;
  color: white;
  padding: 0.5rem 2rem;
  border-top: 3px solid #1a237e;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.logo-section1 {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.dpiit-logo {
  height: 50px;
  width: auto;
}

.invest-logo {
  height: 35px;
  width: auto;
}

.divider {
  width: 1px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.3);
}

.header-text {
  text-align: right;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
}

.header-text p:first-child {
  margin-bottom: 0.25rem;
}

/* Help Widget styles */
.help-widget {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
}

.help-button {
  background-color: #1a7e76;
  color: white;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, background-color 0.2s;
}

.help-button:hover {
  background-color: #283593;
  transform: scale(1.1);
}

.help-menu {
  position: absolute;
  bottom: 5rem;
  right: 0;
  width: 300px;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: none;
  overflow: hidden;
}

.help-menu.active {
  display: block;
  animation: slideIn 0.3s ease-out;
}

.help-header {
  background-color: #1a237e;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.help-header h3 {
  color: white;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.25rem;
}

.help-options {
  padding: 1rem;
}

.help-option {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
  color: #333;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: background-color 0.2s;
  background: rgb(247, 246, 246);
  margin-bottom: 0.5rem;
}

.help-option:hover {
  background-color: #f5f5f5;
}

.help-option i {
  color: #1a237e;
  font-size: 1.2rem;
}

/* Chat Widget styles */
.chat-widget {
  position: fixed;
  bottom: 5rem;
  right: 2rem;
  width: 350px;
  height: 450px;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: none;
  flex-direction: column;
}

.chat-widget.active {
  display: flex;
  animation: slideIn 0.3s ease-out;
}

.chat-header {
  background-color: #1a237e;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem 0.5rem 0 0;
}
.chat-header h3 {
  background-color: #1a237e;
  color: white;
}

.chat-messages {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}

.message {
  margin-bottom: 1rem;
  max-width: 80%;
}

.message.support {
  margin-right: auto;
}

.message.user {
  margin-left: auto;
  text-align: right;
}

.message p {
  background-color: #f5f5f5;
  padding: 0.75rem;
  border-radius: 1rem;
  display: inline-block;
}

.message.support p {
  background-color: #e3f2fd;
}

.chat-input {
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  border-top: 1px solid #eee;
}

.chat-input input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  outline: none;
}

.chat-input button {
  background-color: #1a237e;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.chat-input button:hover {
  background-color: #283593;
}

/* Modal styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal.active {
  display: flex;
  animation: fadeIn 0.3s ease-out;
}

.modal-content {
  background: white;
  width: 90%;
  max-width: 600px;
  border-radius: 0.5rem;
  max-height: 80vh;
  overflow-y: auto;
}

.modal-header {
  background-color: #1a237e;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
}

.modal-header h3 {
  background-color: #1a237e;
  color: white;
}

.modal-body {
  padding: 1.5rem;
}

/* FAQs styles */
.faq-item {
  margin-bottom: 1.5rem;
}

.faq-item h4 {
  color: #1a237e;
  margin-bottom: 0.5rem;
}

/* Knowledge Base styles */
.kb-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.kb-category h4 {
  color: #1a237e;
  margin-bottom: 1rem;
}

.kb-category ul {
  list-style: none;
}

.kb-category li {
  margin-bottom: 0.5rem;
}

.kb-category a {
  color: #333;
  text-decoration: none;
  transition: color 0.2s;
}

.kb-category a:hover {
  color: #1a237e;
}

/* Animations */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive styles */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }

  .header-text {
    text-align: center;
  }

  .help-menu,
  .chat-widget {
    width: 100%;
    right: 0;
    bottom: 0;
  }

  .help-button {
    bottom: 1rem;
    right: 1rem;
  }

  .modal-content {
    width: 95%;
    margin: 1rem;
  }

  .kb-categories {
    grid-template-columns: 1fr;
  }
}
