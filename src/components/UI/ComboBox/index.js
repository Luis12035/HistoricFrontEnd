import './index.css';
const ComboBox = (
  {
    name,
    id,
    className,
    placeholder,
    value,
    onChange,
    label,
    children,
    ...elseProps
  }
)=>{
  const curatedClassName = ["Input", className].join(' ');
  const _onChange = onChange || function(e){return null;};

  return (
    <div className={curatedClassName} >
      <label>{label}
        <select style ={{borderRadius: 25, boxShadow: '2px 2px 8px #9E9E9E'}}
          name={name}
          id={id}
          onChange={_onChange}
          value={value}
          placeholder={placeholder}
          {...elseProps}
        >
          {children}
        </select>
      </label>
    </div>
  );
}

export default ComboBox;
