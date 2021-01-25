function addition(arr) {
    sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
function substraction(num1, num2) {
    return num1 - num2
}
function multiplication(arr) {
    let product = 1

    for (let i = 0; i < arr.length; i++) {
        product = product * arr[i]
    }
    return product
}
function division(num1, num2) {
    return num1 / num2
}
function max(arr) {
    let i = 0
    let max = arr[i]
    for (i = 0; i < arr.length; i++) {
        if (max <= arr[i]) { max = arr[i] }
    }
    return "The maximum number is " + max
}
function min(arr) {
    let i = 0
    let min = arr[i]
    for (i = 0; i < arr.length; i++) {
        if (min >= arr[i]) { min = arr[i] }
    }
    return "The minimum number is " + min
}
function average(arr) {
    sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    avg = sum / arr.length
    return avg

}
function square(num) {
    squ = num * num
    return "the square of " + num + " is " + squ
}


(function () {
    let num1;
    let num2;
    let service = parseInt(prompt("What do you want to do?: \n 1: Addition \n 2: Subtraction \n 3: Multiplication \n 4: Division \n 5: Max \n 6: Min \n 7: Average \n 8: Square"));
    switch (service) {
        case 1:
            let length = prompt("How many numbers do you want to add?: ")
            array = new Array()
            for (let i = 0; i < length; i++) {
                array[i] = parseInt(prompt("Enter Number(" + (i + 1) + "): "));
            }
            alert(addition(array))
            break;
        case 2:
            alert(substraction(parseInt(prompt("Enter first Number: ")), parseInt(prompt("Enter second Number: "))))
            break;
        case 3:
            var nums = prompt("How many numbers do you want to multiply?: ")
            array = new Array()
            for (let i = 0; i < nums; i++) {
                array[i] = parseInt(prompt("Enter Number(" + (i + 1) + "): "));
            }
            alert(multiplication(array))
            break;
        case 4:
            let num1 = prompt("Enter first Number: ")
            let num2 = prompt("Enter second Number: ")
            if (num2 == 0) { alert("Wrong input second number cannot be zero(0)") }
            else {
                alert(division(num1, num2))
            }
            break;
        case 5:
            var nums = prompt("How many numbers do you want to compare?: ")
            array = new Array()
            for (let i = 0; i < nums; i++) {
                array[i] = parseInt(prompt("Enter Number(" + (i + 1) + "): "));
            }
            alert(max(array))
            break;
        case 6:
            var nums = prompt("How many numbers do you want to compare?: ")
            array = new Array()
            for (let i = 0; i < nums; i++) {
                array[i] = parseInt(prompt("Enter Number(" + (i + 1) + "): "));
            }
            alert(min(array))
            break;
        case 7:
            var nums = prompt("How many numbers do you want to enter for the average?: ")
            array = new Array()
            for (let i = 0; i < nums; i++) {
                array[i] = parseInt(prompt("Enter Number(" + (i + 1) + "): "));
            }
            alert(average(array))
            break;
        case 8:
            var num = parseInt(prompt("Enter the number you want to square?: "))
            alert(square(num))
            break;
        default:
            alert("Invalid input")
            break;
    }

})();

