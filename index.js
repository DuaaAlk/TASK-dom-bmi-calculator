function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });
  // You are going to write the code here before the curly braces 👇🏻

  let bmi = ( weight / ((height/100)^2) );
  bmi = bmi.toFixed(2);

  alert("Your BMI is " + bmi );

    if ( bmi < 18.5 ){
      alert("Your BMI is " + bmi + ". Your BMI state is Underweight.");
    }else if ( bmi <= 24.9 ){
      alert("Your BMI is " + bmi + ". Your BMI state is Healthy Weight.");
    }else if ( bmi <= 29.9 ){
    alert("Your BMI is " + bmi + ". Your BMI state is Overweight.");
    }else {
      alert("Your BMI is " + bmi + ". Your BMI state is Above Obesity.");
    }
    
  if ((age >= 19 && age <=24)  && bmi >= 19 && bmi <= 24  ){
    alert("You have a normal weight");
  }else if ((age >= 25 && age <=34) && bmi >= 20 && bmi <= 25  ){
    alert("You have a normal weight");
  }else if ((age >= 35 && age <=44) && bmi >= 21 && bmi <= 26  ){
    alert("You have a normal weight");
  }else if ((age >= 45 && age <=54) && bmi >= 22 && bmi <= 27  ){
    alert("You have a normal weight");
  }else if ((age >= 55 && age <=65) && bmi >= 24 && bmi <= 29  ){
    alert("You have a normal weight");
  }




}
