class QuizBenchmarkingCoP {
    constructor() {
        this.questoes = [

            // questões de Benchmarking
            {
                pergunta: "O que é benchmarking?",
                opcoes: ["Uma técnica de marketing", "Um processo de comparação de desempenho", "Uma estratégia de vendas", "Um tipo de auditoria"],
                resposta: "Um processo de comparação de desempenho",
                explicacao: "Benchmarking é um método sistemático de comparação de processos, desempenho e práticas entre organizações para identificar e aprender melhores estratégias.",
                categoria: "Benchmarking"
            },
            {
                pergunta: "Quais são os tipos principais de benchmarking?",
                opcoes: [
                    "Interno, Competitivo, Funcional, Genérico, Cooperativo",
                    "Interno, Competitivo, Performático, Estratégico, Público",
                    "Estratégico, Operacional, Funcional, Genérico, Privado",
                    "Interno, Competitivo, Financeiro, Genérico, Colaborativo"
                ],
                resposta: "Interno, Competitivo, Funcional, Genérico, Cooperativo",
                explicacao: "Os cinco tipos principais de benchmarking são: interno (dentro da própria organização), competitivo (com concorrentes diretos), funcional (com empresas de diferentes setores), genérico (comparação de processos gerais) e cooperativo (realizado em parceria com outras organizações).",
                categoria: "Benchmarking"
            },
            {
                pergunta: "Qual o principal objetivo do benchmarking?",
                opcoes: ["Eliminar concorrentes", "Melhorar processos e práticas", "Reduzir custos a qualquer preço", "Aumentar a publicidade"],
                resposta: "Melhorar processos e práticas",
                explicacao: "O objetivo central do benchmarking é identificar, compreender e adaptar as melhores práticas para aprimorar continuamente os processos organizacionais.",
                categoria: "Benchmarking"
            },
            {
                pergunta: "Como o benchmarking contribui para a inovação?",
                opcoes: ["Copiando exatamente", "Identificando e adaptando melhores práticas", "Eliminando concorrentes", "Reduzindo investimentos"],
                resposta: "Identificando e adaptando melhores práticas",
                explicacao: "A inovação via benchmarking ocorre ao estudar, compreender e adaptar criativamente as estratégias bem-sucedidas de outras organizações.",
                categoria: "Benchmarking"
            },
            {
                pergunta: "Qual desafio ético é crucial no benchmarking?",
                opcoes: ["Custo da pesquisa", "Complexidade técnica", "Confidencialidade e integridade", "Tempo de implementação"],
                resposta: "Confidencialidade e integridade",
                explicacao: "A ética no benchmarking envolve respeitar a confidencialidade dos dados, manter a integridade profissional e evitar práticas que possam ser consideradas espionagem industrial.",
                categoria: "Benchmarking"
            },

            // questões de CoP
            {
                pergunta: "O que caracteriza uma Comunidade de Prática (CoP)?",
                opcoes: ["Grupo de amigos", "Grupo de profissionais com interesse comum", "Reunião de departamento", "Curso de treinamento"],
                resposta: "Grupo de profissionais com interesse comum",
                explicacao: "Uma Comunidade de Prática é um grupo de profissionais que compartilham um interesse ou prática profissional, focando no aprendizado colaborativo e troca de conhecimentos.",
                categoria: "CoP"
            },
            {
                pergunta: "Quais são os três elementos-chave de uma Comunidade de Prática?",
                opcoes: ["Domínio, Comunidade, Prática", "Líder, Equipe, Objetivo", "Região, Empresa, Função", "Produto, Mercado, Estratégia"],
                resposta: "Domínio, Comunidade, Prática",
                explicacao: "Os três elementos-chave de uma CoP são: Domínio (campo de interesse), Comunidade (grupo que interage) e Prática (atividades e métodos compartilhados).",
                categoria: "CoP"
            },
            {
                pergunta: "Qual o principal benefício das Comunidades de Prática?",
                opcoes: ["Controlar funcionários", "Reduzir custos", "Promover aprendizado contínuo", "Aumentar a competição"],
                resposta: "Promover aprendizado contínuo",
                explicacao: "As Comunidades de Prática promovem o aprendizado contínuo, permitindo que profissionais troquem experiências, desenvolvam habilidades e resolvam problemas colaborativamente.",
                categoria: "CoP"
            },
            {
                pergunta: "Em quais contextos as Comunidades de Prática são comuns?",
                opcoes: ["Apenas em grandes empresas", "Somente em startups", "Em diversos setores e áreas", "Exclusivamente em TI"],
                resposta: "Em diversos setores e áreas",
                explicacao: "As CoPs são aplicáveis em diversos setores, desde tecnologia até educação, saúde, gestão e outros campos profissionais.",
                categoria: "CoP"
            },
            {
                pergunta: "Como as Comunidades de Prática contribuem para a inovação?",
                opcoes: ["Impondo regras rígidas", "Compartilhando conhecimentos e experiências", "Limitando a comunicação", "Centralizando decisões"],
                resposta: "Compartilhando conhecimentos e experiências",
                explicacao: "As CoPs facilitam a inovação ao permitirem a troca aberta de conhecimentos, ideias e experiências entre profissionais, estimulando soluções criativas e colaborativas.",
                categoria: "CoP"
            }
        ];

        this.indiceQuestaoAtual = 0;
        this.pontuacao = 0;
        this.tempo = 0;
        this.intervaloCronometro = null;
        this.respostasSelecionadas = [];

        this.inicializarElementos();
        this.vincularEventos();
        this.iniciarQuiz();
    }

    inicializarElementos() {
        this.conteudoQuiz = document.getElementById('quiz-content');
        this.elementoQuestao = document.getElementById('questao');
        this.elementoOpcoes = document.getElementById('opcoes');
        this.contadorQuestao = document.getElementById('contador-questao');
        this.cronometro = document.getElementById('cronometro');
        this.botaoProximo = document.getElementById('botao-proximo');
        this.botaoAnterior = document.getElementById('botao-anterior');
        this.containerResultado = document.getElementById('container-resultado');
        this.pontuacaoFinal = document.getElementById('pontuacao-final');
        this.feedbackDesempenho = document.getElementById('feedback-desempenho');
        this.botaoDetalhes = document.getElementById('botao-detalhes');
        this.botaoReiniciar = document.getElementById('botao-reiniciar');
        this.containerDetalhes = document.getElementById('detalhes-resultado');
        this.revisaoQuestoes = document.getElementById('revisao-questoes');
    }

    vincularEventos() {
        this.botaoProximo.addEventListener('click', () => this.irParaProximaQuestao());
        this.botaoAnterior.addEventListener('click', () => this.irParaQuestaoAnterior());
        this.botaoReiniciar.addEventListener('click', () => this.reiniciarQuiz());
        this.botaoDetalhes.addEventListener('click', () => this.mostrarDetalhes());
    }

    iniciarQuiz() {
        this.iniciarCronometro();
        this.carregarQuestao();
    }

    iniciarCronometro() {
        this.intervaloCronometro = setInterval(() => {
            this.tempo++;
            const minutos = Math.floor(this.tempo / 60).toString().padStart(2, '0');
            const segundos = (this.tempo % 60).toString().padStart(2, '0');
            this.cronometro.textContent = `Tempo: ${minutos}:${segundos}`;
        }, 1000);
    }

    carregarQuestao() {
        const questaoAtual = this.questoes[this.indiceQuestaoAtual];
        this.elementoQuestao.textContent = questaoAtual.pergunta;
        this.contadorQuestao.textContent = `Questão ${this.indiceQuestaoAtual + 1} de ${this.questoes.length}`;

        this.elementoOpcoes.innerHTML = '';
        questaoAtual.opcoes.forEach(opcao => {
            const botao = document.createElement('button');
            botao.textContent = opcao;
            botao.classList.add('botao-resposta', 'w-full', 'p-3', 'text-left', 'bg-white', 'border', 'rounded', 'hover:bg-blue-50');
            botao.addEventListener('click', () => this.selecionarResposta(botao, opcao));
            this.elementoOpcoes.appendChild(botao);
        });

        this.atualizarBotoesNavegacao();
    }

    selecionarResposta(botao, opcaoSelecionada) {
        const questaoAtual = this.questoes[this.indiceQuestaoAtual];
        const botoes = this.elementoOpcoes.querySelectorAll('button');

        botoes.forEach(btn => {
            btn.disabled = true;
            btn.classList.remove('hover:bg-blue-50');
        });

        if (opcaoSelecionada === questaoAtual.resposta) {
            botao.classList.add('resposta-correta');
            this.pontuacao++;
        } else {
            botao.classList.add('resposta-errada');
            const botaoCorreto = Array.from(botoes).find(btn =>
                btn.textContent === questaoAtual.resposta
            );
            botaoCorreto.classList.add('resposta-correta');
        }

        this.respostasSelecionadas[this.indiceQuestaoAtual] = {
            selecionada: opcaoSelecionada,
            correta: questaoAtual.resposta,
            categoria: questaoAtual.categoria
        };
    }

    irParaProximaQuestao() {
        if (this.indiceQuestaoAtual < this.questoes.length - 1) {
            this.indiceQuestaoAtual++;
            this.carregarQuestao();
        } else {
            this.finalizarQuiz();
        }
    }

    irParaQuestaoAnterior() {
        if (this.indiceQuestaoAtual > 0) {
            this.indiceQuestaoAtual--;
            this.carregarQuestao();
        }
    }

    atualizarBotoesNavegacao() {
        this.botaoAnterior.classList.toggle('hidden', this.indiceQuestaoAtual === 0);
        this.botaoProximo.textContent = this.indiceQuestaoAtual === this.questoes.length - 1
            ? 'Finalizar' : 'Próxima';
    }

    finalizarQuiz() {
        clearInterval(this.intervaloCronometro);
        this.conteudoQuiz.classList.add('hidden');
        this.containerResultado.classList.remove('hidden');

        const porcentagem = (this.pontuacao / this.questoes.length) * 100;
        this.pontuacaoFinal.textContent = `Você acertou ${this.pontuacao} de ${this.questoes.length} perguntas (${porcentagem.toFixed(1)}%)`;

        this.fornecerFeedback(porcentagem);
    }

    fornecerFeedback(porcentagem) {
        let feedback = '';
        if (porcentagem < 40) {
            feedback = 'Há muito espaço para aprender sobre Benchmarking e Comunidades de Prática. Continue estudando!';
        } else if (porcentagem < 70) {
            feedback = 'Bom desempenho! Você demonstra conhecimento básico sobre os temas.';
        } else {
            feedback = 'Excelente! Você tem um conhecimento sólido sobre Benchmarking e Comunidades de Prática.';
        }
        this.feedbackDesempenho.textContent = feedback;
    }

    mostrarDetalhes() {
        this.revisaoQuestoes.innerHTML = '';
        this.respostasSelecionadas.forEach((resposta, indice) => {
            const questao = this.questoes[indice];
            const divRevisao = document.createElement('div');
            divRevisao.classList.add('bg-white', 'p-4', 'rounded', 'shadow', 'mb-4');

            divRevisao.innerHTML = `
        <h4 class="font-semibold mb-2">${questao.pergunta} <span class="text-sm text-gray-600">(${resposta.categoria})</span></h4>
        <p class="mb-2">Sua resposta: <span class="${resposta.selecionada === resposta.correta ? 'text-green-600' : 'text-red-600'}">${resposta.selecionada}</span></p>
        <p class="text-gray-600">Resposta correta: ${resposta.correta}</p>
        <p class="mt-2 text-sm text-gray-700"><strong>Explicação:</strong> ${questao.explicacao}</p>
    `;

            this.revisaoQuestoes.appendChild(divRevisao);
        });

        const botaoVoltar = document.createElement('button');
        botaoVoltar.textContent = 'Voltar para Resultados';
        botaoVoltar.classList.add('bg-blue-500', 'text-white', 'px-4', 'py-2', 'rounded', 'hover:bg-blue-600', 'mt-4');
        botaoVoltar.addEventListener('click', () => {
            this.containerDetalhes.classList.add('hidden');
            this.containerResultado.classList.remove('hidden');
        });
        this.revisaoQuestoes.appendChild(botaoVoltar);

        this.containerResultado.classList.add('hidden');
        this.containerDetalhes.classList.remove('hidden');
    }

    reiniciarQuiz() {
        this.indiceQuestaoAtual = 0;
        this.pontuacao = 0;
        this.tempo = 0;
        this.respostasSelecionadas = [];

        clearInterval(this.intervaloCronometro);

        this.containerResultado.classList.add('hidden');
        this.containerDetalhes.classList.add('hidden');
        this.conteudoQuiz.classList.remove('hidden');

        this.iniciarQuiz();
    }
}

new QuizBenchmarkingCoP();