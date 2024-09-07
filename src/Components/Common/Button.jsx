const Button = ({ herf = '/' , text='Button' }) => {
    return (
        <button herf={herf} className='px-9 py-3 rounded-xl font-bold bg-gradient-to-r from-[#C9FC76] to-[#26FFCC] hover:bg-gradient-to-l hover:scale-[.8] transition'>
            {text}
        </button>
    )
}

export default Button
