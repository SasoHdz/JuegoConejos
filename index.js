var juego;
        const btnEmpezar = document.getElementById('btnIniciar');
        const score = document.getElementById('score');
        var check = new Array(4);
        check[0] = document.getElementById('check1');
        check[1] = document.getElementById('check2');
        check[2] = document.getElementById('check3');
        check[3] = document.getElementById('check4');
       
        class Juego { 
            constructor() {
                this.inicializar();
            }

            inicializar() {
                btnEmpezar.classList.add('hide');
                this.contador = 0;
                this.nivel = 1;
            }

            preparandoNivel() {
                check.forEach(function(check) {
                    check.checked = false;
                });
                

                    
            }

            juegoGanado() {

            }

            siguienteNivel() {
                console.log("Has conquistado nivel "+ this.nivel);
                this.nivel+=1;

                if(this.nivel === 4) juegoGanado();
                else preparandoNivel();
            }

        }  

        function empezarJuego() {
            juego = new Juego;
        }

        function evaluarJuego() {
            check.forEach(function(check){
                console.log(check.checked);
                if(check.checked) juego.contador+=1;
            });
            
            if(juego.contador === 4) juego.siguienteNivel();
            console.log(juego.contador);
            juego.contador = 0;
        }