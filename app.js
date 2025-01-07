 // Button and text variables
 const button = document.getElementById("myButton");
 const text = "I love you";

 // Event listener for button click
 button.addEventListener("click", function () {
     // Hide the button when clicked
     button.style.display = "none";

     // Set interval for text to appear repeatedly across the screen
     setInterval(function () {
         const newText = document.createElement("div");
         newText.classList.add("text");
         newText.textContent = text;
         document.body.appendChild(newText);

         // Add space after "I love you"
         newText.textContent = text + " "; // Add a space after the text

         // Move the text to random position horizontally across the screen
         const randomYPosition = Math.random() * window.innerHeight;
         newText.style.top = randomYPosition + "px"; // Random Y position

         let index = 0;
         // Keep adding the text to the screen till the page is full
         const interval = setInterval(function () {
             newText.textContent = text + " ".repeat(index); // Add spaces after each repetition
             newText.style.left = (window.innerWidth - newText.offsetWidth) + "px"; // Keep it aligned to the right

             if (index > 50) {  // Limit how many times the text will repeat
                 clearInterval(interval);
             }
             index++;
         }, 100);  // Speed of text appearing
     }, 50);  // Delay between generating new text
 });