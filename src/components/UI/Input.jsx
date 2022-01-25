import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={`${styles.input} || ${props.className}`}
      type={props.type}
      ref={props.refValue}
      onChange={props.onChange}
      value={props.value}
      maxLength={4}
    >
      {props.children}
    </input>
  );
};

export default Input;
