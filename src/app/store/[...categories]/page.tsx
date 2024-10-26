

interface CategoryProms {
  params: {
    categories: string[];
    searchParams: object;
  };
}
export default function Category(promps: CategoryProms) {
  console.log(promps);
  return <h1>Categoria</h1>;
}
