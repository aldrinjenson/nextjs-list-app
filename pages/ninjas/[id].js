// to inform Next about how many html static pages needs to be built
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((ninja) => {
    return {
      params: {
        // the parameter which needs to be passed to generate each individual html page
        id: ninja.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

// will be running for each item in the above list
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return { props: { ninja: data } };
};

// the template used to generate 10 html static pages with the data received from the above function
const NinjaDetails = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
      <p>{ninja.phone}</p>
    </div>
  );
};

export default NinjaDetails;
