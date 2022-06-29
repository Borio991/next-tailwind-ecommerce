import Head from "next/head";
import Link from "next/link";

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Amazona" : "Amazona"}</title>
        <meta name="description" content="ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col justify-between">
        <header>
          <nav className="flex justify-between items-center shadow-md px-4 h-12">
            <Link href="/">
              <h1 className="text-3xl font-bold">Amazona</h1>
            </Link>
            <div className="">
              <Link href="/">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center shadow-inner h-10">
          <p className="text-gray-600">&copy; 2020 Amazona</p>
        </footer>
      </div>
    </>
  );
}

export default Layout;
