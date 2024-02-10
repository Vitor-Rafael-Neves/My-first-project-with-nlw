const perguntas = [
    { pergunta: 'Qual é o resultado da expressão 2 + 3 * 4?',
    respostas: [
      '10',
      '14',
      '20',
    ],
    correta: 1
    },
    { pergunta: 'Se um carro percorre 60 quilômetros por hora, quanto tempo ele levará para percorrer 180 quilômetros?',
    respostas: [
      '2 horas',
      '3 horas',
      '4 horas',
    ],
    correta: 1
    },
    { pergunta: 'Qual é o próximo número na sequência: 2, 4, 8, 16, ...?',
    respostas: [
      '24',
      '32',
      '64',
    ],
    correta: 1
    },
    { pergunta: 'Quanto é 25% de 80?',
    respostas: [
      '15',
      '20',
      '25',
    ],
    correta: 1
    },
    { pergunta: 'Se x = 5 e y = 3, qual é o valor de x * y?',
    respostas: [
      '12',
      '15',
      '20',
    ],
    correta: 1
    },
    { pergunta: 'Qual é a raiz quadrada de 144?',
    respostas: [
      '10',
      '12',
      '14',
    ],
    correta: 1
    },
    { pergunta: 'Qual é o número que multiplicado por ele mesmo resulta em 49?',
    respostas: [
      '5',
      '6',
      '7',
    ],
    correta: 2
    },
    { pergunta: 'Se um retângulo tem largura de 10 metros e comprimento de 20 metros, qual é sua área?',
    respostas: [
      '100 metros quadrados',
      '200 metros quadrados',
      '300 metros quadrados',
    ],
    correta: 1
    },
    { pergunta: 'Se uma loja oferece um desconto de 20% em um item que custa R$ 100, qual é o preço final?',
    respostas: [
      'R$ 80',
      'R$ 90',
      'R$ 120',
    ],
    correta: 0
    },
    { pergunta: 'Quantos lados possui um triângulo?',
    respostas: [
      '2',
      '3',
      '4',
    ],
    correta: 1
    },
  ]
  
  const simu = document.querySelector('#simu')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
  
  const simuItem = template.content.cloneNode(true)
  simuItem.querySelector('h3').textContent = item.pergunta
  
  
  for(let respostas of item.respostas) {
  
  const dt = simuItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = respostas
  dt.querySelector('input').setAttribute( 'name', 'pergunta-' + perguntas.indexOf(item) )
  dt.querySelector('input').value = item.respostas.indexOf(respostas)
  dt.querySelector('input').onchange = (event) => {
  
  const taCerto = event.target.value == item.correta
  
  corretas.delete(item)
  if(taCerto) {
    corretas.add(item)
  }
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
  simuItem.querySelector('dl').appendChild(dt)
   
  
  }
  
  simuItem.querySelector('dl dt').remove()
  
  
  
  simu.appendChild(simuItem)
  
  }