// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var progressBarWidth = document.querySelector(".progress-container").offsetWidth;
  
  // Update the progress bar width
  document.getElementById("myBar").style.width = scrolled + "%";
  
  // Calculate the dog's new position
  var dogPosition = (progressBarWidth * scrolled / 100) - 10; // Adjust '-10' to center the dog
  
  // Update the dog's position
  document.getElementById("dog").style.left = dogPosition + "px";
}

document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.getElementById('hero-image');

    document.getElementById('about').addEventListener('mouseenter', function() {
        document.getElementById("image-hero-image").src="assets/images/main_hero_about_image.png";
    });
    
    document.getElementById('work_and_experience').addEventListener('mouseenter', function() {
        document.getElementById("image-hero-image").src="assets/images/main_hero_work_and_experiences_image.png";
    });

    document.getElementById('resume').addEventListener('mouseenter', function() {
        document.getElementById("image-hero-image").src="assets/images/main_hero_resume_image.png";
    });

    // Optionally, revert to default image on mouse leave
    const menuItems = document.querySelectorAll('.vertical-menu li');
    menuItems.forEach(item => {
        item.addEventListener('mouseleave', function() {
            document.getElementById("image-hero-image").src="assets/images/main_hero_image_version_2.png";
        });
    });
});

document.body.addEventListener('click', function(e) {
    // Create a new div element for the puddle
    const puddle = document.createElement('div');
    puddle.classList.add('puddle');
    
    // Set the position of the puddle
    puddle.style.left = `${e.clientX - 10}px`;
    puddle.style.top = `${e.clientY - 10}px`;
    
    // Detect the background color of the clicked area
    const clickedElement = document.elementFromPoint(e.clientX, e.clientY);
    const clickedElementBackgroundColor = window.getComputedStyle(clickedElement).backgroundColor;
    
    // Change puddle color if the clicked area has a specific background color
    if (clickedElementBackgroundColor === 'rgb(21, 89, 216)') { // #1559d8 in RGB
        puddle.style.backgroundColor = '#fff';
    }
    
    // Append the puddle to the body
    document.body.appendChild(puddle);
    
    // Remove the puddle after the animation ends
    puddle.addEventListener('animationend', function() {
        puddle.remove();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('main_hero_description');
    const names = ['Wing J. Har', 'a developer.', 'a designer.', 'passionate about my work.'];
    let index = 0;

    setInterval(() => {
        nameElement.style.opacity = 0; // Start fade-out
        setTimeout(() => {
            index = (index + 1) % names.length;
            nameElement.textContent = names[index];
            nameElement.style.opacity = 1; // Start fade-in
        }, 500); // Match this with the CSS transition duration
    }, 3000);
});

