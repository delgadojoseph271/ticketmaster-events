import { useState, useEffect, forwardRef, useImperativeHandle  } from "react";
import { Link } from "react-router-dom";

const Navbar = forwardRef(({ onSearch }, ref) => {
    const [search, setSearch] = useState('');

    const handleInputChange = (evt) => {
        setSearch(evt.target.value);
    };

    const handleInputKeyDown = (evt) => {
        if (evt.key === 'Enter' ){
            onSearch(search);
        }
    };

    useImperativeHandle(ref, () => ({
        search,
        setSearch,
    }));

    return (
        <div ref={ref} style={{
            marginBottom: 14,
            width: '100%',
            display: 'flex',

        }}>
            <div style={{
                flex: 1,
                display: 'flex'
            }}>
                <p style={{fontSize: 18, fontWeight: 'bold'}}>Mi boletera</p>
            </div>
            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'

            }}>
            <input 
                placeholder="Buscar tu evento favorito" 
                onChange={handleInputChange} 
                onKeyDown={handleInputKeyDown}
                value={search}
                style={{
                    fontSize: 16,
                    padding: '6px 12px',
                    borderRadius: 4,
                    border: 'none',
                    width: 200
                }}
            />
            <Link to='/profile' style={{
                marginLeft: 24,
                color: '#fff',
                textDecoration: 'none',
            }}>Mi perfil</Link> 
            </div>
        </div>
    );
});

Navbar.displayName = 'Navbar'

export default Navbar