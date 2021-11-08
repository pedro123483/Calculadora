let ids = (id) => document.getElementById(id);

let resultado = ids('quantia');

let botoes = Array.from(document.getElementsByClassName('bot'));

let numeros = resultado.firstChild;


botoes.map( botao => {

    botao.addEventListener('click', (e) =>{

        switch(e.target.innerText){

            case 'RESET':
            resultado.innerText = '';
            break;

            case 'DEL':
                if(resultado.innerText){

                    resultado.innerText = resultado.innerText.slice(0, -1)
                }
                break;

                case '=':
                    try{
                    resultado.innerText = eval(resultado.innerText);
            } catch {

                resultado.innerText = 'Error!'
            }
                    break;


            default:
                resultado.innerText += e.target.innerText;
        }
    })

})

