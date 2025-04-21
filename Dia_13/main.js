const openProfileViewIcon = document.querySelectorAll(".expand-icon");
console.log(openProfileViewIcon);
const profileElement = document.querySelector("#profile-overview img");
 const closeProfileElement = document.querySelector("#close-profile-view svg");
 const profileName = document.querySelector("#profile-name");
 const nameArr = ["Julia Toth", "Andrew Rolland", "Misty Wonder", "Jennifer James"];
 const imageArr =[
    "https://100dayscss.com/codepen/13-1.jpg",
    "https://100dayscss.com/codepen/13-2.jpg",
    "https://100dayscss.com/codepen/13-3.jpg",
    "https://100dayscss.com/codepen/13-4.jpg"
 ];

 openProfileViewIcon.forEach((expand, index) => {
    expand.addEventListener("click", (event) => {
        event.preventDefault();

        const ProfileView = document.querySelectorAll(".slide");
        ProfileView.forEach((v) => {
            v.classList.add("translate-actual");
        });

        profileElement.src = imageArr[index];
        profileName.innerText = nameArr[index];
        profileElement.classList.add("scale-actual");
    });
});


 closeProfileElement.addEventListener("click", (event) => {
    event.preventDefault();
    const ProfileView = document.querySelectorAll(".slide");
    ProfileView.forEach((v) => {
        v.classList.remove("translate-actual");
    });
    profileElement.classList.remove("scale-actual");
 });