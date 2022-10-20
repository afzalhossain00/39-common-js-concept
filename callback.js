function greeting(wishes, name) {
    wishes(name)
}
// const name = 'kashem mama'
// const numbers = [15, 20, 25, 14, 19]
// const mobile = { brand: 'samsung', price:54000, ram:'12gb' }

function greetingHandler(name) {
    console.log('Good Morning', name)
}
function greetEvening(name) {
    console.log('Good Evening', name)
}
function greetNight(name) {
    console.log('Good Night', name)
}
greeting(greetingHandler, 'afzal')
greeting(greetingHandler, 'Arman')
greeting(greetEvening, 'Asif')
greeting(greetNight, 'afzal')