import * as actions from "@/app/actions";

export default function Login() {
  return (
    <>
      <header>
        <nav className="flex">
          <img src="/Logo.svg" alt="" />
          <input type="text" name="" id="" />
          <form action={actions.signIn}>
            <button>login</button>
          </form>
        </nav>
      </header>
      {/* <form action={actions.signIn}>
        <button>login</button>
      </form> */}
      <main>
        <div className="flex gap-10">
        <img src="/bert-b-rhNff6hB41s-unsplash 1.png" alt="" />
          <img src="/Frame 382.png" alt="" />
        </div>
      </main>
    </>
  );
}
