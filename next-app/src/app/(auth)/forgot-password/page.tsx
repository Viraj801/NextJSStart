export default function ForgotPassword() {
    return (
        <div>
            <h1>Forgot Password</h1>
            <p>Enter your email address to reset your password.</p>
            <form>
                <input type="email" placeholder="Email" required />
                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    );
}