import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


/**
 * Get the user id from the prop to request informations about the activity of the user and display them in a bar chart
 * @param {narrayumber} props - ID of the user
 * @returns 
 */

function DailyActivity(props) {
    const data = props.activity;
    
    return (
        <div className="dashboard-container-content-left w-100 mb-4">
            <ResponsiveContainer height={350}>
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={10}
                    >
                    <CartesianGrid strokeDasharray="0 4"/>
                    <XAxis />
                    <YAxis orientation="right"/>
                    <Tooltip />
                    <Legend align="right" verticalAlign="top" iconType="circle"/>
                    <Bar dataKey="kilogram" unit="kg" fill="#020203" name="Poids (kg)" radius={10}/>
                    <Bar dataKey="calories" unit="kcal" fill="#FF0000" name="Calories brûlées (kCal)" radius={10}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

DailyActivity.propTypes = {
    id: PropTypes.array
}

export default DailyActivity;