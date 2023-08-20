import { DateStatistics } from '../Components/Charts_Map'
import { Statistics } from '../Components/TallyData'

function Dashboard() {
/*
 Here we have 2 components where the  Tallycount is displayed and Their data is displayed on charts 

*/
    return <>

        <Statistics />
        <DateStatistics />

    </>
}

export default Dashboard