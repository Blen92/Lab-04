let bmi = {
    weight: "",
    height: "",

    calcBmi: function () {

        let bmi = this.weight / (this.height * this.height);


        bmi = Number(bmi.toFixed(1));

        if (bmi < 18.5)
            alert("Your Bmi is : " + bmi + "\nYour are : Underweight");
        else if (bmi >= 18.5 && bmi <= 24.9)
            alert("Your Bmi is : " + bmi + "\nYour are : Normal");
        else if (bmi >= 25.0 && bmi <= 29.9)
            alert("Your Bmi is : " + bmi + "\nYour are : Overweight");
        else if (bmi >= 30.0)
            alert("Your Bmi is : " + bmi + "\nYour are : Obese");


    }
}

bmi.weight = prompt("Your Weight in Kg  ? ");
bmi.height = prompt("Your Height in M  ? ");

bmi.calcBmi();

