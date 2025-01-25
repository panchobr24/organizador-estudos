// Salvar dados no localStorage
function salvarDados(chave, dados) {
    localStorage.setItem(chave, JSON.stringify(dados));
}

// Carregar dados do localStorage
function carregarDados(chave) {
    const dados = localStorage.getItem(chave);
    return dados ? JSON.parse(dados) : null;
}

// Cronograma
document.querySelectorAll('.aula').forEach(aula => {
    aula.addEventListener('blur', () => {
        // Salvar alterações do cronograma
        const cronograma = [];
        document.querySelectorAll('.aula').forEach(el => {
            cronograma.push(el.innerText);
        });
        salvarDados('cronograma', cronograma);
    });
});

// Anotações
document.querySelectorAll('textarea').forEach(textarea => {
    textarea.addEventListener('input', (e) => {
        // Removido o salvamento automático para evitar conflitos com diferentes datas
    });
});

// Banco de Questões
const bancodeQuestoes = {
    matematica: [
        {
            pergunta: "Qual é a fórmula da área de um triângulo?",
            resposta: [
                "base × altura ÷ 2",
                "base vezes altura dividido por 2",
                "bh/2",
                "(base * altura)/2",
                "área = (b × h)/2"
            ]
        },
        {
            pergunta: "Como calcular o delta de uma equação de segundo grau?",
            resposta: "Δ = b² - 4ac"
        },
        {
            pergunta: "Qual é a fórmula do teorema de Pitágoras?",
            resposta: "a² = b² + c²"
        },
        {
            pergunta: "Quanto é π (pi) arredondado para duas casas decimais?",
            resposta: "3,14"
        },
        {
            pergunta: "Qual é a fórmula da área de um círculo?",
            resposta: "πr²"
        },
        {
            pergunta: "Como se calcula o perímetro de um círculo?",
            resposta: "2πr"
        },
        {
            pergunta: "Qual é a fórmula do volume de um cubo?",
            resposta: "lado³"
        },
        {
            pergunta: "Como calcular a área de um retângulo?",
            resposta: "base × altura"
        },
        {
            pergunta: "Qual é a soma dos ângulos internos de um triângulo?",
            resposta: "180 graus"
        },
        {
            pergunta: "O que é um número primo?",
            resposta: "Um número natural maior que 1 que só é divisível por 1 e por ele mesmo"
        },
        {
            pergunta: "Qual é a fórmula do volume de uma esfera?",
            resposta: "4/3 × πr³"
        },
        {
            pergunta: "Como calcular a área de um trapézio?",
            resposta: "(B + b)h/2"
        },
        {
            pergunta: "O que é um número irracional?",
            resposta: "Número que não pode ser escrito como fração de inteiros"
        },
        {
            pergunta: "Qual é a fórmula de Bhaskara?",
            resposta: "x = (-b ± √Δ)/2a"
        },
        {
            pergunta: "O que é um ângulo reto?",
            resposta: "Ângulo que mede 90 graus"
        }
    ],
    portugues: [
        {
            pergunta: "O que é um substantivo?",
            resposta: [
                "Palavra que nomeia seres, objetos, lugares, sentimentos",
                "Palavra que dá nome aos seres",
                "Classe de palavras que nomeia seres, objetos e sentimentos",
                "Palavra que nomeia as coisas"
            ]
        },
        {
            pergunta: "Quais são os tipos de sujeito?",
            resposta: "Sujeito simples, composto, oculto, indeterminado e oração sem sujeito"
        },
        {
            pergunta: "O que é um verbo?",
            resposta: "Palavra que indica ação, estado ou fenômeno"
        },
        {
            pergunta: "O que é um adjetivo?",
            resposta: "Palavra que qualifica ou caracteriza o substantivo"
        },
        {
            pergunta: "O que é uma preposição?",
            resposta: "Palavra invariável que liga termos em uma oração"
        },
        {
            pergunta: "O que é um pronome?",
            resposta: "Palavra que substitui ou acompanha um substantivo"
        },
        {
            pergunta: "O que é um advérbio?",
            resposta: "Palavra que modifica o sentido do verbo, do adjetivo ou de outro advérbio"
        },
        {
            pergunta: "O que é uma conjunção?",
            resposta: "Palavra que liga orações ou termos semelhantes"
        },
        {
            pergunta: "O que é um artigo?",
            resposta: "Palavra que determina ou indetermina o substantivo"
        },
        {
            pergunta: "O que é uma interjeição?",
            resposta: "Palavra que expressa emoções e sentimentos"
        },
        {
            pergunta: "O que é uma oração coordenada?",
            resposta: "Oração independente que se liga a outra sem estabelecer relação de dependência"
        },
        {
            pergunta: "O que é uma oração subordinada?",
            resposta: "Oração que depende sintaticamente de outra oração"
        },
        {
            pergunta: "O que é um período composto?",
            resposta: "Período formado por duas ou mais orações"
        },
        {
            pergunta: "O que é uma figura de linguagem?",
            resposta: "Recurso que confere maior expressividade à linguagem"
        },
        {
            pergunta: "O que é uma metáfora?",
            resposta: "Figura de linguagem que estabelece uma comparação implícita"
        }
    ],
    historia: [
        {
            pergunta: "Em que ano começou a Segunda Guerra Mundial?",
            resposta: "1939"
        },
        {
            pergunta: "Quem foi o primeiro presidente do Brasil?",
            resposta: "Marechal Deodoro da Fonseca"
        },
        {
            pergunta: "Em que ano foi proclamada a República do Brasil?",
            resposta: "1889"
        },
        {
            pergunta: "Quem descobriu o Brasil?",
            resposta: "Pedro Álvares Cabral"
        },
        {
            pergunta: "Em que ano foi a Independência do Brasil?",
            resposta: "1822"
        },
        {
            pergunta: "Quem foi o primeiro imperador do Brasil?",
            resposta: "Dom Pedro I"
        },
        {
            pergunta: "Qual foi o período da ditadura militar no Brasil?",
            resposta: "1964-1985"
        },
        {
            pergunta: "Em que ano terminou a Primeira Guerra Mundial?",
            resposta: "1918"
        },
        {
            pergunta: "Quem foi Napoleão Bonaparte?",
            resposta: "Imperador francês que conquistou grande parte da Europa"
        },
        {
            pergunta: "O que foi a Revolução Francesa?",
            resposta: "Movimento revolucionário que derrubou a monarquia francesa em 1789"
        },
        {
            pergunta: "Quem foi Dom Pedro II?",
            resposta: "Segundo e último imperador do Brasil"
        },
        {
            pergunta: "O que foi a Guerra do Paraguai?",
            resposta: "Maior conflito armado da América do Sul, ocorrido entre 1864 e 1870"
        },
        {
            pergunta: "Quando começou a Primeira Guerra Mundial?",
            resposta: "1914"
        },
        {
            pergunta: "O que foi o Período Regencial no Brasil?",
            resposta: "Período entre 1831 e 1840 em que o Brasil foi governado por regentes"
        },
        {
            pergunta: "Quem foi Getúlio Vargas?",
            resposta: "Presidente do Brasil que governou de 1930 a 1945 e de 1951 a 1954"
        }
    ],
    geografia: [
        {
            pergunta: "Quais são os principais tipos de clima no Brasil?",
            resposta: "Equatorial, Tropical, Tropical de Altitude, Tropical Atlântico, Semiárido e Subtropical"
        },
        {
            pergunta: "Qual é o maior rio do mundo?",
            resposta: "Rio Nilo"
        },
        {
            pergunta: "Qual é o maior país do mundo em território?",
            resposta: "Rússia"
        },
        {
            pergunta: "Quantos estados tem o Brasil?",
            resposta: "26 estados e 1 distrito federal"
        },
        {
            pergunta: "Qual é a capital do Brasil?",
            resposta: "Brasília"
        },
        {
            pergunta: "O que é latitude?",
            resposta: "Distância em graus de um ponto até a linha do Equador"
        },
        {
            pergunta: "O que é longitude?",
            resposta: "Distância em graus de um ponto até o meridiano de Greenwich"
        },
        {
            pergunta: "Quais são os pontos cardeais?",
            resposta: "Norte, Sul, Leste e Oeste"
        },
        {
            pergunta: "O que é um planalto?",
            resposta: "Superfície elevada e relativamente plana"
        },
        {
            pergunta: "O que é uma planície?",
            resposta: "Área plana ou levemente ondulada com baixa altitude"
        },
        {
            pergunta: "O que é uma bacia hidrográfica?",
            resposta: "Conjunto de terras drenadas por um rio principal e seus afluentes"
        },
        {
            pergunta: "O que é o efeito estufa?",
            resposta: "Fenômeno natural de retenção de calor na atmosfera"
        },
        {
            pergunta: "O que são placas tectônicas?",
            resposta: "Grandes segmentos da crosta terrestre que se movimentam"
        },
        {
            pergunta: "O que é urbanização?",
            resposta: "Processo de crescimento das cidades e da população urbana"
        },
        {
            pergunta: "O que é um ecossistema?",
            resposta: "Conjunto formado por seres vivos e elementos não vivos que interagem entre si"
        }
    ],
    fisica: [
        {
            pergunta: "Qual é a fórmula da velocidade média?",
            resposta: "Vm = ΔS/Δt"
        },
        {
            pergunta: "Qual é a unidade de medida de força no SI?",
            resposta: "Newton (N)"
        },
        {
            pergunta: "O que é aceleração?",
            resposta: "Variação da velocidade em relação ao tempo"
        },
        {
            pergunta: "Qual é a fórmula da força peso?",
            resposta: "P = m × g"
        },
        {
            pergunta: "O que é inércia?",
            resposta: "Tendência de um corpo manter seu estado de movimento ou repouso"
        },
        {
            pergunta: "Qual é a unidade de potência no SI?",
            resposta: "Watt (W)"
        },
        {
            pergunta: "O que é energia cinética?",
            resposta: "Energia que um corpo possui devido ao seu movimento"
        },
        {
            pergunta: "O que é energia potencial gravitacional?",
            resposta: "Energia que um corpo possui devido à sua posição em relação à Terra"
        },
        {
            pergunta: "Qual é a fórmula da energia cinética?",
            resposta: "Ec = mv²/2"
        },
        {
            pergunta: "O que é trabalho em física?",
            resposta: "Produto da força pelo deslocamento na direção da força"
        },
        {
            pergunta: "O que é a Lei da Gravidade?",
            resposta: "Lei que descreve a atração entre corpos devido à suas massas"
        },
        {
            pergunta: "Qual é a unidade de medida de corrente elétrica?",
            resposta: "Ampère (A)"
        },
        {
            pergunta: "O que é um condutor elétrico?",
            resposta: "Material que permite a passagem de corrente elétrica"
        },
        {
            pergunta: "O que é um isolante elétrico?",
            resposta: "Material que não permite a passagem de corrente elétrica"
        },
        {
            pergunta: "O que é frequência?",
            resposta: "Número de oscilações por unidade de tempo"
        }
    ],
    quimica: [
        {
            pergunta: "Qual é o número atômico do Hidrogênio?",
            resposta: "1"
        },
        {
            pergunta: "O que é um átomo?",
            resposta: "Menor partícula que caracteriza um elemento químico"
        },
        {
            pergunta: "O que é uma molécula?",
            resposta: "Conjunto de átomos ligados quimicamente"
        },
        {
            pergunta: "O que é um elemento químico?",
            resposta: "Substância formada por átomos com mesmo número atômico"
        },
        {
            pergunta: "O que é pH?",
            resposta: "Medida que indica se uma solução é ácida, básica ou neutra"
        },
        {
            pergunta: "O que é uma reação química?",
            resposta: "Transformação que altera a composição das substâncias"
        }
    ],
    biologia: [
        {
            pergunta: "Quais são as principais organelas celulares?",
            resposta: "Núcleo, mitocôndria, ribossomo, complexo de Golgi, retículo endoplasmático, lisossomo"
        },
        {
            pergunta: "O que é fotossíntese?",
            resposta: "Processo de produção de glicose usando luz solar, água e gás carbônico"
        },
        {
            pergunta: "O que é DNA?",
            resposta: "Molécula que contém as informações genéticas dos seres vivos"
        },
        {
            pergunta: "O que é uma célula?",
            resposta: "Unidade básica estrutural e funcional dos seres vivos"
        },
        {
            pergunta: "O que é um cromossomo?",
            resposta: "Estrutura que contém o material genético condensado"
        },
        {
            pergunta: "O que é evolução?",
            resposta: "Processo de mudança das espécies ao longo do tempo"
        }
    ]
};

let questoesAtuais = [];
let questaoAtualIndex = 0;

function filtrarQuestoes() {
    const materia = document.getElementById('materia-filtro').value;
    const container = document.querySelector('.questoes-container');
    container.innerHTML = '';

    if (materia && bancodeQuestoes[materia]) {
        questoesAtuais = bancodeQuestoes[materia];
        questaoAtualIndex = 0;
        mostrarQuestaoAtual();
        atualizarContador();
    }
}

function mostrarQuestaoAtual() {
    if (questoesAtuais.length === 0) return;

    const container = document.querySelector('.questoes-container');
    const questao = questoesAtuais[questaoAtualIndex];
    
    container.innerHTML = `
        <div class="questao" style="opacity: 0; transform: translateY(20px);">
            <h4>${questao.pergunta}</h4>
            <input type="text" class="resposta-input" placeholder="Digite sua resposta aqui...">
            <button onclick="verificarResposta()">Verificar Resposta</button>
            <div class="feedback" style="display: none;"></div>
            <div class="resposta-correta">
                Resposta correta: ${questao.resposta}
            </div>
        </div>
    `;

    // Anima a entrada da questão
    setTimeout(() => {
        const questaoElement = container.querySelector('.questao');
        questaoElement.style.transition = 'all 0.5s ease-out';
        questaoElement.style.opacity = '1';
        questaoElement.style.transform = 'translateY(0)';
    }, 50);
}

function verificarResposta() {
    const respostaInput = document.querySelector('.resposta-input');
    const feedback = document.querySelector('.feedback');
    const respostaCorreta = document.querySelector('.resposta-correta');
    const questaoAtual = questoesAtuais[questaoAtualIndex];
    
    // Normalizar as respostas (remover espaços extras, acentos, converter para minúsculas)
    const normalizar = (texto) => {
        return texto
            .toLowerCase()
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remove acentos
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '') // Remove pontuação
            .replace(/\s+/g, ' '); // Remove espaços extras
    };

    const respostaUsuario = normalizar(respostaInput.value);
    
    // Criar array de possíveis respostas corretas
    let respostasAceitas = Array.isArray(questaoAtual.resposta) 
        ? questaoAtual.resposta 
        : [questaoAtual.resposta];
    
    // Normalizar todas as respostas aceitas
    respostasAceitas = respostasAceitas.map(resp => normalizar(resp));
    
    feedback.style.display = 'block';
    feedback.classList.remove('show');
    
    void feedback.offsetWidth; // Força um reflow para reiniciar a animação
    feedback.classList.add('show');
    
    // Verifica se a resposta do usuário corresponde a qualquer uma das respostas aceitas
    const respostaCorretaEncontrada = respostasAceitas.some(resposta => {
        // Verifica se a resposta do usuário contém as palavras-chave principais
        const palavrasChave = resposta.split(' ');
        const palavrasUsuario = respostaUsuario.split(' ');
        
        // Para respostas curtas (até 3 palavras), exige correspondência exata
        if (palavrasChave.length <= 3) {
            return respostaUsuario === resposta;
        }
        
        // Para respostas longas, verifica se as palavras-chave principais estão presentes
        const palavrasChavePrincipais = palavrasChave.filter(p => p.length > 3); // Considera apenas palavras com mais de 3 letras
        const correspondenciaMinima = Math.ceil(palavrasChavePrincipais.length * 0.7); // 70% de correspondência necessária
        
        let palavrasEncontradas = 0;
        palavrasChavePrincipais.forEach(palavra => {
            if (palavrasUsuario.includes(palavra)) {
                palavrasEncontradas++;
            }
        });
        
        return palavrasEncontradas >= correspondenciaMinima;
    });

    if (respostaCorretaEncontrada) {
        feedback.className = 'feedback correto show';
        feedback.textContent = '🎉 Correto! Muito bem!';
        
        const questaoElement = document.querySelector('.questao');
        questaoElement.style.borderColor = '#4CAF50';
        setTimeout(() => {
            questaoElement.style.borderColor = '';
        }, 1000);
    } else {
        feedback.className = 'feedback incorreto show';
        feedback.textContent = '❌ Incorreto. Tente novamente!';
    }
    
    respostaCorreta.style.display = 'block';
}

function proximaQuestao() {
    if (questaoAtualIndex < questoesAtuais.length - 1) {
        questaoAtualIndex++;
        mostrarQuestaoAtual();
        atualizarContador();
    }
}

function questaoAnterior() {
    if (questaoAtualIndex > 0) {
        questaoAtualIndex--;
        mostrarQuestaoAtual();
        atualizarContador();
    }
}

function atualizarContador() {
    const contador = document.getElementById('questao-contador');
    contador.textContent = `${questaoAtualIndex + 1}/${questoesAtuais.length}`;
    
    // Atualizar estado dos botões
    document.getElementById('btn-anterior').disabled = questaoAtualIndex === 0;
    document.getElementById('btn-proxima').disabled = questaoAtualIndex === questoesAtuais.length - 1;
}

// Função para formatar a data no formato YYYY-MM-DD
function formatarData(data) {
    return data.toISOString().split('T')[0];
}

// Função para carregar anotações de uma data específica
function carregarAnotacoesPorData(data) {
    document.querySelectorAll('.materia textarea').forEach(textarea => {
        const materia = textarea.dataset.materia;
        const anotacoes = carregarDados(`anotacoes-${materia}-${data}`);
        textarea.value = anotacoes || '';
    });
}

// Função para salvar anotações
function salvarAnotacoes() {
    const data = document.getElementById('data-anotacao').value;
    if (!data) {
        alert('Por favor, selecione uma data!');
        return;
    }

    document.querySelectorAll('.materia textarea').forEach(textarea => {
        const materia = textarea.dataset.materia;
        salvarDados(`anotacoes-${materia}-${data}`, textarea.value);
    });

    // Mostrar feedback de salvamento
    const feedback = document.createElement('span');
    feedback.className = 'data-salva';
    feedback.textContent = 'Anotações salvas!';
    document.querySelector('.anotacoes-header').appendChild(feedback);
    
    setTimeout(() => feedback.remove(), 2000);
}

// Carregar dados salvos ao iniciar
window.addEventListener('load', () => {
    // Carregar cronograma
    const cronograma = carregarDados('cronograma');
    if (cronograma) {
        document.querySelectorAll('.aula').forEach((el, index) => {
            el.innerText = cronograma[index] || '';
        });
    }

    // Carregar anotações
    document.querySelectorAll('.materia').forEach(materia => {
        const nome = materia.querySelector('h3').innerText;
        const anotacoes = carregarDados(`anotacoes-${nome}`);
        if (anotacoes) {
            materia.querySelector('textarea').value = anotacoes;
        }
    });

    // Atualizar o select de matérias
    const materiaFiltro = document.getElementById('materia-filtro');
    materiaFiltro.innerHTML = '<option value="">Selecione a matéria</option>';
    
    Object.keys(bancodeQuestoes).forEach(materia => {
        const option = document.createElement('option');
        option.value = materia;
        option.textContent = materia.charAt(0).toUpperCase() + materia.slice(1);
        materiaFiltro.appendChild(option);
    });

    // Configurar data atual
    const hoje = formatarData(new Date());
    const inputData = document.getElementById('data-anotacao');
    inputData.value = hoje;
    carregarAnotacoesPorData(hoje);
});

// Funções para manipulação dos modais
function mostrarLogin() {
    document.getElementById('modal-login').style.display = 'block';
}

function mostrarCadastro() {
    document.getElementById('modal-cadastro').style.display = 'block';
}

function fecharModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Fechar modal quando clicar fora dele
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Funções de autenticação
async function fazerLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email-login').value;
    const senha = document.getElementById('senha-login').value;
    
    // Aqui você implementaria a lógica de autenticação
    // Por enquanto, vamos apenas simular
    const usuario = {
        email: email,
        nome: 'Usuário'
    };
    
    localStorage.setItem('usuario', JSON.stringify(usuario));
    fecharModal('modal-login');
    atualizarInterface();
}

async function fazerCadastro(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome-cadastro').value;
    const email = document.getElementById('email-cadastro').value;
    const senha = document.getElementById('senha-cadastro').value;
    
    // Aqui você implementaria a lógica de cadastro
    // Por enquanto, vamos apenas simular
    const usuario = {
        nome: nome,
        email: email
    };
    
    localStorage.setItem('usuario', JSON.stringify(usuario));
    fecharModal('modal-cadastro');
    atualizarInterface();
}

function fazerLogout() {
    localStorage.removeItem('usuario');
    atualizarInterface();
}

function atualizarInterface() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    const authButtons = document.querySelector('.auth-buttons');
    
    if (usuario) {
        authButtons.innerHTML = `
            <span class="usuario-nome">Olá, ${usuario.nome}</span>
            <button onclick="fazerLogout()" class="btn-login">Sair</button>
        `;
    } else {
        authButtons.innerHTML = `
            <button onclick="mostrarLogin()" class="btn-login">Entrar</button>
            <button onclick="mostrarCadastro()" class="btn-cadastro">Cadastrar</button>
        `;
    }
}

// Chamar atualizarInterface quando a página carregar
document.addEventListener('DOMContentLoaded', atualizarInterface);

// Função para inicializar o calendário com seleção de mês e ano
function inicializarCalendario() {
    const calendar = document.getElementById('calendar');
    const dataAtual = new Date();
    let mesAtual = dataAtual.getMonth();
    let anoAtual = dataAtual.getFullYear();

    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const atualizarCalendario = () => {
        const diasDoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();
        const primeiroDia = new Date(anoAtual, mesAtual, 1).getDay();

        let tabela = '<table><tr>';
        const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

        diasDaSemana.forEach(dia => {
            tabela += `<th>${dia}</th>`;
        });

        tabela += '</tr><tr>';

        for (let i = 0; i < primeiroDia; i++) {
            tabela += '<td></td>';
        }

        for (let dia = 1; dia <= diasDoMes; dia++) {
            if ((dia + primeiroDia - 1) % 7 === 0 && dia !== 1) {
                tabela += '</tr><tr>';
            }
            tabela += `<td onclick="mostrarModalEvento(${dia})">${dia}</td>`;
        }

        tabela += '</tr></table>';
        calendar.innerHTML = tabela;
    };

    const controles = document.createElement('div');
    controles.id = 'calendar-controls';
    controles.innerHTML = `
        <select id="mes-seletor">
            ${meses.map((mes, index) => `<option value="${index}" ${index === mesAtual ? 'selected' : ''}>${mes}</option>`).join('')}
        </select>
        <select id="ano-seletor">
            ${Array.from({ length: 10 }, (_, i) => anoAtual - 5 + i).map(ano => `<option value="${ano}" ${ano === anoAtual ? 'selected' : ''}>${ano}</option>`).join('')}
        </select>
    `;

    calendar.parentElement.insertBefore(controles, calendar);

    document.getElementById('mes-seletor').addEventListener('change', (e) => {
        mesAtual = parseInt(e.target.value);
        atualizarCalendario();
    });

    document.getElementById('ano-seletor').addEventListener('change', (e) => {
        anoAtual = parseInt(e.target.value);
        atualizarCalendario();
    });

    atualizarCalendario();
}

// Inicializar o calendário ao carregar a página
document.addEventListener('DOMContentLoaded', inicializarCalendario);

// Função para mostrar o modal de evento
function mostrarModalEvento(dia) {
    document.getElementById('dia-evento').value = dia;
    document.getElementById('nome-evento').value = '';
    document.getElementById('descricao-evento').value = '';
    document.getElementById('modal-evento').style.display = 'block';
}

// Função para salvar o evento
function salvarEvento(event) {
    event.preventDefault();
    
    const dia = document.getElementById('dia-evento').value;
    const nomeEvento = document.getElementById('nome-evento').value;
    const descricaoEvento = document.getElementById('descricao-evento').value;

    if (nomeEvento && descricaoEvento) {
        alert(`Evento salvo:\nDia: ${dia}\nNome: ${nomeEvento}\nDescrição: ${descricaoEvento}`);
        // Aqui você pode salvar o evento em localStorage ou em um backend
        fecharModal('modal-evento');
    } else {
        alert("Por favor, preencha todos os campos.");
    }
} 