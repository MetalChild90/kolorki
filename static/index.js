document.addEventListener('DOMContentLoaded', () => {

    const colorInput = document.querySelector('#color');
    const button = document.querySelector('button');

    button.addEventListener('click', function (e) {
            fetch('http://127.0.0.1:3003/getColors', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        inputColor: colorInput.value
                    })
                })
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    console.log(data);
                    printColors(data.colorsArr)
                })
    });

    function printColors(colorsArr) {
        const colorsDiv = document.querySelector('#colDiv');
        console.log(colorsDiv);
        colorsDiv.innerHTML = ''

        colorsArr.forEach(color => {

            const div = document.createElement('div');

            div.style.height = '15px';
            div.style.width = '250px';
            div.style.marginTop = '5px';
            div.style.border = '1px solid #000';
            div.style.backgroundColor = color.color;

            colorsDiv.appendChild(div)
        })
    }
})