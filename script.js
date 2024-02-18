// Get elements
const popupContainers = document.querySelectorAll('.popup-container');
const closeButtons = document.querySelectorAll('.close-btn');
const learnMoreButtons = document.querySelectorAll('.learn-more');
const additionalReadMoreButtons = document.querySelectorAll('.additional-read-more');
const moreTexts = document.querySelectorAll('.more-text');

// Add event listener to each learn more button
learnMoreButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Show popup container corresponding to the clicked button
    popupContainers[index].style.display = 'flex';
  });
});

// Add event listener to close button
closeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Hide the corresponding popup container
    popupContainers[index].style.display = 'none';
  });
});

// Add event listener to each additional read more button
additionalReadMoreButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Toggle the display of more text for the corresponding card
    if (moreTexts[index].style.display === 'none') {
      moreTexts[index].style.display = 'block';
      button.textContent = 'Read Less';
    } else {
      moreTexts[index].style.display = 'none';
      button.textContent = 'Read More';
    }
  });
});
