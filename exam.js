const questions = [
	{
		question: "Troubleshooting is defined as?",
		options: [
			"Installing new software",
			"Replacing damaged hardware",
			" A systematic process of identifying and resolving faults",
			"Formatting a computer "
		],
		answer: 2
	},
	{
		question: "Which of the following is NOT part of troubleshooting?",
		options: [
			"Observing symptoms",
			"Identifying root cause",
			"Ignoring minor issues",
			"Testing solutions"
		],
		answer: 2
	},
	{
		question: " One major importance of troubleshooting is to",
		options: [
			"Increase system cost",
			"Minimize downtime",
			"Replace all hardware",
			"Delete files"
		],
		answer: 1
	},
	{
		question: "Preventing minor issues from escalating helps to",
		options: [
			"Cause major failure",
			"Improve system security",
			"Avoid major failure",
			"Slow down the system"
		],
		answer: 2
	},
	{
		question: "Damaged hard drives and faulty RAM are examples of",
		options: [
			"Software fault",
			"Network fault",
			"Hardware fault",
			"User error"
		],
		answer: 2
	},

	{
		question: "During installation, program files are primarily copied to",
		options: [
			"RAM",
			"CPU cache",
			"Secondary storage (Hard drive/SSD)",
			"BIOS"
		],
		answer: 2
	},

	{
		question: "Registering necessary system files ensures that",
		options: [
			"Files are compressed",
			"The operating system can locate and access shared components",
			"The software runs without power supply",
			"The monitor displays faster"
		],
		answer: 1
	},
	{
		question:
			"A fresh installation differs from an upgrade installation because",
		options: [
			"It requires internet",
			"It installs over an existing version",
			" It is the first installation with no previous version present",
			"It always deletes the operating system"
		],
		answer: 2
	},
	{
		question:
			"Which installation type allows the user to choose specific features to install?",
		options: [
			"Fresh installation",
			"Automatic installation",
			"Custom installation",
			"Silent installation"
		],
		answer: 2
	},
	{
		question:
			"Creating desktop shortcuts during installation is mainly for",
		options: [
			"Reducing file size",
			"Faster CPU processing",
			"Quick access to the program",
			"Increasing RAM"
		],
		answer: 2
	},
	{
		question: "Preventive maintenance is mainly carried out to",
		options: [
			"Repair damaged components",
			"Replace all hardware yearly",
			"Prevent system failure before it occurs",
			"Increase system complexity"
		],
		answer: 2
	},
	{
		question: "Operational continuity refers to",
		options: [
			"Shutting down systems regularly",
			"The ability of a system to remain functional and available",
			"Installing new hardware weekly",
			"Reducing staff workload"
		],
		answer: 1
	},
	{
		question: "One major benefit of preventive maintenance is",
		options: [
			"Increased downtime",
			"Higher operational cost",
			"Early detection of faults",
			"Frequent system crashes"
		],
		answer: 2
	},
	{
		question: "Updating operating systems helps to",
		options: [
			"Slow down performance",
			"Remove hardware",
			"Improve security and stability",
			"Delete user data"
		],
		answer: 2
	},
	{
		question: "System monitoring logs are useful for",
		options: [
			"Deleting files",
			"Identifying potential issues early",
			"Formatting the system",
			"Increasing virus attacks"
		],
		answer: 1
	},
	{
		question: "Dust accumulation inside a system unit can cause",
		options: [
			"Faster processing",
			"Increased airflow",
			"Overheating and hardware failure",
			"Better cooling"
		],
		answer: 1
	},
	{
		question: "Routine diagnostic scans are used to",
		options: [
			"Format the system",
			"Detect errors and system issues",
			"Install games",
			"Remove hardware"
		],
		answer: 1
	},
	{
		question: "Maintenance logs are important because they",
		options: [
			"Replace antivirus",
			"Track historical maintenance activities",
			"Delete system errors",
			"Increase RAM"
		],
		answer: 1
	},
	{
		question: "Which of the following helps prevent unauthorized access?",
		options: [
			"Disk defragmentation",
			"Firewall rules",
			"Screen resolution adjustment",
			"Cache clearing"
		],
		answer: 1
	},
	{
		question: "Slow boot time may be caused by",
		options: [
			"High screen brightness",
			"Excessive startup applications",
			"Large monitor size",
			"Mouse sensitivity"
		],
		answer: 1
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
let timeLeft = 200;
const timer = setInterval(() => {
	timeLeft--;
	document.getElementById("time").innerText = timeLeft;

	if (timeLeft <= 0) {
		clearInterval(timer);
		document.getElementById("quizForm").dispatchEvent(new Event("submit"));
	}
}, 1000);
// Load questions on page load
loadQuestions();
