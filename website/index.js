// Function to fetch and update visitor count
async function updateVisitorCount() {
    try {
        console.log('Fetching visitor count...');
        const response = await fetch('https://fd3anfvrna4dmshef4c3qwuudy0zcgby.lambda-url.ap-southeast-1.on.aws/');
        const data = await response.text();
        console.log('Raw response:', data); // Log the raw response
        
        // Update the counter element directly first
        const counterElement = document.getElementById('visitor-count');
        
        // Check if we got a number directly
        if (!isNaN(data)) {
            animateCount(0, parseInt(data), counterElement);
            return;
        }
        
        // Try to extract number if response contains "Updated views: "
        const match = data.match(/Updated views: (\d+)/);
        if (match) {
            const count = match[1];
            console.log('Extracted count:', count);
            animateCount(0, parseInt(count), counterElement);
        } else {
            console.error('Could not extract count from response:', data);
            counterElement.textContent = 'Error';
        }
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        document.getElementById('visitor-count').textContent = 'Error';
    }
}

// Function to animate the counter
function animateCount(start, end, element) {
    let current = start;
    const duration = 1000; // Animation duration in milliseconds
    const stepTime = 50; // Time between each step in milliseconds
    const steps = duration / stepTime;
    const increment = (end - start) / steps;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            clearInterval(timer);
            element.textContent = end;
        } else {
            element.textContent = Math.round(current);
        }
    }, stepTime);
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateVisitorCount);

// Function to check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.introduction, .about-me, .certifications, .projects, .education, .certification-item, .project-item, .education-item');
    
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScrollAnimations);

// Initial check for elements in viewport
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimations();
});
