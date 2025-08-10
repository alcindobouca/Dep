document.addEventListener('DOMContentLoaded', () => {
  const depositosList = document.getElementById('depositos-list');
  const depositos = [
    {
      banco: "Banco Exemplo",
      valor: 5000,
      vencimento: "2024-12-31",
      taxa: 5.5,
      impostos: 28
    }
  ];

  depositos.forEach(deposito => {
    const jurosBrutos = (deposito.valor * deposito.taxa / 100).toFixed(2);
    const jurosLiquidos = (jurosBrutos * (1 - deposito.impostos/100)).toFixed(2);
    
    depositosList.innerHTML += `
      <div class="deposito-card">
        <h3>${deposito.banco}</h3>
        <p>Vence em: ${deposito.vencimento}</p>
        <p>Juros brutos: €${jurosBrutos}</p>
        <p>Juros líquidos: €${jurosLiquidos}</p>
      </div>
    `;
  });
});