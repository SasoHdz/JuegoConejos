        var juego;
        const segundosInicial = 30;
        var segundos = segundosInicial;
        const btnEmpezar = document.getElementById('btnIniciar');
        const score = document.getElementById('score');
       
        class Juego { 
            constructor() {
                this.inicializar();
            }

            inicializar() {
                btnEmpezar.classList.add('hide');
                this.contador = 0;
                this.nivel = 0;
                this.contador = 0;

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
                this.nivel+=1;
                

                if(this.nivel === 4) {
                    segundos = -1;
                    setTimeout(this.juegoGanado(), 2000);
                }
                else  setTimeout(this.preparandoNivel(), 2000);
            }

            preparandoNivel() {
                
                this.check.forEach(function(check) {
                    check.checked = false;
                });

                this.bunny.forEach(function(bunny){
                    bunny.classList.remove('capturado');
                    bunny.classList.remove('bunnySlow');
                    bunny.classList.remove('bunnyFast');
                    bunny.classList.remove('bunnyIntermedie');
                })


                switch(this.nivel)
                {
                    case 0:
                        this.bunny[0].classList.add('bunnySlow');
                        this.bunny[1].classList.add('bunnySlow');
                        this.bunny[2].classList.add('bunnyIntermedie');
                        this.bunny[3].classList.add('bunnySlow');
                        break;
                    case 1:
                        swal('Nivel '+this.nivel, 'Felicitaciones, has avanzado de nivel!','success');
                        this.bunny[0].classList.add('bunnySlow');
                        this.bunny[1].classList.add('bunnySlow');
                        this.bunny[2].classList.add('bunnyIntermedie');
                        this.bunny[3].classList.add('bunnySlow');
                        break;
                    case 2: 
                       this.bunny[0].classList.add('bunnyIntermedie');
                       this.bunny[1].classList.add('bunnyFast');
                       this.bunny[2].classList.add('bunnyIntermedie');
                       this.bunny[3].classList.add('bunnyIntermedie');
                       swal('Nivel '+this.nivel, 'Felicitaciones, has avanzado de nivel!','success');
                       break;
                    case 3: 
                       this.bunny[0].classList.add('bunnyIntermedie');
                       this.bunny[1].classList.add('bunnyFast');
                       this.bunny[2].classList.add('bunnyIntermedie');
                       this.bunny[3].classList.add('bunnyFast');
                       swal('Nivel '+this.nivel, 'Felicitaciones, has avanzado de nivel!','success');
                       break;
                    case 4: 
                       this.bunny[0].classList.add('bunnyIntermedie');
                       this.bunny[1].classList.add('bunnyFast');
                       this.bunny[2].classList.add('bunnyFast');
                       this.bunny[3].classList.add('bunnyFast');
                       swal('Nivel '+this.nivel, 'Felicitaciones, has avanzado de nivel!','success');
                       break;
                       
                }

            }

            juegoGanado() {

                swal('Nivel '+this.nivel, 'Felicitaciones, has ganado el juego','success');
                
                this.check.forEach(function(check) {
                    check.checked = false;
                });

            }
        }  

        function empezarJuego() {
            juego = new Juego;
            segundos = segundosInicial;
            actualizarTiempo();
        }

        function evaluarJuego() {

            for(var i=0;i<4;i++){
                if(juego.check[i].checked)
                {
                    juego.contador+=1;
                    juego.bunny[i].classList.add('capturado');

                }
            }
            
            if(juego.contador === 4) {
                segundos = segundosInicial - 10*juego.nivel;
                juego.siguienteNivel();
                
            }
            console.log(juego.contador);
            juego.contador = 0;
        }

        function actualizarTiempo(){
            document.getElementById('tiempo').innerHTML = "Segundos "+segundos;

            if(segundos===0){

                if(juego.contador != 4)
                {
                    swal('Nivel '+juego.nivel, 'El tiempo se termino :(','error');
                    juego.contador = 0;
                    juego.nivel=0;
                    btnEmpezar.classList.remove('hide');
                    juego.preparandoNivel();
                    segundos = -1;
                }
            }
            else {
                segundos--;
                setTimeout("actualizarTiempo()", 1000);
                if(juego.contador === 4){
                    segundos = 0;
                }
             }
            }
    

