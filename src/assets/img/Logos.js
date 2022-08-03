import logo from './logo.svg';
import trackit from './TrackIt.svg';

function Logo () {

    return (
        <>
            <img src={logo} alt='logo'/> 
        </>
    );
}

function Trackit () {

    return (
        <>
            <img src={trackit} alt='trackit'/> 
        </>
    );
}


export {Logo, Trackit};