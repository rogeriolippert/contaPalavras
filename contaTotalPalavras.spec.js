const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');
const { calculaPalavra} = require('../calculaPalavra');

lab.experiment('Calculando o total de palavras da seguintes frases:', () => {
  lab.test('Deve somar o total de palavras', (done) => {
    expect(calculaPalavra("Vamos programar em JavaScript!")).to.equal({ numeroPalavras: 4 });
    expect(calculaPalavra("Vamos tomar uma cerveja no bar")).to.equal({ numeroPalavras: 6 });
    expect(calculaPalavra("Eu não consegui subir o trabalho na semana passada, agora to fazendo tudo isso de novo")).to.equal({ numeroPalavras: 16 });

  });
});
