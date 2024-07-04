export default function ProfileLayout({ children,...rest }) {
    console.log('user profile layout params/rest=>',rest)
  return (
    <>
      <hr />
      <h1>User Profile Layout</h1>
      {children}
      <hr />
    </>
  );
}
