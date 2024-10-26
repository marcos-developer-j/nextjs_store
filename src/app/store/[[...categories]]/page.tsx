interface CategoryProms {
  params: {
    categories: string[];
    searchParams: object;
  };
}
export default function Category(promps: CategoryProms) {
  const { categories } = promps.params;
  console.log(categories);
  return <h1>Categoria</h1>;
}
