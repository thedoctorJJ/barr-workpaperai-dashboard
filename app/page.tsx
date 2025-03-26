import { redirect } from "next/navigation"

export default function Home() {
  redirect("/executive-summary")
  return null
}

