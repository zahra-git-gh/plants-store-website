export function Thead() {
  const titles = ["Plant list", "Quantity", "Price$", "Stars"];

  return (
    <thead className="bg-gray-200 rounded-lg">
      <tr className="rounded-lg border-b border-gray-300">
        {titles.map((title, i) => {
         return <th key={i} className="text-base font-normal text-left p-4">
            {title}
          </th>;
        })}
      </tr>
    </thead>
  );
}
