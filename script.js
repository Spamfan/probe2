/* 
   This file tests if external JS is executed. 
   It waits for the DOM to load, then targets the JS test paragraph to update its text and color.
*/

document.addEventListener('DOMContentLoaded', () => {
    const jsStatus = document.getElementById('js-status');
    
    if (jsStatus) {
        // Change text to success message
        jsStatus.textContent = "✅ JS Status: SUCCESS - External Script Loaded!";
        
        // Change styling to green
        jsStatus.style.color = "#155724";
        jsStatus.style.backgroundColor = "#d4edda";
    }
});
