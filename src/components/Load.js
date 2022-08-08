import { Grid } from  'react-loader-spinner'

export default function Load (){

    return(
            <Grid
            height = "80"
            width = "80"
            radius = "9"
            color = 'green'
            ariaLabel = 'three-dots-loading'     
            wrapperStyle
            wrapperClass />
        );
}