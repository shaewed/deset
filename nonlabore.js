function injectParasite(targetElement) {
    // Ensure the target element exists
    if (!targetElement) {
        console.error('Target element not found.');
        return;
    }

    // Create a new element to inject (the parasite)
    var parasite = document.createElement('div');
    parasite.textContent = 'Injected Parasite';
    parasite.style.backgroundColor = 'yellow';  // Example styling
    
    // Append the parasite to the target element
    targetElement.appendChild(parasite);

    console.log('Parasite injected successfully.');
}

// Example usage:
// Assuming there's an element with id 'target' in the DOM
var targetElement = document.getElementById('target');
injectParasite(targetElement);
