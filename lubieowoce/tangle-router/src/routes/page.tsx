import { Link } from "@owoce/tangle";

export default function Root() {
  const meta = <title>{`Index`}</title>;
  return (
    <>
      {meta}
      <div>
        <h1>Index!</h1>
        <Link href="/profiles">View all profiles</Link>
        <br />
        <Link href="/profile/5">Go to a nonexistent profile</Link>
      </div>
    </>
  );
}
