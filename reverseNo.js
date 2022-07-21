
function reverse(num){
    return(
        parseFloat(
            num.toString()
            .split('')
            .reverse()
            .join('')
        )
    )
}
console.log(reverse("6598"));