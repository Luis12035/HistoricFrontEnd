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
    <Base
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