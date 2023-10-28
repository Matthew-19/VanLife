import React from "react";
import {
  Link,
  useLoaderData,
  useActionData,
  Form,
  redirect,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../services/api";

export function loader({ request }) {
  if (localStorage.getItem("loggedin")) {
    throw redirect("/VanLife/");
  }
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectToPathname = new URL(request.url)
        .searchParams.get("redirectTo");
  
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    return redirect(redirectToPathname || "/VanLife/host");
  } catch (err) {
    return err.message;
  }
}

export default function Login() {
  const status = useNavigation().state;
  const errorMsg = useActionData();

  // requireAuth() message
  const alertMsg = useLoaderData();

  return (
    <section className="login--section">
      <div className="login--header">
        {alertMsg && (
          <p className="login--requireAuth-msg">To access Host, {alertMsg}</p>
        )}
        <h1>Sign in to your account</h1>
        {errorMsg && (
          <p className="login--error-msg">
            <strong>Error: {errorMsg}</strong>
          </p>
        )}
      </div>
      <Form method="post" className="login--form">
        <div className="login--inputs-container">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="login--email"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login--password"
          />
        </div>
        <button
          className={`login--btn orange-btn ${
            status === "submitting" && "disabled-btn"
          }`}
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Signing in..." : "Sign in"}
        </button>
      </Form>
      <p className="login--no-account">
        Don't have an account?{" "}
        <Link className="login--create">Create one now</Link>
      </p>
    </section>
  );
}
