import { Form, Link, actionData } from "nixix/router";

export const Profiles = (): someView => {
  const any = actionData<['juggs']>('/profiles/', ['juggs']);
  return (
    <section>
      <Link to="/" >
        {any[0]}
      </Link>
    </section>
  )
}

export const Home = () => {
  return (
    <main>
      I am the App
      <Link to={"/"}>This is a link to the about page</Link>
      <Form
        action='/'
        method='post'>
        <input
          type='text'
          name='firstName'
        />
      </Form>
    </main>
  );
};
