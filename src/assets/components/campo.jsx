function Campo({ label, type }) {
    return ( 
        <>
            <label htmlFor="">{label}</label>
            <input type={type} />
        </>
     );
}

export { Campo };