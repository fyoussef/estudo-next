

export function InputText({ label, placeholder, handleText, value }) {
    return (

        <div className="mb-8 xl:w-96 lg:w-72 md:w-64 sm:w-56">
            <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700">
                {label}
            </label>
            <input
            type="text"
            className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            placeholder={placeholder}
            onChange={handleText}
            value={value}
            />
        </div>

    )
}

export function InputTextArea({ label, placeholder, rows, handleText, value }){

    return (

        <div className="mb-8 xl:w-96 lg:w-72 md:w-64 sm:w-56">
            <label className="form-label inline-block mb-2 text-gray-700">
                {label}
            </label>
            <textarea
            className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            rows={rows}
            placeholder={placeholder}
            onChange={handleText}
            value={value}
            >
            </textarea>
        </div>

    )

}