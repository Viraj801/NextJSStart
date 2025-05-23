export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <p>Please enter your credentials to log in.</p>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}