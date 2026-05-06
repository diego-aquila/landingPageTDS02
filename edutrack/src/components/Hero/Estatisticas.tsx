interface EstatisticasProps {
  titulo: string;
  descricao: string;
}

function Estatisticas({ titulo, descricao }: EstatisticasProps) {
  return (
    <div className="container-stats">
      <h3>{titulo}</h3>
      <p className="descricao-stats">{descricao}</p>
    </div>
  );
}
export default Estatisticas;
