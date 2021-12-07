import Base from "../Base";

const TextBox = (
  {
    label,
    onChange,
    placeholder,
    value,
    className,
    email,
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
      email={email}
      {...elseProps}
    >
    </Base>
  );
}

export default TextBox;
