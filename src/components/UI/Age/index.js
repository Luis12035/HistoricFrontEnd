import Base from "../Base";

const Age = (
  {
    label,
    onChange,
    placeholder,
    value,
    className,
    name,
    ...elseProps
  }
)=>{
  return (
    <Base style ={{borderRadius: 25, boxShadow: '2px 2px 8px #9E9E9E'}}
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      label={label}
      className = {["textbox", className].join(" ")}
      name={name}
      {...elseProps}
    >
    </Base>
  );
}

export default Age;
