// Function to toggle the menu
function toggleMenu(event) {
	// Prevent event propagation and default behavior
	if (event) {
		event.stopPropagation();
	}

	var menucontainer = document.querySelector('#nav-menu-container');
	var menu = document.querySelector('.nav-menu');
	var hamburger = document.querySelector('.hamburger i'); // Target the icon inside the hamburger

	if (window.innerWidth <= 768) { // Check for mobile view
		if (menu.style.display === 'flex') {
			menu.style.display = 'none'; // Hide the menu
			menucontainer.style.height = '0px'; // Reset the height of the menu container
			hamburger.style.color = 'white'; // Restore the hamburger color to white
		} else {
			menu.style.display = 'flex'; // Show the menu
			menucontainer.style.height = '500px'
			hamburger.style.color = 'black'; // Change the hamburger color to black
		}
	}
}

// Function to close the menu if clicked outside
function clickOutsideMenu(event) {
	var menucontainer = document.querySelector('#nav-menu-container');
	var menu = document.querySelector('.nav-menu');
	var hamburger = document.querySelector('.hamburger i'); // Target the icon inside the hamburger

	if (window.innerWidth <= 768) { // Check for mobile view
		if (!menu.contains(event.target) && !document.querySelector('.hamburger').contains(event.target)) {
			menu.style.display = 'none'; // Hide the menu
			menucontainer.style.height = '0px';
			hamburger.style.color = 'white'; // Restore the hamburger color to white
		}
	}
}

// Function to initialize event listeners and handle initial setup
function init() {
	var menucontainer = document.querySelector('#nav-menu-container');
	var menu = document.querySelector('.nav-menu');
	var hamburger = document.querySelector('.hamburger i'); // Target the icon inside the hamburger

	// Ensure the menu is always visible on larger screens (web)
	if (window.innerWidth > 768) {
		menu.style.display = 'flex'; // Keep menu visible on web
	} else {
		// Hide the menu by default on mobile load and set hamburger color to white
		menu.style.display = 'none';
		hamburger.style.color = 'white';
		menucontainer.style.height = '0px';
	}

	// Attach event listeners
	document.querySelector('.hamburger').addEventListener('click', toggleMenu);
	document.addEventListener('click', clickOutsideMenu);

	// Handle window resize to update menu visibility
	window.addEventListener('resize', function () {
		var menucontainer = document.querySelector('#nav-menu-container');
		if (window.innerWidth > 768) {
			menu.style.display = 'flex'; // Always display on larger screens
		} else {
			menu.style.display = 'none'; // Hide on mobile
			menucontainer.style.height = '0px';
		}
	});
}

// Initialize the script on DOMContentLoaded
document.addEventListener('DOMContentLoaded', init);
