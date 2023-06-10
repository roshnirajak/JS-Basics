const containers = document.querySelectorAll('.container');
console.log("hello");

const faq = [
    { ques: "Does this Support Wifi?", ans: "It does not but it does support Bluetooth" },
    { ques: "Is your life shit too?", ans: "Everybody's life's shit buddy" }
  ];

// let wrapper = document.querySelector(".wrapper");
// faq.forEach(element => {
//   wrapper.innerHTML += `<div class='container'><div class='question'><h1>${element.ques}</h1><i class='icon fa-solid fa-caret-down'></i></div><div class='answer'><p>${element.ans}</p></div></div>`;
// });

containers.forEach(container => {
    const icon = container.querySelector('.icon');
    const answer = container.querySelector('.answer');

    container.addEventListener('click', () => {
        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.classList.remove('active');
        }
        else {
            icon.classList.add('active');
            answer.classList.add('active');
        }
    })
});