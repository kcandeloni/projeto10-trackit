import { Audio } from  'react-loader-spinner'

export default function Load (){

    return(
            <Audio
            height = "80"
            width = "80"
            radius = "9"
            color = 'green'
            ariaLabel = 'three-dots-loading'     
            wrapperStyle
            wrapperClass />
        );
}