import { Grid, Typography } from "@mui/material"

const awardList = [
    {
    date:"2022-2023",
    title: "Computer Science Ta award"
}
]

const taExp = [
    {
        date:"Winter 2023",
        classTaught: "Computer science 251",
        link: "https://contacts.ucalgary.ca/info/cpsc/courses/w23/CPSC251?destination=profiles%2F102-3607%3Futm_source%3Dcpsc_info%26utm_medium%3Dredirect%26utm_campaign%3Dredirect"
},
    {
        date:"Fall 2023",
        classTaught:"CPSC 351",
        link:"https://contacts.ucalgary.ca/info/cpsc/courses/f23/CPSC351"
    }
]


const Resume= () => {
    return <>
    <Grid container direction={"column"} alignItems={"center"} spacing={2} justifyContent={"center"}>
        <Grid item container direction={"column"} width={'80vh'}> 
        {/* May need to chage this later */}
                <Grid item><Typography variant="h5">TA expiereance</Typography></Grid>

                <Grid item container direction={'row'}  justifyContent="space-between" alignItems="center" >

                <Grid item>Winter 9999</Grid>
                <Grid item>CPSC 555</Grid>

                </Grid>



        </Grid>

        <Grid item>World</Grid>

    </Grid>


    </>
}

export default Resume
// You are working on your resume!