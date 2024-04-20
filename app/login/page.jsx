import * as actions from "@/app/actions";

export default function Login() {
    return(
        <div>
            <h1>Login</h1>
            <form action={actions.signIn}>
                <button>login</button>
            </form>
        </div>
    )
}
