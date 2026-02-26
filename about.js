const questions = document.querySelectorAll('.faq-question');

questions.forEach(function(question) {
    question.addEventListener('click', function() {
        const item = this.parentElement;
        const isActive = item.classList.contains('active');
        
        document.querySelectorAll('.faq-item').forEach(function(i) {
            i.classList.remove('active');
        });
        
        if (!isActive) {
            item.classList.add('active');
        }
    });
});