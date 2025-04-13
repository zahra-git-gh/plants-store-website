export function Trow({name, price, offPrice = 0, stars, quantity}) {
  return (
    <tr className="border-b border-gray-300">
      <td className="p-4">{name}</td>
      <td className="p-4">{quantity}</td>
      <td className="p-4">{offPrice? offPrice: price}</td>
      <td className="p-4">{stars}</td>
    </tr>
  );
}
