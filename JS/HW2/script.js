       //Number N
       
        let numberN = prompt('Напишіть будь-яке число');

        document.writeln(`Число N = <b> ${Number(numberN)}; </b> <br>`);

        let chekNumberN = Number.isInteger(numberN);

        document.writeln(`Число N ціле - <b> ${Number.isInteger(Number(numberN))}; </b> <br>`);

        // Number M

        let numberM = prompt('Напишіть будь-яке число');

        document.writeln(`Число M = <b> ${Number(numberM)}; </b> <br>`);

        let chekNumberM = Number.isInteger(numberM);

        document.writeln(`Число M ціле - <b> ${Number.isInteger(Number(numberM))}; </b> <br>`);

        // Pass even numbers

        let evenNumbers = confirm ('Пропустити парні числа?');

        document.writeln(`Пропустити парні числа? Відповідь: <b> ${evenNumbers}; </b> <br>`);
        
        // Cycle

        let maxNumber = Math.max (numberN, numberM);

        let minNumber = Math.min (numberN, numberM);

        let sum = 0;

        for (let i = minNumber; i<=maxNumber; i++) {
                
             if (evenNumbers == true && i % 2 == 0) {
                continue;    
             } else {
                sum += i;     
               }      
           
        }

        document.writeln(`Сума чисел N та M: <b> ${sum}; </b> <br>`);