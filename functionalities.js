<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChatRoom</title>
    <link href="styling.css" rel="stylesheet" />
    <script src="/functionalities.js" defer></script>

</head>

<body>
    <div class="main-container">
        <!-- Left chat Session -->
        <div class="chat-section">
            <div class="chat-header">
                <h4>Chat Session </h4>
            </div>

            <div class="chat-contacts contacts">
                <div class="profile contact">
                    <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="" srcset="" height="50px" width="50px" style="border-radius: 50%">
                </div>

                <div class="contact-details contact" data-name="John Mayers">
                    <strong>Tony Stark</strong> <span> 3 min ago</span>
                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                </div>
            </div>

            <div class="chat-contacts contacts">
                <div class="profile contact">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="" srcset="" height="50px" width="50px" style="border-radius: 50%">
                </div>
                <div class="contact-details  contact" data-name="Tony Stark">
                    <strong>Tony Stark</strong> <span> 15 min ago</span>
                    <p>Lorem ipsumsddddddddddddddd
                    </p>
                </div>
            </div>

            <div class="chat-contacts contacts">
                <div class="profile contact">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="" srcset="" height="50px" width="50px" style="border-radius: 50%">
                </div>
                <div class="contact-details  contact" data-name="User3">
                    <strong>Tony Stark</strong> <span> 19 min ago</span>
                    <p>Lorem ipsum dolor sit amet
                    </p>
                </div>
            </div>
            <div class="chat-contacts contacts">
                <div class="profile contact">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="" srcset="" height="50px" width="50px" style="border-radius: 50%">
                </div>
                <div class="contact-details  contact" data-name="Tony Stark">
                    <strong>Tony Stark</strong> <span> 3 min ago</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing eli
                    </p>
                </div>
            </div>
            <div class="chat-contacts contacts">
                <div class="profile contact">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="" srcset="" height="50px" width="50px" style="border-radius: 50%">
                </div>
                <div class="contact-details contact" data-name="User5">
                    <strong>Tony Stark</strong> <span> 3 min ago</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing eli
                    </p>
                </div>
            </div>
        </div>

        <!-- Right Chat Details -->
        <div class="chat-details">
            <div class="chat-details-sub-container">
                <div class="chat-header">
                    <h4>Chat Details</h4>
                </div>

                <!-- chat-Active contact / User -->

                <div class="chat-contacts details">
                    <div class="profile">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            id="contact-profile" alt="" srcset="" height="50px" width="50px" style="border-radius: 50%">
                    </div>
                    <div class="contact-details">
                        <strong id="contact-name"></strong>
                        <div class="chat-details"></div>
                        <p>
                            Account Manager
                        </p>

                    </div>
                </div>

                <div class="header"></div>
                <div class="messages"></div>

                <!-- typing-section... -->
                <div class="typing-section container">
                    <textarea name="sent-messages" id="" placeholder="Type your messages here..." cols="100" rows="4">
                                            </textarea>
                    <button type="submit" class="send">Send</button>
                </div>
            </div>



        </div>
    </div>
</body>

</html>
