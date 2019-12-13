function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz!";
    }
    else if (num % 3 === 0) {
        return "fizz!";
    }
    else if (num % 5 === 0) {
        return "buzz!";
    }
    return num; 
}

function fizzBuzzHTML(fizzResult) {
    let fizzType = '';
    if (typeof fizzResult === 'string') {
          fizzType = fizzResult;
    }
    return ` 
    <div class="fizz-buzz-item ${fizzType}">
    ${fizzResult}
    </div>
    `;
}

function submitNumber() {
    $("#number-chooser").on("submit", e => {
        event.preventDefault()
        const numInput= $("#number-choice").val(); 
        $("#number-choice").val('');
        const numberCount = [];
        for (let i = 0; i <= numInput; i++) {
            numberCount.push(fizzBuzz(i)); 
        }
        const pageHTML = numberCount.map(result => fizzBuzzHTML(result));
        $('.js-results').html(pageHTML);
    });
}

$(submitNumber);