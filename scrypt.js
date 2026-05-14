// Квиз для подбора языка
document.addEventListener('DOMContentLoaded', function() {
    const quizButtons = document.querySelectorAll('.quiz-option');
    const quizResult = document.getElementById('quiz-result');
    
    const recommendations = {
        js: {
            title: '🌐 JavaScript',
            text: 'JavaScript — твой выбор! Ты хочешь создавать сайты и веб-приложения. Это язык с мгновенной обратной связью в браузере и огромным сообществом.'
        },
        python: {
            title: '🐍 Python',
            text: 'Python — идеальный старт! Подходит для данных, нейросетей, автоматизации и веб-разработки. Самый дружелюбный язык для новичков.'
        },
        cpp: {
            title: '⚙️ C++',
            text: 'C++ для настоящих инженеров! Ты хочешь понять, как работает компьютер изнутри. Отличный выбор для игр, системного ПО и высоких нагрузок.'
        }
    };
    
    if (quizButtons.length > 0 && quizResult) {
        quizButtons.forEach(button => {
            button.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                const rec = recommendations[lang];
                
                if (rec) {
                    quizResult.style.display = 'block';
                    quizResult.innerHTML = `
                        <strong>🎉 ${rec.title}</strong><br>
                        ${rec.text}<br><br>
                        <small>Начни с раздела с этим языком выше, чтобы сделать первые шаги!</small>
                    `;
                    quizResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });
        });
    }
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '' || href === 'index.html#') return;
            const targetId = href.split('#')[1];
            if (targetId) {
                const target = document.getElementById(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // FAQ аккордеон
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        }
    });
});