import type { ActionArgs, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";

import { createUserSession, getUserId } from "~/session.server";
import { createUser, getUserByEmail, verifyLogin } from "~/models/user.server";
import { safeRedirect, validateEmail } from "~/utils";

// export async function loader({ request }: LoaderArgs) {
//   const userId = await getUserId(request);
//   if (userId) return redirect("/");
//   return json({});
// }

// export async function action({ request }: ActionArgs) {
//   const formData = await request.formData();
//   const email = formData.get("email");
//   const password = formData.get("password");
//   const redirectTo = safeRedirect(formData.get("redirectTo"), "/");
//   const remember = formData.get("remember");

//   if (!validateEmail(email)) {
//     return json({ errors: { email: "Email is invalid" } }, { status: 400 });
//   }

//   if (typeof password !== "string" || password.length === 0) {
//     return json(
//       { errors: { password: "Password is required" } },
//       { status: 400 },
//     );
//   }

//   if (password.length < 8) {
//     return json(
//       { errors: { password: "Password is too short" } },
//       { status: 400 },
//     );
//   }

//   const intent = formData.get("intent");
//   let userId: string;
//   switch (intent) {
//     case "login": {
//       const user = await verifyLogin(email, password);

//       if (!user) {
//         return json(
//           { errors: { email: "Invalid email or password" } },
//           { status: 400 },
//         );
//       }
//       userId = user.id;
//       break;
//     }
//     case "signup": {
//       const existingUser = await getUserByEmail(email);
//       if (existingUser) {
//         return json(
//           { errors: { email: "A user already exists with this email" } },
//           { status: 400 },
//         );
//       }

//       const user = await createUser(email, password);
//       userId = user.id;

//       break;
//     }
//     default: {
//       return json({ errors: { email: "Invalid intent" } }, { status: 400 });
//     }
//   }

//   return createUserSession({
//     request,
//     userId,
//     remember: remember === "on" ? true : false,
//     redirectTo,
//   });
// }

// export const meta: MetaFunction = () => {
//   return {
//     title: "Login",
//   };
// };

export default function LoginPage() {

    return (
    <main>
      <h1>Posts in nested routes</h1>
    </main>
    )
}
