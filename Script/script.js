/* side menu bar*/
document.addEventListener("DOMContentLoaded", function() {
            var sidebar = document.getElementById("sidebar");
            var menuIcons = document.getElementsByClassName("menu-icon");

            function toggleSidebar() {
                sidebar.classList.toggle("open-sidebar");
            }

            function hideSidebar() {
                sidebar.classList.hide("open-sidebar");
            }

            for (var i = 0; i < menuIcons.length; i++) {
                menuIcons[i].addEventListener("mouseenter", toggleSidebar);
                menuIcons[i].addEventListener("mouseleave", hideSidebar);
				
            }
        });
function openNav() {
				  document.getElementById("sidebar").style.width = "250px";
				}

				function closeNav() {
					document.getElementById("sidebar").style.width = "0";
				}
					document.addEventListener('DOMContentLoaded', function() {
				var scrollToTopBtn = document.getElementById('scrollToTopBtn');

				window.addEventListener('scroll', function() {
				  if (window.scrollY > 300) {
					scrollToTopBtn.style.display = 'block';
				} else {
					scrollToTopBtn.style.display = 'none';
				  }
				});
				scrollToTopBtn.addEventListener('click', function() {
				  window.scrollTo({
					top: 0,
				
				  });
				});
			  });


/* Log-in Form*/
		function validateLogin() {
			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;
	
	
			if (username === "aybi"&& password === "123456") {
				window.location.href = "HOME.html";
			} else {  
				alert("Invalid username or password. Please try again.");
			}
			}

			function resetForm(){
			document.getElementById("loginForm").reset();
			}
			
/* Direct-message*/
		document.querySelector('.icon-message-button').addEventListener('click', function() {
		document.querySelector('.icon_direct-message').style.display = 'none';
		document.querySelector('.chat-container').style.display = 'block';
});

		document.querySelector('.chat-container').addEventListener('click', function() {
		var userMessage = prompt('Your message:');
		if (userMessage) {
        var chatMessage = document.createElement('div');
        chatMessage.classList.add('chat-message', 'user-message');
        chatMessage.textContent = userMessage;
        document.querySelector('.chat-container').appendChild(chatMessage);

        var botReply = getBotReply(userMessage);
        var replyMessage = document.createElement('div');
        replyMessage.classList.add('chat-message', 'bot-message');
        replyMessage.textContent = botReply;
        document.querySelector('.chat-container').appendChild(replyMessage);

        alert('Your message has been sent to Stitch and Tailoring Shop.');
    }
});

		function getBotReply(message) {
		return "Thank you for your message! We will get back to you soon.";
}
 