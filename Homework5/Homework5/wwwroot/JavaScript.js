function Sum(a, b)
{
    if (document.getElementById("Opertaors").value == "+")
    {
        document.getElementById("result").value = Number(a) + Number(b);
    }
    if (document.getElementById("Opertaors").value == "*") {
        document.getElementById("result").value = Number(a) * Number(b);
    }
    if (document.getElementById("Opertaors").value == "/") {
        document.getElementById("result").value = Number(a) / Number(b);
    }
    if (document.getElementById("Opertaors").value == "-") {
        document.getElementById("result").value = Number(a) - Number(b);
    }
    
}