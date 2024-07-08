import { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";

export function Auth() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { userLogin } = useContext(AuthContext);

  function handleLogin(event) {
    event.preventDefault();
    const loginEmail = emailRef.current.value;
    const loginPassword = passwordRef.current.value;
    const success = userLogin(loginEmail, loginPassword);
    if (success) alert("Login valido");
    else alert("Credenziali non valide");
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="e-mail" ref={emailRef} />
        <input
          type="text"
          placeholder="password"
          ref={passwordRef}
        />
        <button type="submit">Enter the app!</button>
      </form>
    </div>
  );
}
