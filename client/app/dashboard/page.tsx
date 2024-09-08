import { getSession } from "../actions/get-session";

export default async function Dashboard() {
  const session = await getSession();

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
