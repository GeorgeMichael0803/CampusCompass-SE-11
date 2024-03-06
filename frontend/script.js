document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.navigate-button').forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = this.getAttribute('data-target');
        });
    });

   
    document.getElementById('survey-button').addEventListener('click', function() {
        alert('Survey button clicked!');
    });
});
