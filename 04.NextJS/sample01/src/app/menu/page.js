import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1>MENU Page</h1>
      <br />
      <a href="/">Home Page</a>
      <br />
      <a href="/dashboard">Admin Page</a>
      <br />
      <a href="/profile/1">Admin Profile Page</a>
      <br />
      <a href="/products/categry01">Products Page</a>
      <br />
      <hr />

      <Link href="/">Home Page</Link>
      <br />
      <Link href="/dashboard">Admin Page</Link>
      <br />
      <Link href="/profile/1">Admin Profile Page</Link>
      <br />
      <Link href="/products/categry01">Products Page</Link>
      <br />
      <Link
        href={{
          pathname: "/products/categry01",
          query: { name: "laptop", price: 1000 },
        }}
        // replace={false}
        // prefetch={true}
      >
        Products Page
      </Link>
    </div>
  );
}
