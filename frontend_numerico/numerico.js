function calcular() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    const n = parseFloat(document.getElementById("n").value);
    const error = parseFloat(document.getElementById("error").value);
  
    const tabla = document.getElementById("tabla").getElementsByTagName("tbody")[0];
    tabla.innerHTML = ""; // Limpia la tabla
  
    let iteracion = 0;
    let c_anterior = 0; // Variable para guardar el valor anterior de c
    let fa = f(a, n);
    let fb = f(b, n);
    let c = (a * fb - b * fa) / (fb - fa);
    let fc = f(c,n);
    let e = 0;
    let cont_a = 0;
    let cont_b = 0;
    while (c_anterior == 0 || Math.abs(c - c_anterior) >= error) { // Condición de parada
       // Guarda el valor anterior de c
      e = Math.abs(c - c_anterior);
      const newRow = tabla.insertRow();
      newRow.insertCell().textContent = iteracion + 1;
      newRow.insertCell().textContent = a.toFixed(7);
      newRow.insertCell().textContent = b.toFixed(7);
      newRow.insertCell().textContent = c.toFixed(7);
      newRow.insertCell().textContent = fa.toFixed(7);
      newRow.insertCell().textContent = fb.toFixed(7);
      newRow.insertCell().textContent = fc.toFixed(7);
      newRow.insertCell().textContent = Math.abs(c - c_anterior).toFixed(7);;
      
      c_anterior = c;
      if (fc * fa < 0) {
        cont_a++;
        b = c;
        fb = fc;
        cont_b=0;
      } else {
        cont_b++;
        cont_a = 0;
        a = c;
        fa = fc;
      }

      c = (a * fb - b * fa) / (fb - fa);
      fc = f(c,n);

      if(cont_a == 2){
        fa = fa/2;
        a = Math.sqrt(fa+n);
      }

      if(cont_b == 2){
        fb = fb/2;
        b = Math.sqrt(fb+n);
      }

      
      iteracion++;
    }
    
    // Mostrar la raíz aproximada
    alert("La raíz aproximada es: " + c.toFixed(7));
    const newRow = tabla.insertRow();
    newRow.insertCell().textContent = iteracion + 1;
    newRow.insertCell().textContent = a.toFixed(7);
    newRow.insertCell().textContent = b.toFixed(7);
    newRow.insertCell().textContent = c.toFixed(7);
    newRow.insertCell().textContent = fa.toFixed(7);
    newRow.insertCell().textContent = fb.toFixed(7);
    newRow.insertCell().textContent = fc.toFixed(7);
    newRow.insertCell().textContent = Math.abs(c - c_anterior).toFixed(7);;
  }
  
  function f(x, n) {
    return x * x - n;
  }