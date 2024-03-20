interface Params {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Params) {
  // const data = await getData();
  return (
    <>
      <h1>Slug: {params.slug}</h1>
    </>
  );
}
