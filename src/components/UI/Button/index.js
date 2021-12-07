import './index.css';

export const Button = ({onClick, children, ...rest})=>{
  return (
    <button
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export const PrimaryButton = ({children, ...rest }) =>{
  return (
    <Button style={{borderRadius: 15, boxShadow: '2px 2px 8px #9E9E9E'}}
      {...rest}
      className="btn primary"
    >
      {children}
    </Button>
  );
}

export const SecondaryButton = ({ children, ...rest }) => {
  return (
    <Button style={{borderRadius: 15, borderStyle: 'solid', borderWidth: '2px', borderColor: 'black', boxShadow: '2px 2px 8px #9E9E9E'}}
      {...rest}
      className="btn secondary"
    >
      {children}
    </Button>
  );
}
