"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import "/src/app/globals.css";

export default function Profile() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div>
      <main>
        <h1>Welcome to your profile,{user.username}</h1>
      </main>
    </div>
  );
}
