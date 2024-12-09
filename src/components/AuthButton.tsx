import { signIn, signOut, useSession } from "next-auth/react";

function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="h-12 w-60 bg-gray-500 animate-pulse rounded-lg" />;
  }

  if (session) {
    return (
      <>
        <h1 className="text-3xl font-semibold">Signed in</h1>
        <div className="flex gap-4 items-center">
          <div>
            <p className="font-semibold">{session.user?.name}</p>
            <p>{session.user?.email}</p>
          </div>
          <img
            src={session.user?.image ?? ""}
            alt=""
            className="size-12 rounded-full"
          />
        </div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <h1 className="text-3xl font-semibold">Not signed in</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}

export default AuthButton;
