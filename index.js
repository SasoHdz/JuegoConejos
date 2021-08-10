var juego;
        const btnEmpezar = document.getElementById('btnIniciar');
        const score = document.getElementById('score');
       
        class Juego { 
            constructor() {
                this.inicializar();
            }

            inicializar() {
                btnEmpezar.classList.add('hide');
                this.contador = 0;
                this.nivel = 1;

                this.check = new Array(4);
                this.check[0] = document.getElementById('check1');
                this.check[1] = document.getElementById('check2');
                this.check[2] = document.getElementById('check3');
                this.check[3] = document.getElementById('check4');

                this.bunny = new Array(4);
                this.bunny[0] = document.getElementById('bunny1');
                this.bunny[1] = document.getElementById('bunny2');
                this.bunny[2] = document.getElementById('bunny3');
                this.bunny[3] = document.getElementById('bunny4');
            }

            siguienteNivel() {
                alert("Has conquistado nivel "+ this.nivel);
                this.nivel+=1;

                if(this.nivel === 5) this.juegoGanado();
                else this.preparandoNivel();
            }

            preparandoNivel() {
                this.check.forEach(function(check) {
                    check.checked = false;
                });

                switch(this.nivel)
                {
        
                    case 2: 
                       this.bunny[0].classList.add('bunnyIntermedie');
                       this.bunny[1].classList.add('bunnyFast');
                       this.bunny[2].classList.add('bunnyIntermedie');
                       this.bunny[3].classList.add('bunnyIntermedie');
                       break;
                    case 3: 
                       this.bunny[0].classList.add('bunnyIntermedie');
                       this.bunny[1].classList.add('bunnyFast');
                       this.bunny[2].classList.add('bunnyIntermedie');
                       this.bunny[3].classList.add('bunnyFast');
                       break;
                    case 4: 
                       this.bunny[0].classList.add('bunnyIntermedie');
                       this.bunny[1].classList.add('bunnyFast');
                       this.bunny[2].classList.add('bunnyFast');
                       this.bunny[3].classList.add('bunnyFast');
                       break;
                }
            }

            juegoGanado() {
                alert("Felicidades");
                this.check.forEach(function(check) {
                    check.checked = false;
                });

            }


        }  

        function empezarJuego() {
            juego = new Juego;
        }

        function evaluarJuego() {
            juego.check.forEach(function(check){
                console.log(check.checked);
                if(check.checked) juego.contador+=1;
            });
            
            if(juego.contador === 4) juego.siguienteNivel();
            console.log(juego.contador);
            juego.contador = 0;
        }