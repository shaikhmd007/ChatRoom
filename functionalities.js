const jsonData = {
    "data": {
        "John Mayers": [
            {
                "from": {
                    "type": "user1"
                },
                "msg": {
                    "message": "Hi, how can I help you?"
                }
            },
            {
                "from": {
                    "type": "user2"
                },
                "msg": {
                    "message": "Hi guys Ive got the O2 package and have really slow internet. A speed check online said i can get 3mbps but it seems more like 0.5 these days, just freezing and taking ages to open pages and open audio files for example. I have decided to switch to the UPC package which offers 10mbps but do you think i will get it?"

                }
            },
            {
                "from": {
                    "type": "user1"
                },
                "msg": {
                    "message": "Sure! I will definitely help you with you query. Could you please confirm your email address?"
                }
            },
            {
                "from": {
                    "type": "user2"
                },
                "msg": {
                    "message": "john.mayers@gmail.com"

                }
            }
        ],
        "Tony Stark": [
            {
                "from": {
                    "type": "user1"
                },
                "msg": {
                    "message": "Hi, how can I help you?"
                }
            },
            {
                "from": {
                    "type": "user2"
                },
                "msg": {
                    "message": "Hi, my computer is not working since yesterday. I need the computer to reboot my Iron Man suit. Could you please help me?"
                }
            },
            {
                "from": {
                    "type": "user1"
                },
                "msg": {
                    "message": "Sure! I will definitely help you with you query. Could you please confirm your email address?"
                }
            },
            {
                "from": {
                    "type": "user2"
                },
                "msg": {
                    "message": "tony.stark@gmail.com"
                }
            }
        ]
    }
};
const contacts = document.querySelectorAll('.contact');
// const contactsDetails = document.querySelectorAll('.contact-details');
const contactName = document.getElementById('contact-name');
const contactProfile = document.getElementById('contact-profile');
const header = document.querySelector('.header');

const messages = document.querySelector('.messages');
messages.classList.add("msg")
contacts.forEach(contact => {
    contact.addEventListener('click', () => {
        const name = contact.getAttribute('data-name');
        const profile = contact.getAttribute('profile');

        const data = jsonData.data[name];

        contactName.textContent = name;
        contactProfile.textContent = profile
        header.textContent = data[0].msg.message;
        messages.innerHTML = '';
        data.forEach(item => {
            const div = document.createElement('div');
            div.classList.add("chat-messages")
            div.classList.add(item.from.type);
            div.textContent = item.msg.message;
            messages.appendChild(div);
        });
    });

    // By default, show chat 1 details
    if (contact.getAttribute('data-name') === 'John Mayers') {
        const data = jsonData.data['John Mayers'];

        contactName.textContent = 'John Mayers';
        contactProfile.textContent = 'Software Developer';
        header.textContent = data[0].msg.message;
        messages.innerHTML = '';
        data.forEach(item => {
            const div = document.createElement('div');
            div.classList.add("chat-messages")
            div.classList.add(item.from.type);
            div.textContent = item.msg.message;
            messages.appendChild(div);
        });
    }
});
