// This is we'll add some functionality to our portfolio.

const links = document.querySelectorAll('.link');



links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(ele => ele.classList.remove('active'));
        link.classList.add('active');
    })
});

// creating dynamic project card

const projectContainer = document.querySelector('.project-container');

projects.forEach(projects => {
    projectContainer.innerHTML += `
    <div class="project-card" data-tags="#all, ${projects.techStack}">
        <img src="/public/assets/img/${projects.image}" alt="">
        <div class="content">
            <h1 class="project-name">${projects.name}</h1>
            <span class="tags">${projects.techStack}</span>
        </div>
    </div>
    `;
})


// In below code, we are just adding click event to filter button and toggling some elements class.
const filters = document.querySelectorAll('.filter-btn');

filters.forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
        let id = filterBtn.getAttribute('id');
        let projectCards = document.querySelectorAll('.project-cards');
        projectCards.forEach(card => {
            if(card.getAttribute('data-tags').includes(id)) {
                card.classList.remove('hide');
            }
            else {
                card.classList.add('hide');
            }
        })

        filters.forEach(btn.classList.remove('active'));
        filterBtn.classList.add('active');
    })
})

//contact form

// I am just selecting all forms input and making POST request to /mail route.
const contactBtn = document.querySelector('.contact-btn');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const msg = document.querySelector('.message');

contactBtn.addEventListener('click', () => {
    if(firstName.value.length && lastName.value.length && email.value.length && msg.value.length){
        fetch('/mail', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                firstname: firstName.value,
                lastname: lastName.value,
                email: email.value,
                msg: msg.value,
            })
        })
        .then(res => res.json())
        .then(data => {
            alert(data);
        })
    }
})

// styling toggle-btn here. as we are about to make it function

const toggleBtn = document.querySelector('.toggle-btn');
const linkContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linkContainer.classList.toggle('show');
})