import { InputContainer,
   InputComponent,
    InputLabel ,
    ErrorContainer,
  } 
    from "./styles";
import { InputProps } from "./types";

function Input({ 
  id, 
  disabled = false,
  name, 
  placeholder, 
  label,
  value,
  onChange,
  error,
  isWhite=false,
   type="text" }
  :InputProps) {
  return (
    <InputContainer>
     {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <InputComponent
       value={value}
       onChange={onChange}
        name={name}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        isWhite={isWhite}
      />
      <ErrorContainer>{error}</ErrorContainer>
    </InputContainer>
  );
}

export default Input;