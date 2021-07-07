const chat_widget = document.querySelector('.chat-widget');
chat_widget.addEventListener('click', () => {
    chat_widget.classList.add('chat-widget_active');
});

const chat_widget__input = document.getElementById('chat-widget__input');

chat_widget__input.addEventListener('keydown', (e) => {
    if(e.key == 'Enter' && e.target.value != '')
    {
        const messages = document.querySelector( '.chat-widget__messages' );
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${(new Date).getHours()}:${(new Date).getMinutes()}</div>
                <div class="message__text">
                ${e.target.value}
                </div>
            </div>
        `;
        
        switch(Math.floor(Math.random() * 3)) {
            case 0:
                messages.innerHTML += `
                    <div class="message">
                        <div class="message__time">${(new Date).getHours()}:${(new Date).getMinutes()}</div>
                        <div class="message__text">
                        Добрый день, мы ещё не проснулись. Позвоните через 10 лет
                        </div>
                    </div>
                `;
            break;
            case 1:
                messages.innerHTML += `
                    <div class="message">
                        <div class="message__time">${(new Date).getHours()}:${(new Date).getMinutes()}</div>
                        <div class="message__text">
                        Где ваша совесть?
                        </div>
                    </div>
                `;
            break;

            case 2:
                messages.innerHTML += `
                    <div class="message">
                        <div class="message__time">${(new Date).getHours()}:${(new Date).getMinutes()}</div>
                        <div class="message__text">
                        Добрый день. До свидания.
                        </div>
                    </div>
                `;
            break;

        }
    }
});