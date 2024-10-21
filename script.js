function supplyCalculator() {
    // Retrieve input values
    let snack = document.getElementById("snacks").value;
    let current_age = parseInt(document.getElementById("age").value);
    let max_age = parseInt(document.getElementById("max_age").value);
    let per_day = parseInt(document.getElementById("times").value);

    // Check if any field is empty
    if (snack === "" || isNaN(current_age) || isNaN(max_age) || isNaN(per_day)) {
        alert('"Please complete all the required fields.!"');
        return;
    }

    // Check if current age is greater than or equal to max age
    if (current_age >= max_age) {
        document.getElementById("result").innerHTML = "Your current age is already greater than or equal to the maximum age!";
        return;
    }

    // Calculate remaining years, total days, and total snacks
    let remainingYears = max_age - current_age;
    let totalDays = remainingYears * 365; // Approximate days per year
    let totalSnack = totalDays * per_day;

    // Output result
    document.getElementById('result').innerText = `"You will need ${totalSnack} ${snack} to last you until the ripe old age of ${max_age}!".`;
}
