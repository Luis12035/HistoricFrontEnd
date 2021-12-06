import Base from "../Base";

const Name = (
  {
    label,
    onChange,
    placeholder,
    value,
    className,
    name,
   
  }
)=>{
  return (
    <Base
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      label={label}
      className = {["textbox", className].join(" ")}
      name={name}
      
    >
    </Base>
  );
}

export default Name;