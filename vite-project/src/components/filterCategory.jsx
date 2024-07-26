export default function FilterByCategory(props) {
  const handleChangeCategory = (e) => {
    props.category(e.target.value)
  };
  return (
    <>
      <select
      onChange={handleChangeCategory}
        name="category"
        className="relative inline-flex items-center justify-center p-1 mb-2 me-2 ml-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
        style={{ border: "1px lightGray solid" }}
      >
        <option value="">Select a category</option>
        <option value="cactus">
          Cactus
        </option>
        <option value="plants">
          Plant
        </option>
      </select>
    </>
  );
}
