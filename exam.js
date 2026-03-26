const questions = [
	{
		question:
			"Which Troubleshooting methodology involves replacing a suspected faulty component with a known working one?",
		options: [
			"Divide and Conquer",
			"Try and Error",
			"Substitution Method",
			"Bottom-Up Approach"
		],
		answer: 2
	},
	{
		question: "RAM is described as volatile. What does this mean?",
		options: [
			"It retains data permanently",
			"It loses data when power is off",
			"It stores data on a magnetic disk",
			"It is used for long-term storage"
		],
		answer: 1
	},
	{
		question:
			"A computer that won't start is being diagnosed using the divide and conquer method. What is checked FIRST?",
		options: [
			"The RAM",
			"The Motherboard",
			"The Power Supply",
			"The Operating System"
		],
		answer: 2
	},
	{
		question:
			"Which type of computer system fault is caused by bugs, crashes, or compatibility issues in programs?",
		options: [
			"Hardware fault",
			"Network fault",
			"Software fault",
			"Environmental fault"
		],
		answer: 2
	},
	{
		question:
			"What is the primary difference between a Fresh installation and an Upgraded installation of software?",
		options: [
			"Fresh installs are faster",
			"Upgraded installs require internet",
			"Fresh installs have no previous version on the system",
			"Upgraded installs overwrite all user files"
		],
		answer: 2
	},
	{
		question:
			"Insufficient memory usage leading to swapping, thrashing, or application crashes is associated with which configuration area?",
		options: [
			"Startup and Service Management",
			"Memory and Storage Management",
			"Security and Access Control",
			"User interface Customisation"
		],
		answer: 1
	},
	{
		question:
			"Which of the following is NOT listed as a core component of computer hardware in the notes?",
		options: [
			"Motherboard",
			"Power Supply Unit",
			"Graphics Card",
			"Cooling System(fan/ heatsink)"
		],
		answer: 2
	},
	{
		question:
			"Frequent system freezes and kernel panics most likely indicate a problem related to:",
		options: [
			"Slow boot services",
			"Hardware faults, driver incompatibility, or memory corruption",
			"Insufficient disk space",
			"Misconfigured default options"
		],
		answer: 1
	},
	{
		question:
			"Which basic hardware cleaning practice specifically uses isopropyl alcohol?",
		options: [
			"Dust removal",
			"Cable management",
			"Contact cleaning",
			"Regular check"
		],
		answer: 2
	},
	{
		question:
			"In Software installation, 'Registering Necessary system files' means:",
		options: [
			"Creating desktop shortcuts",
			"Copying program files to the hard drive",
			"Registering shared system files with the OS so they can be accessed when needed",
			"Setting default language options"
		],
		answer: 2
	},
	{
		question:
			"The Power Supply Unit (PSU) converts which type of current to which?",
		options: [
			"Direct Current to Alternating Current",
			"Alternating Current to Direct Current",
			"High voltage to low voltage DC only",
			"Digital signals to analog signals"
		],
		answer: 1
	},
	{
		question:
			"Which preventive maintenance practice involves tracking CPU usage, memory consumption, disk activity, and network traffic over time?",
		options: [
			"Routine diagnostic scan",
			"Hardware cleaning and inspection",
			"Performance monitoring and logging",
			"Structured maintenance plan"
		],
		answer: 2
	},
	{
		question:
			"What distinguishes a Custom installation from other Software installation types?",
		options: [
			"It only works on new computers",
			"It installs all available features by default",
			"It allows users to choose which features or components to install",
			"It automatically backs up previous versions"
		],
		answer: 2
	},
	{
		question:
			"Electrostatic discharge (ESD) control measures such as grounding straps and antistatic mats are used to protect:",
		options: [
			"Sensitive electronic components like RAM and processors during handling",
			"The hard drive from magnetic damage",
			"The monitor from power surges",
			"Network cables from interference"
		],
		answer: 0
	},
	{
		question:
			"Post installation Verification includes all the following except",
		options: [
			"Executing test commands",
			"Checking log files",
			"Confirming Service Status",
			"Compiling Source Code"
		],
		answer: 3
	},
	{
		question: "The 'Top-Down' troubleshooting approach begins at:",
		options: [
			"The hardware layer",
			"The Power supply",
			"The RAM and storage Devices",
			"The application and user interface layer"
		],
		answer: 3
	},
	{
		question:
			"Which system performance issue is specifically linked to dust accumulation or high CPU utilisation?",
		options: [
			"Thermal and Power management issues",
			"Slow boot and initialisation delays",
			"Application level performance degradation",
			"System freezing and kernel panics"
		],
		answer: 0
	},
	{
		question:
			"Preventive maintenance improves 'Cost Efficiency' primarily by:",
		options: [
			"Detecting minor faults before they escalate into major failures",
			"Eliminating the need for antivirus software",
			"Reducing the number of users on a network",
			"Speeding up the installation of new software"
		],
		answer: 0
	},
	{
		question:
			"Which importance of proper software installation states that a well-configured software uses system resources efficiently?",
		options: [
			"Prevents software errors and crashes",
			"Ensures smooth software operation",
			"Enhances system performance",
			"Saves time and Storage space"
		],
		answer: 2
	},
	{
		question:
			"Comprehensive maintenance logs must include all of the following except",
		options: [
			"Date and task performed",
			"Detected faults",
			"Personnel involved",
			"Future Purchase Budgets"
		],
		answer: 3
	},
	// Q21–Q50
	{
		question:
			"One of the following causes BOOT AND INITIALIZATION FAILURES",
		options: [
			"Insufficient system storage",
			"Conflicting background process",
			"Damaged Ethernet cables",
			"Incorrect BIOS/UEFI settings"
		],
		answer: 3
	},
	{
		question: "Connectivity Faults may arise from",
		options: [
			"DNS server misconfiguration",
			"Incorrect BIOS/UEFI",
			"Faulty RAM",
			"Correct IP configuration"
		],
		answer: 0
	},
	{
		question: "Software reinstallation is effective when",
		options: ["I, II, III, IV", "II, III, IV", "I, II, IV", "I, III, IV"],
		answer: 2
	},
	{
		question:
			"Which of these upgrades enhance gaming or design performance",
		options: [
			"RAM upgrade",
			"Graphic scan upgrade",
			"CPU upgrade",
			"Peripheral upgrade"
		],
		answer: 1
	},
	{
		question:
			"External factors like power surge or overheating is which type of fault",
		options: [
			"Hardware fault",
			"Software fault",
			"User related fault",
			"Environmental fault"
		],
		answer: 3
	},
	{
		question:
			"Which of the following involves copying program files, setting system part, creating shortcut and preparing OS to recognize software",
		options: [
			"Software configuration",
			"Custom Installation",
			"Software installation",
			"None of the above"
		],
		answer: 2
	},
	{
		question:
			"During installation, program files that are transferred from the source to storage help to",
		options: [
			"Create shortcut for quick access",
			"Startup behaviour and setting default options",
			"The software to operate",
			"All of the above"
		],
		answer: 2
	},
	{
		question:
			"The type of installation that allows users to choose which features or components to install is",
		options: [
			"Fresh installation",
			"Upgrade installation",
			"Custom Installation",
			"None of the above"
		],
		answer: 2
	},
	{
		question:
			"Which of the following involves analyzing the system architecture and verifying that hardware and software requirements are met during installation exercise",
		options: [
			"Pre-installation",
			"Installation process",
			"Post installation",
			"All of the above"
		],
		answer: 0
	},
	{
		question:
			"Which of the following helps to reduce background overhead and security risk",
		options: [
			"Disc space management",
			"Resource reallocation",
			"Software and malware removal",
			"All of the above"
		],
		answer: 2
	},
	{
		question:
			"Which of the following reports answers the question: WAS THE ISSUE FIXED CORRECTLY?",
		options: [
			"Validation report",
			"Components replacement report",
			"Verification report",
			"Technical Accuracy report"
		],
		answer: 2
	},
	{
		question: "The full meaning of ITIL is",
		options: [
			"Implementation of Technology Infrastructure Line",
			"Information Technology Identification Links",
			"Information Technology Infrastructure Library",
			"None of the above"
		],
		answer: 2
	},
	{
		question:
			"Reconfiguring system settings and removing malware is under which action",
		options: [
			"Preventive action",
			"Corrective action",
			"Fault identification action",
			"Components replacement action"
		],
		answer: 0
	},
	{
		question:
			"In Advanced Troubleshooting Techniques, which of the following loads only essential drivers and system services",
		options: [
			"Firmware and BIOS/UEFI Diagnostic",
			"System Restore and Rollback Mechanism",
			"Components Level Testing and Replacing",
			"Safe Mode And Minimal Analysis"
		],
		answer: 3
	},
	{
		question:
			"In Advanced Troubleshooting Techniques, which of the following helps determine whether third-party applications or drivers are causing instability",
		options: [
			"Firmware and BIOS/UEFI Diagnostic",
			"System Restore and Rollback Mechanism",
			"Components Level Testing and Replacing",
			"Safe Mode And Minimal Analysis"
		],
		answer: 3
	},
	{
		question: "System Restore and Rollback Mechanisms is useful for",
		options: [
			"Third-party software",
			"Hardware detection",
			"Incorrect driver installations",
			"Swapping components with known working units"
		],
		answer: 2
	},
	{
		question: "The BIOS/UEFI diagnostic verifies",
		options: [
			"CPU temperature levels",
			"Memory recognition",
			"Hardware detection",
			"All of the above"
		],
		answer: 3
	},
	{
		question:
			"Which combination of practices MOST directly ensures secure maintenance records?",
		options: [
			"Encryption + Backup procedures",
			"Fast internet + Antivirus",
			"Logs + Reboot",
			"BIOS update + RAM upgrade"
		],
		answer: 0
	},
	{
		question:
			"Which of the following is the BEST measurable replacement for 'system was slow'?",
		options: [
			"System delayed",
			"CPU utilization reached 98% for 15 minutes",
			"System lagged",
			"Performance reduced"
		],
		answer: 1
	},
	{
		question:
			"What is the PRIMARY purpose of standardized documentation frameworks?",
		options: [
			"Increase hardware speed",
			"Ensure uniformity and clarity",
			"Reduce power consumption",
			"Improve boot time"
		],
		answer: 1
	},
	{
		question:
			"A system experiencing insufficient resources will MOST likely show:",
		options: [
			"Failure to connect to DNS",
			"Applications not running properly",
			"Corrupted MBR",
			"BIOS error"
		],
		answer: 1
	},
	{
		question:
			"Which of the following is NOT part of the diagnostic process?",
		options: [
			"Observation",
			"Hypothesis formulation",
			"Random guessing",
			"Testing"
		],
		answer: 2
	},
	{
		question:
			"Reinstallation software removes corrupted files and replaces them with clean versions. It is particularly effective when:",
		options: [
			"Application files are damaged",
			"Registry entries are corrupted",
			"Configuration files are improperly modified",
			"All of the above"
		],
		answer: 3
	},
	{
		question:
			"Which of the following confirms that maintenance actions have been successfully completed, identifies any remaining issues, and ensures the system operates within acceptable performance parameters?",
		options: [
			"Corrective and Preventive Action",
			"System Restore and Rollback Mechanisms",
			"Verification and Validation Report",
			"Component Replacement Tracking"
		],
		answer: 2
	},
	{
		question: "What is the full meaning of DLLs?",
		options: [
			"Decimal Link Libraries Section",
			"Dynamic Link Libraries Section",
			"Decimal Link Libraries",
			"Dynamic Link Libraries"
		],
		answer: 3
	},
	{
		question:
			"Which of the following are steps involved in troubleshooting network connectivity faults?",
		options: [
			"Checking physical connections",
			"Verifying driver installation",
			"Resetting network settings",
			"All of the above"
		],
		answer: 3
	},
	{
		question:
			"In maintenance scheduling and record management, accountability and compliance help an organization to:",
		options: [
			"Define when maintenance tasks should be performed and what activities should be included",
			"Assign clear responsibilities to ensure maintenance tasks are completed as scheduled and according to organizational standards",
			"Maintain detailed records of all maintenance activities, including detected faults, corrective actions, and personnel involved",
			"All of the above"
		],
		answer: 1
	},
	{
		question:
			"Which of the following are common symptoms of boot and initialization failures?",
		options: [
			"Blank screen",
			"Continuous reboot loop",
			"“Operating system not found” message",
			"All of the above"
		],
		answer: 3
	},
	{
		question:
			"In ensuring timely and secure record updates, which of the following are key security considerations?",
		options: [
			"Restricting access to maintenance records",
			"Encrypting sensitive data",
			"Implementing backup procedures",
			"All of the above"
		],
		answer: 3
	},
	{
		question: "What is the full meaning of RCA?",
		options: [
			"Root Cause Analysis",
			"Replacing Corrective Actions",
			"Read Control Access",
			"Resources Configuration Analysis"
		],
		answer: 0
	}
];

let currentQuestions = [];
let score = 0;

// Shuffle Questions
function shuffle(array) {
	return array.sort(() => Math.random() - 0.5);
}

function loadQuestions() {
	const container = document.getElementById("questionContainer");
	currentQuestions = questions; // Use all questions // Pick 3 random questions

	currentQuestions.forEach((q, index) => {
		const div = document.createElement("div");

		div.innerHTML = `
      <p>${index + 1}. ${q.question}</p>
      ${q.options
			.map(
				(option, i) => `
        <label>
          <input type="radio" name="q${index}" value="${i}" required>
          ${option}
        </label><br>
      `
			)
			.join("")}
      <br>
    `;

		container.appendChild(div);
	});
}

document.getElementById("quizForm").addEventListener("submit", function (e) {
	e.preventDefault();

	clearInterval(timer); // stop the timer

	let score = 0;
	currentQuestions.forEach((q, index) => {
		const selected = document.querySelector(
			`input[name="q${index}"]:checked`
		);
		if (selected && parseInt(selected.value) === q.answer) {
			score++;
		}
	});

	const username = sessionStorage.getItem("username") || "Guest";

	document.getElementById("result").innerText =
		`${username}, you scored ${score} out of ${currentQuestions.length}`;

	this.style.display = "none";
});
// Timer
let timeLeft = 1200; // 320 seconds = 5 minutes 20 seconds
const timeDisplay = document.getElementById("time");

// Show initial time immediately
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
};

timeDisplay.innerText = formatTime(timeLeft);

const timer = setInterval(() => {
  timeLeft--;
  timeDisplay.innerText = formatTime(timeLeft);

  if (timeLeft <= 0) {
    clearInterval(timer);
    const quizForm = document.getElementById("quizForm");
    if (quizForm) quizForm.dispatchEvent(new Event("submit"));
  }
}, 1000);
// Load questions on page load
loadQuestions();
