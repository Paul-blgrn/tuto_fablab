const Vectoriser = () => {
    return (
        <div className='contentbox'>
            <div className='contenttext'>
                Pour vectoriser une image:
                <hr className='hrcontent'/>
                Clic droit sur votre image → «Vectoriser un objet matriciel» 
            </div>
            <div className='imagestuto'>
                <img className='your-image' src='/images/votreimage.svg' alt='yourimage'/>
                <div className='arrownmouse1'>
                    <img className='pointerovermouse scale-in-out-anim' src='/images/pointer.svg' alt='pointer'/>
                    <img className='right-mouse' src='/images/mouseright.svg' alt='mouseright'/>
                </div>
            </div>
        </div>
    );
}

export default Vectoriser;