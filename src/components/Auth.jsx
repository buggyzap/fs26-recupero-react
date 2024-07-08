import { useRef } from "react";

export function Auth() {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleLogin(event) {
    event.preventDefault();
    const loginEmail = emailRef.current.value;
    const loginPassword = passwordRef.current.value;
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="e-mail" value={email} ref={emailRef} />
        <input type="text" placeholder="password" value={password} ref={passwordRef} />
        <button type="submit">Enter the app!</button>
      </form>
    </div>
  );
}
