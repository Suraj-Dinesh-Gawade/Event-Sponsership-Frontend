fetch("navbar.html")
  .then(res => res.text())
    .then(data => {
        const nav = document.getElementById('navbar');
        if (nav) nav.innerHTML = data;

        let bar = document.getElementById('slidebar');

        if (bar) {
            let path = window.location.pathname;

             if (path.includes("registration.html")) {
            bar.style.animation = "slideBarAnimation 1s ease-out forwards";
        } else if (path.includes("index.html")) {
            bar.style.animation = "slideBarAnimationHome 1s ease-out forwards";
            }
             else if (path.includes("about.html")) {
                 bar.style.animation = "slideBarAnimationAbout 1s ease-out forwards";
            }
    }
    });
  
let form = document.forms["sponsershipRegistration"];

if (form) {
    let name = document.getElementById('username');
let mobile = document.getElementById('mobile_no');
let email = document.getElementById('email_id');
let shopName = document.getElementById('shop_name');
let shopAddr = document.getElementById('shop_addr');
let contactOption = document.getElementById('select_c_option');
let timeslot = document.getElementById('select-time-slot');
let instagram_id_field = document.getElementById('instagram_id');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:7000/addRequest', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name.value,
                mobile: mobile.value,
                email: email.value,
                shop_name: shopName.value,
                shop_addr: shopAddr.value,
                contact_option: contactOption.value,
                time_slot: timeslot.value,
                instagram_id: instagram_id_field.value
            })
        });
        const finalMsg = await response.json();
        alert(finalMsg.message);
    });
}

const contactOption = document.getElementById("select_c_option");

const instagramField = document.getElementById("instagramField");

const whatsappNumberMsg = document.getElementById("whatsappNumber");

if (contactOption) {
    contactOption.addEventListener("change", function () {

        if (contactOption.value === "Instagram") {
            instagramField.style.display = "block";
        }
        else {
            instagramField.style.display = "none";
            document.getElementById("instagram_id").value = "";
        };

        if (contactOption.value === "WhatsApp") {
            whatsappNumberMsg.style.display = "block";
        }
        else {
            whatsappNumberMsg.style.display = "none";
        };
    
    });

    //about page
    // about.js

    const navBtn = document.getElementById("navBtn");

    navBtn.addEventListener("click", function () {

        window.location.href = "registration.html";

    });
};