function calculate(a, b, c) {
  if (a || b || c == true) {
      return (a * b * c) + 2
  } else {
    console.log("Preencha todos os valores corretamente!")
  }
}

console.log(calculate(2, 2, 2))