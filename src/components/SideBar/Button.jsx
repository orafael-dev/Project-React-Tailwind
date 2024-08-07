// eslint-disable-next-line react/prop-types
export default function Button({active, children}) {
    const bgColor = active ? "bg-gray-200 dark:bg-gray-900" : ""
    return(
        <button
        className={`
        py-2 px-4 w-full text-left rounded-lg transition-colors
        hover:bg-gray-200 dark:hover:bg-gray-900
        ${bgColor}
        `}
        >
            {children}
        </button>
    )
}