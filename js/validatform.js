var form = document.getElementById('Página1');
                
    form.addEventListener("submit", function validaCadastro(evt) {
        var nome = document.getElementById('Nome-Completo');
        var documento = document.getElementById('Documento-(CPF/RG)');
        var email = document.getElementById('E-mail');
        var idade = document.getElementById('Idade');
        var telefone = document.getElementById('Telefone');
        var estado = document.getElementById('Estado');
        var cidade = document.getElementById('Cidade');
        var universidade = document.getElementById('Universidade');
        var formato = document.getElementById('Formato-(presencial/EAD)');
        var matricula = document.getElementById('Número-de-matrícula');
        var curso = document.getElementById('Curso');
        var trabalha = document.getElementById('Trabalha?');
        var necessidades = document.getElementById('Necessidades-especiais?');
        var seSim = document.getElementById('Se-sim-escreva-aqui');
        var publico = document.getElementById('Publico-de-Reassentamento?');
        var interesse = document.getElementById('Interesse');
        var LinkQuetionario = document.getElementById('LinkQuetionario');

        var turno = document.getElementById('turno');
        var periodo = document.getElementById('periodo');
        var horario = document.getElementById('horario');
        var capacitacao = document.getElementById('capacitacao');
        var contErro = 0;
     
     
        /* Required */
        function required (tagErro,tagCampo,tagMensagem){
        caixa = document.querySelector(tagErro);
        if(tagCampo.value == "" | tagCampo.value == null){
            caixa.innerHTML = "*Favor preencher: ".concat(tagMensagem);
            caixa.style.display = 'block';
            contErro += 1;
        }else{
            caixa.style.display = 'none';
        }
        }

        /* Email */
        function validemail (tagErro,tagCampo){
            filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            caixa = document.querySelector(tagErro);
            if (filter.test(tagCampo.value)) {
                caixa.style.display = 'none';
            }
            else{
                caixa.innerHTML = "*Email não aceito. Por favor digite um e-mail valido.";
                caixa.style.display = 'block';
                contErro += 1;
            }
            }

        /* idade */
        function verificaIdade (tagErro,tagCampo){
            caixa = document.querySelector(tagErro);
            if(tagCampo.value >= 18 & tagCampo.value <= 29){
                caixa.style.display = 'none';
            }else{
                caixa.innerHTML = "*É preciso ter entre 18 e 29 anos para se inscrever";
                caixa.style.display = 'block';
                contErro += 1;
            }
            }
        
        /* Validalink */
        function validlink (tagErro,tagCampo){
            filter = /https:*/;
            caixa = document.querySelector(tagErro);
            if (filter.test(tagCampo.value)) {
                caixa.style.display = 'none';
            }
            else{
                caixa.innerHTML = "*Por favor, adicione o link do seu questionário de deligência para termos acesso (Exemplo: https:meulink.com.br)";
                caixa.style.display = 'block';
                contErro += 1;
            }
            }
    
        required('.msg-nome',nome,"Nome")
        required('.msg-email',email,"E-mail")
        validemail('.msg-email',email)
        required('.msg-idade',idade,"Idade")
        required('.msg-telefone',telefone,"Telefone")
        required('.msg-documento',documento,"Documento")
        required('.msg-estado',estado,"Estado")
        required('.msg-cidade',cidade,"Cidade")
        required('.msg-universidade',universidade,"Universidade")
        required('.msg-formato',formato,"Formato")
        required('.msg-matricula',matricula,"Número de matrícula")
        required('.msg-curso',curso,"Curso")
        required('.msg-trabalha',trabalha,"Trabalha?")
        required('.msg-necessidades',necessidades,"Necessidades Especiais")
        required('.msg-interesse',interesse,"Interesse no programa")
        required('.msg-publico',publico,"Público de Reassentamento?")
        
        required('.msg-turno',turno,"Turno")
        required('.msg-periodo',periodo,"Período")
        required('.msg-horario',horario,"Horário")
        required('.msg-capacitacao',capacitacao,"Como ficou Sabendo")
    
        console.log("teste")
    
        if(contErro > 0){
            evt.preventDefault();
            console.log(contErro)
        }
    
        else {
            console.log("dasd")
            form.addEventListener("submit", e => {
                e.preventDefault();
                fetch("https://hook.us1.make.com/yfvgtvpc8hg5te3na3uy4ntjxxt72knz", {
                    method : "POST",
                    body: new FormData(document.getElementById("Página1")),
                }).then(
                    response => response.toString()
                ).then((html) => {
                    setTimeout(function() {
                        window.location.href = "inscricao_realizada.html";
                    }, 1000);
                })
            });
        }

        },true)