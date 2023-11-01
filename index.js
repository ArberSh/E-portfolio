// service_i27hp1g
// template_15dhnol
// _E7mjLykzcx9CZZ_9

function contact(event){
    event.preventDefault()
    // emailjs
    // .sendForm(
    //     'service_i27hp1g',
    //     'template_15dhnol',
    //     event.target,
    //     '_E7mjLykzcx9CZZ_9'
    // ).then(() => {
    //     console.log('this worked')
    // })
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    setTimeout(()=>{
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible";
        console.log('it worked 1')
    },1000);
}
