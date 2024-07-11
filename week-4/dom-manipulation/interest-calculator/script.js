async function calculateInterest() {
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const time = document.getElementById("time").value;

    const response = await fetch(`http://127.0.0.1:3000/interest?principal=${principal}&rate=${rate}&time=${time}`);
    const output = await response.json();

    document.getElementById("interest-display").innerHTML = `You have to pay an interest amount of Rs. ${output.interest} which will total the amount to Rs. ${output.total}`;
}