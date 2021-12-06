import Base from "../Base";

const LastName = (
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
    <Base
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

export default LastName;
