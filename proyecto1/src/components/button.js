export default function Button(props) {
    return (
      <button onClick={() => props.cuandohagoClick("hola soy el hijo")}>
        {props.text}
      </button>
    );
  }
  