const menus = document.querySelectorAll(".menu");

menus.forEach((menu) => {

    menu.addEventListener("click", () => {

        menus.forEach((item) => {

            item.classList.remove("active");

        });

        menu.classList.add("active");

    });

});



const userName = document.getElementById("userName");
const currentUser = localStorage.getItem("loggedInUser");
const userCircle = document.querySelector(".user-circle")

// console.log(currentUser);

userName.textContent = currentUser;

userCircle.textContent = currentUser.charAt(0).toUpperCase(); // this is getting the letter by the index value

