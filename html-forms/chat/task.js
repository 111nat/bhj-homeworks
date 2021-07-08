const chat_widget = document.querySelector('.chat-widget');

const messages = document.querySelector( '.chat-widget__messages' );

chat_widget.addEventListener('click', () => {

    if (!chat_widget.classList.contains('chat-widget_active')) {
        let timer = 0;
        let ammount_messages_client = 0;
        setInterval(() => {
            if (document.getElementsByClassName('message_client').length == ammount_messages_client) {
                timer++;
            }
            else {
                ammount_messages_client = document.getElementsByClassName('message_client').length;
                timer = 0;
            }

            if (timer == 30) {
                timer = 0;
                messages.innerHTML += `
                    <div class="message">
                        <div class="message__time">${(new Date).getHours()}:${(new Date).getMinutes()}</div>
                        <div class="message__text">
                        Чем могу помочь?------------------
                        </div>
                    </div>
                `;
                messages.getElementsByClassName('message')[messages.getElementsByClassName('message').length - 1].scrollIntoView();
            }
        } , 1000);
    }

    chat_widget.classList.add('chat-widget_active'); 
});

const chat_widget__input = document.getElementById('chat-widget__input');

chat_widget__input.addEventListener('keydown', (e) => {
    if(e.key == 'Enter' && e.target.value != '')
    {
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${(new Date).getHours()}:${(new Date).getMinutes()}</div>
                <div class="message__text">
                ${e.target.value}
                </div>
            </div>
        `;

        e.target.value = '';
        
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
        messages.getElementsByClassName('message')[messages.getElementsByClassName('message').length - 1].scrollIntoView();
    }
});