class Senai{
  constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
      this.codigo = codigo;
      this.cidade = cidade;
      this.anoConstruçao = anoConstrucao;
      this.qtdeCursos = qtdeCursos;
      this.statusFuncionamento = this.statusFuncionamento

      // js moderno: calculando a idade com base no ano atual do sistema
      this.idade = new Date().getFullYear() - anoConstrucao;
  }

  dadosEscola() {
      console.log('\n=== RELATÓRIO DE CADASTRO: ${this.cidade.toUpperCase()} ===');
      console.log('- Código: ${this.codigo}');
      console.log('- Fundação: ${this.anoConstruçao} (${this.idade} anos de história'));
      console.log('Capacidade: ${this.qtdeCursos} cursos ativos.');
      console.log('=========================================\n');
  }
}

  abrirEscola = () => {
      this.statusFuncinonamento = true
      console.log('\n === UNIDADE: ${this.cidade} ===')
      console.log('Status Atual: ABERTO')
      console.log('Idade: ${this.idade} | Cursos: ${this.qtdeCursos}')
      console.log('O SENAI ${this.cidade} agora está ABERTO. Bem-vindos!');
  }

  fecharEscola = () => {
      this.statusFuncionamento = false
      console.log('\n === UNIDADE: ${this.cidade} ===')
      console.log('Status Atual: FECHADO')
      console.log('Idade: ${this.idade} | Cursos: ${this.qtdeCursos}')
      console.log('O SENAI ${this.cidade} agora está fechado. Até amanhã!');
  }

  
  /* Criando instâncias */
  
  const escolaA = new Senai (603, 'Araraquara', 1998, 60, false);
  const escolaB = new Senai (603, 'São Carlos', 2000, 120, false);
  
  // execução
  
  compararEscolas(escolaA, escolaB);
  escolaA.fecharEscola()