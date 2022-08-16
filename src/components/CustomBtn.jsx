const customBtn = ({btnStyle, children}) => {

    const btn = {
        backgroundColor: 'grey',
        border:'none',
        color:'#fff',
        fontSize:'19px',
        textAlign:'center',
        padding:'15px 30px',
        textDecoration:'none',
        borderRadius:'7px',
        display:'block',
        margin:'5px auto' 
    }

    return (
        <button style={{...btn, ...btnStyle}}>
            {children}
        </button>
    )
    
}

export default customBtn;