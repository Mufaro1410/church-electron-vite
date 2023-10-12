const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

export default function Dropdown({
        value,
        id,
        handleChange,
        options,
        customClass
    }) {
    return(
        <div className="my-5">
            <select id={id} value={value} onChange={handleChange} className={fixedInputClass+customClass}>
                {options.map((item) => (
                    (item.title === 'gender' | item.title === 'male' | item.title === 'female') ? (
                        <option id={item.title} key={item.id} value={item.title}>
                            {item.title}
                        </option>
                    ) : (
                        <option id={item.title} key={item.id} value={item.id}>
                            {item.title}
                        </option>
                    )
                ))}
            </select>
        </div>
    )
}