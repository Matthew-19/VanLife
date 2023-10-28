import React from 'react';

import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const url = new URL(request.url)
  const isLogged = localStorage.getItem("loggedin");
  if (!isLogged) {
    throw redirect(`/VanLife/login?message=you must login first&redirectTo=${url.pathname}`);
  }
  return null
}
