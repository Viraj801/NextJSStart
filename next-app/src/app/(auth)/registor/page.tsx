export default function Registor() {
  return (
    <div>
        <h1>Registor</h1>
        <p>Please enter your credentials to register.</p>
        <form>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
    </div>
  );
}